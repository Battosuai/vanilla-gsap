class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<footer><p>Vanilla GSAP</p></footer>";
  }
}

customElements.define("site-footer", SiteFooter);
