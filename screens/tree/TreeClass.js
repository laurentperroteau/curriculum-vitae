import getAsyncJson from '../../components/async/getAsyncJson'

class TreeClass {

    constructor( sUrl ) {

        this.sUrl = sUrl
        this.nElem
        this.oTree
    }

    load() {
        return getAsyncJson( this.sUrl )
    }

    set( oTree ) {
        this.oTree = oTree
    }

    // TODO: voir abstraction en pass "tree", resout html, css et get id
    initTemplate() {

        const template = require('./tree.html')

        const html = template( this.oTree )

        require('./tree.css')

        if( this.nElem === undefined ) {
            this.nElem = document.getElementById('jsTree')
        }

        this.nElem.innerHTML = html
    }
}
export default TreeClass