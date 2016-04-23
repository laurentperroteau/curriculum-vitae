import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
import getAsyncJson from 'myComponents/async/getAsyncJson'
    
class TreeClass extends CreateComponentClass {

    constructor( sName, sUrl ) {

        super( sName )

        this.sUrl = sUrl
    }

    load() {
        return getAsyncJson( this.sUrl )
    }

    setClickEvent() {

        const nItemS = this.nElem.querySelectorAll('.jsEventMenuItem')

        Array.from( nItemS ).forEach( ( nItem ) => {

            nItem.addEventListener('click', (e) => this.triggerItem(e), false )
        });
    }

    triggerItem( e ) {

        const nElem = e.currentTarget

        if( nElem.dataset.name !== undefined ) {

            if( nElem.dataset.isFile !== undefined ) {

                this.triggerFile( nElem )
            }
            else {
                this.triggerFolder( nElem )
            }

        }
    }

    triggerFolder( nElem ) {

        console.log( `open folder ${nElem.dataset.name}` );
    }

    triggerFile( nElem ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        console.log( `open file ${nElem.dataset.name}` );
    }
}
export default TreeClass