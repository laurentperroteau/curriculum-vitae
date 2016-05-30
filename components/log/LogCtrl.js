import displayLog from './alert'

/**
 * Display alert
 * =============
 * @param  {string} msg   => message to show
 * @return display alert
 */
const LogCtrl = ( sLabel, sMsg ) => {

    // TODO : add log to file with times

    /*if( ENV == PROD ) {
        http://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x
        https://davidwalsh.name/node-environment-variables
        http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
        displayLog( msg )
    }
    else {
        console.log('%c' + msg, 'color: '+ color);
    }/*
}

export default LogCtrl