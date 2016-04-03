import getAsyncJson from '../../components/async/getAsyncJson'

let nElem

const treeCtrl = () => {

    function loadTree() {
        getAsyncJson('content/tree.json').then( (data) => {
            
            const oTree = {
                "title": "Curriculum Vitae",
                "tree": data
            } 

            setTree( oTree )
        });
    }

    function setTree( oTree ) {

        const template = require('./tree.html')

        const html = template( oTree )

        require('./tree.css')

        if( nElem === undefined ) {
            nElem = document.getElementById('jsTree')
        }

        nElem.innerHTML = html
    }

    loadTree()
}
export default treeCtrl