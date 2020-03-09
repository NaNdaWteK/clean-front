import { TodoNotFoundError } from '../../../../infrastructure/exceptions/TodoNotFoundError'

export class TodoLocalRepository {
  constructor(window, key) {
    this._key = key
    this._window = window
  }

  findAll() {
    const foundTodos = this._window.localStorage.getItem(this._key)
    if (!foundTodos) {
      return []
    }
    return JSON.parse(foundTodos)
  }

  create(todo) {
    const todos = this.findAll()
    todos.push(todo)
    this._window.localStorage.setItem(this._key, JSON.stringify(todos))
  }

  update(id, todo) {
    const todos = this.findAll()

    if (todos.length === 0) {
      throw new TodoNotFoundError()
    }

    const updatedTodos = todos.map(oldTodo => {
      if (oldTodo.id === id) {
        return {
          ...oldTodo,
          ...todo
        }
      }

      return oldTodo
    })

    this._window.localStorage.setItem(this._key, JSON.stringify(updatedTodos))
  }
}
