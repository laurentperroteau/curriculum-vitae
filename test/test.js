'use strict'

const assert = require('chai').assert;
const _ = require('lodash');

import EditorClass from 'myScreens/editor/EditorClass'

const oTab = {
    "tab": [
        {
            name: "app.js",
            active: true
        },
        {
            name: "test.css",
            active: false
        },
        {
            name: "log.js",
            active: false
        }
    ]
}

/*console.log( aTab );

let Editor.setData( oTab )*/

/*function getIndexTabByName( sFileName ) {

    return _.findIndex(aTab, function(o) { return o.name == sFileName })
}

function getIndexActiveTab() {

    return _.findIndex(aTab, function(o) { return o.active == true })
}

function deleteTabByIndex( i ) {

    aTab.splice(i, 1)
}

function addTabWithName( sFileName ) {

    const oNewTab = {
        name: sFileName,
        active: true
    }

    aTab.push( oNewTab )
}

function unactiveTab() {

    const iCurrentActive = getIndexActiveTab()

    if( iCurrentActive !== -1 ) {

        aTab[ iCurrentActive ].active = false
    }

    /*aTab.map((x) => { 
        x.active = false
        return x
    })*/
/*}*/

/*function activeTabByIndex( i ) {

    aTab[ i ].active = true
}
*/
describe('Array of tab :', () => {

    // TODO : DEPLACER OTAB ICI ???

    describe('Function getIndexTabByName', () => {

        const Editor1 = new EditorClass('editor')
        Editor1.setData( oTab )

        it('should return at least 1', () => {
            assert.isAtLeast( Editor1.getIndexTabByName('test.css'), 1 )
        })

        it('should return -1', () => {
            assert.strictEqual( Editor1.getIndexTabByName('wrong.css'), -1 )
        })
    })

    describe('Function getIndexActiveTab', () => {

        const Editor2 = new EditorClass('editor')
        Editor2.setData( oTab )

        it('should return index 0', () => {
            assert.strictEqual( Editor2.getIndexActiveTab(), 0 )
        })
    })

    describe('Function deleteTabByIndex', () => {

        const Editor3 = new EditorClass('editor')
        
        Editor3.setData( oTab )
        
        const iTabLength = Editor3.oData.tab.length
        const iTab = Editor3.getIndexTabByName('test.css')

        it('should return index 1 (function getIndexTabByName)', () => {

            assert.isAtLeast( iTab, 1 )
        })

        it('delete tab and return object with length equal to '+ (iTabLength - 1), () => {

            Editor3.deleteTabByIndex( iTab )

            assert.lengthOf( Editor3.oData.tab, iTabLength - 1 )
        })
    })

    /*describe('Delete all tabs (function deleteTabByIndex)', () => {
        
        Editor.setData( oTab )
        
        const iTabLength = aTab.length

        Editor.deleteTabByIndex( 2 )
        Editor.deleteTabByIndex( 1 )
        Editor.deleteTabByIndex( 0 )

        it('and return length of 0', () => {

            assert.lengthOf( aTab, 0 )
        })
    })*/


    /*describe('Function addTabWithName', () => {

        const Editor4 = new EditorClass('editor')
        Editor4.setData( oTab )
        
        const iTabLength = Editor4.oData.tab.length
        const sNameNewTab = 'newTab.js';
        const iTab = Editor4.getIndexTabByName( sNameNewTab )

        it('should add tab and length increment by '+ (iTabLength + 1), () => {

            if( iTab !== -1 ) {

                const iTabLength = Editor4.oData.tab.length

                Editor4.unactiveTab()

                Editor4.addTabWithName( sNameNewTab )

                assert.lengthOf( Editor4.oData.tab, iTabLength + 1 )
            }
        })            
    })*/

    describe('Function activeTabByIndex', () => {

        const Editor5 = new EditorClass('editor')
        Editor5.setData( oTab ) 

        console.log( Editor5.oData.tab )

        // Pourquoi je n'ai que 2 items, pas de problème si je copie de nouveau l'objet

        /*it('should return index 1', () => {

            Editor.unactiveTab()

            Editor.activeTabByIndex( 1 )

            assert.strictEqual( Editor.getIndexActiveTab(), 1 )
        }) */          
    })
})