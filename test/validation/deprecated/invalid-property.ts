import { Test } from '../../types'
import { deprecated, number, object } from '../../../src'

const data = {
  deprecatedKey: '42',
}

export const invalidPropertyTest: Test = {
  Struct: object({
    deprecatedKey: deprecated(number(), () => {}),
  }),
  data,
  failures: [
    ,
    {
      value: '42',
      type: 'number',
      refinement: undefined,
      path: ['deprecatedKey'],
      branch: [data, data.deprecatedKey],
    },
  ],
}
