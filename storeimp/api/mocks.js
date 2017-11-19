import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {users} from './fixtures/users'
import {products} from './fixtures/products'
import {posts} from './fixtures/posts'
import {categories} from './fixtures/categories'
import {specialservices} from './fixtures/specialservices'
import {products1} from './fixtures/products1'
import {patients} from './fixtures/patients'

const mock = new MockAdapter(axios, {delayResponse: 300})

mock
  .onGet('/users').reply(config => [200, users])
  .onGet('/products').reply(config => [200, products])
  .onGet('/posts').reply(config => [200, posts])
  .onGet('/catagories').reply(config => [200, categories])
  .onGet('/specialservices').reply(config => [200, specialservices])
  .onGet('/products1').reply(config => [200, products1])
  .onGet('/patients').reply(config => [200, patients])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()

export default 'mock'
