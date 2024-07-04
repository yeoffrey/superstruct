import { Test } from '../../types'
import { object, string, pattern, refine } from '../../../src'

const Section = pattern(string(), /^\d+(\.\d+)*$/)

export const validReferentialTest: Test = {
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
    subsection: '1.1',
  },
  output: {
    section: '1',
    subsection: '1.1',
  },
}
