import { testRunner } from '../../testRunner'
import { dynamic, string } from '../../../src'

export const data = 3

export const test = {
  Struct: dynamic(() => string()),
  data: 3,

  failures: [
    {
      value: 3,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/dynamic/invalid',
}

testRunner(test)
