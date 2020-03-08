class NandawtekButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
  }

  connectedCallback() {
  }

  _addTemplate() {
    this.shadowRoot.innerHTML = `<button><slot></slot></button>`
  }
}

customElements.define('nandawtek-button', NandawtekButton)
