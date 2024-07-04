import {Test} from '../../types'
import { pick, object, array, string } from '../../../src'

  object({
    name: string(),
    emails: array(string()),
  }),
  ['emails']
)


export const invalidElementNestedTest: Test = {
 Struct: pick(,
 data:  {
    emails: ['name@example.com', false],
    }
, failures: [,
    {
    value: false,
    type: 'string',
    refinement: undefined,
    path: ['emails', 1],
    branch: [data, data.emails, data.emails[1]],
    },
    ]
}
