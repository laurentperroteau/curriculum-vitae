const express = require('express')
const fs      = require('fs')

const app     = express()

const markdown = require( "markdown" ).markdown

app.get('/', function (req, res) {

    const sResumePath = __dirname + '/content/RESUME.md'

    const sContent = fs.readFileSync(sResumePath, 'utf8');

    const sDoc = markdown.toHTML( sContent )

    res.send( sDoc );
})

app.listen(3000, function () {
    console.log('Running on port 3000!');
});