import { pick } from 'lodash'
import { expect, test } from 'vitest'
import {
  assert as assertValue,
  create as createValue,
  StructError,
} from '../src'

export function testRunner(configuration: {
  name: string
  Struct?: any
  data?: any
  create?: boolean
  output?: any
  failures?: any
}): void {
  const { name, Struct, data, create, output, failures } = configuration

  test(name, () => {
    let actual
    let err

    try {
      if (create) {
        actual = createValue(data, Struct)
      } else {
        assertValue(data, Struct)
        actual = data
      }
    } catch (e) {
      if (!(e instanceof StructError)) {
        throw e
      }

      err = e
    }

    if (typeof output !== 'undefined') {
      if (err) {
        throw new Error(
          `Expected "${name}" fixture not to throw an error but it did:\n\n${err}`
        )
      }

      expect(actual).toStrictEqual(output)
    } else if (typeof failures !== 'undefined') {
      if (!err) {
        throw new Error(
          `Expected "${name}" fixture to throw an error but it did not.`
        )
      }

      const props = ['type', 'path', 'refinement', 'value', 'branch']
      const actualFailures = err
        .failures()
        .map((failure) => pick(failure, ...props))

      expect(actualFailures).toStrictEqual(failures)
      expect(pick(err, ...props)).toStrictEqual(failures[0])
    } else {
      throw new Error(
        `The "${name}" fixture did not define an \`output\` or \`failures\` export.`
      )
    }
  })
}
