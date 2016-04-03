let nElem

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

    require('./editor.css')

    const template = require('./editor.html')

    const html = template( oTab )

    if( nElem === undefined ) {
        nElem = document.getElementById('jsEditor')
    }
    
    nElem.innerHTML = html

    const nTabItem = document.querySelectorAll('.jsTabItem')
    nTabItem[0].classList.add('jsIsVisible','jsIsActive')
    nTabItem[1].classList.add('jsIsVisible')
}
export default editorCtrl