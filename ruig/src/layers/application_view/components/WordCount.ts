import BaseComponent from "./BaseComponent";

// Create a class for the element
class WordCount extends BaseComponent {
    constructor() {
      // Always call super first in constructor
      super();
  
      // count words in element's parent element
      const wcParent = this.parentNode;
  
      function countWords(node: any) {
        const text = node.innerText || node.textContent;
        return text
          .trim()
          .split(/\s+/g)
          .filter((a: any) => a.trim().length > 0).length;
      }
  
      const count = `Words: ${countWords(wcParent)}`;
  
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
  
      // Create text node and add word count to it
      const text = document.createElement("span");
      text.textContent = count;
  
      // Append it to the shadow root
      shadow.appendChild(text);
  
      // Update count when element content changes
      setInterval(() => {
        const count = `Words: ${countWords(wcParent)}`;
        text.textContent = count;
      }, 200);
    }
  }
  
  export default BaseComponent.register(WordCount)