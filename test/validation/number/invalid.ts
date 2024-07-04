import { testRunner } from '../../testRunner'
import { number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: number(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/number/invalid',
}

testRunner(test)
