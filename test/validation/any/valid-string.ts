import { Test } from '../../types'
import { any } from '../../../src'

export const validStringTest: Test = {
  Struct: any(),
  data: 'valid',
  output: 'valid',
}
