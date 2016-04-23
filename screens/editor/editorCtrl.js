import EditorClass from 'myScreens/editor/EditorClass'

const editorCtrl = () => {

    const oTab = {
        "tab": [
            {
                name: "app.js"
            },
            {
                name: "test.css"
            },
            {
                name: "test.js"
            }
        ]
    }        

    const Editor = new EditorClass('editor')

    Editor.setData( oTab )

    Editor.initTemplate()

    const nTabItem = document.querySelectorAll('.jsTabItem')
    nTabItem[0].classList.add('jsIsVisible','jsIsActive')
    nTabItem[1].classList.add('jsIsVisible')
}
export default editorCtrl