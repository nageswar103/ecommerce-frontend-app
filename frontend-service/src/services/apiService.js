import axiosInstance from '../axiosInstance';

const api = {
  get: (path) => axiosInstance.get(path).then((res) => res.data),
  post: (path, data) => axiosInstance.post(path, data).then((res) => res.data),
  put: (path, data) => axiosInstance.put(path, data).then((res) => res.data),
  delete: (path) => axiosInstance.delete(path).then((res) => res.data),
};

export default api;
