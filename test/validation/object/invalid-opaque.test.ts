import { testRunner } from '../../testRunner'
import { object } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: object(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'object',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/object/invalid-opaque',
}

testRunner(test)
