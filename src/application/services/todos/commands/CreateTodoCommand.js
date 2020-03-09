import { Command } from '../../../core/Command'

export class CreateTodoCommand extends Command {
  constructor(stateManager, todoRepository) {
    super()
    this._stateManager = stateManager
    this._repository = todoRepository
  }

  internalExecute(text) {
    const todos = this._stateManager.state.todos
    const currentId =
      todos
        .map(todo => todo.id)
        .slice()
        .sort()
        .reverse()[0] ?? 0

    const newTodo= {
      id: currentId + 1,
      completed: false,
      text: text
    }
    this._repository.create(newTodo)
    this._stateManager.patch({ todos: [...todos, newTodo] })
  }
}
