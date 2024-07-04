import { Test } from '../../types'
import { date } from '../../../src'

const data = new Date('invalid')

export const invalidDateTest: Test = {
  Struct: date(),
  data,
  failures: [
    {
      value: data,
      type: 'date',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
