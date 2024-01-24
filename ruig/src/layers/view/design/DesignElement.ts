import { wrap } from "module";
import SharedConfig from "../../../common/SharedConfig";
import { ACTIVE_ELEMENT, CLIPBOARD, CONTEXT_MENU, DESIGN_ELEMENT_WRAPPER, EVENT_DATA, EVENT_DESELECT, EVENT_SELECT } from "../../../common/constants";
import NullException from "../../../common/exceptions/NullException";
import IAnyObject from "../../../common/models/IAnyObject";
import BaseComponent from "../application/components/base/BaseComponent";
import IDesignElement from "./models/IDesignElement";
import { appendChildren, removeLastChild } from "../../../common/utils";
import DesignElementTypes from "../common/DesignElementTypes";
import IPosition from "../../../common/models/IPosition";

export interface DESIGN_ELEMENT_EVENT_DATA_TYPE { [EVENT_DATA]: IDesignElement }

abstract class DesignElement extends BaseComponent implements IDesignElement {

    abstract type: DesignElementTypes;
    protected abstract inToolElement: HTMLElement;

    lock = false;
    private _deselectEvent
    private _selectEvent

    position: IPosition = { x: 0, y: 0 };

    constructor(style?: IAnyObject) {
        super({
            ...(style ?? {}),
        });
        this.draggable = true;
        this._deselectEvent = new CustomEvent<DESIGN_ELEMENT_EVENT_DATA_TYPE>(EVENT_DESELECT, { detail: { [EVENT_DATA]: this } })
        this._selectEvent = new CustomEvent<DESIGN_ELEMENT_EVENT_DATA_TYPE>(EVENT_SELECT, { detail: { [EVENT_DATA]: this } })
    }

    deselectEvent(): void {
        this.dispatchEvent(this._deselectEvent)
    }

    selectEvent(): void {
        this.dispatchEvent(this._selectEvent)
    }

    attachWrapper(): void {
        let wrapper = SharedConfig.get(DESIGN_ELEMENT_WRAPPER)

        if (!wrapper) {
            throw new NullException("Design element wrapper not found")
        }

        wrapper.setElementToWrap(this)
        appendChildren(this, wrapper)
    }

    detachWrapper(): void {
        removeLastChild(this)
    }

    private _isSelected: boolean = false;

    set isSelected(value: boolean) {
        return;
    }

    get isSelected() {
        return this._isSelected
    }

    deselect() {
        SharedConfig.remove(ACTIVE_ELEMENT)
        this._isSelected = false;
        this.detachWrapper()
        this.deselectEvent()
    }

    select() {
        SharedConfig.set(ACTIVE_ELEMENT, this)
        this._isSelected = true;
        this.attachWrapper()
        this.selectEvent()
    }

    onclick = (e?: Event) => {
        e?.preventDefault()
        this.select()
    }

    click(): void {
        this.onclick()
    }

    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null = (ev: MouseEvent) => {
        this.showPopover()
        return true;
    }

    hidePopover(): void {
        removeLastChild(this)
    }

    showPopover(): void {
        let contextMenu: BaseComponent = SharedConfig.get(CONTEXT_MENU)

        if (!contextMenu) {
            throw new NullException("Context Menu element not found")
        }

        appendChildren(this, contextMenu)
        contextMenu.focus()
        contextMenu.onblur = (e) => {
            e?.preventDefault()
            this.hidePopover()
        }
    }

    oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null = (ev) => {
        ev?.preventDefault()
        SharedConfig.set(CLIPBOARD, this)
    }

    oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null = (ev) => {
        ev?.preventDefault()
        SharedConfig.set(CLIPBOARD, this)
        this.parentElement?.removeChild(this)
    };

    onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null = (ev) => {
        ev?.preventDefault()
        const copiedDesignElement: IDesignElement = SharedConfig.get(CLIPBOARD)
        if (copiedDesignElement && (this.type == DesignElementTypes.DIV || this.type == DesignElementTypes.SPAN)) {
            appendChildren(this, copiedDesignElement)
        }

    };

    autofocus: boolean = false;
}

export default DesignElement
