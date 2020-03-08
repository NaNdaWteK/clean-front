import { BaseRunner } from './BaseRunner'

export class ExecutorRunner extends BaseRunner {
  constructor () {
    super()
  }

  next(context) {
    context.result = context.useCase.internalExecute(context.param)
    this.nextLink.next(context)
  }
}
