import { UseCase } from './UseCase'

export class Query extends UseCase {
  constructor () {
    super()
    this.readonly = true
  }
}
