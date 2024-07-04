import {Test} from '../../types'
import { number, size } from '../../../src'



  {
    value: 0,
    type: 'number',
    refinement: 'size',
    path: [],
    branch: [data],
  },
]

export const invalidNumberTest: Test = {
 Struct: size(number(), 1, 5),
 data: 0,
 failures: [,
}
