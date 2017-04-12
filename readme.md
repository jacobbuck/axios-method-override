# axios-method-override

Lets you use HTTP PATCH, PUT and DELETE in by mimicking the HTTP method with a `_method` query parameter, and an `X-HTTP-Method-Override` header.

## Usage

```
import axiosMethodOverride from 'axios-method-override';

axiosMethodOverride(axios);

var instance = axios.create();
axiosMethodOverride(instance);
```
