import { Test } from '../../types'
import { dynamic, string } from '../../../src'

export const validTest: Test = {
  Struct: dynamic(() => string()),
  data: 'valid',
  output: 'valid',
}
