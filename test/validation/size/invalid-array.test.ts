import { testRunner } from '../../testRunner'
import { array, size, number } from '../../../src'

export const data = []

export const test = {
  Struct: size(array(number()), 1, 5),
  data: [],

  failures: [
    {
      value: [],
      type: 'array',
      refinement: 'size',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/size/invalid-array',
}

testRunner(test)
