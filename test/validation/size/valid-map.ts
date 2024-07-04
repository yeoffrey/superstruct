import {Test} from '../../types'
import { string, number, map, size } from '../../../src'


  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
])


export const validMapTest: Test = {
 Struct: size(map(number(), string()), 1, 5),
 data: new Map([,
 output: data,
}
