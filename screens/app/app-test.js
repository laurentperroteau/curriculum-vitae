
require('expose?config!config')

import appCtrl from 'myScreens/app/appCtrl'

describe('Screen APP => init app :', () => {

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
            expect( document.querySelector('.app__bar__top') ).not.toBeNull()
        })

        it('should have path text', () => {
            expect( document.querySelector('.app__bar__top').innerHTML.trim() )
            .toBe('/home/laurentperroteau/www/cv/web/')
        })
    })
})