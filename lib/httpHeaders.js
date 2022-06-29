const url = require('url');

const isObject = (x) => {
    return typeof x === 'object' && x !== null;
}

module.exports = {
    tabCreated: (req, res, next) => {
        let options = {};

        if (req.method === 'GET') {
            options = req.query;
        } else if (req.method === 'POST') {
            options = req.body;
        }

        if (isObject(options) && 'httpHeaders' in options && isObject(options.httpHeaders)) {
            req.prerender.tab.Network.setExtraHTTPHeaders({
                headers: options.httpHeaders
            });
        }

        next();
    }
}