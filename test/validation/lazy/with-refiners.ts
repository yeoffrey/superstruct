import { Test } from '../../types'
import { lazy, nonempty, string } from '../../../src'

const data = ''

export const withRefinersTest: Test = {
  Struct: lazy(() => nonempty(string())),
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
