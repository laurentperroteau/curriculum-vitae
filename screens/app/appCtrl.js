let nElem

const appCtrl = () => {

    const oTree = {
        "title": "Curriculum Vitae",
        "menu": [
            {
                name: "app"
            },
            {
                name: "components"
            }
        ]
    }        

    const template = require('./app.html')

    const html = template( oTree )

    require('./app.css')

    if( nElem === undefined ) {
        nElem = document.getElementById('jsApp')
    }

    nElem.innerHTML = html
}
export default appCtrl