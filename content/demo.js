// ... extract of screens/editor/editorCtrl.js ...

import $http from 'myComponents/async/http'
import EditorClass from 'myScreens/editor/EditorClass'
import tabCtrl from 'myScreens/tab/tabCtrl'

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