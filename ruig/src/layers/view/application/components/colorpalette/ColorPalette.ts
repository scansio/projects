import IAnyObject from "../../../../../common/models/IAnyObject";
import BaseComponent from "../base/BaseComponent";

class ColorPalette extends BaseComponent {
  constructor(style?: IAnyObject) {
    super({
      background: 'blue',
      ...(style ?? {})
    });
  }
}

export default BaseComponent.register(ColorPalette);