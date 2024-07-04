import { testRunner } from '../../testRunner'
import { array } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: array(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'array',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/array/invalid-opaque',
}

testRunner(test)
