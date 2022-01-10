/**
 * 将对象转换为url参数 如 {a:1,b:2} 转换成 a=1&b=2
 * @param params 参数对象
 * @returns
 */

interface ParamsObj {
  [key: string]: unknown;
}
export const getUrlParamsByObj = (params: ParamsObj): string => {
  let paramsStr = '';
  Object.keys(params).forEach((key) => {
    if (paramsStr === '') {
      paramsStr = `${key}=${
        params[key] || params[key] === 0 ? params[key] : ''
      }`;
    } else {
      paramsStr += `&${key}=${
        params[key] || params[key] === 0 ? params[key] : ''
      }`;
    }
  });
  return paramsStr;
};

export const a = 1;
