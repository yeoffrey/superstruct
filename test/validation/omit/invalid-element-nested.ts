import { Test } from '../../types'
import { omit, object, array, string } from '../../../src'

const data = {
  emails: ['name@example.com', false],
}

export const invalidElementNestedTest: Test = {
  Struct: omit(
    object({
      name: string(),
      emails: array(string()),
    }),
    ['name']
  ),
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
