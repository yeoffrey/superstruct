import { testRunner } from '../../testRunner'
import { string, refine } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: refine(string(), 'email', (value) => value.includes('@')),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'string',
      refinement: 'email',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/refine/invalid',
}

testRunner(test)
