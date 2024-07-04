import { Test } from '../../types'
import { object } from '../../../src'

export const validOpaqueTest: Test = {
  Struct: object(),
  data: {
    a: 'string',
    b: 42,
  },
  output: {
    a: 'string',
    b: 42,
  },
}
