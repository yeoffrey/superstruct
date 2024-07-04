import { testRunner } from '../../testRunner'
import { map, size, number, string } from '../../../src'

export const data = new Map()

export const test = {
  Struct: size(map(number(), string()), 1, 5),
  data: new Map(),

  failures: [
    {
      value: data,
      type: 'map',
      refinement: 'size',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/size/invalid-map',
}

testRunner(test)
