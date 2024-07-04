import { testRunner } from '../../testRunner'
import { string, number, map, empty } from '../../../src'

export const data = new Map()

export const test = {
  Struct: empty(map(number(), string())),
  data: new Map(),
  output: data,
  name: 'test/validation/empty/valid-map',
}

testRunner(test)
