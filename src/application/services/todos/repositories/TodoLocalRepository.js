import { TodoNotFoundError } from '../../../../infrastructure/exceptions/TodoNotFoundError'

export class TodoLocalRepository {
  constructor(window) {
    this.key = 'todos'
    this.window = window
  }

  findAll() {
    const foundTodos = this.window.localStorage.getItem(this.key)
    if (!foundTodos) {
      return []
    }
    return JSON.parse(foundTodos)
  }

  create(todo) {
    const todos = this.findAll()
    todos.push(todo)
    this.window.localStorage.setItem(this.key, JSON.stringify(todos))
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

    this.window.localStorage.setItem(this.key, JSON.stringify(updatedTodos))
  }
}
