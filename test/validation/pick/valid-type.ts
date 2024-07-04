import { testRunner } from '../../testRunner'
import { number, pick, string, type } from '../../../src'

export const data = {
  name: 'john',
  unknownProperty: true,
}

export const test = {
  Struct: pick(
    type({
      name: string(),
      age: number(),
    }),
    ['name']
  ),

  data: {
    name: 'john',
    unknownProperty: true,
  },

  output: {
    name: 'john',
    unknownProperty: true,
  },

  name: 'test/validation/pick/valid-type',
}

testRunner(test)
