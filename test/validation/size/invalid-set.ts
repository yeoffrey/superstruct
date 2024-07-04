import {Test} from '../../types'
import { set, size, number } from '../../../src'



  {
    value: data,
    type: 'set',
    refinement: 'size',
    path: [],
    branch: [data],
  },
]

export const invalidSetTest: Test = {
 Struct: size(set(number()), 1, 5),
 data: new Set(),
 failures: [,
}
