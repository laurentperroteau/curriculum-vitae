
// Globals
require('expose?Prims!prims');
require('expose?Markdown!markdown');

// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Controllers
import appCtrl from './screens/app/appCtrl'
import treeCtrl from './screens/tree/treeCtrl'
import tabCtrl from './screens/tab/tabCtrl'
import editorCtrl from './screens/editor/editorCtrl'
import gutterCtrl from './screens/gutter/gutterCtrl'

import test from './exemple/export'

//Start app
log('------------------------------------------------')

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
                return;
            }
            env.classes.push('keyword-' + env.content);
        });

        appCtrl()
        treeCtrl()
        tabCtrl.init()
        editorCtrl()
        gutterCtrl()
    })();
}