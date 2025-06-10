import type { Method } from 'axios';

export const METHODS: Record<string, Method> = {
  put: 'put',
  get: 'get',
  post: 'post',
  patch: 'patch',
  delete: 'delete'
};
