import { testRunner } from '../../testRunner'
import { number, min } from '../../../src'

export const data = 0

export const test = {
  Struct: min(number(), 0, { exclusive: true }),
  data: 0,

  failures: [
    {
      value: 0,
      type: 'number',
      refinement: 'min',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/min/invalid-exclusive',
}

testRunner(test)
