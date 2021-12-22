'use strict';

var _Snippets = require('./Snippets');

var _Snippets2 = _interopRequireDefault(_Snippets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TruConversion = {
    dataScript: function dataScript(dataLayer) {
        var script = document.createElement('script');
        script.innerHTML = dataLayer;
        return script;
    },
    truConversion: function truConversion(args) {
        var snippets = _Snippets2.default.tags(args);

        var script = function script() {
            var script = document.createElement('script');
            script.innerHTML = snippets.script;
            return script;
        };

        var dataScript = this.dataScript(snippets.dataLayerVar);

        return {
            script: script,
            dataScript: dataScript
        };
    },
    initialize: function initialize(_ref) {
        var id = _ref.id,
            scriptIdUrl = _ref.scriptIdUrl;

        var truConversion = this.truConversion({
            id: id,
            scriptIdUrl: scriptIdUrl
        });
        document.head.appendChild(truConversion.dataScript);
        document.head.insertBefore(truConversion.script(), document.head.childNodes[0]);
    },
    dataLayer: function dataLayer(_ref2) {
        var _dataLayer = _ref2.dataLayer;

        if (window._tip) return window._tip.push(_dataLayer);
        var snippets = _Snippets2.default.dataLayer(_dataLayer);
        var dataScript = this.dataScript(snippets);
        document.head.insertBefore(dataScript, document.head.childNodes[0]);
    }
};

module.exports = TruConversion;