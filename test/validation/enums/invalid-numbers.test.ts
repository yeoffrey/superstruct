import { testRunner } from '../../testRunner'
import { enums } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: enums([1, 2]),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'enums',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/enums/invalid-numbers',
}

testRunner(test)
