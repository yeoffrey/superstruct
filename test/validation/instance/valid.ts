import { Test } from '../../types'
import { instance } from '../../../src'

export const validTest: Test = {
  Struct: instance(Array),
  data: [1],
  output: [1],
}
