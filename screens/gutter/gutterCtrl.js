import GutterClass from 'myScreens/gutter/GutterClass'

const gutterCtrl = () => {

    // Define how many line we want
    const iQtyLine = 1000

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

    const Gutter = new GutterClass('gutter')

    Gutter.setData( oLine )

    Gutter.initTemplate()
}
export default gutterCtrl