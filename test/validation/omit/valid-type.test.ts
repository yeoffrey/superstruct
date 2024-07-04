import { testRunner } from '../../testRunner'
import { omit, type, string, number } from '../../../src'

export const data = {
  name: 'john',
  unknownProperty: 'unknown',
}

export const test = {
  Struct: omit(
    type({
      name: string(),
      age: number(),
    }),
    ['age']
  ),

  data: {
    name: 'john',
    unknownProperty: 'unknown',
  },

  output: {
    name: 'john',
    unknownProperty: 'unknown',
  },

  name: 'test/validation/omit/valid-type',
}

testRunner(test)
