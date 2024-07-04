import { testRunner } from '../../testRunner'
import { defaulted, string, object, number } from '../../../src'

export const data = {
  version: 0,
}

export const test = {
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
  name: 'test/validation/defaulted/mixin',
}

testRunner(test)
