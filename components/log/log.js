import displayLog from './displayLog'
import $http from 'myComponents/async/http'

/**
 * Display alert
 * =============
 * @param  {string} msg   => message to show
 * @return display alert
 */
const LogCtrl = ( sMsg, color = 'green' ) => {

    if( config.ENV == 'development' ) {
        displayLog( sMsg )
    }
    else {
        console.log('%c' + sMsg, 'color: '+ color)
    }

}

export default LogCtrl