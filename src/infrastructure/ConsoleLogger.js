export class ConsoleLogger {
  constructor(window) {
    this.window = window
  }

  object(object) {
    this.window.console.dir(object)
  }

  groupEnd() {
    this.window.console.groupEnd()
  }

  info(message) {
    this.window.console.info(message)
  }

  group(label) {
    this.window.console.group(label)
  }

  log(message) {
    this.window.console.log(message)
  }
}
