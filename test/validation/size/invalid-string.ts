import {Test} from '../../types'
import { string, size } from '../../../src'



  {
    value: '',
    type: 'string',
    refinement: 'size',
    path: [],
    branch: [data],
  },
]

export const invalidStringTest: Test = {
 Struct: size(string(), 1, 5),
 data: '',
 failures: [,
}
