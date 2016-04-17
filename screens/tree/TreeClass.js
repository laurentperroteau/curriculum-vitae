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
    //    étendre une class parente pour init template
    //    http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/
    initTemplate() {

        const template = require('./tree.html')

        const html = template( this.oTree )

        require('./tree.css')

        if( this.nElem === undefined ) {
            this.nElem = document.getElementById('jsTree')
        }

        this.nElem.innerHTML = html
    }

    setClickEvent() {

        const nItemS = this.nElem.querySelectorAll('.jsEventMenuItem')

        Array.from( nItemS ).forEach( ( nItem ) => {

            nItem.addEventListener('click', (e) => this.triggerItem(e), false )
        });
    }

    triggerItem( e ) {

        const nElem = e.currentTarget

        if( nElem.dataset.name !== undefined ) {

            if( nElem.dataset.isFile !== undefined ) {

                this.triggerFile( nElem )
            }
            else {
                this.triggerFolder( nElem )
            }

        }
    }

    triggerFolder( nElem ) {

        console.log( `open folder ${nElem.dataset.name}` );
    }

    triggerFile( nElem ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        console.log( `open file ${nElem.dataset.name}` );
    }
}
export default TreeClass