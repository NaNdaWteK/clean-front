import { BaseLink } from './BaseLink'

export class ExecutorLink extends BaseLink {
  constructor () {
    super()
  }

  next(context) {
    context.result = context.useCase.internalExecute(context.param)
    this.nextLink.next(context)
  }
}
