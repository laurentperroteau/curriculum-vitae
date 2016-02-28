import debug from './components/debug/debug'
import supportPromise from './components/support/promise'


import linkedIn from './components/linkedIn/LinkedInCtrl'


//Start app
debug('------------------------------------------------')

if( !supportPromise() ) {

    // Prévenir non support
}
else {


    // On click on button
    setTimeout(function() {  

        linkedIn()
    }, 2000)
}