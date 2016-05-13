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

        this.WriteClass.stop()

        this.nOutputCtn.innerHTML = ''
    }

    // Array tabs method tested
    // ------------------------
    
    _getRawText( sPathFile ) {

        console.log( `GET ./tree/${sPathFile}.txt` );

        getAsync(`./tree/${sPathFile}.txt`).then( (data) => {
                
            this._displayOutput( data )
        })
    }

    _displayOutput( sOutput ) {

        // TODO: stop writting
        this.nOutputCtn.innerHTML = sOutput

        debug(`REMOVE code, no more file !`)
    }


}
export default EditorClass