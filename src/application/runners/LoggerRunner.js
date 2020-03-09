import { BaseRunner } from './BaseRunner'
import { AlertRunner } from './AlertRunner'

export class LoggerRunner extends BaseRunner {
  constructor(logger) {
    super()
    this.logger = logger
  }

  next(context) {
    console.log('LoggerRunner executed')
    const alertRunner = new AlertRunner()
    this.logger.group(context.useCase.constructor.name)
    this.logger.group('Parameters')
    this.logger.log(`${context.param ?? '-'}`)
    this.logger.groupEnd()
    this.logger.group('Result')
    this.logger.object(context.result ?? '-')
    this.logger.groupEnd()
    this.logger.groupEnd()
    this.setNext(alertRunner)
    this.nextLink.next(context)
  }
}
