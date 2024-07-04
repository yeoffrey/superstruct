import { Test } from '../../types'
import { string } from '../../../src'

export const validTest: Test = {
  Struct: string(),
  data: 'valid',
  output: 'valid',
}
