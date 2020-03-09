import {CreateTodoCommand} from '../../../application/services/todos/commands/CreateTodoCommand.js'
import {TodoRepository} from '../../../application/services/todos/TodoRepository.js'

class NandawtekCreateTodo extends HTMLElement {
  constructor() {
    super();
    var parent = this.getRootNode().host
    this.stateManager = parent.stateManager
    this.todoRepository = new TodoRepository(window)
    this.createTodoCommand = new CreateTodoCommand(this.stateManager, this.todoRepository)
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
    this._events()
  }

  connectedCallback() {
  }

  createTodo() {
    const input = this.shadowRoot.querySelector('nandawtek-input').shadowRoot.querySelector('input')
    this.createTodoCommand.execute(input.value)
    input.value = ''
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
