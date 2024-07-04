import { testRunner } from '../../testRunner'
import { number, refine } from '../../../src'

export const data = -1

export const test = {
  Struct: refine(
    number(),
    'positive',
    (v) => v > 0 || 'Number was not positive!'
  ),

  data: -1,

  failures: [
    {
      value: -1,
      type: 'number',
      refinement: 'positive',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/refine/invalid-shorthand',
}

testRunner(test)
