import { testRunner } from '../../testRunner'
import { partial, string, number } from '../../../src'

export const data = {}

export const test = {
  Struct: partial({
    name: string(),
    age: number(),
  }),

  data: {},
  output: {},
  name: 'test/validation/partial/valid-empty',
}

testRunner(test)
