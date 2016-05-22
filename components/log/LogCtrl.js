import alert from './alert'

/**
 * Display alert
 * =============
 * @param  {string} msg   => message to show
 * @return display alert
 */
const LogCtrl = ( sLabel, sMsg ) => {

    // TODO : add log to file with times

    alert( sLabel, sMsg )
}

export default LogCtrl;