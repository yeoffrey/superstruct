import { Test } from '../../types'
import { type, intersection, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })
const data = {
  a: 'a',
  b: 'invalid',
}

export const invalidTest: Test = {
  Struct: intersection([A, B]),
  data,
  failures: [
    {
      type: 'number',
      value: 'invalid',
      refinement: undefined,
      path: ['b'],
      branch: [data, data.b],
    },
  ],
}
