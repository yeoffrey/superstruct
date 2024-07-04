import { Test } from '../../types'
import { type } from '../../../src'

const data: any = []

export const invalidArrayTest: Test = {
  Struct: type({}),
  data,
  failures: [
    {
      value: [],
      type: 'type',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
