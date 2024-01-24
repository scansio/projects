import NullException from "../../../common/exceptions/NullException";
import { appendChildren } from "../../../common/utils";
import BaseComponent from "../application/components/base/BaseComponent";
import IDesignElement from "./models/IDesignElement";
import IDesignElementSelectionWrapper from "./models/IDesignElementSelectionWrapper";

class DesignElementSelectionWrapper extends BaseComponent implements IDesignElementSelectionWrapper {
    topRightElement = new HTMLElement
    bottomRightElement = new HTMLElement
    bottomLeftElement = new HTMLElement
    topLeftElement = new HTMLElement
    rotatorElement = new HTMLElement
    resizerElement = new HTMLElement
    topElement = new HTMLElement
    leftElement = new HTMLElement
    bottomElement = new HTMLElement
    rightElement = new HTMLElement

    wrappedElement!: IDesignElement;

    constructor() {
        super()

        appendChildren(this,
            this.topRightElement,
            this.bottomRightElement,
            this.bottomLeftElement,
            this.topLeftElement,
            this.rotatorElement,
            this.resizerElement,
            this.topElement,
            this.leftElement,
            this.bottomElement,
            this.rightElement,
        )
    }

    setElementToWrap(element: IDesignElement): void {
        if (!element) {
            throw new NullException
        }
        this.wrappedElement = element
    }

}

export default BaseComponent.register(DesignElementSelectionWrapper);
