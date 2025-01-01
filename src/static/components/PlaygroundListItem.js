class PlaygroundListItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const location = this.getAttribute("location");
    const id = this.getAttribute("id");

    this.innerHTML = `
    <div class="playground-item">
      <a href="/details/${id}">
        <h3>${title}</h3>
        <p>${location}</p>
      </a>
    </div>
  `;
  }
}

customElements.define("playground-list-item", PlaygroundListItem);
