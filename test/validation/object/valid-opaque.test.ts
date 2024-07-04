import { testRunner } from '../../testRunner'
import { object } from '../../../src'

export const data = {
  a: 'string',
  b: 42,
}

export const test = {
  Struct: object(),

  data: {
    a: 'string',
    b: 42,
  },

  output: {
    a: 'string',
    b: 42,
  },

  name: 'test/validation/object/valid-opaque',
}

testRunner(test)
