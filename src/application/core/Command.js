import { UseCase } from './UseCase'

export class Command extends UseCase {
  constructor () {
    super()
    this.readonly = false
  }
}
