import { TodoLocalRepository } from './repositories/TodoLocalRepository'

export class TodoRepository {
  constructor(window) {
    this._repository = new TodoLocalRepository(window, 'todos')
  }

  findAll() {
    return this._repository.findAll()
  }

  create(todo) {
    this._repository.create(todo)
  }

  update(id, todo) {
    this._repository.update(id, todo)
  }
}
