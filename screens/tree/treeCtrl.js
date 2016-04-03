import getAsyncJson from '../../components/async/getAsyncJson'

import TreeClass from '../../screens/tree/TreeClass'

let nElem

const treeCtrl = () => {

    const tree = new TreeClass('./content/tree.json')

    tree.load().then( (data) => {
            
        const oTree = {
            "title": "Curriculum Vitae",
            "tree": data
        } 

        tree.set( oTree )

        tree.initTemplate()
    })
}
export default treeCtrl