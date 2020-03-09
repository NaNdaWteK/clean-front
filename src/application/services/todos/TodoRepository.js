import { TodoLocalRepository } from './repositories/TodoLocalRepository'

export class TodoRepository {
  constructor(window) {
    this.repository = new TodoLocalRepository(window, 'todos')
  }

  findAll() {
    return this.repository.findAll()
  }

  create(todo) {
    this.repository.create(todo)
  }

  update(id, todo) {
    this.repository.update(id, todo)
  }
}
