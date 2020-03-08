import { Query } from '../../domains/useCases/Query'

export class GetTodosQuerie extends Query {
  constructor(stateManager, todoRepository) {
    super()
    this.stateManager = stateManager
    this.todoRepository = todoRepository
  }

  internalExecute() {
    if (this.stateManager.state.todos.length === 0) {
      const todos = this.todoRepository.findAll()
      this.stateManager.patch({ todos })
    }
    return this.stateManager.state.todos
  }
}
