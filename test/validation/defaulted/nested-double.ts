import { Test } from '../../types'
import { defaulted, string, object } from '../../../src'

export const nestedDoubleTest: Test = {
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
}
