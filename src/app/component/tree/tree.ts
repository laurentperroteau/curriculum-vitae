import { Component } from '@angular/core';

@Component({
    moduleId: module.id, // using by CommonJS, useful to set url relative to current folder
    selector: 'my-tree',
    templateUrl: 'tree.html',
    styleUrls: ['tree.css']
})
export class TreeComponent {
    title: String = 'Curriculum Vitae'
    url: String   = './src/content/tree.json'
    tree: any     = {}

    constructor() {

        this.getData()
    }

    getData() {

        this.tree = {
            "isFolder": true, 
            "name": "", 
            "children": [
                {
                    "fullPath": "./package.json", 
                    "isFolder": false, 
                    "name": "package.json"
                }, 
                {
                    "fullPath": "./src", 
                    "isFolder": true, 
                    "name": "src", 
                    "children": [
                        {
                            "fullPath": "./src/content", 
                            "isFolder": true, 
                            "name": "content", 
                            "children": [
                                {
                                    "fullPath": "./src/content/demo.js", 
                                    "isFolder": false, 
                                    "name": "demo.js"
                                }, 
                                {
                                    "fullPath": "./src/content/RESUME.md", 
                                    "isFolder": false, 
                                    "name": "RESUME.md"
                                }, 
                                {
                                    "fullPath": "./src/content/tree.json", 
                                    "isFolder": false, 
                                    "name": "tree.json"
                                }
                            ]
                        }
                    ],
                }
            ]
        }

        console.log( this.tree )
        // return $http( this.sUrl ).get()
    }

    triggerItem( oItem: any ) {

        console.log( oItem )

        if( oItem.isFolder ) {

            this.triggerFolder( oItem )
        }
        else {
            this.triggerFile( oItem )
        }
    }

    triggerFolder( oItem: any ) {

        console.log( oItem )

        if( oItem.isOpen === undefined || !oItem.isOpen ) {
            oItem.isOpen = true
        }
        else {
            oItem.isOpen = false
        }

        // log( `Open Folder ${nElem.dataset.name}` )
    }

    triggerFile( oItem: any ) {

        // TODO: si plusieurs folder on le même nom, il faudra ajouter une info
        // PubSub.publish( 'OPEN_TAB', nElem.dataset )
    }    
    /*
    const Tree = new TreeClass('tree', './tree/tree.json')

    Tree.load().then( (data) => {

        // Get all tree (include root)
        let oResult = JSON.parse( data )

        // Get first children or sort alphabetically by folder and name
        // TODO : fix order
        oResult = _.sortBy( oResult.children, function(o) {
            return [ !o.isFolder, o.name ].join("_")
        })
            
        const oTree = {
        } 

        Tree.getData( oTree )

        Tree.initTemplate()

        Tree.setClickEvent()
    })
     */
}
