import { Test } from '../../types'
import { instance } from '../../../src'

const data = false

export const invalidTest: Test = {
  Struct: instance(Array),
  data,
  failures: [
    {
      value: false,
      type: 'instance',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
