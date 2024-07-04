import { testRunner } from '../../testRunner'
import { number, max } from '../../../src'

export const data = 0

export const test = {
  Struct: max(number(), 0, { exclusive: true }),
  data: 0,

  failures: [
    {
      value: 0,
      type: 'number',
      refinement: 'max',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/max/invalid-exclusive',
}

testRunner(test)
