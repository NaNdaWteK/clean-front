export class Runner {
  constructor (executorLink, loggerLink) {
    this.executorLink = executorLink
    this.loggerLink = loggerLink
    this.chain = this.executorLink.setNext(this.loggerLink)
  }

  run(useCase, param) {
    const context = { useCase: useCase, result: undefined, param: param }
    this.chain.next(context)
    return context.result
  }
}
