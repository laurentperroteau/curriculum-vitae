// Functions
import debug from './components/debug/debug'
import supportPromise from './components/support/promise'
import log from './components/log/LogCtrl'

// Controllers
import linkedInCtrl from './components/linkedIn/LinkedInCtrl'

// Templates
// TODO : pas besoin 


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

        linkedInCtrl()
    })();
}