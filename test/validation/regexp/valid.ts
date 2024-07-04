import { Test } from '../../types'
import { regexp } from '../../../src'

export const validTest: Test = {
  Struct: regexp(),
  data: /./,
  output: data,
}
