import {Test} from '../../types'
import { partial, string, number } from '../../../src'


export const validPartialTest: Test = {
 Struct: partial( {
    name: string(),
    age: number(),
    })
 data:  {
    name: 'john',
    }
, output:  {
    name: 'john',
    }
,}
