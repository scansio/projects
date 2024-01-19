import NullException from "../../../../common/exceptions/NullException";
import IPair from "../../../../common/models/IPair";
import { snakeCase } from "../../../../common/utils";
import InvalidTagNameException from "../exceptions/InvalidTagNameException";

class BaseComponent extends HTMLElement implements IDelegateModel{
  private shadow: ShadowRoot;
  private shadowWrapper: HTMLElement;
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
    this.shadow.innerHTML = `<div></div>`
    this.shadowWrapper = this.getShadowWrapper();
  }

  // Delegate properties and methods to the shadowWrapper

  get accessKey(): string {
      return this.shadowWrapper.accessKey;
  }

  set accessKey(value: string) {
      this.shadowWrapper.accessKey = value;
  }

  get attributes(): NamedNodeMap {
      return this.shadowWrapper.attributes;
  }

  get classList(): DOMTokenList {
      return this.shadowWrapper.classList;
  }

  get className(): string {
      return this.shadowWrapper.className;
  }

  set className(value: string) {
      this.shadowWrapper.className = value;
  }

  get contentEditable(): string {
      return this.shadowWrapper.contentEditable;
  }

  set contentEditable(value: string) {
      this.shadowWrapper.contentEditable = value;
  }

  get dataset(): DOMStringMap {
      return this.shadowWrapper.dataset;
  }

  get dir(): string {
      return this.shadowWrapper.dir;
  }

  set dir(value: string) {
      this.shadowWrapper.dir = value;
  }

  get draggable(): boolean {
      return this.shadowWrapper.draggable;
  }

  set draggable(value: boolean) {
      this.shadowWrapper.draggable = value;
  }

  get hidden(): boolean {
      return this.shadowWrapper.hidden;
  }

  set hidden(value: boolean) {
      this.shadowWrapper.hidden = value;
  }

  get id(): string {
      return this.shadowWrapper.id;
  }

  set id(value: string) {
      this.shadowWrapper.id = value;
  }

  get lang(): string {
      return this.shadowWrapper.lang;
  }

  set lang(value: string) {
      this.shadowWrapper.lang = value;
  }

  get offsetHeight(): number {
      return this.shadowWrapper.offsetHeight;
  }

  get offsetLeft(): number {
      return this.shadowWrapper.offsetLeft;
  }

  get offsetParent(): Element | null {
      return this.shadowWrapper.offsetParent;
  }

  get offsetTop(): number {
      return this.shadowWrapper.offsetTop;
  }

  get offsetWidth(): number {
      return this.shadowWrapper.offsetWidth;
  }

  get style(): CSSStyleDeclaration {
      return this.shadowWrapper.style;
  }

  get tabIndex(): number {
      return this.shadowWrapper.tabIndex;
  }

  set tabIndex(value: number) {
      this.shadowWrapper.tabIndex = value;
  }

  get title(): string {
      return this.shadowWrapper.title;
  }

  set title(value: string) {
      this.shadowWrapper.title = value;
  }

  // ... (other delegated methods)

  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
      this.shadowWrapper.addEventListener(type, listener, options);
  }

  append(...nodes: (Node | string)[]): void {
      this.shadowWrapper.append(...nodes);
  }

  blur(): void {
      this.shadowWrapper.blur();
  }

  click(): void {
      this.shadowWrapper.click();
  }

  closest(selectors: string): Element | null {
      return this.shadowWrapper.closest(selectors);
  }

  dispatchEvent(event: Event): boolean {
      return this.shadowWrapper.dispatchEvent(event);
  }

  focus(options?: FocusOptions): void {
      this.shadowWrapper.focus(options);
  }

  getAttribute(name: string): string | null {
      return this.shadowWrapper.getAttribute(name);
  }

  getAttributeNS(namespaceURI: string | null, localName: string): string | null {
      return this.shadowWrapper.getAttributeNS(namespaceURI, localName);
  }

  getAttributeNode(name: string): Attr | null {
      return this.shadowWrapper.getAttributeNode(name);
  }

  getAttributeNodeNS(namespaceURI: string | null, localName: string): Attr | null {
      return this.shadowWrapper.getAttributeNodeNS(namespaceURI, localName);
  }

  hasAttribute(name: string): boolean {
      return this.shadowWrapper.hasAttribute(name);
  }

  hasAttributeNS(namespaceURI: string | null, localName: string): boolean {
      return this.shadowWrapper.hasAttributeNS(namespaceURI, localName);
  }

  hasAttributes(): boolean {
      return this.shadowWrapper.hasAttributes();
  }

  insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null {
      return this.shadowWrapper.insertAdjacentElement(position, insertedElement);
  }

  insertAdjacentHTML(position: InsertPosition, text: string): void {
      this.shadowWrapper.insertAdjacentHTML(position, text);
  }

  insertAdjacentText(position: InsertPosition, text: string): void {
      this.shadowWrapper.insertAdjacentText(position, text);
  }

  removeAttribute(name: string): void {
      this.shadowWrapper.removeAttribute(name);
  }

  removeAttributeNS(namespaceURI: string | null, localName: string): void {
      this.shadowWrapper.removeAttributeNS(namespaceURI, localName);
  }

  removeAttributeNode(attr: Attr): Attr {
      return this.shadowWrapper.removeAttributeNode(attr);
  }

  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
      this.shadowWrapper.removeEventListener(type, listener, options);
  }

  setAttribute(name: string, value: string): void {
      this.shadowWrapper.setAttribute(name, value);
  }

  setAttributeNS(namespaceURI: string | null, qualifiedName: string, value: string): void {
      this.shadowWrapper.setAttributeNS(namespaceURI, qualifiedName, value);
  }

  setAttributeNode(attr: Attr): Attr | null {
      return this.shadowWrapper.setAttributeNode(attr);
  }

  setAttributeNodeNS(attr: Attr): Attr | null {
      return this.shadowWrapper.setAttributeNodeNS(attr);
  }

  toggleAttribute(qualifiedName: string, force?: boolean): boolean {
      return this.shadowWrapper.toggleAttribute(qualifiedName, force);
  }

  private getShadowWrapper() {
    let wrapper = this.shadow.children.item(0)
    if (!wrapper) {
      wrapper = document.createElement('div')
      this.shadow.appendChild(wrapper)
    }
    return wrapper as BaseComponent
  }

  addStylesheets(...paths: string[]) {
    this.addStyle(...paths)
    throw  new Error("Not implemented")
  }

  addStyle(...styles: string[]) {
    if (!styles) {
      throw new NullException
    }
    let existed = this.shadow.children.item(2)
    let styleHolder = document.createElement('style')
    let styleString = existed ? existed.textContent : ''
    for (const style of styles) {
      styleString?.concat("\n\n", style)
    }
    styleHolder.textContent = styleString
    if (existed) {
      this.shadow.replaceChild(existed, styleHolder)
    } else {
      this.shadow.appendChild(styleHolder)
    }
    return styleHolder as HTMLStyleElement
  }

  addInlineStyle({name, value}: IPair) {
    this.shadowWrapper.style[name as any] = value
  }

  addClassNames(...classNames: string[]) {
    this.shadowWrapper.classList.add(...classNames)
  }

  removeClassNames(...classNames: string[]) {
    this.shadowWrapper.classList.remove(...classNames)
  }

  replaceClassName(oldClassName: string , newClassName: string) {
    return this.shadowWrapper.classList.replace(oldClassName, newClassName)
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