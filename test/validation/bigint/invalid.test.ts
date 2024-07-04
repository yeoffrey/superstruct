import { testRunner } from '../../testRunner'
import { bigint } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: bigint(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'bigint',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/bigint/invalid',
}

testRunner(test)
