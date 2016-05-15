import TreeClass from 'myScreens/tree/TreeClass'

const treeCtrl = () => {

    const Tree = new TreeClass('tree', './tree/tree.json')

    Tree.load().then( (data) => {

        // Get all tree (include root)
        let oResult = JSON.parse( data )

        // Get first children or sort alphabetically by folder and name
        oResult = _.sortBy( oResult.children, function(o) {
            return [ !o.isFolder, o.name ].join("_")
        })
            
        const oTree = {
            "title": "Curriculum Vitae",
            "tree": oResult
        } 

        Tree.setData( oTree )

        Tree.initTemplate()

        Tree.setClickEvent()
    })
}
export default treeCtrl