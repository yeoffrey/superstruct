import { testRunner } from '../../testRunner'
import { map, string, number } from '../../../src'

export const data = new Map([
  ['a', 1],
  ['b', 2],
])

export const test = {
  Struct: map(string(), number()),

  data: new Map([
    ['a', 1],
    ['b', 2],
  ]),

  output: new Map([
    ['a', 1],
    ['b', 2],
  ]),

  name: 'test/validation/map/valid',
}

testRunner(test)
