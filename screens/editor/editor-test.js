
require('expose?config!config')

import $http from 'myService/async/http'

import tabCtrl from 'myScreens/tab/tabCtrl'

import EditorClass from 'myScreens/editor/EditorClass'

describe('Screen EDITOR :', () => {

    beforeEach( function() {

        document.body.insertAdjacentHTML(
            'afterbegin', 
            '<div id="jsEditor" class="editor"></div>'
        )

        this.Editor = new EditorClass('editor')

        this.Editor.initTemplate()

        this.Editor.setMarkdownCtn( 'jsMarkdownContent' )
        this.Editor.initCodeCtn( 'jsCodeContent' )

    })

    it('code container should be exist', function() {
        
        expect( document.getElementById('jsCodeContent') ).not.toBeNull()
    })

    it('and should be setting to class', function() {
        
        expect( this.Editor.nCodeCtn ).not.toBeNull()
    })

    it('setting HTML string using Editor._displayOutput should insert HTML to container', function() {

        let exHTML = '<div>Coucou</div>'

        this.Editor._displayOutput( exHTML, 'language-js' )

        expect( this.Editor.nCodeCtn.innerHTML ).toBe( exHTML )               
    })
})