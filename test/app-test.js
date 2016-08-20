
const assert = require('chai').assert

import appCtrl from 'myScreens/app/appCtrl'

describe('Init app :', () => {

    // inject the HTML fixture for the tests
    beforeEach(function() {

        document.body.insertAdjacentHTML(
            'afterbegin', 
            '<div id="jsApp">Loading...</div>'
        )

        appCtrl()
    });

    describe('Bar on top', () => {

        it('should be exist', () => {
            assert.notEqual( document.querySelector('.app__bar__top'), null )
        })

        it('should have path text', () => {
            assert.equal( document.querySelector('.app__bar__top').innerHTML.trim(), '/home/laurentperroteau/www/cv/web/' )
        })
    })
})