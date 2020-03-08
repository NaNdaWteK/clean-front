import { Command } from '../../domains/useCases/Command'

export class CreateTodoCommand extends Command {
  constructor(stateManager, todoRepository) {
    super()
    this.stateManager = stateManager
    this.todoRepository = todoRepository
  }

  internalExecute(text) {
    const todos = this.stateManager.state.todos
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
    this.todoRepository.create(newTodo)
    this.stateManager.patch({ todos: [...todos, newTodo] })
  }
}
