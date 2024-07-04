import { testRunner } from '../../testRunner'
import { string, trimmed } from '../../../src'

export const data = false

export const test = {
  Struct: trimmed(string()),
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
  name: 'test/validation/trimmed/invalid',
}

testRunner(test)
