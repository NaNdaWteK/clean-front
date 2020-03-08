import { Command } from '../../domains/useCases/Command'
import { TodoNotFoundError } from '../../infrastructure/exceptions/TodoNotFoundError'

export class CompleteTodoCommand extends Command {
  constructor(stateManager, todoRepository) {
    super()
    this.stateManager = stateManager
    this.todoRepository = todoRepository
  }

  internalExecute(id) {
    const todos = this.stateManager.state.todos
    const foundTodo = todos.find(todo => todo.id === parseInt(id))

    if (foundTodo === undefined) {
      throw new TodoNotFoundError()
    }

    this.todoRepository.update(id, { ...foundTodo, completed: !foundTodo.completed })
    this._updateState(id, todos)
  }

  _updateState(id, todos) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === parseInt(id)) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    this.stateManager.patch({ todos: updatedTodos })
  }
}
