import TabClass from 'myScreens/tab/TabClass'

const PubSub = require('pubsub-js')

const tabCtrl = () => {

    const oTab = {
        "tab": [
            {
                name: "app.js",
                active: true
            },
            {
                name: "test.css",
                active: false
            },
            {
                name: "log.js",
                active: false
            }
        ]
    }        

    const Tab = new TabClass('tab')

    Tab.setData( oTab )

    Tab.initTemplate()

    Tab.closeEventOnLoad()

    PubSub.subscribe('TAB', onTabPublish )

    function onTabPublish( msg, data ) {

        if( data !== undefined ) Tab.openTab( data )
    }
}
export default tabCtrl