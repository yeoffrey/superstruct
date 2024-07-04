import {Test} from '../../types'
import { partial, string, number } from '../../../src'


export const invalidPropertyTest: Test = {
 Struct: partial( {
    name: string(),
    age: number(),
    })
 data:  {
    age: 'invalid',
    }
, failures: [,
    {
    value: 'invalid',
    type: 'number',
    refinement: undefined,
    path: ['age'],
    branch: [data, data.age],
    },
    ]
}
