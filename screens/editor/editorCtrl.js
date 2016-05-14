import getAsync from 'myComponents/async/getAsync'

import EditorClass from 'myScreens/editor/EditorClass'

const PubSub = require('pubsub-js')

const editorCtrl = () => {

    const Editor = new EditorClass('editor')
    
    // const bIsTecnic = confirm('Comprenez-vous quelques à la programmation web ?');

    Editor.initTemplate()

    Editor.initOutpupCtn( 'jsCodeContent' )

    /*getAsync(`./tree/demo.js.txt`).then( (data) => {

        Editor.initWrite( data ).then( () => {

            // Editor.initWrite( exemple2 ).then( () => {

                // LinkedInCtrl()
            // })
        })
    })*/

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