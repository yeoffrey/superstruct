import { Test } from '../../types'
import { intersection, refine, number } from '../../../src'

const A = number()
const B = refine(number(), 'positive', (value) => value > 0)
const data = -1

export const invalidRefinementTest: Test = {
  Struct: intersection([A, B]),
  data,
  failures: [
    {
      type: 'number',
      refinement: 'positive',
      value: data,
      path: [],
      branch: [data],
    },
  ],
}
