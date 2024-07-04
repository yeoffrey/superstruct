import {Test} from '../../types'
import { omit, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['age']
)


export const invalidPropertyUnknownTest: Test = {
 Struct: omit(,
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
