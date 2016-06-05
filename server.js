const express = require('express')
const fs      = require('fs')

const app     = express()

const markdown = require( "markdown" ).markdown

app.use( require('prerender-node') )

app.get('/', function (req, res) {

    const sResumePath = __dirname + '/content/RESUME.md'

    const sContent = fs.readFileSync(sResumePath, 'utf8');

    const sDoc = markdown.toHTML( sContent )

    const sMeta = `
<title>Laurent Perroteau | Développeur Front-End</title>
<meta name="description" content="Développeur Web depuis 5 ans, spécialisé Front-End depuis 4 ans, référent technique Front-End depuis 2 ans.">`

    res.send( sMeta + '' +sDoc );
})

app.listen(3000, function () {
    console.log('Running on port 3000!');
});