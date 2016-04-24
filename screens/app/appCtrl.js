const rivets = require('rivets')

rivets.configure({
    prefix: 'my',
    templateDelimiters: ['{{', '}}']
})

const appCtrl = () => {

    const nElem = document.getElementById('jsApp')

    if( nElem === null ) return false

    const oApp = {
        "fileName": "/home/laurentperroteau/www/cv/web2/css/app.css"
    }        

    const template = require('./app.html')

    require('./app.css')

    nElem.innerHTML = template

    rivets.bind( nElem, oApp )
}
export default appCtrl