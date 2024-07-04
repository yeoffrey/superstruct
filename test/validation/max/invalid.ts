import { testRunner } from '../../testRunner'
import { number, max } from '../../../src'

export const data = 1

export const test = {
  Struct: max(number(), 0),
  data: 1,

  failures: [
    {
      value: 1,
      type: 'number',
      refinement: 'max',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/max/invalid',
}

testRunner(test)
