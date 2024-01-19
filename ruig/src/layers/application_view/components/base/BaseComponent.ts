import { snakeCase } from "../../../../common/utils";
import InvalidTagNameException from "../exceptions/InvalidTagNameException";

class BaseComponent extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
    this.shadow.innerHTML = `<div></div>`
  }

  getShadowWrapper() {
    let wrapper = this.shadow.children.item(0)
    if (!wrapper) {
      wrapper = document.createElement('div')
      this.shadow.appendChild(wrapper)
    }
    return wrapper as BaseComponent
  }

  public static register(element: typeof BaseComponent): typeof BaseComponent {
    if (!element) {
      throw new InvalidTagNameException
    }
    let tagName = snakeCase(element.name)
    try {
      customElements.define(tagName, element);
    } catch (error: any) {
      console.warn(error.message);
    }
    return element
  }
}

export default BaseComponent;