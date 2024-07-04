import { Test } from '../../types'
import { string, number, map, empty } from '../../../src'

const data = new Map()

export const validMapTest: Test = {
  Struct: empty(map(number(), string())),
  data,
  output: data,
}
