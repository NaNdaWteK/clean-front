import { Query } from '../../../core/Query'

export class GetTodosQuerie extends Query {
  constructor(stateManager, todoRepository) {
    super()
    this.stateManager = stateManager
    this.repository = todoRepository
  }

  internalExecute() {
    if (this.stateManager.state.todos.length === 0) {
      const todos = this.repository.findAll()
      this.stateManager.patch({ todos })
    }
    return this.stateManager.state.todos
  }
}
