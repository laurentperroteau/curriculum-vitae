'use strict'

const assert = require('chai').assert
const _ = require('lodash')

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

describe('Array of tab :', () => {

    describe('Function getIndexTabByName', () => {

        const Editor = new EditorClass('editor')
        Editor.setData( _.cloneDeep( oTab ) )

        it('should return at least 1', () => {
            assert.isAtLeast( Editor._getIndexTabByName('test.css'), 1 )
        })

        it('should return -1', () => {
            assert.strictEqual( Editor._getIndexTabByName('wrong.css'), -1 )
        })
    })

    describe('Function getIndexActiveTab', () => {

        const Editor = new EditorClass('editor')
        Editor.setData( _.cloneDeep( oTab ) )

        it('should return index 0', () => {
            assert.strictEqual( Editor._getIndexActiveTab(), 0 )
        })
    })

    describe('Function deleteTabByIndex', () => {

        const Editor = new EditorClass('editor')
        
        Editor.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Editor.oData.tab.length
        const iTab = Editor._getIndexTabByName('test.css')

        it('should return index 1 (function getIndexTabByName)', () => {

            assert.isAtLeast( iTab, 1 )
        })

        it('delete tab and return object with length equal to '+ (iTabLength - 1), () => {

            Editor._deleteTabByIndex( iTab )

            assert.lengthOf( Editor.oData.tab, iTabLength - 1 )
        })
    })

    describe('Delete all tabs (function deleteTabByIndex)', () => {
        
        const Editor = new EditorClass('editor')

        Editor.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Editor.oData.tab.length

        Editor._deleteTabByIndex( 2 )
        Editor._deleteTabByIndex( 1 )
        Editor._deleteTabByIndex( 0 )

        it('and return length of 0', () => {

            assert.lengthOf( Editor.oData.tab, 0 )
        })
    })


    describe('Function addTabWithName', () => {

        const Editor = new EditorClass('editor')
        Editor.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Editor.oData.tab.length
        const sNameNewTab = 'newTab.js';
        const iTab = Editor._getIndexTabByName( sNameNewTab )

        it('should add tab and length increment by '+ (iTabLength + 1), () => {

            if( iTab !== -1 ) {

                const iTabLength = Editor.oData.tab.length

                Editor._unactiveAllTab()

                Editor._addTabWithName( sNameNewTab )

                assert.lengthOf( Editor.oData.tab, iTabLength + 1 )
            }
        })            
    })

    describe('Function activeTabByIndex', () => {

        const Editor = new EditorClass('editor')
        Editor.setData( _.cloneDeep( oTab ) ) 

        it('should return index 2', () => {

            Editor._unactiveAllTab()

            Editor._activeTabByIndex( 2 )

            assert.strictEqual( Editor._getIndexActiveTab(), 2 )
        })          
    })
})