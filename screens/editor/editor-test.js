
require('expose?config!config')

import editorCtrl from 'myScreens/editor/editorCtrl'
import $http from 'myComponents/async/http'

import tabCtrl from 'myScreens/tab/tabCtrl'

import EditorClass from 'myScreens/editor/EditorClass'

describe('Screen EDITOR => init editor :', () => {

    // Inject the HTML fixture for the tests
    beforeEach(function() {

        document.body.insertAdjacentHTML(
            'afterbegin', 
            '<div id="jsEditor" class="editor"></div>'
        )
    });

    describe('Code container', () => {

        it('should be exist', () => {

            const Editor = new EditorClass('editor')
    
            Editor.initTemplate()

            Editor.initCodeCtn( 'jsCodeContent' )
            
            expect( document.getElementById('jsCodeContent') ).not.toBeNull()
        })

        it('should not empty when adding code')

        /*it('should not empty when adding code', (done) => {

            const Editor = new EditorClass('editor')
    
            Editor.initTemplate()

            Editor.initCodeCtn( 'jsCodeContent' )

            $http('./content/demo.js')
                .get()
                .then( (data) => {

                    assert.notEqual( data, '' )
                    done()                        
                })
        })*/

        xit('should not empty when adding code', () => {

            const Editor = new EditorClass('editor')
    
            Editor.initTemplate()

            Editor.initCodeCtn( 'jsCodeContent' )

            assert.notEqual( document.getElementById('jsCodeContent').innerHTML, '' )

            pending()
        })
    })
})