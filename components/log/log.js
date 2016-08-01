import displayLog from './displayLog'
import $http from 'myComponents/async/http'

/**
 * Display alert
 * =============
 * @param  {string} sMsg   => message to show
 * @param  {boolean} bError   => if is error
 * @return display alert
 */
const LogCtrl = ( sMsg, bError = false ) => {

    if( config.ENV == 'development' ) {

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