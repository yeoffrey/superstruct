import { testRunner } from '../../testRunner'
import { number, nullable } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: nullable(number()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/nullable/invalid',
}

testRunner(test)
