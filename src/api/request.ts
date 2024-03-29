import axios from 'axios';
import { Toast } from 'vant';
import { RequestFunctionParams } from 'yapi-to-typescript';
import { v4 as uuidv4 } from 'uuid';
import { getUrlParamsByObj } from '@/utils/url-tools';

export interface Result<T> {
  data: T;
  code: number;
  message: string;
}

export interface RequestOptions {
  hideErrorToast?: boolean;
  type?: 'download' | 'upload' | 'axios';
}

// axios实例
export const axiosInstance = axios.create({
  baseURL: '/',
});

axiosInstance.interceptors.request.use((data) => {
  return data;
});

axiosInstance.interceptors.response.use((data) => {
  return data.data;
});

// 普通application/json 请求
function normalRequest<ResponseData>(
  payload: RequestFunctionParams,
  options?: RequestOptions
) {
  return new Promise<ResponseData>((resolve, reject) => {
    console.log('payload', payload);
    console.log('options', options);
    const { method, path } = payload;
    let { data } = payload;
    if (data instanceof Object) {
      data = {
        gid: uuidv4(),
        ...data,
      };
    }

    axiosInstance
      .request<ResponseData, ResponseData>({
        method,
        data,
        headers: { 'content-type': 'application/json' },
        baseURL: '/api',
        url: path,
      })
      .then((result: ResponseData) => {
        resolve(result);
      })
      .catch((e) => {
        if (!axios.isCancel(e) && options?.hideErrorToast !== true) {
          Toast.fail(e.message || '请求失败，请稍后重试');
        }

        reject(e);
      });
  });
}

// 下载
function downloadRequest<ResponseData>(payload: RequestFunctionParams) {
  return new Promise<ResponseData>(() => {
    console.log(payload);

    const { data, path } = payload;
    const paramsStr = getUrlParamsByObj(data);
    const downloadApi = `/api${path}?${paramsStr}`;
    // console.log('downloadUrl', downloadApi);
    window.open(downloadApi);
  });
}

// 公用request方法
export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options?: RequestOptions
): Promise<Result<TResponseData>> {
  if (options?.type === 'download') {
    return downloadRequest<Result<TResponseData>>(payload);
  }
  return normalRequest<Result<TResponseData>>(payload, options);
}
