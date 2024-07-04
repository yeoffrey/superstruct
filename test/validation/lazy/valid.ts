import { Test } from '../../types'
import { lazy, string } from '../../../src'

export const validTest: Test = {
  Struct: lazy(() => string()),
  data: 'two',
  output: 'two',
}
