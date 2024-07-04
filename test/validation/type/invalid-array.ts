import { testRunner } from '../../testRunner'
import { type } from '../../../src'

export const data = []

export const test = {
  Struct: type({}),
  data: [],

  failures: [
    {
      value: [],
      type: 'type',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/type/invalid-array',
}

testRunner(test)
