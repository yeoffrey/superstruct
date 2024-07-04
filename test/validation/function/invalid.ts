import { Test } from '../../types'
import { func } from '../../../src'

const data = false

export const invalidTest: Test = {
  Struct: func(),
  data,
  failures: [
    {
      value: false,
      type: 'func',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
