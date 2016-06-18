import TreeClass from 'myScreens/tree/TreeClass'

const treeCtrl = () => {

    const Tree = new TreeClass('tree', './tree/tree.json')

    Tree.load().then( (data) => {

        // Get all tree (include root)
        let oResult = JSON.parse( data )

        // Sort subfolder
        oResult = _.forEach(oResult.children, function(oLevel1) {
                
            if( oLevel1.isFolder ) {

                oLevel1.children = _.sortBy( oLevel1.children, function(o) {
                    return o.name.toLowerCase()
                })

                _.forEach(oLevel1.children, function(oLevel2) {
                    
                    oLevel2.children = _.sortBy( oLevel2.children, function(o) {
                        return o.name.toLowerCase()
                    })
                })
            }
        })

        // And sort first level
        oResult = _.sortBy( oResult, function(o) {
            return [ !o.isFolder, o.name.toLowerCase() ].join("_")
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