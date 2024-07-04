import { testRunner } from '../../testRunner'
import { partial, object, string, number } from '../../../src'

export const data = {
  name: 'john',
}

export const test = {
  Struct: partial(
    object({
      name: string(),
      age: number(),
    })
  ),

  data: {
    name: 'john',
  },

  output: {
    name: 'john',
  },

  name: 'test/validation/partial/composed',
}

testRunner(test)
