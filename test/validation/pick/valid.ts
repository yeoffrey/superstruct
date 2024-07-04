import { testRunner } from '../../testRunner'
import { pick, object, string, number } from '../../../src'

export const data = {
  name: 'john',
}

export const test = {
  Struct: pick(
    object({
      name: string(),
      age: number(),
    }),
    ['name']
  ),

  data: {
    name: 'john',
  },

  output: {
    name: 'john',
  },

  name: 'test/validation/pick/valid',
}

testRunner(test)
