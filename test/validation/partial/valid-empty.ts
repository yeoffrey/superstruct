import {Test} from '../../types'
import { partial, string, number } from '../../../src'


export const validEmptyTest: Test = {
 Struct: partial( {
    name: string(),
    age: number(),
    })
 data: {},
 output: {},
}
