import { Test } from '../../types'
import { func } from '../../../src'

const data = function () {}

export const validTest: Test = {
  Struct: func(),
  data,
  output: data,
}
