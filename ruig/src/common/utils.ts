import BaseComponent from "../layers/application_view/components/base/BaseComponent";
import NullException from "./exceptions/NullException";

export const snakeCase = (camelCase: string): string => {
    return camelCase.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`).substring(1);
}

export const appendChildren = (parent: BaseComponent | null, ...children: HTMLElement[]) => {
    if (!parent) {
        throw new NullException
    }
    for (const child of children) {
        parent.getShadowWrapper().appendChild(child)
    }
    return parent
}