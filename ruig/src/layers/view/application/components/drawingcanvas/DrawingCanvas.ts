import SharedConfig from "../../../../../common/SharedConfig";
import { CONTEXT_MENU, DESIGN_ELEMENT_WRAPPER, DRAWING_CANVAS } from "../../../../../common/constants";
import NullException from "../../../../../common/exceptions/NullException";
import IAnyObject from "../../../../../common/models/IAnyObject";
import IPosition from "../../../../../common/models/IPosition";
import { appendChildren, spreadTo } from "../../../../../common/utils";
import DesignElementSelectionWrapper from "../../../design/DesignElementSelectionWrapper";
import IDesignElement from "../../../design/models/IDesignElement";
import BaseComponent from "../base/BaseComponent";
import ContextMenu from "../contextmenu/ContextMenu";

class DrawingCanvas extends BaseComponent {
  designElementWrapper = new DesignElementSelectionWrapper()

  contextMenu = new ContextMenu({
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    borderRadius: '10px',
    border: '0.5px solid gray',
  })

  constructor(style?: IAnyObject) {
    super({
      background: 'green',
      ...(style ?? {})
    });

    spreadTo(this.designElementWrapper.style, {
      display: 'flex',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      border: '1px solid blue',
    })

    SharedConfig.set(DRAWING_CANVAS, this)
    SharedConfig.set(DESIGN_ELEMENT_WRAPPER, this.designElementWrapper)
    SharedConfig.set(CONTEXT_MENU, this.contextMenu)
  }

  addDesignElement(element: IDesignElement, position?: IPosition) {
    if (!element) {
      throw NullException
    }

    let {x = 0, y = 0} = position as IPosition

    spreadTo(element.style, {
      position: 'absolute',
      top: y,
      left: x,
    })

    appendChildren(this, element)

    return element
  }
}

export default BaseComponent.register(DrawingCanvas);