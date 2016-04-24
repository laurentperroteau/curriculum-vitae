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

    Editor.setData( oTab )

    Editor.initTemplate()

    PubSub.subscribe('TAB', onTabPublish )

    function onTabPublish( msg, data ) {

        if( data !== undefined ) Editor.openFile( data )
    }
}
export default editorCtrl