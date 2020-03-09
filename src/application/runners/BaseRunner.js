import {EmptyRunner} from './EmptyRunner'

export class BaseRunner {
  constructor () {
    this.nextLink = new EmptyRunner()
  }
  setNext(link) {
    this.nextLink = link || this.nextLink
    return this
  }
}
