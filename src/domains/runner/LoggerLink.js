import { BaseLink } from './BaseLink'
import { AlertLink } from './AlertLink'

export class LoggerLink extends BaseLink {
  constructor(logger) {
    super()
    this.logger = logger
  }

  next(context) {
    const alertLink = new AlertLink()
    this.logger.group(context.useCase.constructor.name)
    this.logger.group('Parameters')
    this.logger.log(`${context.param ?? '-'}`)
    this.logger.groupEnd()
    this.logger.group('Result')
    this.logger.object(context.result ?? '-')
    this.logger.groupEnd()
    this.logger.groupEnd()
    this.setNext(alertLink)
    this.nextLink.next(context)
  }
}
