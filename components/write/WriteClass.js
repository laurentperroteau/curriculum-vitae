import log from 'myComponents/log/log'
import writeChar from './writeChar';

class WriteClass {

    constructor( nOutput, bSlow ) {

        this.nOutput = nOutput
        this.iSpeed = bSlow ? 16 : 1
        this.bPaused = false
        this.bIsWritting = false
    }

    init( sText ) {

        return new Promise( (resolve, reject) => {

            this._startWritting( resolve, sText, this.nOutput, this.iSpeed )
        })
    }

    stop() {
        this.bPaused = true
    }

    isWritting() {
        return this.bIsWritting
    }

    _startWritting( resolve, sText, nOutput, iSpeed ) {

        const self = this

        log('Start writting text ')

        this._runWrite( resolve, sText, 0, 1)
    }

    _runWrite( resolve, sNewText, index, charsPerInterval )  {

        const self = this

        // Write a character or multiple characters to the buffer.
        const chars = sNewText.slice( index, index + charsPerInterval )

        index += charsPerInterval;

        writeChar.simple( this.nOutput, chars )

        Prism.highlightAll()

        const endOfSentence = /[\.\?\!]\s$/
        const comma         = /\D[\,]\s$/
        const endOfBlock    = /[^\/]\n\n$/
        const endOfLine     = /[^\/]\n$/
        const openMustache  = /[\{!]\s$/

        // Schedule another write.
        if ( !this.bPaused && index < sNewText.length ) {

            this.bIsWritting = true

            let thisInterval = this.iSpeed
            const thisSlice = sNewText.slice(index - 2, index + 1);
            // let thisWords = sNewText.slice(index - 10, index + 20);

            // if( comma.test( thisSlice ) ) thisInterval = interval * 30

            if( endOfBlock.test( thisSlice ) ) thisInterval = this.iSpeed * 50

            if ( endOfLine.test(thisSlice) && !openMustache.test(thisSlice) ) {

                thisInterval = this.iSpeed * 50;  

                // Ensure we stay scrolled to the bottom.
                this.nOutput.scrollTop = this.nOutput.scrollHeight
            } 

            // if( endOfSentence.test( thisSlice ) ) thisInterval = this.iSpeed * 70
    
            // Wait specific delay
            setTimeout(function() {

                self._runWrite( resolve, sNewText, index, charsPerInterval )
            }, thisInterval);
        }
        else {
            this.bIsWritting = false
            
            log('Writting end')

            return resolve();
        }
    }
}
export default WriteClass