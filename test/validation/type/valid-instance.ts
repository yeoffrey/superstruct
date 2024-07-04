import { Test } from '../../types'
import { type, string } from '../../../src'

class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const data = new Person('john')

export const validInstanceTest: Test = {
  Struct: type({
    name: string(),
  }),
  data,
  output: data,
}
