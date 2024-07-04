import { testRunner } from '../../testRunner'
import { number, size } from '../../../src'

export const data = 0

export const test = {
  Struct: size(number(), 1, 5),
  data: 0,

  failures: [
    {
      value: 0,
      type: 'number',
      refinement: 'size',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/size/invalid-number',
}

testRunner(test)
