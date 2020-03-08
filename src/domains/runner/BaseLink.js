import {EmptyLink} from './EmptyLink'

export class BaseLink {
  constructor () {
    this.nextLink = new EmptyLink()
  }
  setNext(link) {
    this.nextLink = link || new EmptyLink()
    return this
  }
}
