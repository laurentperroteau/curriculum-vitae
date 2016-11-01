'use strict'

/* 
    Use node.js, express and prerender.io
        to this website can be crawled 
        by search engines like Google
    ======================================
*/

const express  = require('express')
const fs       = require('fs')

// Set express
const app      = express()

const markdown = require('markdown').markdown
const config   = require('./config/global.config')

// Active prerender.io
app.use( require('prerender-node') )

// On home, send metas and resume
app.get('/', function (req, res) {

    const sResumePath = __dirname + '/content/RESUME.md'

    const sContent = fs.readFileSync(sResumePath, 'utf8');

    let sHTML = markdown.toHTML( sContent )

    if( config.TITLE_TAG !== undefined && config.DESCRIPTION_TAG !== undefined ) {
        sHTML = `${config.TITLE_TAG} ${config.DESCRIPTION_TAG} ${sHTML}`
    }

    res.send( sHTML );
})

app.listen(3000, function () {
    console.log('Running on port 3000!');
});