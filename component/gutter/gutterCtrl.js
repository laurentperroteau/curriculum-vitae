import GutterComponent from 'myComponent/gutter/GutterComponent'

const gutterCtrl = () => {

    // Define how many line we want
    const iQtyLine = 251

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

    const Gutter = new GutterComponent('gutter')

    Gutter.setData( oLine )

    Gutter.initTemplate()
}
export default gutterCtrl