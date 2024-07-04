import { testRunner } from '../../testRunner'
import { func } from '../../../src'

export const data = false

export const test = {
  Struct: func(),
  data: false,

  failures: [
    {
      value: false,
      type: 'func',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/function/invalid',
}

testRunner(test)
