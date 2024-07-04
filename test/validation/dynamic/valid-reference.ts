import { Test } from '../../types'
import { assert, type, dynamic, literal, string, number } from '../../../src'

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

export const validReferenceTest: Test = {
  Struct: dynamic((entity) => {
    assert(entity, Entity)
    return map[entity.object]
  }),
  data: {
    object: 'PRODUCT',
    price: 1999,
  },
  output: {
    object: 'PRODUCT',
    price: 1999,
  },
}
