import TreeClass from 'myScreens/tree/TreeClass'

const treeCtrl = () => {

    const Tree = new TreeClass('tree', './content/tree.json')

    Tree.load().then( (data) => {

        // Get all tree (include root)
        const oResult = JSON.parse( data )
            
        const oTree = {
            "title": "Curriculum Vitae",
            "tree": oResult.children
        } 

        Tree.setData( oTree )

        Tree.initTemplate()

        Tree.setClickEvent()
    })
}
export default treeCtrl