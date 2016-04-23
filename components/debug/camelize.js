/**
 * Camelize
 * ========
 * @param  {string} str => words separate with space
 * @return {string}     => camelized
 * @thanks => http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
 */
const camelize = ( str ) => {

    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {

        return index == 0 ? letter.toLowerCase() : letter.toUpperCase()
    }).replace(/\s+/g, '')
};

module.exports = camelize;