import {Test} from '../../types'
import { partial, string, number } from '../../../src'


export const invalidTest: Test = {
 Struct: partial( {
    name: string(),
    age: number(),
    })
 data: 'invalid',
 failures: [,
    {
    value: 'invalid',
    type: 'object',
    refinement: undefined,
    path: [],
    branch: [data],
    },
    ]
}
