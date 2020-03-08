import { Runner } from './Runner'
import { ExecutorRunner } from '../runners/ExecutorRunner'
import { LoggerRunner } from '../runners/LoggerRunner'
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger'

export class UseCase {
  execute(param){
    const consoleLogger = new ConsoleLogger(window)
    const executorRunner = new ExecutorRunner()
    const loggerRunner = new LoggerRunner(consoleLogger)
    const runner = new Runner(executorRunner, loggerRunner)
    return runner.run(this, param)
  }
}
