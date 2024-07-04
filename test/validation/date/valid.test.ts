import { testRunner } from '../../testRunner'
import { date } from '../../../src'

export const data = new Date(0)

export const test = {
  Struct: date(),
  data: new Date(0),
  output: new Date(0),
  name: 'test/validation/date/valid',
}

testRunner(test)
