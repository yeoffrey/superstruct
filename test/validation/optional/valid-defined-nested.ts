import {Test} from '../../types'
import { type, string, number, optional } from '../../../src'


export const validDefinedNestedTest: Test = {
 Struct: type( {
    name: optional(string()),
    age: number(),
    })
 data:  {
    name: 'Jill',
    age: 42,
    }
, output:  {
    name: 'Jill',
    age: 42,
    }
,}
