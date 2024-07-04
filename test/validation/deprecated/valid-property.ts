import { Test } from '../../types'
import { type, number, deprecated, any } from '../../../src'

export const validPropertyTest: Test = {
  Struct: type({
    name: deprecated(any(), () => {}),
    age: number(),
  }),
  data: {
    age: 42,
  },
  output: {
    age: 42,
  },
}
