import { BaseRunner } from './BaseRunner'

export class AlertRunner extends BaseRunner {
  constructor() {
    super()
  }

  next(context) {
    console.log('AlertRunner executed')
    if (context.useCase.constructor.name !== 'GetTodosQuerie') {
      alert(`${context.useCase.constructor.name} with param ${context.param}, gets this result ${context.result}`)
    }
    this.nextLink.next(context)
  }
}
