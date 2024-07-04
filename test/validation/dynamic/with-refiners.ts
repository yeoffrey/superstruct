import { Test } from '../../types'
import { dynamic, string, nonempty } from '../../../src'

const data = ''

export const withRefinersTest: Test = {
  Struct: dynamic(() => nonempty(string())),
  data,
  failures: [
    {
      value: data,
      type: 'string',
      refinement: 'nonempty',
      path: [],
      branch: [data],
    },
  ],
}
