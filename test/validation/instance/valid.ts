import { testRunner } from '../../testRunner'
import { instance } from '../../../src'

export const data = [1]

export const test = {
  Struct: instance(Array),
  data: [1],
  output: [1],
  name: 'test/validation/instance/valid',
}

testRunner(test)
