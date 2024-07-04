import { testRunner } from '../../testRunner'
import { pick, object, array, string } from '../../../src'

export const data = {
  emails: ['name@example.com', false],
}

export const test = {
  Struct: pick(
    object({
      name: string(),
      emails: array(string()),
    }),
    ['emails']
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

  name: 'test/validation/pick/invalid-element-nested',
}

testRunner(test)
