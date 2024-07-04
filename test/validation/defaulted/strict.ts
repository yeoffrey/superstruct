import { Test } from '../../types'
import { defaulted, string, type, number } from '../../../src'

const data = {
  version: 0,
}

export const strictTest: Test = {
  Struct: defaulted(
    type({
      title: string(),
      version: number(),
    }),
    {
      title: 'Untitled',
    },
    {
      strict: true,
    }
  ),
  data,
  failures: [
    ,
    {
      value: undefined,
      type: 'string',
      refinement: undefined,
      path: ['title'],
      branch: [data, undefined],
    },
  ],
  create: true,
}
