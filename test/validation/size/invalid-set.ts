import { testRunner } from '../../testRunner'
import { set, size, number } from '../../../src'

export const data = new Set()

export const test = {
  Struct: size(set(number()), 1, 5),
  data: new Set(),

  failures: [
    {
      value: data,
      type: 'set',
      refinement: 'size',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/size/invalid-set',
}

testRunner(test)
