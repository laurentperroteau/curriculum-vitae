import debug from '../debug/debug'
import writeChar from './writeChar';

module.exports = function WriteCtrl(resolve, nOutput, sNewText, index, interval, mirrorToStyle, charsPerInterval) {

    // Write a character or multiple characters to the buffer.
    const chars = sNewText.slice(index, index + charsPerInterval);

    index += charsPerInterval;

    writeChar.simple(nOutput, chars);

    Prism.highlightAll();

    const endOfSentence = /[\.\?\!]\s$/;
    const comma = /\D[\,]\s$/;
    const endOfBlock = /[^\/]\n\n$/;
    const endOfLine = /[^\/]\n$/;
    const openMustache = /[\{!]\s$/;

    // TODO : mettre des repères, caché en CSS ??? si possible 
    // => quand détection, afficher info voulue, changer de tab etc...
    
    // Schedule another write.
    if (index < sNewText.length) {

        let thisInterval = interval;
        const thisSlice = sNewText.slice(index - 2, index + 1);
        // let thisWords = sNewText.slice(index - 10, index + 20);

        if (comma.test(thisSlice)) {

            // console.log( 'si virgule' );
            // thisInterval = interval * 30;  
        } 

        if (endOfBlock.test(thisSlice)) {

            // console.log( 'si deux saut de ligne' );
            thisInterval = interval * 50;  
        } 

        // TODO: ne pas ralentir non plus quand html
        if ( endOfLine.test(thisSlice) && !openMustache.test(thisSlice) ) {

            // console.log( 'si fin de ligne' );
            thisInterval = interval * 50;  

            // Ensure we stay scrolled to the bottom.
            window.scrollTo(0, document.body.scrollHeight);
        } 

        /*if (endOfSentence.test(thisSlice)) {

            // console.log( 'si point, fin d une phrase' );
            thisInterval = interval * 70;
        }*/

        // console.log( thisWords );
        /*if ( thisWords.indexOf('writeTo') !== -1 ) {

            // Attention, la fonction est lancé 24 fois
            console.log( '=> Lancer fonction writeTo' );
        }*/

        // Wait specific delay
        setTimeout(function() {

            return WriteCtrl(resolve, nOutput, sNewText, index, interval, mirrorToStyle, charsPerInterval);
        }, thisInterval);
    }
    else {
        debug('=> write end')

        return resolve();
    }
}