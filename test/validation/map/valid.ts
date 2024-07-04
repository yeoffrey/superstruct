import { Test } from '../../types'
import { map, string, number } from '../../../src'

const data = new Map([
  ['a', 1],
  ['b', 2],
])

export const validTest: Test = {
  Struct: map(string(), number()),
  data,
  output: data,
}
