
/**
 * Test webpack config
 * ===================
 * @cmd (only Chrome) : npm start 
 * @cmd (all browsers) : karma start ./config/webpack.karma.js
 * @description : this config is using by karma config to watch all test files
 */

const testsContext = require.context('./', true, /-test\.js$/)

testsContext.keys().forEach( testsContext )