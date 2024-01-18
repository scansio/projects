// app-container.ts

class AppContainer extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.attachShadow({mode: 'closed'})
    console.log("root", this.shadowRoot)
  }
}

// Define the custom element
customElements.define('app-container', AppContainer);
export default AppContainer;