import { testRunner } from '../../testRunner'
import { record, string, number } from '../../../src'

export const data = {
  a: 1,
  b: 2,
}

export const test = {
  Struct: record(string(), number()),

  data: {
    a: 1,
    b: 2,
  },

  output: {
    a: 1,
    b: 2,
  },

  name: 'test/validation/record/valid',
}

testRunner(test)
