import { testRunner } from '../../testRunner'
import { record, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: record(string(), number()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'record',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/record/invalid',
}

testRunner(test)
