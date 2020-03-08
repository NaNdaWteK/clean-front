import { Runner } from './Runner'
import { ExecutorRunner } from '../runners/ExecutorRunner'
import { LoggerRunner } from '../runners/LoggerRunner'
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger'

export class UseCase {
  execute(param){
    const consoleLogger = new ConsoleLogger(window)
    const ExecutorRunner = new ExecutorRunner()
    const LoggerRunner = new LoggerRunner(consoleLogger)
    const runners = new Runner(ExecutorRunner, LoggerRunner)
    return runner.run(this, param)
  }
}
