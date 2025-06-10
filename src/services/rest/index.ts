import { METHODS } from './constants';
import { request } from './request';

export const rest = {
  get<TResponse>(url: string): Promise<TResponse> {
    return request<TResponse>(METHODS.get, { url });
  },
  delete<TResponse>(url: string): Promise<TResponse> {
    return request<TResponse>(METHODS.delete, { url });
  },
  post<TResponse, TData>(url: string, data?: TData): Promise<TResponse> {
    return request<TResponse, TData>(METHODS.post, { url, data });
  }
};
