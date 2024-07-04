import {Test} from '../../types'
import { map, size, number, string } from '../../../src'



  {
    value: data,
    type: 'map',
    refinement: 'size',
    path: [],
    branch: [data],
  },
]

export const invalidMapTest: Test = {
 Struct: size(map(number(), string()), 1, 5),
 data: new Map(),
 failures: [,
}
