import { testRunner } from '../../testRunner'
import { literal } from '../../../src'

export const data = false

export const test = {
  Struct: literal(42),
  data: false,

  failures: [
    {
      value: false,
      type: 'literal',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/literal/invalid',
}

testRunner(test)
