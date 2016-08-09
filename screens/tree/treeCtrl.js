const _fp_forEach = require('lodash/fp/forEach')
const _fp_sortBy = require('lodash/fp/sortBy')

import TreeClass from 'myScreens/tree/TreeClass'

const treeCtrl = () => {

    const Tree = new TreeClass('tree', './tree/tree.json')

    Tree.load().then( (data) => {

        // Get all tree (include root)
        let oResult = JSON.parse( data )

        // Sort subfolder
        oResult = _fp_forEach( function(oLevel1) {
                
            if( oLevel1.isFolder ) {

                oLevel1.children = _fp_sortBy( function(o) {
                    return o.name.toLowerCase()
                })( oLevel1.children )

                _fp_forEach( function(oLevel2) {
                    
                    oLevel2.children = _fp_sortBy( function(o) {
                        return o.name.toLowerCase()
                    })( oLevel2.children )
                })( oLevel1.children )
            }
        })( oResult.children )

        // And sort first level
        oResult = _fp_sortBy( function(o) {
            return [ !o.isFolder, o.name.toLowerCase() ].join("_")
        })( oResult )
            
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