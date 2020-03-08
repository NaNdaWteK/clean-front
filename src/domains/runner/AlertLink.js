import { BaseLink } from './BaseLink'

export class AlertLink extends BaseLink {
  constructor() {
    super()
  }

  next(context) {
    if (context.useCase.constructor.name !== 'GetTodosQuerie') {
      alert(`${context.useCase.constructor.name} with param ${context.param}, gets this result ${context.result}`)
    }
    this.nextLink.next(context)
  }
}
