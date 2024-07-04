import { testRunner } from '../../testRunner'
import { number, min } from '../../../src'

export const data = -1

export const test = {
  Struct: min(number(), 0),
  data: -1,

  failures: [
    {
      value: -1,
      type: 'number',
      refinement: 'min',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/min/invalid',
}

testRunner(test)
