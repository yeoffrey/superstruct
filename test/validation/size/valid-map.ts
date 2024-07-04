import { testRunner } from '../../testRunner'
import { string, number, map, size } from '../../../src'

export const data = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
])

export const test = {
  Struct: size(map(number(), string()), 1, 5),

  data: new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]),

  output: data,
  name: 'test/validation/size/valid-map',
}

testRunner(test)
