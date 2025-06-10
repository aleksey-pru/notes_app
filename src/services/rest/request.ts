import { type Method } from 'axios';

import instance from './instance';
import { type TRestParams } from './types';

export async function request<TResponse, TData = undefined>(
  method: Method,
  { url, data }: TRestParams<TData>
): Promise<TResponse> {
  const errorList: { message: string }[] = [];

  try {
    const { data: receivedData } = await instance({
      url,
      method,
      data: JSON.stringify(data)
    });

    const { payload, success, messages } = receivedData;

    if (success === false) {
      errorList.push(...messages);

      throw Error();
    }

    return payload ?? receivedData;
  } catch (error) {
    console.error(error);
    return Promise.reject(errorList);
  }
}
