const isPlainObj = require('is-plain-obj');

module.exports = {
    tabCreated: (req, res, next) => {
        let options = {};

        if (req.method === 'GET') {
            options = req.query;
        } else if (req.method === 'POST') {
            options = req.body;
        }

        if (isPlainObj(options) && 'httpHeaders' in options && isPlainObj(options.httpHeaders)) {
            req.prerender.tab.Network.setExtraHTTPHeaders({
                headers: options.httpHeaders
            });
        }

        next();
    }
}