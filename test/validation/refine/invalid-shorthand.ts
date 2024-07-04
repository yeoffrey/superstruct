import {Test} from '../../types'
import { number, refine } from '../../../src'

  number(),
  'positive',
  (v) => v > 0 || 'Number was not positive!'
)


  {
    value: -1,
    type: 'number',
    refinement: 'positive',
    path: [],
    branch: [data],
  },
]

export const invalidShorthandTest: Test = {
 Struct: refine(,
 data: -1,
 failures: [,
}
