import { testRunner } from '../../testRunner'
import { date } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: date(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'date',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/date/invalid',
}

testRunner(test)
