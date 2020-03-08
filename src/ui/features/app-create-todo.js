import {CreateTodoCommand} from '../../application/commands/CreateTodoCommand.js'
import {TodoLocalRepository} from '../../infrastructure/TodoLocalRepository.js'

class NandawtekCreateTodo extends HTMLElement {
  constructor() {
    super();
    var parent = this.getRootNode().host
    this.stateManager = parent.stateManager
    this.todoLocalRepository = new TodoLocalRepository(window)
    this.createTodoCommand = new CreateTodoCommand(this.stateManager, this.todoLocalRepository)
    this.todoText = ''
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
    this._events()
  }

  connectedCallback() {
  }

  createTodo() {
    this.createTodoCommand.execute(this.shadowRoot.querySelector('nandawtek-input').shadowRoot.querySelector('input').value)
    this.todoText = ''
  }

  _events () {
    this.shadowRoot
      .querySelector('nandawtek-button')
      .addEventListener('click', this.createTodo.bind(this))
  }

  _addTemplate() {
    this.shadowRoot.innerHTML = `
      <div>
        <form onSubmit="event => event.preventDefault()">
          <nandawtek-input>Todo</nandawtek-input>
          <nandawtek-button>Crear</nandawtek-button>
        </form>
      </div>
    `
  }
}

customElements.define('nandawtek-create-todo', NandawtekCreateTodo)
