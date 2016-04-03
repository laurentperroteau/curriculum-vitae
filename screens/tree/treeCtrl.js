let nElem

const treeCtrl = () => {

    const oTree = {
        "title": "Curriculum Vitae",
        "menu": [
            {
                name: "app"
            },
            {
                name: "components"
            }
        ]
    }        

    const template = require('./tree.html')

    const html = template( oTree )

    require('./tree.css')

    if( nElem === undefined ) {
        nElem = document.getElementById('jsTree')
    }

    nElem.innerHTML = html
}
export default treeCtrl