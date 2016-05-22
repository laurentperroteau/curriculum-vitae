import debug from 'myComponents/debug/debug'
import $http from 'myComponents/async/http'

import CreateScreenClass from 'myComponents/createScreen/CreateScreenClass'

const PubSub = require('pubsub-js')
    
class TreeClass extends CreateScreenClass {

    constructor( sName, sUrl ) {

        super( sName )

        this.sUrl = sUrl
    }

    load() {
        return $http( this.sUrl ).get()
    }

    setClickEvent() {

        const nItemS = this.nComponent.querySelectorAll('.jsEventMenuItem')

        Array.from( nItemS ).forEach( ( nItem ) => {

            nItem.addEventListener('click', (e) => this._triggerItem(e), false )
        });
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

        debug( `Open Folder ${nElem.dataset.name}` )
    }

    _triggerFile( nElem ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        PubSub.publish( 'OPEN_TAB', nElem.dataset )
    }
}
export default TreeClass