// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Controllers
import linkedInCtrl from './components/linkedIn/LinkedInCtrl'
import WriteCtrl from './components/write/WriteCtrl'



// import writeChar from './components/write/writeChar'


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


function startAnimation() {

    debug('Start animation')

    let speed = 16;

    const nOutput = document.getElementById('style-text');

    let exemple = require('raw!./content/exemple.txt')

    WriteCtrl(nOutput, '// text d introduction et apres recherche information\n', 0, speed, true, 1);
    WriteCtrl(nOutput, exemple, 0, speed, true, 1);
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