import {StateManager} from '../infrastructure/StateManager.js'

class NandawtekApp extends HTMLElement {
  constructor() {
    super()
    this.stateManager = new StateManager()
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
  }
  _addTemplate() {
    this.shadowRoot.innerHTML = `
      <nandawtek-todo-list></nandawtek-todo-list>
      <nandawtek-create-todo></nandawtek-create-todo>
    `
  }
}

customElements.define('nandawtek-app', NandawtekApp)
