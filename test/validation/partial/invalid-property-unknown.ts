import {Test} from '../../types'
import { partial, string, number } from '../../../src'


export const invalidPropertyUnknownTest: Test = {
 Struct: partial( {
    name: string(),
    age: number(),
    })
 data:  {
    name: 'john',
    unknown: true,
    }
, failures: [,
    {
    value: true,
    type: 'never',
    refinement: undefined,
    path: ['unknown'],
    branch: [data, data.unknown],
    },
    ]
}
