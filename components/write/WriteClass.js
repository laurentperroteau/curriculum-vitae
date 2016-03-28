import debug from '../debug/debug'

import WriteCtrl from './WriteCtrl'

class Write {

    constructor(nOutput, sText) {

        this.nOutput = nOutput
        this.iSpeed   = 1
        this.sText    = sText
    }

    setPromise() {

        return new Promise( (resolve, reject) => {

            this._writeText( resolve, reject )
        })
    }

    _writeText( resolve, reject ) {

        debug('=> write text ')

        WriteCtrl(resolve, this.nOutput, this.sText, 0, this.iSpeed, true, 1)
    }
}
export default Write