// const setting = require("json!../../shared/setting.json")
// console.log( setting );

import debug from '../debug/debug'
import log from '../log/LogCtrl'

import LinkedInClass from './LinkedInClass'

let iCountTest = 0;

const linkedInCtrl = () => {

    debug(`Test call API LinkedIn n° : ${iCountTest}`)

    if( window.appLinkedIn === undefined ) {

        // Call launched too early, repeat call
        repeatGetLinkedIn();
    }
    else {
    
        let profil = new LinkedInClass( window.appLinkedIn, 'https://www.linkedin.com/in/laurent-perroteau-15a6ab68')

        profil.setPromise()

        const promiseAPI = profil.promiseAPI

        promiseAPI
            .then( (result) => {

                displayInfo( result )
            })
            .catch( (msg) => {

                // TODO : afficher les erreurs
                log( 'Erreur LinkedIn API', msg )
            })
    }
}

module.exports = linkedInCtrl;


/**
 * Display ui info
 * ===============
 * @param  {object} oInfo => result of linkedin
 */
const displayInfo = ( oInfo ) => {

    let sText = `
                <h1>${oInfo.formattedName}</h1>
                <h2>${oInfo.headline}</h2>
                <p><em>${oInfo.location.name}</em></p>
                <p>${oInfo.summary}</p>
                `;

    const nContent = document.getElementById('content')

    nContent.innerHTML = sText
}

/**
 * Repeat linkedin init call each half second
 * ==========================================
 */
const repeatGetLinkedIn = () => {

    if( iCountTest >= 4  ) {

        log('Call API LinkedIn', 'Not readay after 2 seconde, abort')
    }
    else {

        setTimeout(function() {
            linkedInCtrl()
        }, 500);
        iCountTest++;
    }
}