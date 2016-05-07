'use strict'

const assert = require('chai').assert;
const _ = require('lodash');

/*describe('Array', () => {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});*/

/*
rand object of tab
active one
count
delete one
count => ok ?
is delete => ok ?
is empty => ?
add one
count =>
is added => ok ?
close active 
other active => ok ?
etc... etc...
 */

const aTabTemplate = [
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

console.log( aTabTemplate );

let aTab = aTabTemplate

function getIndexTabByName( sFileName ) {

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
}

function activeTabByIndex( i ) {

    aTab[ i ].active = true
}

describe('Array of tab :', () => {

    describe('Function getIndexTabByName', () => {

        aTab = aTabTemplate

        it('should return at least 1', () => {
            assert.isAtLeast( getIndexTabByName('test.css'), 1 )
        })

        it('should return -1', () => {
            assert.strictEqual( getIndexTabByName('wrong.css'), -1 )
        })
    })

    describe('Function getIndexActiveTab', () => {

        aTab = aTabTemplate

        it('should return index 0', () => {
            assert.strictEqual( getIndexActiveTab(), 0 )
        })
    })

    describe('Function deleteTabByIndex', () => {
        
        aTab = aTabTemplate
        
        const iTabLength = aTab.length
        const iTab = getIndexTabByName('test.css')

        it('should return index 1 (function getIndexTabByName)', () => {

            assert.isAtLeast( iTab, 1 )
        })

        it('delete tab and return object with length equal to '+ (iTabLength - 1), () => {

            deleteTabByIndex( iTab )

            assert.lengthOf( aTab, iTabLength - 1 )
        })
    })

    describe('Delete all tabs (function deleteTabByIndex)', () => {
        
        aTab = aTabTemplate
        
        const iTabLength = aTab.length

        deleteTabByIndex( 2 )
        deleteTabByIndex( 1 )
        deleteTabByIndex( 0 )

        it('and return length of 0', () => {

            assert.lengthOf( aTab, 0 )
        })
    })


    describe('Function addTabWithName', () => {

        aTab = aTabTemplate

        console.log( aTabTemplate );
        console.log( aTab );
        
        const iTabLength = aTab.length
        const sNameNewTab = 'newTab.js';
        const iTab = getIndexTabByName( sNameNewTab )

        it('should add tab and length increment by '+ (iTabLength + 1), () => {

            if( iTab !== -1 ) {

                const iTabLength = aTab.length

                unactiveTab()

                addTabWithName( sNameNewTab )

                assert.lengthOf( aTab, iTabLength + 1 )
            }
        })            
    })

    describe('Function activeTabByIndex', () => {

        aTab = aTabTemplate 

        it('should return index 1', () => {

            unactiveTab()

            activeTabByIndex( 1 )

            assert.strictEqual( getIndexActiveTab(), 1 )
        })           
    })
})