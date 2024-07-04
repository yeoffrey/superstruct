import { map } from '../../../src'

export const data = new Map([
  ['a', 1],
  [2, true],
] as any)

export const test = {
  Struct: map(),
  data,
  output: data,
}
