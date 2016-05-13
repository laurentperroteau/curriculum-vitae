import EditorClass from 'myScreens/editor/EditorClass'

const PubSub = require('pubsub-js')

const editorCtrl = () => {

   const oTab = {
        "tab": [
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
    }        

    const Editor = new EditorClass('editor')

    // Editor.setData( oTab )
    
    // const bIsTecnic = confirm('Comprenez-vous quelques à la programmation web ?');

    Editor.initTemplate()


    const exemple = require('raw!myFiles/exemple.txt')
    const exemple2 = require('raw!myFiles/exemple2.txt')
    
    Editor.initOutpupCtn( 'jsCodeContent' )

    Editor.initWrite( exemple ).then( () => {

        /*Editor.initWrite( exemple2 ).then( () => {

            // LinkedInCtrl()
        })*/
    })

    PubSub.subscribe( 'DISPLAY_FILE', onDisplayFilePublish )

    function onDisplayFilePublish( msg, data ) {

        if( data !== undefined ) Editor.showOutput( data )
    }

    PubSub.subscribe( 'DELETE_FILE', onDeleteFilePublish )

    function onDeleteFilePublish( msg, data ) {

        if( data !== undefined ) Editor.removeOutput()
    }
}
export default editorCtrl