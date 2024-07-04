import { Test } from '../../types'
import { string, number, coerce } from '../../../src'

const data = false

export const conditionNotMetTest: Test = {
  Struct: coerce(string(), number(), (x) => 'known'),
  data,
  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
  create: true,
}
