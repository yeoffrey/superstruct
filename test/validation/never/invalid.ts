import { Test } from '../../types'
import { never } from '../../../src'

const data = true

export const invalidTest: Test = {
  Struct: never(),
  data,
  failures: [
    {
      value: true,
      type: 'never',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
