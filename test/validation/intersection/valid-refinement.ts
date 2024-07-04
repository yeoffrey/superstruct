import { Test } from '../../types'
import { intersection, refine, number } from '../../../src'

const A = number()
const B = refine(number(), 'positive', (value) => value > 0)

export const validRefinementTest: Test = {
  Struct: intersection([A, B]),
  data: 1,
  output: 1,
}
