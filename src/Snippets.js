import warn from './utils/warn'

const Snippets = {
    tags: function ({id, scriptIdUrl, dataLayer}) {
        if (!id) warn('Id is required');
        if (!scriptIdUrl) warn('ScriptIdUrl is required');

        const script = `
                          (function(d,s,id){
                          var js, tjs = d.getElementsByTagName(s)[0];
                          if(d.getElementById(id)) { return; }
                          js = d.createElement(s); js.id = id;
                          js.async = true;
                          js.src = d.location.protocol + '//app.truconversion.com/ti-js/${scriptIdUrl}.js';
                          tjs.parentNode.insertBefore(js, tjs);
                          }(document, 'script', '${id}'));
                        `;

        const dataLayerVar = this.dataLayer(dataLayer);

        return {
            script,
            dataLayerVar
        }
    },
    dataLayer: function (dataLayer) {
        let code = `window._tip = window._tip || [];`
        if (dataLayer) {
            code += `window._tip.push(${JSON.stringify(dataLayer)})`
        }
        return code;
    }
};

module.exports = Snippets;
