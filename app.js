
// Globals
require('expose?Prims!prims');
require('expose?Markdown!markdown');

// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Controllers
import LinkedInCtrl from './components/linkedIn/LinkedInCtrl'

import appCtrl from './screens/app/appCtrl'
import treeCtrl from './screens/tree/treeCtrl'
import tabCtrl from './screens/tab/tabCtrl'
import editorCtrl from './screens/editor/editorCtrl'
import gutterCtrl from './screens/gutter/gutterCtrl'

import test from './exemple/export'

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

        // Extending Prims : add class .keyword-nameOfKeyword
        Prism.hooks.add('wrap', function(env) {
            if (env.type !== "keyword") {
                return;
            }
            env.classes.push('keyword-' + env.content);
        });

        appCtrl()
        treeCtrl()
        tabCtrl.init()
        editorCtrl()
        gutterCtrl()

        // return false;

        // const bIsTecnic = confirm('Comprenez-vous quelques à la programmation web ?');
        /*const bIsTecnic = false;

        const nOutput = document.getElementById('jsCodeContent')

        const exemple = require('raw!./content/exemple.txt')
        const exemple2 = require('raw!./content/exemple2.txt')

        const write = new WriteClass( nOutput, bIsTecnic )

        const writingExemple = write.initWrite( exemple )

        writingExemple.then( () => {

            const writingExemple2 = write.initWrite( exemple2 )

            writingExemple2.then( () => {

                LinkedInCtrl()
            })
        })*/

        /*
            TODO: version simplifier
         write.initWrite( exemple ).then( () => {

            write.initWrite( exemple2 ).then( () => {

                console.log( 'ok' );
            })
        })*/

    })();
}