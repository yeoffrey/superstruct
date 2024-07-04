import { testRunner } from '../../testRunner'
import { object, string, pattern, refine } from '../../../src'

const Section = pattern(string(), /^\d+(\.\d+)*$/)

export const data = {
  section: '1',
  subsection: '2.1',
}

export const test = {
  Struct: object({
    section: Section,
    subsection: refine(Section, 'Subsection', (value, ctx) => {
      const { branch } = ctx
      const parent = branch[0]
      return value.startsWith(`${parent.section}.`)
    }),
  }),

  data: {
    section: '1',
    subsection: '2.1',
  },

  failures: [
    {
      value: '2.1',
      type: 'string',
      refinement: 'Subsection',
      path: ['subsection'],
      branch: [data, data.subsection],
    },
  ],

  name: 'test/validation/object/invalid-referential',
}

testRunner(test)
