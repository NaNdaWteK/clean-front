import { Runner } from '../runner/Runner'
import { ExecutorLink } from '../runner/ExecutorLink'
import { LoggerLink } from '../runner/LoggerLink'
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger'

export class UseCase {
  execute(param){
    const consoleLogger = new ConsoleLogger(window)
    const executorLink = new ExecutorLink()
    const loggerLink = new LoggerLink(consoleLogger)
    const runner = new Runner(executorLink, loggerLink)
    return runner.run(this, param)
  }
}
