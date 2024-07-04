import {Test} from '../../types'
import { type, string, number, optional } from '../../../src'


export const validUndefinedNestedTest: Test = {
 Struct: type( {
    name: optional(string()),
    age: number(),
    })
 data:  {
    age: 42,
    }
, output:  {
    age: 42,
    }
,}
