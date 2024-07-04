import { testRunner } from '../../testRunner'
import { defaulted, string, type, number } from '../../../src'

export const data = {
  version: 0,
}

export const test = {
  Struct: defaulted(
    type({
      title: string(),
      version: number(),
    }),
    {
      title: 'Untitled',
    },
    {
      strict: true,
    }
  ),

  data: {
    version: 0,
  },

  failures: [
    {
      value: undefined,
      type: 'string',
      refinement: undefined,
      path: ['title'],
      branch: [data, undefined],
    },
  ],

  create: true,
  name: 'test/validation/defaulted/strict',
}

testRunner(test)
