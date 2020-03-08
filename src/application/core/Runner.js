export class Runner {
  constructor (executorRunner, loggerRunner) {
    this.executorRunner = executorRunner
    this.loggerRunner = loggerRunner
    this.chain = this.executorRunner.setNext(this.loggerRunner)
  }

  run(useCase, param) {
    const context = { useCase: useCase, result: undefined, param: param }
    this.chain.next(context)
    return context.result
  }
}
