import { testRunner } from '../../testRunner'
import { date } from '../../../src'

export const data = new Date('invalid')

export const test = {
  Struct: date(),
  data: new Date('invalid'),

  failures: [
    {
      value: data,
      type: 'date',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/date/invalid-date',
}

testRunner(test)
