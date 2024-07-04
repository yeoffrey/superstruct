import { Test } from '../../types'
import { object } from '../../../src'

const data: any = []

export const invalidArrayTest: Test = {
  Struct: object(),
  data,
  failures: [
    {
      value: [],
      type: 'object',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
