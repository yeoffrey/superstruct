import { testRunner } from '../../testRunner'
import { regexp } from '../../../src'

export const data = /./

export const test = {
  Struct: regexp(),
  data: /./,
  output: data,
  name: 'test/validation/regexp/valid',
}

testRunner(test)
