# prerender-http-headers

Prerender (https://github.com/prerender/prerender) plugin that adds `httpHeaders` option for a set of headers and forwards them to puppeteer.

## Usage

In your prerender project run:
```shell
$ npm install prerender-http-headers --save
```

Then in the server.js that initializes the prerender:
```javascript
server.use(require('prerender-http-headers'));
```

### Example of requests

GET:
```shell
$ curl http://localhost:3000/render?url=https://www.example.com/&httpHeaders[x-token]=1111&httpHeaders[user]=test 
```

POST:
```shell
$ curl -XPOST -d '{
	"url": "https://www.example.com/",
	"httpHeaders": {
	    "x-token": "1111",
	    "user": "test"
	}
}' 'http://localhost:3000/render'
```



