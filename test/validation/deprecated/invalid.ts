import { testRunner } from '../../testRunner'
import { deprecated, number } from '../../../src'

export const data = '42'

export const test = {
  Struct: deprecated(number(), () => {}),
  data: '42',

  failures: [
    {
      value: '42',
      type: 'number',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/deprecated/invalid',
}

testRunner(test)
