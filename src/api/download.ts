/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { Method, RequestBodyType, ResponseBodyType, RequestConfig, RequestFunctionRestArgs, FileData, prepare } from 'yapi-to-typescript'
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

const mockUrl_0_0_0_1 = 'http://yapi.smart-xwork.cn/mock/71010' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = 'data' as any

/**
 * 接口 [downloadFile1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1737380) 的 **请求类型**
 *
 * @分类 [download↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_383537)
 * @请求头 `GET /downloadFile1`
 * @更新时间 `2022-01-10 17:15:29`
 */
export interface DownloadFile1Request {
  id: string
  name: string
}

/**
 * 接口 [downloadFile1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1737380) 的 **返回类型**
 *
 * @分类 [download↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_383537)
 * @请求头 `GET /downloadFile1`
 * @更新时间 `2022-01-10 17:15:29`
 */
export interface DownloadFile1Response {}

/**
 * 接口 [downloadFile1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1737380) 的 **请求配置的类型**
 *
 * @分类 [download↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_383537)
 * @请求头 `GET /downloadFile1`
 * @更新时间 `2022-01-10 17:15:29`
 */
type DownloadFile1RequestConfig = Readonly<
  RequestConfig<'http://yapi.smart-xwork.cn/mock/71010', '', '', '/downloadFile1', 'data', string, 'id' | 'name', false>
>

/**
 * 接口 [downloadFile1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1737380) 的 **请求配置**
 *
 * @分类 [download↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_383537)
 * @请求头 `GET /downloadFile1`
 * @更新时间 `2022-01-10 17:15:29`
 */
const downloadFile1RequestConfig: DownloadFile1RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/downloadFile1',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['id', 'name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'downloadFile1',
  extraInfo: {},
}

/**
 * 接口 [downloadFile1↗](http://yapi.smart-xwork.cn/project/71010/interface/api/1737380) 的 **请求函数**
 *
 * @分类 [download↗](http://yapi.smart-xwork.cn/project/71010/interface/api/cat_383537)
 * @请求头 `GET /downloadFile1`
 * @更新时间 `2022-01-10 17:15:29`
 */
export const downloadFile1 = /*#__PURE__*/ (requestData: DownloadFile1Request, ...args: UserRequestRestArgs) => {
  return request<DownloadFile1Response>(prepare(downloadFile1RequestConfig, requestData), ...args)
}

downloadFile1.requestConfig = downloadFile1RequestConfig

/* prettier-ignore-end */
