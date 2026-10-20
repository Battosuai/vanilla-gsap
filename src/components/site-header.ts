const links = [
  { href: "/", label: "Home" },
  { href: "/about.html", label: "About" },
];

// Light DOM (no shadow root) so global Tailwind/CSS applies.
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = location.pathname === "/index.html" ? "/" : location.pathname;
    this.innerHTML = `
      <header>
        <nav>
          ${links
            .map(
              ({ href, label }) =>
                `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`,
            )
            .join("")}
        </nav>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
