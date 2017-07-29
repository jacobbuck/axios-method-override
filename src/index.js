const axiosMethodOverride = axios => {
  axios.interceptors.request.use(config => {
    const method = config.method.toUpperCase();
    if (method === "PUT" || method === "DELETE" || method === "PATCH") {
      config.headers = {
        ...config.headers,
        ["X-HTTP-Method-Override"]: method,
      };
      config.method = "post";
      config.params = {
        ...config.params,
        _method: method,
      };
    }
    return config;
  });
  return axios;
};

export default axiosMethodOverride;
