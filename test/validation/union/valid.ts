import { Test } from '../../types'
import { type, union, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

export const validTest: Test = {
  Struct: union([A, B]),
  data: {
    a: 'a',
  },
  output: {
    a: 'a',
  },
}
