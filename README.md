# axios-method-override

Lets you use HTTP PATCH, PUT and DELETE in by mimicking the HTTP method with a `_method` query parameter, and an `X-HTTP-Method-Override` header.

## Usage

```
import methodOverride from 'axios-method-override';

axios.interceptors.request.use(methodOverride);

var instance = axios.create();
instance.interceptors.request.use(methodOverride);
```

See [Interceptors](https://github.com/mzabriskie/axios/blob/master/README.md#interceptors).
