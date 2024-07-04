import { testRunner } from '../../testRunner'
import { number, nullable } from '../../../src'

export const data = null

export const test = {
  Struct: nullable(number()),
  data: null,
  output: null,
  name: 'test/validation/nullable/valid-null',
}

testRunner(test)
