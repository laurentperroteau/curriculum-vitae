import displayLog from './displayLog'
import $http from 'myComponents/async/http'

/**
 * Display alert
 * =============
 * @param  {string} msg   => message to show
 * @return display alert
 */
const LogCtrl = ( sMsg, bError = false ) => {

    if( config.ENV == 'production' ) {

        displayLog( sMsg, bError )
    }
    else {
        if( bError ) {

            console.warn('%c' + sMsg, 'color: red')
        }
        else {
            console.log('%c' + sMsg, 'color: green')
        }
    }

}

export default LogCtrl