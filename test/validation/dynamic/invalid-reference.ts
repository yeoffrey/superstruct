import { Test } from '../../types'
import { assert, type, dynamic, literal, number, string } from '../../../src'

const Entity = type({
  object: string(),
})

const User = type({
  object: literal('USER'),
  username: string(),
})

const Product = type({
  object: literal('PRODUCT'),
  price: number(),
})

const map = {
  USER: User,
  PRODUCT: Product,
}

const data = {
  object: 'PRODUCT',
  price: 'Only $19.99!',
}

export const invalidReferenceTest: Test = {
  Struct: dynamic((entity) => {
    assert(entity, Entity)
    return map[entity.object]
  }),
  data,
  failures: [
    ,
    {
      value: 'Only $19.99!',
      type: 'number',
      refinement: undefined,
      path: ['price'],
      branch: [data, data.price],
    },
  ],
}
