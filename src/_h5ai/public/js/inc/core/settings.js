modulejs.define('core/settings', ['_', 'config'], function (_, config) {

    return _.extend({}, config.options, {
        appHref: config.setup.APP_HREF,
        rootHref: config.setup.ROOT_HREF,
        version: config.setup.VERSION
    });
});