import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
import getAsync from 'myComponents/async/getAsync'

const PubSub = require('pubsub-js')
    
class TreeClass extends CreateComponentClass {

    constructor( sName, sUrl ) {

        super( sName )

        this.sUrl = sUrl
    }

    load() {
        return getAsync( this.sUrl, true )
    }

    setClickEvent() {

        const nItemS = this.nComponent.querySelectorAll('.jsEventMenuItem')

        Array.from( nItemS ).forEach( ( nItem ) => {

            nItem.addEventListener('click', (e) => this._triggerItem(e), false )
        });
    }

    _triggerItem( e ) {

        const nElem = e.currentTarget

        if( nElem.classList.contains('jsIsFolder') ) {

            this._triggerFolder( nElem )
        }
        else {
            this._triggerFile( nElem )
        }
    }

    _triggerFolder( nElem ) {

        console.log( `open folder ${nElem.dataset.name}` )
    }

    _triggerFile( nElem ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        PubSub.publish( 'OPEN_TAB', nElem.dataset )
    }
}
export default TreeClass