/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://yapi.smart-xwork.cn/mock/71010' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = 'data' as any

/**
 * 接口 [get测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083186) 的 **请求类型**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `GET /testGet`
 * @更新时间 `2022-01-10 16:33:35`
 */
export interface TestGetRequest {
  id: string
}

/**
 * 接口 [get测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083186) 的 **返回类型**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `GET /testGet`
 * @更新时间 `2022-01-10 16:33:35`
 */
export interface TestGetResponse {
  list: {
    age: number
    name: string
    id: number
  }[]
}

/**
 * 接口 [get测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083186) 的 **请求配置的类型**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `GET /testGet`
 * @更新时间 `2022-01-10 16:33:35`
 */
type TestGetRequestConfig = Readonly<
  RequestConfig<'http://yapi.smart-xwork.cn/mock/71010', '', '', '/testGet', 'data', string, 'id', false>
>

/**
 * 接口 [get测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083186) 的 **请求配置**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `GET /testGet`
 * @更新时间 `2022-01-10 16:33:35`
 */
const testGetRequestConfig: TestGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/testGet',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'testGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [get测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083186) 的 **请求函数**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `GET /testGet`
 * @更新时间 `2022-01-10 16:33:35`
 */
export const testGet = /*#__PURE__*/ (requestData: TestGetRequest, ...args: UserRequestRestArgs) => {
  return request<TestGetResponse>(prepare(testGetRequestConfig, requestData), ...args)
}

testGet.requestConfig = testGetRequestConfig

/**
 * 接口 [post测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083339) 的 **请求类型**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `POST /testPost/{id}`
 * @更新时间 `2022-01-12 11:15:19`
 */
export interface TestPostIdRequest {
  name: string
  id1: number
  id: string
}

/**
 * 接口 [post测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083339) 的 **返回类型**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `POST /testPost/{id}`
 * @更新时间 `2022-01-12 11:15:19`
 */
export interface TestPostIdResponse {
  list: {
    name: string
    id: number
  }[]
}

/**
 * 接口 [post测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083339) 的 **请求配置的类型**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `POST /testPost/{id}`
 * @更新时间 `2022-01-12 11:15:19`
 */
type TestPostIdRequestConfig = Readonly<
  RequestConfig<'http://yapi.smart-xwork.cn/mock/71010', '', '', '/testPost/{id}', 'data', 'id', string, false>
>

/**
 * 接口 [post测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083339) 的 **请求配置**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `POST /testPost/{id}`
 * @更新时间 `2022-01-12 11:15:19`
 */
const testPostIdRequestConfig: TestPostIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/testPost/{id}',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'testPostId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [post测试接口1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1083339) 的 **请求函数**
 *
 * @分类 [test↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_253527)
 * @请求头 `POST /testPost/{id}`
 * @更新时间 `2022-01-12 11:15:19`
 */
export const testPostId = /*#__PURE__*/ (requestData: TestPostIdRequest, ...args: UserRequestRestArgs) => {
  return request<TestPostIdResponse>(prepare(testPostIdRequestConfig, requestData), ...args)
}

testPostId.requestConfig = testPostIdRequestConfig

/* prettier-ignore-end */
