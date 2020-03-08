import {CompleteTodoCommand} from '../../application/commands/CompleteTodoCommand.js'
import {GetTodosQuerie} from '../../application/queries/GetTodosQuerie.js'
import {TodoLocalRepository} from '../../infrastructure/TodoLocalRepository.js'

class NandawtekTodoList extends HTMLElement {
  constructor() {
    super()
    var parent = this.getRootNode().host
    this.stateManager = parent.stateManager
    this.todoLocalRepository = new TodoLocalRepository(window)
    this.completeTodoCommand = new CompleteTodoCommand(this.stateManager, this.todoLocalRepository)
    this.getTodosQuery = new GetTodosQuerie(this.stateManager, this.todoLocalRepository)
    this.attachShadow({ mode: 'open' })
    this._addTemplate()
    this._events()
  }
  
  connectedCallback() {
    this.stateManager.register(this)
  }

  notify (state) {
    this.shadowRoot.querySelector('ul').innerHTML = this._list(state.todos)
    this._events()
  }


  completeTodo(event) {
    const id = event.target.getAttribute('key')
    this.completeTodoCommand.execute(id)
  }

  get todos() {
    return this.getTodosQuery.execute()
  }

  _events () {
    if (this.shadowRoot.querySelector('li')) {
      this.shadowRoot.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', this.completeTodo.bind(this))
      })
    }
  }

  _addTemplate() {
    this.shadowRoot.innerHTML = `
      <style>
        .completed {
          text-decoration: line-through;
        }
      </style>
      <ul>
        ${this._list()}
      </ul>
    `
  }

  _list (todos) {
    let result = ''
    for (const todo of todos || this.todos) {
      result += `<li key=${todo.id} class="${todo.completed ? 'completed' : ''}">${todo.text}</li>`
    }
    return result
  }
}

customElements.define('nandawtek-todo-list', NandawtekTodoList)
