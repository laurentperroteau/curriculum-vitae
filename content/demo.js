// ... extract of screens/editor/editorCtrl.js ...

import $http from 'myService/async/http'
import EditorClass from 'myComponent/editor/EditorComponent'
import tabCtrl from 'myComponent/tab/tabCtrl'

const editorCtrl = () => {

    require( '../../node_modules/github-markdown-css/github-markdown.css' )

    const Editor = new EditorClass('editor')

    Editor.initTemplate()

    Editor.initCodeCtn( 'jsCodeContent' )

    $http('./content/demo.js')
        .get()
        .then( (data) => {

            Editor.initWrite( data ).then( () => {

                tabCtrl.openTab( { name: 'RESUME.md', fullPath: './content/RESUME.md' } )
                ...