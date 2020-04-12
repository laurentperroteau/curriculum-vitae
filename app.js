
// Globals
require('expose?config!config')
require('expose?Prims!prims')
require('expose?Markdown!markdown')

// Functions
import supportPromise from 'myService/support/promise'
import log from 'myService/log/log'

// Controllers
import appCtrl from 'myComponent/app/appCtrl'
import treeCtrl from 'myComponent/tree/treeCtrl'
import tabCtrl from 'myComponent/tab/tabCtrl'
import editorCtrl from 'myComponent/editor/editorCtrl'
import gutterCtrl from 'myComponent/gutter/gutterCtrl'

//Start app
if( !supportPromise() ) {

    log( 
        'Compatibilité navigateur', 
        'non support des <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank">Promise</a>' 
    )
}
else {

    (function() {

        log('Document ready')

        // Extending Prims : add class .keyword-nameOfKeyword
        Prism.hooks.add('wrap', function(env) {
            if (env.type !== "keyword") {
                return
            }
            env.classes.push('keyword-' + env.content)
        });

        appCtrl()
        treeCtrl()
        tabCtrl.init()
        editorCtrl()
        gutterCtrl()
    })()
}