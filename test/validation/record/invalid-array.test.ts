import { testRunner } from '../../testRunner'
import { record, string, number } from '../../../src'

export const data = []

export const test = {
  Struct: record(string(), number()),
  data: [],

  failures: [
    {
      value: [],
      type: 'record',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/record/invalid-array',
}

testRunner(test)
