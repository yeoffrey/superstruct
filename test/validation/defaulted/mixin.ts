import { Test } from '../../types'
import { defaulted, string, object, number } from '../../../src'

export const mixinTest: Test = {
  Struct: defaulted(
    object({
      title: string(),
      version: number(),
    }),
    {
      title: 'Untitled',
    }
  ),
  data: {
    version: 0,
  },
  output: {
    title: 'Untitled',
    version: 0,
  },
  create: true,
}
