import { testRunner } from '../../testRunner'
import { lazy, string } from '../../../src'

export const data = 3

export const test = {
  Struct: lazy(() => string()),
  data: 3,

  failures: [
    {
      value: 3,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/lazy/invalid',
}

testRunner(test)
