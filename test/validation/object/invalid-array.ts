import { testRunner } from '../../testRunner'
import { object } from '../../../src'

export const data = []

export const test = {
  Struct: object(),
  data: [],

  failures: [
    {
      value: [],
      type: 'object',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/object/invalid-array',
}

testRunner(test)
