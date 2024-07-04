import { testRunner } from '../../testRunner'
import { intersection, refine, number } from '../../../src'

const A = number()
const B = refine(number(), 'positive', (value) => value > 0)

export const data = -1

export const test = {
  Struct: intersection([A, B]),
  data: -1,

  failures: [
    {
      type: 'number',
      refinement: 'positive',
      value: -1,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/intersection/invalid-refinement',
}

testRunner(test)
