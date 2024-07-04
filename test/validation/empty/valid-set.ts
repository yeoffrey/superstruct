import { Test } from '../../types'
import { number, set, empty } from '../../../src'

const data = new Set()

export const validSetTest: Test = {
  Struct: empty(set(number())),
  data,
  output: data,
}
