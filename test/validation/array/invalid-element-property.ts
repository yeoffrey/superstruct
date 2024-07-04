import { Test } from '../../types'
import { array, object, string } from '../../../src'

const data = [{ id: '1' }, { id: false }, { id: '3' }]

export const invalidElementPropertyTest: Test = {
  Struct: array(object({ id: string() })),
  data,
  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: [1, 'id'],
      branch: [data, data[1], data[1].id],
    },
  ],
}
