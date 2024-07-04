import { testRunner } from '../../testRunner'
import { number, partial, string, type } from '../../../src'

export const data = {
  name: 'john',
  unknownProperty: true,
}

export const test = {
  Struct: partial(
    type({
      name: string(),
      age: number(),
    })
  ),

  data: {
    name: 'john',
    unknownProperty: true,
  },

  output: {
    name: 'john',
    unknownProperty: true,
  },

  name: 'test/validation/partial/valid-type',
}

testRunner(test)
