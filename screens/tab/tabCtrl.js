import TabClass from 'myScreens/tab/TabClass'

const PubSub = require('pubsub-js')

const tabCtrl = {

    init: function() {

        const oTab = {
            "tab": [
                {
                    name    : "demo.js",
                    fullPath: "demo.js",
                    active  : true
                }
            ]
        }        

        this.Tab = new TabClass('tab')

        console.log( this.Tab );
        console.log( typeof this.Tab );

        this.Tab.setData( oTab )

        this.Tab.initTemplate()

        this.Tab.openEventOnLoad()
        this.Tab.closeEventOnLoad()

        PubSub.subscribe('OPEN_TAB', this.onTabPublish )
    },

    onTabPublish: function( msg, data ) {

        if( data !== undefined ) Tab.openTab( data )
    },

    openTab: function( oTab ) {
        
        this.Tab.openTab( oTab )
    }
}
export default tabCtrl