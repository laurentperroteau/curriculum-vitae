'use strict'

const assert = require('chai').assert;
const _ = require('lodash');

/*describe('Array', function() {
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

const aTab = [
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

function getIndexTabByName( sFileName ) {

    return _.findIndex(aTab, function(o) { return o.name == sFileName })
}

function getIndexActiveTab() {

    return _.findIndex(aTab, function(o) { return o.active == true })
}

function deleteTabByIndex( i ) {

    aTab.splice(i, 1)

    return aTab
}

function addTabWithName( sFileName ) {

    unactiveTab()

    const oNewTab = {
        name: sFileName,
        active: true
    }

    const aNewTab = aTab.push( oNewTab )

    return aNewTab
}

function unactiveTab( i ) {

    const iCurrentActive = getIndexActiveTab()

    aTab[ iCurrentActive ].active = false
}

describe('Array of tab :', () => {

    let foo = false
    
    beforeEach( (done) => {
        setTimeout( () => {

            foo = true;
            // complete the async beforeEach
            done()
        }, 500)
    })

    describe('Function getIndexTabByName', () => {

        it('should return at least 1', () => {
            assert.isAtLeast( getIndexTabByName('test.css'), 1 )
        })

        it('should return -1', () => {
            assert.strictEqual( getIndexTabByName('wrong.css'), -1 )
        })
    })

    describe('Function getIndexActiveTab', () => {

        it('should return index 0', () => {
            assert.strictEqual( getIndexActiveTab(), 0 )
        })
    })

    describe('Function deleteTabByIndex', () => {
        
        const iTab = getIndexTabByName('test.css')

        it('should return index 1 (function getIndexTabByName)', () => {

            assert.isAtLeast( iTab, 1 )
        })

        it('delete tab and return object with length equal to 2', () => {

            const aNewTab = deleteTabByIndex( iTab )

            assert.lengthOf( aNewTab, 2 )
        })
    })


    describe('Function addTabWithName', () => {
        setTimeout(function() {

            console.log( addTabWithName( 'newTab.js' ) );
        }, 5000);
        
        /*const sNameNewTab = 'newTab.js';
        const iTab = getIndexTabByName( sNameNewTab )

        it('should add tab and length increment by 1', () => {

            if( iTab !== -1 ) {

                const iTabLength = aTab.length

                const aNewTab = addTabWithName( sNameNewTab )

                console.log( aNewTab );

                // assert.strictEqual( aNewTab, iTabLength + 1 )
            }
        })    */        
    })
    // Problème...

    /*describe('Function activeOtherTab', () => {

        it('before calling, index of active should be 2', () => {

            assert.strictEqual( getIndexActiveTab(), 2 )
        })            
    })*/
})
