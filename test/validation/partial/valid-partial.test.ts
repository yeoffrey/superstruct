import { testRunner } from '../../testRunner'
import { partial, string, number } from '../../../src'

export const data = {
  name: 'john',
}

export const test = {
  Struct: partial({
    name: string(),
    age: number(),
  }),

  data: {
    name: 'john',
  },

  output: {
    name: 'john',
  },

  name: 'test/validation/partial/valid-partial',
}

testRunner(test)
