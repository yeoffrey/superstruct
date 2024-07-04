import { Test } from '../../types'
import { type, union, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

const data = {
  b: 'invalid',
}

export const invalidTest: Test = {
  Struct: union([A, B]),
  data,
  failures: [
    ,
    {
      value: { b: 'invalid' },
      type: 'union',
      refinement: undefined,
      path: [],
      branch: [data],
    },
    {
      value: undefined,
      type: 'string',
      refinement: undefined,
      path: ['a'],
      branch: [data, undefined],
    },
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: ['b'],
      branch: [data, data.b],
    },
  ],
}
