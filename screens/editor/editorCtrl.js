import EditorClass from 'myScreens/editor/EditorClass'

const PubSub = require('pubsub-js')

const editorCtrl = () => {

    const oTab = {
        "tab": [
            {
                name: "app.js",
                class: "jsIsActive"
            },
            {
                name: "test.css",
                class: ""
            },
            {
                name: "log.js",
                class: ""
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