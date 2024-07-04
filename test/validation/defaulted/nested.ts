import { Test } from '../../types'
import { defaulted, string, object } from '../../../src'

export const nestedTest: Test = {
  Struct: object({
    title: defaulted(string(), 'Untitled'),
  }),
  data: {},
  output: {
    title: 'Untitled',
  },
  create: true,
}
