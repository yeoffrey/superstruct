import { testRunner } from '../../testRunner'
import { omit, object, string, number } from '../../../src'

export const data = {
  name: 'john',
}

export const test = {
  Struct: omit(
    object({
      name: string(),
      age: number(),
    }),
    ['age']
  ),

  data: {
    name: 'john',
  },

  output: {
    name: 'john',
  },

  name: 'test/validation/omit/valid',
}

testRunner(test)
