import {Test} from '../../types'
import { pick, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['name']
)


export const invalidPropertyUnknownTest: Test = {
 Struct: pick(,
 data:  {
    name: 'john',
    age: 42,
    }
, failures: [,
    {
    value: 42,
    type: 'never',
    refinement: undefined,
    path: ['age'],
    branch: [data, data.age],
    },
    ]
}
