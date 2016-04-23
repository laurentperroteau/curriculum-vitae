import getAsyncJson from 'myComponents/async/getAsyncJson'
import TreeClass from 'myScreens/tree/TreeClass'

const treeCtrl = () => {

    const Tree = new TreeClass('tree', './content/tree.json')

    Tree.load().then( (data) => {
            
        const oTree = {
            "title": "Curriculum Vitae",
            "tree": data
        } 

        Tree.setData( oTree )

        Tree.initTemplate()

        Tree.setClickEvent()
    })
}
export default treeCtrl