// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Controllers
import linkedInCtrl from './components/linkedIn/LinkedInCtrl'
// import WriteCtrl from './components/write/WriteCtrl'

// let Promise = require('bluebird'); // => tester




import writeChar from './components/write/writeChar'

let Promise = require('bluebird');


//Start app
debug('------------------------------------------------')

if( !supportPromise() ) {

    log( 
        'Compatibilité navigateur', 
        'non support des <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank">Promise</a>' 
    )
}
else {

    // Document ready
    (function() {

        debug('Document ready')
        // linkedInCtrl();

        startAnimation();
    })();
}

// TODO : j'ai été obligé de déplacé sinon async n'était pas setter à la fonction
// bluebird à peut-être besoin d'être charger dans app.js

async function WriteCtrl(nOutput, sNewText, index, interval, mirrorToStyle, charsPerInterval) {

    console.log( 'coucou' );

    // Write a character or multiple characters to the buffer.
    let chars = sNewText.slice(index, index + charsPerInterval);
    index += charsPerInterval;

    writeChar.simple(nOutput, chars);

    // TODO
    // Prism.highlightAll();

    let endOfSentence = /[\.\?\!]\s$/;
    let comma = /\D[\,]\s$/;
    let endOfBlock = /[^\/]\n\n$/;
    let endOfLine = /[^\/]\n$/;
    let openMustache = /[\{!]\s$/;

    // TODO : mettre des repères, caché en CSS ??? si possible 
    // => quand détection, afficher info voulue, changer de tab etc...
    
    let paused = false // pas utile pour moi

    // Schedule another write.
    if (index < sNewText.length) {

        console.log( interval );

        let thisInterval = interval;
        let thisSlice = sNewText.slice(index - 2, index + 1);
        let thisWords = sNewText.slice(index - 10, index + 20);

        if (comma.test(thisSlice)) {

            // console.log( 'si virgule' );
            // thisInterval = interval * 30;  
        } 

        if (endOfBlock.test(thisSlice)) {

            // console.log( 'si deux saut de ligne' );
            thisInterval = interval * 50;  
        } 

        if (endOfLine.test(thisSlice)) {

            // console.log( 'si fin de ligne' );
            thisInterval = interval * 50;  

              // Ensure we stay scrolled to the bottom.
              window.scrollTo(0, document.body.scrollHeight);
        } 

        if (endOfSentence.test(thisSlice)) {

            // console.log( 'si point, fin d une phrase' );
            thisInterval = interval * 70;
        }

        // console.log( thisWords );
        if ( thisWords.indexOf('writeTo') !== -1 ) {

            // Attention, la fonction est lancé 24 fois
            console.log( '=> Lancer fonction writeTo' );
        }

        do {
            await Promise.delay(thisInterval);
        } while(paused);

        return WriteCtrl(nOutput, sNewText, index, interval, mirrorToStyle, charsPerInterval);
    }
}


async function startAnimation() {

    debug('Start animation')

    let speed = 16;

    const nOutput = document.getElementById('style-text');

    let exemple = require('raw!./content/exemple.txt')

    try {
        await WriteCtrl(nOutput, '// text d introduction et apres recherche information\n', 0, speed, true, 1);
        await WriteCtrl(nOutput, exemple, 0, speed, true, 1);
        // WriteCtrl(nOutput, './', 0, speed, true, 1);
        // await resultObjectToString();
        // await writeTo(nOutput, resultObjectToStringVar, 0, speed, true, 1);
        // await writeTo(nOutput, styleText[0], 0, speed, true, 1);
        // await setEndOfContenteditable(nOutput)
        // await writeTo(workEl, workText, 0, speed, false, 1);
        // await writeTo(nOutput, styleText[1], 0, speed, true, 1);
        // createWorkBox();
        // await Promise.delay(1000);
        // await writeTo(nOutput, styleText[2], 0, speed, true, 1);
        // await writeTo(pgpEl, pgpText, 0, speed, false, 32);
        // await writeTo(nOutput, styleText[3], 0, speed, true, 1);
      }
    // Flow control straight from the ghettos of Milwaukee
    catch(e) {
        if (e.message === "SKIP IT") {
            surprisinglyShortAttentionSpan();
        } 
        else {
        throw e;
        }
    }
}