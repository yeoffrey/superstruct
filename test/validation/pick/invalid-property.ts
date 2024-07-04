import {Test} from '../../types'
import { pick, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['age']
)


export const invalidPropertyTest: Test = {
 Struct: pick(,
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
