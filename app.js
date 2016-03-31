
// Globals
require('expose?Prims!prims');

// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Classes
import WriteClass from './components/write/WriteClass'

// Controllers
import LinkedInCtrl from './components/linkedIn/LinkedInCtrl'



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

        let oMenu = {
            "title": "Curriculum Vitae",
            "menu": [
                {
                    name: "app"
                },
                {
                    name: "components"
                }
            ]
        }        

        // TODO : move in module app
        // TODO : js in screens ? only templating js in screens ?
        // TODO : test automatic require, template and innerHTML depend name
        require('./screens/app/app.css');
        var template = require('./screens/app/app.html')
        var html = template( oMenu )
        document.getElementById('jsApp').innerHTML = html;

        // TODO : move in module app
        require('./screens/editor/editor.css');
        var template = require('./screens/editor/editor.html')
        var html = template( oMenu )
        document.getElementById('jsEditor').innerHTML = html;


        // const bIsTecnic = confirm('Comprenez-vous quelques à la programmation web ?');
        const bIsTecnic = false;

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