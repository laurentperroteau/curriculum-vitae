import TabClass from 'myScreens/tab/TabClass'

const PubSub = require('pubsub-js')

const tabCtrl = () => {

    const oTab = {
        "tab": [
            {
                name: "app.js",
                active: true
            }
        ]
    }        

    const Tab = new TabClass('tab')

    Tab.setData( oTab )

    Tab.initTemplate()

    Tab.closeEventOnLoad()

    PubSub.subscribe('OPEN_TAB', onTabPublish )

    function onTabPublish( msg, data ) {

        if( data !== undefined ) Tab.openTab( data )
    }
}
export default tabCtrl