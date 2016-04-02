module.exports = ( msg, color = 'green' ) => {

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
    
    document.getElementById('jsEditor').innerHTML = html

    const nTabItem = document.querySelectorAll('.jsTabItem')
    nTabItem[0].classList.add('jsIsVisible','jsIsActive')
    nTabItem[1].classList.add('jsIsVisible')
}