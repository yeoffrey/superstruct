import { testRunner } from '../../testRunner'
import { never } from '../../../src'

export const data = true

export const test = {
  Struct: never(),
  data: true,

  failures: [
    {
      value: true,
      type: 'never',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/never/invalid',
}

testRunner(test)
