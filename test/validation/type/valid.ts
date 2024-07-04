import { Test } from '../../types'
import { type, string, number } from '../../../src'

const data = {
  name: 'john',
  age: 42,
}

export const validTest: Test = {
  Struct: type({
    name: string(),
    age: number(),
  }),
  data,
  output: data,
}
