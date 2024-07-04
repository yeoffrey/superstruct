import { Test } from '../../types'
import { number, array, empty } from '../../../src'

export const validArrayTest: Test = {
  Struct: empty(array(number())),
  data: [],
  output: [],
}
