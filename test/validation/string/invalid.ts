import { testRunner } from '../../testRunner'
import { string } from '../../../src'

export const data = false

export const test = {
  Struct: string(),
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

  name: 'test/validation/string/invalid',
}

testRunner(test)
