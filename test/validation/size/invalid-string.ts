import { testRunner } from '../../testRunner'
import { string, size } from '../../../src'

export const data = ''

export const test = {
  Struct: size(string(), 1, 5),
  data: '',

  failures: [
    {
      value: '',
      type: 'string',
      refinement: 'size',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/size/invalid-string',
}

testRunner(test)
