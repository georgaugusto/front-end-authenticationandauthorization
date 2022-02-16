import axios, { AxiosError } from 'axios';

interface FailedRequest {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
}

let isRefreshing = false;
let failedRequestsQueue: FailedRequest[] = [];

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('reactauth.token')}`,
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data?.code === 'token.expired') {
        const refreshToken = localStorage.getItem('reactauth.refreshToken');
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post('/refresh', {
              refreshToken,
            })
            .then(response => {
              const { token } = response.data;

              localStorage.setItem('reactauth.token', response.data.token);
              localStorage.setItem(
                'reactauth.refreshToken',
                response.data.refreshToken,
              );

              api.defaults.headers.common.Authorization = `Bearer ${token}`;
              failedRequestsQueue.forEach(request => request.onSuccess(token));
              failedRequestsQueue = [];
            })
            .catch(err => {
              failedRequestsQueue.forEach(request => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              if (!originalConfig.headers) {
                return;
              }
              originalConfig.headers.Authorization = `Bearer ${token}`;
              resolve(api(originalConfig));
            },

            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);
