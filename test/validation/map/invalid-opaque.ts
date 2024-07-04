import { testRunner } from '../../testRunner'
import { map } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: map(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'map',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/map/invalid-opaque',
}

testRunner(test)
