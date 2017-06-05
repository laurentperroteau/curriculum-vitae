
/**
 * Test webpack config
 * ===================
 * @cmd (only Chrome) : npm start 
 * @cmd (all browsers) : karma start ./config/webpack.karma.js
 * @description : this config is used by karma config to watch all test files
 */

const componentsContext = require.context('./component', true, /-test\.js$/)
componentsContext.keys().forEach( componentsContext )