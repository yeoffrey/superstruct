import {Test} from '../../types'
import { string, refine } from '../../../src'



  {
    value: 'invalid',
    type: 'string',
    refinement: 'email',
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: refine(string(), 'email', (value) => value.includes('@')),
 data: 'invalid',
 failures: [,
}
