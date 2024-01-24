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
import TabPane from "../tabpane/TabPane";
import ParserContainer from "../ParserContainer";
import { appendChildren } from "../../../../../common/utils";

enum Dimension {
  top = '0',
  bottom = '0',
  fullWidth = '100%',
  fullHeight = '100%',
  halfWidth = '50%',
  halfHeight = '50%',

  menubarHeight = '20px',
  toolBarHeight = '30px',

  actionBarHeight = '30px',
  actionBarTop = '50px',
  
  horizontalRulerHeight = '5px',
  horizontalRulerTop = '80px',

  drawingToolBarWidth = '20px',
  drawingToolBarTop = '85px',
  drawingToolBarLeft = '0',

  verticalRulerWidth = '5px',
  verticalRulerLeft = '20px',
  verticalRulerTop = '85px', 
  
  drawingCanvasWidth = '100%',
  drawingCanvasHeight = '100%',
  drawingCanvasLeft = '25px', //verticalRulerLeft + verticalRulerWidth
  drawingCanvasTop = '85px', 
    
  colorPaletteWidth = '20px',
  colorPaletteHeight = '100%',
  colorPaletteRight = '0', 
  colorPaletteTop = '85px', 

  objectManagerSelectorWidth = '20px',
  objectManagerSelectorHeight = '20px',
  objectManagerSelectorRight = '0', 
  objectManagerSelectorBottom = '20px', 

  statusBarWidth = '100%',
  statusBarHeight = '20px',
  statusBarBottom = '0', 

}

class AppContainer extends BaseComponent {

  private menuBar = new MenuBar({
    width: Dimension.fullWidth,
    height: Dimension.menubarHeight,
    top: Dimension.top
  })

  private toolBar = new ToolBar({
    width: Dimension.fullWidth,
    height: Dimension.toolBarHeight,
    top: Dimension.menubarHeight
  })

  private actionBar = new ActionBar({
    width: Dimension.fullWidth,
    height: Dimension.actionBarHeight,
    top: Dimension.actionBarTop
  })

  private horizontalRuler = new HorizontalRuler({
    width: Dimension.fullWidth,
    height: Dimension.horizontalRulerHeight,
    top: Dimension.horizontalRulerTop
  })

  private verticalRuler = new VerticalRuler({
    width: Dimension.verticalRulerWidth,
    top: Dimension.verticalRulerTop,
    height: Dimension.fullHeight,
    left: Dimension.verticalRulerLeft,
  })

  private drawingToolBar = new DrawingToolBar({
    width: Dimension.drawingToolBarWidth,
    top: Dimension.drawingToolBarTop,
    height: Dimension.fullHeight,
    left: Dimension.drawingToolBarLeft,
  })

  private drawingCanvas = new DrawingCanvas({
    width: Dimension.drawingCanvasWidth,
    height: Dimension.drawingCanvasHeight,
    left: Dimension.drawingCanvasLeft,
    top: Dimension.drawingCanvasTop,
  })

  private colorPalette = new ColorPalette({
    width: Dimension.colorPaletteWidth,
    height: Dimension.colorPaletteHeight,
    right: Dimension.colorPaletteRight,
    top: Dimension.colorPaletteTop,
  })

  private objectManagerSelector = new ObjectManagerSelector({
    width: Dimension.objectManagerSelectorWidth,
    height: Dimension.objectManagerSelectorHeight,
    right: Dimension.objectManagerSelectorRight,
    bottom: Dimension.objectManagerSelectorBottom,
  })

  private verticalScrollBar = new VerticalScrollBar
  private horizontalScrollBar = new HorizontalScrollBar

  private statusBar = new StatusBar({
    width: Dimension.statusBarWidth,
    height: Dimension.statusBarHeight,
    bottom: Dimension.statusBarBottom,
  })

  private consolecanvas = new ConsoleCanvas({
    width: '100%',
    height: '200px',
    bottom: 0,
    display: 'none'
  })

  private leftSideBar = new LeftSideBar
  private parserContainer = new ParserContainer
  private tabPane = new TabPane

  constructor() {
    super();


    appendChildren(this,
      this.menuBar,
      this.toolBar,
      this.actionBar,
      this.tabPane,
      this.horizontalRuler,
      this.drawingToolBar,
      this.verticalRuler,
      this.drawingCanvas,
      this.colorPalette,
      this.objectManagerSelector,
      this.verticalScrollBar,
      this.horizontalScrollBar,
      this.statusBar,
      this.consolecanvas,
      this.leftSideBar,
      this.parserContainer,
    )

  }
}

export default BaseComponent.register(AppContainer);