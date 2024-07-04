import { testRunner } from '../../testRunner'
import { string, number, coerce } from '../../../src'

export const data = false

export const test = {
  Struct: coerce(string(), number(), (x) => 'known'),
  data: false,

  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  create: true,
  name: 'test/validation/coerce/condition-not-met',
}

testRunner(test)
