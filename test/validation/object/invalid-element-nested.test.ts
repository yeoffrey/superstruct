import { testRunner } from '../../testRunner'
import { object, array, string } from '../../../src'

export const data = {
  name: 'john',
  emails: ['name@example.com', false],
}

export const test = {
  Struct: object({
    name: string(),
    emails: array(string()),
  }),

  data: {
    name: 'john',
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

  name: 'test/validation/object/invalid-element-nested',
}

testRunner(test)
