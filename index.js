'use strict';

var assign = require('object-assign');

module.exports = function(axios) {
  axios.interceptors.request.use(function(config) {
    var method = config.method.toUpperCase();
    if (method === 'PUT' || method === 'DELETE' || method === 'PATCH') {
      config.headers['X-HTTP-Method-Override'] = method;
      config.method = 'post';
      config.params = assign({}, config.params, { _method: method });
    }
    return config;
  });
  return axios;
};
