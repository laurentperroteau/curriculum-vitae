
const _ = require('lodash')

const PubSub = require('pubsub-js')

import tabCtrl from 'myComponent/tab/tabCtrl'

import TabClass from 'myComponent/tab/TabComponent'

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

describe('Screen TAB => functions used for array of tab :', () => {

    describe('Function getIndexTabByName', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) )

        it('on existing tab, should return index 1', () => {
            expect( Tab._getIndexTabByName('test.css') ).toBe( 1 )
        })

        it('on not existing tab, should return -1', () => {
            expect( Tab._getIndexTabByName('wrong.css') ).toBe( -1 )
        })
    })

    describe('Function getIndexActiveTab', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) )

        it('should return index 0', () => {
            expect( Tab._getIndexActiveTab() ).toBe( 0 )
        })
    })

    describe('Function deleteTabByIndex', () => {

        const Tab = new TabClass('tab')
        
        Tab.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Tab.oData.tab.length
        const iTab = Tab._getIndexTabByName('test.css')

        it('before delete, should return index 1 (function getIndexTabByName)', () => {

            expect( iTab ).toBe( 1 )
        })

        it('after delete tab, should return object with length equal to '+ (iTabLength - 1), () => {

            Tab._deleteTabByIndex( iTab )

            expect( Tab.oData.tab.length ).toBe( iTabLength - 1 )
        })
    })

    describe('Function deleteTabByIndex (delete all tabs)', () => {
        
        const Tab = new TabClass('tab')

        Tab.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Tab.oData.tab.length

        Tab._deleteTabByIndex( 2 )
        Tab._deleteTabByIndex( 1 )
        Tab._deleteTabByIndex( 0 )

        it('after delete all tabs, should return length of 0', () => {

            expect( Tab.oData.tab.length).toBe( 0 )
        })
    })


    describe('Function addTabWithName', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) )
        
        const iTabLength = Tab.oData.tab.length
        const sNameNewTab = 'newTab.js';
        const iTab = Tab._getIndexTabByName( sNameNewTab )

        it('should add tab and length increment to '+ (iTabLength + 1), () => {

            if( iTab !== -1 ) {

                const iTabLength = Tab.oData.tab.length

                Tab._unactiveAllTab()

                Tab._addTabWithName( sNameNewTab )

                expect( Tab.oData.tab.length ).toBe( iTabLength + 1 )
            }
        })            
    })

    describe('Function activeTabByIndex', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) ) 

        it('should return index 2', () => {

            Tab._unactiveAllTab()

            Tab._activeTabByIndex( 2 )

            expect( Tab._getIndexActiveTab() ).toBe( 2 )
        })          
    })

})

describe('Screen TAB => event :', () => {
    
    describe('Function showFile', () => {

        const Tab = new TabClass('tab')
        Tab.setData( _.cloneDeep( oTab ) ) 

        it('should publish fullPath of file on DISPLAY_FILE subscription', (done) => {

            PubSub.subscribe( 'DISPLAY_FILE', function ( msg, data ) {

                expect( data ).toBe( oTab.tab[0].fullPath )
                done()
            })

            Tab._showFile( oTab.tab[0].fullPath )
        })          
    })
})
