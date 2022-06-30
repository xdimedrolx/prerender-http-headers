const { isPlainObject } = require('./utils');

module.exports = {
    tabCreated: (req, res, next) => {
        let options = {};

        if (req.method === 'GET') {
            options = req.query;
        } else if (req.method === 'POST') {
            options = req.body;
        }

        if (isPlainObject(options) && isPlainObject(options.httpHeaders)) {
            req.prerender.tab.Network.setExtraHTTPHeaders({
                headers: options.httpHeaders
            });
        }

        next();
    }
}