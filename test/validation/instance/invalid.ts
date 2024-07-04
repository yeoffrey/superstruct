import { testRunner } from '../../testRunner'
import { instance } from '../../../src'

export const data = false

export const test = {
  Struct: instance(Array),
  data: false,

  failures: [
    {
      value: false,
      type: 'instance',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/instance/invalid',
}

testRunner(test)
