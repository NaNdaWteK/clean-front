class NandawtekInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
    this._events()
  }
  
  connectedCallback() {
  }

  input(event) {
    return event.target.value
  }

  _events () {
    this.shadowRoot
      .querySelector('input')
      .addEventListener('click', this.input.bind(this))
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
