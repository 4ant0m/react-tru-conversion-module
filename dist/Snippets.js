'use strict';

var _warn = require('./utils/warn');

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Snippets = {
    tags: function tags(_ref) {
        var id = _ref.id,
            scriptIdUrl = _ref.scriptIdUrl,
            dataLayer = _ref.dataLayer;

        if (!id) (0, _warn2.default)('Id is required');
        if (!scriptIdUrl) (0, _warn2.default)('ScriptIdUrl is required');

        var script = '<script type="text/javascript">\n                          (function(d,s,id){\n                          var js, tjs = d.getElementsByTagName(s)[0];\n                          if(d.getElementById(id)) { return; }\n                          js = d.createElement(s); js.id = id;\n                          js.async = true;\n                          js.src = d.location.protocol + \'//app.truconversion.com/ti-js/' + scriptIdUrl + '.js\';\n                          tjs.parentNode.insertBefore(js, tjs);\n                          }(document, \'script\', ' + id + '} ));\n                        </script>';

        var dataLayerVar = this.dataLayer(dataLayer);

        return {
            script: script,
            dataLayerVar: dataLayerVar
        };
    },
    dataLayer: function dataLayer(_dataLayer) {
        var code = 'window._tip = window._tip || [];';
        if (_dataLayer) {
            code += 'window._tip.push(' + JSON.stringify(_dataLayer) + ')';
        }
        return code;
    }
};

module.exports = Snippets;