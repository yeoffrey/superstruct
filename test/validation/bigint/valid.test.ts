import { testRunner } from '../../testRunner'
import { bigint } from '../../../src'

export const data = 542n

export const test = {
  Struct: bigint(),
  data: 542n,
  output: 542n,
  name: 'test/validation/bigint/valid',
}

testRunner(test)
