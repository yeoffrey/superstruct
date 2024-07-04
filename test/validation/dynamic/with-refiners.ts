import { testRunner } from '../../testRunner'
import { dynamic, string, nonempty } from '../../../src'

export const data = ''

export const test = {
  Struct: dynamic(() => nonempty(string())),
  data: '',

  failures: [
    {
      value: data,
      type: 'string',
      refinement: 'nonempty',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/dynamic/with-refiners',
}

testRunner(test)
