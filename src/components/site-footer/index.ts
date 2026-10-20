import html from "./index.html?raw";

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define("site-footer", SiteFooter);
