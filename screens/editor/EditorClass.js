import getAsync from 'myComponents/async/getAsync'

const PubSub = require('pubsub-js')

import debug from 'myComponents/debug/debug'
import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
import WriteClass from 'myComponents/write/WriteClass'

    
class EditorClass extends CreateComponentClass {

    constructor( sName ) {

        super( sName )

        this.sName = sName
        this.bIsTecnic = false
        this.nOutputCtn = null
    }

    initOutpupCtn( sId ) {

        this.nOutputCtn = document.getElementById( sId )

        this.WriteClass = new WriteClass( this.nOutputCtn, this.bIsTecnic )
    }

    initWrite( sCode ) {

        return this.WriteClass.init( sCode )
    }

    showOutput( sFileName ) {

        this._getRawText( sFileName )
    }

    removeOutput() {

        const self = this

        this.WriteClass.stop()

        setTimeout(function() {
            self.nOutputCtn.innerHTML = ''
        }, 100);
    }

    // Array tabs method tested
    // ------------------------
    
    _getRawText( sPathFile ) {

        debug( `GET ./tree/${sPathFile}.txt` );

        getAsync(`./tree/${sPathFile}.txt`).then( (data) => {
                
            this._displayOutput( data )
        })
    }

    _displayOutput( sOutput ) {

        if( this.WriteClass.isWritting ) {

            this.WriteClass.stop()
        }

        this.nOutputCtn.innerHTML = sOutput

        Prism.highlightAll()

        debug(`SHOW new fille, highlight then`)
    }
}
export default EditorClass