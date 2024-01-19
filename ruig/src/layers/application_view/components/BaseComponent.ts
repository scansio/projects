import { snakeCase } from "../../../common/utils";
import InvalidTagNameException from "./exceptions/InvalidTagNameException";

class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'closed' });
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