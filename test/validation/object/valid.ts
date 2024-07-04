import { Test } from '../../types'
import { object, string, number } from '../../../src'

export const validTest: Test = {
  Struct: object({
    name: string(),
    age: number(),
  }),
  data: {
    name: 'john',
    age: 42,
  },
  output: {
    name: 'john',
    age: 42,
  },
}
