import log from 'myService/log/log'
import $http from 'myService/async/http'

import CreateComponent from 'myUtil/CreateComponent'

const PubSub = require('pubsub-js')
    
class TreeComponent extends CreateComponent {

    constructor( sName, sUrl ) {

        super( sName )

        this.sUrl = sUrl
    }

    load() {
        return $http( this.sUrl ).get()
    }

    _triggerItem( e ) {

        const nElem = e.currentTarget

        // Info : rivets.js convert class in lowercase
        if( nElem.classList.contains('jsisfolder') ) {

            this._triggerFolder( nElem )
        }
        else {
            this._triggerFile( nElem )
        }
    }

    _triggerFolder( nElem ) {

        nElem.classList.toggle('jsIsOpen')

        log( `Open Folder ${nElem.dataset.name}` )
    }

    _triggerFile( nElem ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        PubSub.publish( 'OPEN_TAB', nElem.dataset )
    }
}
export default TreeComponent