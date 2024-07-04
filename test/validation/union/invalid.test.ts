import { testRunner } from '../../testRunner'
import { type, union, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

export const data = {
  b: 'invalid',
}

export const test = {
  Struct: union([A, B]),

  data: {
    b: 'invalid',
  },

  failures: [
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

  name: 'test/validation/union/invalid',
}

testRunner(test)
