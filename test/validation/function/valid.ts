import { testRunner } from '../../testRunner'
import { func } from '../../../src'

export const data = function () {}

export const test = {
  Struct: func(),
  data: function () {},
  output: data,
  name: 'test/validation/function/valid',
}

testRunner(test)
