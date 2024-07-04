import { Test } from '../../types'
import { date } from '../../../src'

export const validTest: Test = {
  Struct: date(),
  data: new Date(0),
  output: new Date(0),
}
