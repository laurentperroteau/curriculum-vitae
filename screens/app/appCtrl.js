let nElem

const appCtrl = () => {

    const oApp = {
        "fileName": "/home/laurentperroteau/www/cv/web2/css/app.css"
    }        

    const template = require('./app.html')

    const html = template( oApp )

    require('./app.css')

    if( nElem === undefined ) {
        nElem = document.getElementById('jsApp')
    }

    nElem.innerHTML = html
}
export default appCtrl