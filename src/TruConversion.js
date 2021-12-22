import Snippets from './Snippets'

const TruConversion = {
    dataScript: function (dataLayer) {
        const script = document.createElement('script')
        script.innerHTML = dataLayer;
        return script
    },
    truConversion: function (args) {
        const snippets = Snippets.tags(args)

        const script = () => {
            const script = document.createElement('script')
            script.innerHTML = snippets.script
            return script
        }

        const dataScript = this.dataScript(snippets.dataLayerVar)

        return {
            script,
            dataScript
        }
    },
    initialize: function ({id, scriptIdUrl}) {
        const truConversion = this.truConversion({
            id: id,
            scriptIdUrl: scriptIdUrl
        });
        document.head.appendChild(truConversion.dataScript);
        document.head.insertBefore(truConversion.script(), document.head.childNodes[0])
    },
    dataLayer: function ({dataLayer}) {
        if (window._tip) return window._tip.push(dataLayer)
        const snippets = Snippets.dataLayer(dataLayer)
        const dataScript = this.dataScript(snippets)
        document.head.insertBefore(dataScript, document.head.childNodes[0])
    }
};

module.exports = TruConversion;
