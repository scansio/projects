import { Console } from "console";
import ActionBar from "../actionbar/ActionBar";
import BaseComponent from "./BaseComponent";
import ColorPalette from "../colorpalette/ColorPalette";
import DrawingCanvas from "../drawingcanvas/DrawingCanvas";
import DrawingToolBar from "../sidebars/drawingtoolbar/DrawingToolBar";
import HorizontalRuler from "../rulers/horizontalruler/HorizontalRuler";
import HorizontalScrollBar from "../scrollbars/horizontalscrollbar/HorizontalScrollBar";
import MenuBar from "../menubar/MenuBar";
import ObjectManagerSelector from "../objectmanagerselector/ObjectManagerSelector";
import StatusBar from "../statusbar/StatusBar";
import ToolBar from "../toolbar/ToolBar";
import VerticalRuler from "../rulers/verticalruler/VerticalRuler";
import VerticalScrollBar from "../scrollbars/verticalscrollbar/VerticalScrollBar";
import ConsoleCanvas from "../consolecanvas/ConsoleCanvas";
import LeftSideBar from "../sidebars/leftsidebar/LeftSideBar";
import { appendChildren } from "../../../../common/utils";

class AppContainer extends BaseComponent {
  menuBar = new MenuBar
  toolBar = new ToolBar
  actionBar = new ActionBar
  horizontalRuler = new HorizontalRuler
  verticalRuler = new VerticalRuler
  drawingToolBar = new DrawingToolBar
  drawingCanvas = new DrawingCanvas
  colorPalette = new ColorPalette
  objectManagerSelector = new ObjectManagerSelector
  verticalScrollBar = new VerticalScrollBar
  horizontalScrollBar = new HorizontalScrollBar
  statusBar = new StatusBar
  console = new ConsoleCanvas
  leftSideBar = new LeftSideBar

  constructor() {
    super();

    appendChildren(this,
      this.menuBar,
      this.toolBar,
      this.actionBar,
      this.horizontalRuler,
      this.verticalRuler,
      this.drawingToolBar,
      this.drawingCanvas,
      this.colorPalette,
      this.objectManagerSelector,
      this.verticalScrollBar,
      this.horizontalScrollBar,
      this.statusBar,
      this.console,
      this.leftSideBar,
    )
    
  }
}

export default BaseComponent.register(AppContainer);