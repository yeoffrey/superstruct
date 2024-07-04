import { testRunner } from '../../testRunner'
import { number, nullable } from '../../../src'

export const data = 42

export const test = {
  Struct: nullable(number()),
  data: 42,
  output: 42,
  name: 'test/validation/nullable/valid-defined',
}

testRunner(test)
