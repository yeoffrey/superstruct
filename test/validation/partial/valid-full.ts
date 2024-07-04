import {Test} from '../../types'
import { partial, string, number } from '../../../src'


export const validFullTest: Test = {
 Struct: partial( {
    name: string(),
    age: number(),
    })
 data:  {
    name: 'john',
    age: 42,
    }
, output:  {
    name: 'john',
    age: 42,
    }
,}
