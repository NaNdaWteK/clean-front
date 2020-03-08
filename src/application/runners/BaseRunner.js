import {EmptyRunner} from './EmptyRunner'

export class BaseRunner {
  constructor () {
    this.nextLink = new EmptyRunner()
  }
  setNext(link) {
    this.nextLink = link || new EmptyRunner()
    return this
  }
}
