import alert from './alert'

/**
 * Display alert
 * =============
 * @param  {string} msg   => message to show
 * @return display alert
 */
let LogCtrl = ( sLabel, sMsg ) => {

    // TODO : add log to file with times

    alert( sLabel, sMsg )
};

module.exports = LogCtrl;