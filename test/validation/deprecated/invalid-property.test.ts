import { testRunner } from '../../testRunner'
import { deprecated, number, object } from '../../../src'

export const data = {
  deprecatedKey: '42',
}

export const test = {
  Struct: object({
    deprecatedKey: deprecated(number(), () => {}),
  }),

  data: {
    deprecatedKey: '42',
  },

  failures: [
    {
      value: '42',
      type: 'number',
      refinement: undefined,
      path: ['deprecatedKey'],
      branch: [data, data.deprecatedKey],
    },
  ],

  name: 'test/validation/deprecated/invalid-property',
}

testRunner(test)
