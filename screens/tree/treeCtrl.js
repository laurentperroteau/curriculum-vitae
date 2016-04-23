import getAsyncJson from 'myComponents/async/getAsyncJson'
import TreeClass from 'myScreens/tree/TreeClass'

const treeCtrl = () => {

    const tree = new TreeClass('tree', './content/tree.json')

    tree.load().then( (data) => {
            
        const oTree = {
            "title": "Curriculum Vitae",
            "tree": data
        } 

        tree.setData( oTree )

        tree.initTemplate()

        tree.setClickEvent()
    })
}
export default treeCtrl