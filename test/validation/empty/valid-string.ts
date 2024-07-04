import { Test } from '../../types'
import { string, empty } from '../../../src'

export const validStringTest: Test = {
  Struct: empty(string()),
  data: '',
  output: '',
}
