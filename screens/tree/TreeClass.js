import log from 'myComponents/log/log'
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

            nItem.addEventListener('click', (e) => TreeClass._triggerItem(e), false )
        });
    }

    static _triggerItem( e ) {

        const nElem = e.currentTarget

        // Info : rivets.js convert class in lowercase
        if( nElem.classList.contains('jsisfolder') ) {

            TreeClass._triggerFolder( nElem )
        }
        else {
            TreeClass._triggerFile( nElem )
        }
    }

    static _triggerFolder( nElem ) {

        nElem.classList.toggle('jsIsOpen')

        log( `Open Folder ${nElem.dataset.name}` )
    }

    static _triggerFile( nElem ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        PubSub.publish( 'OPEN_TAB', nElem.dataset )
    }
}
export default TreeClass