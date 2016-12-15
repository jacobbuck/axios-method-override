module.exports = function (config) {
	var method = config.method.toUpperCase();
	if (method === 'PUT' || method === 'DELETE' || method === 'PATCH') {
		config.headers['X-HTTP-Method-Override'] = method;
		config.method = 'post';
		config.params._method = method;
	}
	return config;
};
