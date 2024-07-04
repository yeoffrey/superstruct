import { Test } from '../../types'
import { object, string } from '../../../src'

export const validNestedTest: Test = {
  Struct: object({
    name: string(),
    address: object({
      street: string(),
      city: string(),
    }),
  }),
  data: {
    name: 'john',
    address: {
      street: '123 Fake St',
      city: 'Springfield',
    },
  },
  output: {
    name: 'john',
    address: {
      street: '123 Fake St',
      city: 'Springfield',
    },
  },
}
