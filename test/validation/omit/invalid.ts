import {Test} from '../../types'
import { omit, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['age']
)


  {
    value: 'invalid',
    type: 'object',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: omit(,
 data: 'invalid',
 failures: [,
}
