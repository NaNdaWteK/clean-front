export class EmptyRunner {
  setNext() {
    return this
  }

  next() {
    console.log('EmptyRunner executed')
  }
}
