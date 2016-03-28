import debug from '../debug/debug'

import WriteCtrl from './WriteCtrl'

class Write {

    constructor( nOutput, bSlow ) {

        this.nOutput = nOutput
        this.iSpeed  = bSlow ? 16 : 1;
    }

    initWrite( sText ) {

        return new Promise( (resolve, reject) => {

            this._writeText( resolve, sText )
        })
    }

    _writeText( resolve, sText ) {

        debug('=> write text ')

        WriteCtrl(resolve, this.nOutput, sText, 0, this.iSpeed, true, 1)
    }
}
export default Write