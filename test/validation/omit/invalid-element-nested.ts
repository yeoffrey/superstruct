import { testRunner } from '../../testRunner'
import { omit, object, array, string } from '../../../src'

export const data = {
  emails: ['name@example.com', false],
}

export const test = {
  Struct: omit(
    object({
      name: string(),
      emails: array(string()),
    }),
    ['name']
  ),

  data: {
    emails: ['name@example.com', false],
  },

  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: ['emails', 1],
      branch: [data, data.emails, data.emails[1]],
    },
  ],

  name: 'test/validation/omit/invalid-element-nested',
}

testRunner(test)
