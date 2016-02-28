// const setting = require("json!../../shared/setting.json")
// console.log( setting );

import LinkedIn from './LinkedInClass'

const launchLinkedIn = () => {
    
    let profil = new LinkedIn( window.appLinkedIn, 'https://www.linkedin.com/in/laurent-perroteau-15a6ab68')

    profil.setPromise()

    const promiseAPI = profil.promiseAPI

    promiseAPI
        .then( (result) => {

            console.log( result )
        })
        .catch( (msg) => {
            // TODO : afficher les erreurs
            // console.log( `promesse rompue ${msg}` )
        })
}

module.exports = launchLinkedIn;