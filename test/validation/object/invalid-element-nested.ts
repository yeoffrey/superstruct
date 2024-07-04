import { Test } from '../../types'
import { object, array, string } from '../../../src'

const data = {
  name: 'john',
  emails: ['name@example.com', false],
}

export const invalidElementNestedTest: Test = {
  Struct: object({
    name: string(),
    emails: array(string()),
  }),
  data,
  failures: [
    ,
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: ['emails', 1],
      branch: [data, data.emails, data.emails[1]],
    },
  ],
}
