import html from "./index.html?raw";

// Light DOM (no shadow root) so global Tailwind/CSS applies.
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
    const path = location.pathname === "/index.html" ? "/" : location.pathname;
    this.querySelector(`a[href="${path}"]`)?.setAttribute(
      "aria-current",
      "page",
    );
  }
}

customElements.define("site-header", SiteHeader);
