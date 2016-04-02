/**
 * Debug
 * =====
 * @param  {string} msg   => message to show
 * @param  {String} color
 * @return colored console.log if not production
 */
const debug = ( msg, color = 'green' ) => {

    console.log('%c' + msg, 'color: '+ color);
};

module.exports = debug;