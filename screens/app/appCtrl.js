module.exports = ( msg, color = 'green' ) => {

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

    document.getElementById('jsApp').innerHTML = html
}