import { testRunner } from '../../testRunner'
import { bigint } from '../../../src'

export const data = 3

export const test = {
  Struct: bigint(),
  data: 3,

  failures: [
    {
      value: 3,
      type: 'bigint',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/bigint/invalid-number',
}

testRunner(test)
