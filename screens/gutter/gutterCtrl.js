module.exports = () => {

    // Define how many line we want
    const iQtyLine = 30

    // Generate array
    const aLine = Array.apply(null, {length: iQtyLine}).map(Number.call, Number);

    // Prepare index of array of line
    let iLine = 0

    const oLine = {
        "line": aLine,
        "iLine": () => {
            return iLine++;
        }
    }        

    const template = require('./gutter.html')

    const html = template( oLine )

    require('./gutter.css')

    document.getElementById('jsGutter').innerHTML = html
}