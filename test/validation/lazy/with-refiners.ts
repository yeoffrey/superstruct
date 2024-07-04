import { testRunner } from '../../testRunner'
import { lazy, nonempty, string } from '../../../src'

export const data = ''

export const test = {
  Struct: lazy(() => nonempty(string())),
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

  name: 'test/validation/lazy/with-refiners',
}

testRunner(test)
