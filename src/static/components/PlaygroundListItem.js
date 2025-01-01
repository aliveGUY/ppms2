class PlaygroundListItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title") || "Default Title";
    const location = this.getAttribute("location") || "Default Location";
    this.innerHTML = `
    <div class="playground-item">
      <h3>${title}</h3>
      <span>${location}</span>
    </div>
  `;
  }
}

customElements.define("playground-list-item", PlaygroundListItem);