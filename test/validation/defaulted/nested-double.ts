import { testRunner } from '../../testRunner'
import { defaulted, string, object } from '../../../src'

export const data = {}

export const test = {
  Struct: object({
    book: defaulted(
      object({
        title: defaulted(string(), 'Untitled'),
      }),
      {}
    ),
  }),

  data: {},

  output: {
    book: {
      title: 'Untitled',
    },
  },

  create: true,
  name: 'test/validation/defaulted/nested-double',
}

testRunner(test)
