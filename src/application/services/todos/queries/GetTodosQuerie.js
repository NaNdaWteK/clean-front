import { Query } from '../../../core/Query'

export class GetTodosQuerie extends Query {
  constructor(stateManager, todoRepository) {
    super()
    this._stateManager = stateManager
    this._repository = todoRepository
  }

  internalExecute() {
    if (this._stateManager.state.todos.length === 0) {
      const todos = this._repository.findAll()
      this._stateManager.patch({ todos })
    }
    return this._stateManager.state.todos
  }
}
