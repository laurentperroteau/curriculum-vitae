import $http from 'myComponents/async/http'

import EditorClass from 'myScreens/editor/EditorClass'

import tabCtrl from 'myScreens/tab/tabCtrl'

const PubSub = require('pubsub-js')

const editorCtrl = () => {

    require( '../../node_modules/github-markdown-css/github-markdown.css' )

    const Editor = new EditorClass('editor')
    
    // const bIsTecnic = confirm('Comprenez-vous quelques à la programmation web ?');

    Editor.initTemplate()

    Editor.setMarkdownCtn( 'jsMarkdownContent' )
    Editor.initCodeCtn( 'jsCodeContent' )

    $http('./content/demo.js')
        .get()
        .then( (data) => {

            Editor.initWrite( data ).then( () => {

                tabCtrl.openTab( { name: 'RESUME.md', fullPath: './content/RESUME.md' } )
            })
                
        })

    PubSub.subscribe( 'DISPLAY_FILE', onDisplayFilePublish )

    function onDisplayFilePublish( msg, data ) {

        // Display seulement si n'existe pas encore
        if( data !== undefined ) Editor.showOutput( data )
    }

    PubSub.subscribe( 'EMPTY_EDITOR', onDeleteFilePublish )

    function onDeleteFilePublish( msg, data ) {

        if( data !== undefined ) Editor.removeOutput()
    }
}
export default editorCtrl