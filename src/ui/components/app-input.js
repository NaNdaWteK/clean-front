class NandawtekInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
  }

  connectedCallback() {
  }

  _addTemplate() {
    this.shadowRoot.innerHTML = `
      <label>
        <slot></slot>
        <input />
      </label>
    `
  }
}

customElements.define('nandawtek-input', NandawtekInput)
