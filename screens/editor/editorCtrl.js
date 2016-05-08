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

    Editor.initTemplate()
}
export default editorCtrl