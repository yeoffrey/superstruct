import { Test } from '../../types'
import { deprecated, number } from '../../../src'

const data = '42'

export const invalidTest: Test = {
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
}
