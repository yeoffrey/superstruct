import {Test} from '../../types'
import { string, refine } from '../../../src'




export const validTest: Test = {
 Struct: refine(string(), 'email', (value) => value.includes('@')),
 data: 'name@example.com',
 output: 'name@example.com',
}
