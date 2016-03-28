
// Globals
require('expose?Prims!prims');

// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Controllers
import linkedInCtrl from './components/linkedIn/LinkedInCtrl'

import WriteClass from './components/write/WriteClass'
// import WriteCtrl from './components/write/WriteCtrl'

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

    (function() {

        debug('Document ready')

        linkedInCtrl()

        // const bIsTecnic = confirm('Comprenez-vous quelques à la programmation web ?');
        const bIsTecnic = false;

        const nOutput = document.getElementById('style-text')

        const exemple = require('raw!./content/exemple.txt')
        const exemple2 = require('raw!./content/exemple2.txt')

        const write = new WriteClass( nOutput, bIsTecnic )

        const writingExemple = write.initWrite( exemple )

        writingExemple.then( () => {

            const writingExemple2 = write.initWrite( exemple2 )

            writingExemple2.then( () => {

                console.log( 'ok' );
            })
        })

        /*
            TODO: version simplifier
         write.initWrite( exemple ).then( () => {

            write.initWrite( exemple2 ).then( () => {

                console.log( 'ok' );
            })
        })*/

    })();
}