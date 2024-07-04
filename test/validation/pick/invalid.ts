import {Test} from '../../types'
import { pick, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['name']
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
 Struct: pick(,
 data: 'invalid',
 failures: [,
}
