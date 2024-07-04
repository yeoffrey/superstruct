import { testRunner } from '../../testRunner'
import { deprecated, string } from '../../../src'

export const data = null

export const test = {
  Struct: deprecated(string(), () => {}),
  data: null,

  failures: [
    {
      value: null,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/deprecated/invalid-null',
}

testRunner(test)
