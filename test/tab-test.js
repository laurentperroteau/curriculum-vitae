'use strict'

const assert = require('chai').assert
const _ = require('lodash')

const PubSub = require('pubsub-js')

import tabCtrl from 'myScreens/tab/tabCtrl'

import TabClass from 'myScreens/tab/TabClass'

const oTab = {
    "tab": [
        {
            name: "app.js",
            fullPath: "./app.js",
            active: true
        },
        {
            name: "test.css",
            fullPath: "./test/test.css",
            active: false
        },
        {
            name: "log.js",
            fullPath: "./log/log.js",
            active: false
        }
    ]
}

describe('Array of tab :', () => {

    describe('Function getIndexTabByName', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) )

        it('should return at least 1', () => {
            assert.isAtLeast( Tab._getIndexTabByName('test.css'), 1 )
        })

        it('should return -1', () => {
            assert.strictEqual( Tab._getIndexTabByName('wrong.css'), -1 )
        })
    })

    describe('Function getIndexActiveTab', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) )

        it('should return index 0', () => {
            assert.strictEqual( Tab._getIndexActiveTab(), 0 )
        })
    })

    describe('Function deleteTabByIndex', () => {

        const Tab = new TabClass('tab')
        
        Tab.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Tab.oData.tab.length
        const iTab = Tab._getIndexTabByName('test.css')

        it('should return index 1 (function getIndexTabByName)', () => {

            assert.isAtLeast( iTab, 1 )
        })

        it('delete tab and return object with length equal to '+ (iTabLength - 1), () => {

            Tab._deleteTabByIndex( iTab )

            assert.lengthOf( Tab.oData.tab, iTabLength - 1 )
        })
    })

    describe('Delete all tabs (function deleteTabByIndex)', () => {
        
        const Tab = new TabClass('tab')

        Tab.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Tab.oData.tab.length

        Tab._deleteTabByIndex( 2 )
        Tab._deleteTabByIndex( 1 )
        Tab._deleteTabByIndex( 0 )

        it('and return length of 0', () => {

            assert.lengthOf( Tab.oData.tab, 0 )
        })
    })


    describe('Function addTabWithName', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Tab.oData.tab.length
        const sNameNewTab = 'newTab.js';
        const iTab = Tab._getIndexTabByName( sNameNewTab )

        it('should add tab and length increment by '+ (iTabLength + 1), () => {

            if( iTab !== -1 ) {

                const iTabLength = Tab.oData.tab.length

                Tab._unactiveAllTab()

                Tab._addTabWithName( sNameNewTab )

                assert.lengthOf( Tab.oData.tab, iTabLength + 1 )
            }
        })            
    })

    describe('Function activeTabByIndex', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) ) 

        it('should return index 2', () => {

            Tab._unactiveAllTab()

            Tab._activeTabByIndex( 2 )

            assert.strictEqual( Tab._getIndexActiveTab(), 2 )
        })          
    })

    describe('Function showFile', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) ) 

        it('should publish fullPath of file on DISPLAY_FILE subscription', () => {


            PubSub.subscribe( 'DISPLAY_FILE', function ( msg, data ) {

                assert.strictEqual( data, oTab.tab[0].fullPath )
            })

            Tab._showFile( oTab.tab[0].fullPath )
        })          
    })
})
