import {Test} from '../../types'
import { omit, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['name']
)


export const invalidPropertyTest: Test = {
 Struct: omit(,
 data:  {
    age: 'invalid',
    }
, failures: [,
    {
    value: 'invalid',
    type: 'number',
    refinement: undefined,
    path: ['age'],
    branch: [data, data.age],
    },
    ]
}
