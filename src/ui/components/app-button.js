class NandawtekButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
    this._events()
  }
  
  connectedCallback() {
  }

  clicked(event) {
    return event
  }

  _events () {
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', this.clicked.bind(this))
  }

  _addTemplate() {
    this.shadowRoot.innerHTML = `<button><slot></slot></button>`
  }
}

customElements.define('nandawtek-button', NandawtekButton)
