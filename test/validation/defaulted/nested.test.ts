import { testRunner } from '../../testRunner'
import { defaulted, string, object } from '../../../src'

export const data = {}

export const test = {
  Struct: object({
    title: defaulted(string(), 'Untitled'),
  }),

  data: {},

  output: {
    title: 'Untitled',
  },

  create: true,
  name: 'test/validation/defaulted/nested',
}

testRunner(test)
