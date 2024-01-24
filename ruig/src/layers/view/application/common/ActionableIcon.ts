import { EVENT_DATA, EVENT_DESELECT, EVENT_SELECT } from "../../../../common/constants";
import IAnyObject from "../../../../common/models/IAnyObject";
import DesignElementTypes from "../../common/DesignElementTypes";
import { DESIGN_ELEMENT_EVENT_DATA_TYPE } from "../../design/DesignElement";
import IDesignElement from "../../design/models/IDesignElement";
import BaseComponent from "../components/base/BaseComponent";
import IAction from "./IAction";

abstract class ActionableIcon extends BaseComponent implements IAction {

    constructor(style?: IAnyObject) {
        super({
          ...(style ?? {}),
        });
        this.subscribe()
    }

    abstract enable(): void

    abstract disable(): void

    abstract supportedDesignElements: DesignElementTypes[];

    abstract action(designElement: IDesignElement): void

    subscribe(): void {
        window.addEventListener(EVENT_DESELECT, this.disableCheck)
        window.addEventListener(EVENT_SELECT, this.enableCheck)
    }

    disableCheck(ev: any) {
        ev?.preventDefault()
        this.disable()
    }

    enableCheck(ev: any) {
        ev?.preventDefault()
        let {[EVENT_DATA]: designElement} = ev?.detail as DESIGN_ELEMENT_EVENT_DATA_TYPE

        if (designElement) {
            let designType = designElement.type
            if (this.isTypeSupported(designType)) {
                return this.enable()
            }
        }
        this.disable()
    }

    isTypeSupported(type: DesignElementTypes) {
        for (const designType of this.supportedDesignElements) {
            if (designType === type) {
                return true
            }
        }
        return false
    }
}

export default ActionableIcon