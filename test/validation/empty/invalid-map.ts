import { Test } from '../../types'
import { map, empty, number, string } from '../../../src'

const data = new Map([[1, 'a']])

export const invalidMapTest: Test = {
  Struct: empty(map(number(), string())),
  data,
  failures: [
    {
      value: data,
      type: 'map',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],
}
