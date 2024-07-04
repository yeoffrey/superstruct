import { testRunner } from '../../testRunner'
import { tuple, string, number } from '../../../src'

export const data = ['A', 1]

export const test = {
  Struct: tuple([string(), number()]),
  data: ['A', 1],
  output: ['A', 1],
  name: 'test/validation/tuple/valid',
}

testRunner(test)
