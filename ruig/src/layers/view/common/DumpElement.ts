import IAnyObject from "../../../common/models/IAnyObject";
import BaseComponent from "../application/components/base/BaseComponent";
import IDumpElement from "./models/IDumpElement";

class DumpElement extends BaseComponent implements IDumpElement {
    constructor(style?: IAnyObject) {
        super({
          ...(style ?? {}),
        });
    }
    accessKey: string;
    accessKeyLabel: string;
    autocapitalize: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    inert: boolean;
    innerText: string;
    lang: string;
    offsetHeight: number;
    offsetLeft: number;
    offsetParent: Element | null;
    offsetTop: number;
    offsetWidth: number;
    outerText: string;
    popover: string | null;
    spellcheck: boolean;
    title: string;
    translate: boolean;
    attachInternals(): ElementInternals {
        return null as any
    }
    click(): void {
        return null as any
    }
    hidePopover(): void {
        return null as any
    }
    showPopover(): void {
        return null as any
    }
    togglePopover(force?: boolean | undefined): void {
        return null as any
    }
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: unknown, listener: unknown, options?: unknown): void {
        return null as any
    }
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
        return null as any
    }
    attributes: NamedNodeMap;
    classList: DOMTokenList;
    className: string;
    clientHeight: number;
    clientLeft: number;
    clientTop: number;
    clientWidth: number;
    id: string;
    localName: string;
    namespaceURI: string | null;
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    outerHTML: string;
    ownerDocument: Document;
    part: DOMTokenList;
    prefix: string | null;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
    shadowRoot: ShadowRoot | null;
    slot: string;
    tagName: string;
    attachShadow(init: ShadowRootInit): ShadowRoot {
        return null as any
    }
    checkVisibility(options?: CheckVisibilityOptions | undefined): boolean {
        return null as any
    }
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest<K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null;
    closest<E extends Element = Element>(selectors: string): E | null;
    closest(selectors: unknown) {
        return null as any
    }
    computedStyleMap(): StylePropertyMapReadOnly {
        return null as any
    }
    getAttribute(qualifiedName: string): string | null {
        return null as any
    }
    getAttributeNS(namespace: string | null, localName: string): string | null {
        return null as any
    }
    getAttributeNames(): string[] {
        return null as any
    }
    getAttributeNode(qualifiedName: string): Attr | null {
        return null as any
    }
    getAttributeNodeNS(namespace: string | null, localName: string): Attr | null {
        return null as any
    }
    getBoundingClientRect(): DOMRect {
        return null as any
    }
    getClientRects(): DOMRectList {
        return null as any
    }
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
        return null as any
    }
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagName(qualifiedName: unknown) {
        return null as any
    }
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespace: unknown, localName: unknown): HTMLCollectionOf<Element> | HTMLCollectionOf<HTMLElement> | HTMLCollectionOf<SVGElement> | HTMLCollectionOf<MathMLElement> {
        return null as any
    }
    hasAttribute(qualifiedName: string): boolean {
        return null as any
    }
    hasAttributeNS(namespace: string | null, localName: string): boolean {
        return null as any
    }
    hasAttributes(): boolean {
        return null as any
    }
    hasPointerCapture(pointerId: number): boolean {
        return null as any
    }
    insertAdjacentElement(where: InsertPosition, element: Element): Element | null {
        return null as any
    }
    insertAdjacentHTML(position: InsertPosition, text: string): void {
        return null as any
    }
    insertAdjacentText(where: InsertPosition, data: string): void {
        return null as any
    }
    matches(selectors: string): boolean {
        return null as any
    }
    releasePointerCapture(pointerId: number): void {
        return null as any
    }
    removeAttribute(qualifiedName: string): void {
        return null as any
    }
    removeAttributeNS(namespace: string | null, localName: string): void {
        return null as any
    }
    removeAttributeNode(attr: Attr): Attr {
        return null as any
    }
    requestFullscreen(options?: FullscreenOptions | undefined): Promise<void> {
        return null as any
    }
    requestPointerLock(): void {
        return null as any
    }
    scroll(options?: ScrollToOptions | undefined): void;
    scroll(x: number, y: number): void;
    scroll(x?: unknown, y?: unknown): void {
        return null as any
    }
    scrollBy(options?: ScrollToOptions | undefined): void;
    scrollBy(x: number, y: number): void;
    scrollBy(x?: unknown, y?: unknown): void {
        return null as any
    }
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions | undefined): void {
        return null as any
    }
    scrollTo(options?: ScrollToOptions | undefined): void;
    scrollTo(x: number, y: number): void;
    scrollTo(x?: unknown, y?: unknown): void {
        return null as any
    }
    setAttribute(qualifiedName: string, value: string): void {
        return null as any
    }
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
        return null as any
    }
    setAttributeNode(attr: Attr): Attr | null {
        return null as any
    }
    setAttributeNodeNS(attr: Attr): Attr | null {
        return null as any
    }
    setPointerCapture(pointerId: number): void {
        return null as any
    }
    toggleAttribute(qualifiedName: string, force?: boolean | undefined): boolean {
        return null as any
    }
    webkitMatchesSelector(selectors: string): boolean {
        return null as any
    }
    baseURI: string;
    childNodes: NodeListOf<ChildNode>;
    firstChild: ChildNode | null;
    isConnected: boolean;
    lastChild: ChildNode | null;
    nextSibling: ChildNode | null;
    nodeName: string;
    nodeType: number;
    nodeValue: string | null;
    parentElement: HTMLElement | null;
    parentNode: ParentNode | null;
    previousSibling: ChildNode | null;
    textContent: string | null;
    appendChild<T extends Node>(node: T): T {
        return null as any
    }
    cloneNode(deep?: boolean | undefined): Node {
        return null as any
    }
    compareDocumentPosition(other: Node): number {
        return null as any
    }
    contains(other: Node | null): boolean {
        return null as any
    }
    getRootNode(options?: GetRootNodeOptions | undefined): Node {
        return null as any
    }
    hasChildNodes(): boolean {
        return null as any
    }
    insertBefore<T extends Node>(node: T, child: Node | null): T {
        return null as any
    }
    isDefaultNamespace(namespace: string | null): boolean {
        return null as any
    }
    isEqualNode(otherNode: Node | null): boolean {
        return null as any
    }
    isSameNode(otherNode: Node | null): boolean {
        return null as any
    }
    lookupNamespaceURI(prefix: string | null): string | null {
        return null as any
    }
    lookupPrefix(namespace: string | null): string | null {
        return null as any
    }
    normalize(): void {
        return null as any
    }
    removeChild<T extends Node>(child: T): T {
        return null as any
    }
    replaceChild<T extends Node>(node: Node, child: T): T {
        return null as any
    }
    ELEMENT_NODE: 1;
    ATTRIBUTE_NODE: 2;
    TEXT_NODE: 3;
    CDATA_SECTION_NODE: 4;
    ENTITY_REFERENCE_NODE: 5;
    ENTITY_NODE: 6;
    PROCESSING_INSTRUCTION_NODE: 7;
    COMMENT_NODE: 8;
    DOCUMENT_NODE: 9;
    DOCUMENT_TYPE_NODE: 10;
    DOCUMENT_FRAGMENT_NODE: 11;
    NOTATION_NODE: 12;
    DOCUMENT_POSITION_DISCONNECTED: 1;
    DOCUMENT_POSITION_PRECEDING: 2;
    DOCUMENT_POSITION_FOLLOWING: 4;
    DOCUMENT_POSITION_CONTAINS: 8;
    DOCUMENT_POSITION_CONTAINED_BY: 16;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
    dispatchEvent(event: Event): boolean {
        return null as any
    }
    ariaAtomic: string | null;
    ariaAutoComplete: string | null;
    ariaBusy: string | null;
    ariaChecked: string | null;
    ariaColCount: string | null;
    ariaColIndex: string | null;
    ariaColSpan: string | null;
    ariaCurrent: string | null;
    ariaDisabled: string | null;
    ariaExpanded: string | null;
    ariaHasPopup: string | null;
    ariaHidden: string | null;
    ariaInvalid: string | null;
    ariaKeyShortcuts: string | null;
    ariaLabel: string | null;
    ariaLevel: string | null;
    ariaLive: string | null;
    ariaModal: string | null;
    ariaMultiLine: string | null;
    ariaMultiSelectable: string | null;
    ariaOrientation: string | null;
    ariaPlaceholder: string | null;
    ariaPosInSet: string | null;
    ariaPressed: string | null;
    ariaReadOnly: string | null;
    ariaRequired: string | null;
    ariaRoleDescription: string | null;
    ariaRowCount: string | null;
    ariaRowIndex: string | null;
    ariaRowSpan: string | null;
    ariaSelected: string | null;
    ariaSetSize: string | null;
    ariaSort: string | null;
    ariaValueMax: string | null;
    ariaValueMin: string | null;
    ariaValueNow: string | null;
    ariaValueText: string | null;
    role: string | null;
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined): Animation {
        return null as any
    }
    getAnimations(options?: GetAnimationsOptions | undefined): Animation[] {
        return null as any
    }
    after(...nodes: (string | Node)[]): void {
        return null as any
    }
    before(...nodes: (string | Node)[]): void {
        return null as any
    }
    remove(): void {
        return null as any
    }
    replaceWith(...nodes: (string | Node)[]): void {
        return null as any
    }
    innerHTML: string;
    nextElementSibling: Element | null;
    previousElementSibling: Element | null;
    childElementCount: number;
    children: HTMLCollection;
    firstElementChild: Element | null;
    lastElementChild: Element | null;
    append(...nodes: (string | Node)[]): void {
        return null as any
    }
    prepend(...nodes: (string | Node)[]): void {
        return null as any
    }
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
    querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    querySelector(selectors: unknown) {
        return null as any
    }
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    querySelectorAll(selectors: unknown): NodeListOf<HTMLElementTagNameMap[K]> | NodeListOf<SVGElementTagNameMap[K]> | NodeListOf<MathMLElementTagNameMap[K]> | NodeListOf<HTMLElementDeprecatedTagNameMap[K]> | NodeListOf<E> {
        return null as any
    }
    replaceChildren(...nodes: (string | Node)[]): void {
        return null as any
    }
    assignedSlot: HTMLSlotElement | null;
    attributeStyleMap: StylePropertyMap;
    style: CSSStyleDeclaration;
    contentEditable: string;
    enterKeyHint: string;
    inputMode!: string;
    isContentEditable!: boolean;
    onabort!: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onanimationcancel!: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend!: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration!: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart!: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onbeforeinput!: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
    onblur!: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    oncancel!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplay!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onchange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onclick!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncontextmenu!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncopy!: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    oncuechange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncut!: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    ondblclick!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    ondrag!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragend!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragenter!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragleave!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragover!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragstart!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondrop!: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondurationchange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onemptied!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onended!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onerror!: OnErrorEventHandler;
    onfocus!: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    onformdata!: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
    ongotpointercapture!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    oninput!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onkeydown!: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeypress!: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeyup!: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onload!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadeddata!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadedmetadata!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadstart!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onmousedown!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmousemove!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseout!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseover!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseup!: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onpaste!: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    onpause!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplay!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplaying!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpointercancel!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerdown!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerenter!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerleave!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointermove!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerout!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerover!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerup!: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onprogress!: ((this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any) | null;
    onratechange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onreset!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize!: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onscroll!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onscrollend!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsecuritypolicyviolation!: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    onseeked!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onseeking!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselect!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselectionchange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselectstart!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onslotchange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onstalled!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsubmit!: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
    onsuspend!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontimeupdate!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontoggle!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontouchcancel!: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontouchend!: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontouchmove!: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontouchstart!: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontransitioncancel!: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionend!: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionrun!: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionstart!: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    onvolumechange!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwaiting!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationend!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationiteration!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationstart!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkittransitionend!: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel!: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    autofocus: boolean;
    dataset: DOMStringMap;
    nonce?: string | undefined;
    tabIndex: number;
    blur(): void {
        return null as any
    }
    focus(options?: FocusOptions | undefined): void {
        return null as any
    }

}

export default BaseComponent.register(DumpElement);