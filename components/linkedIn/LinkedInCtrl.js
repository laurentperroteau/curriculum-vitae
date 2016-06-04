
import log from 'myComponents/log/log'
import log from '../log/LogCtrl'

import LinkedInClass from './LinkedInClass'

let iCountTest = 0;

const linkedInCtrl = () => {

    log(`Test call API LinkedIn n° : ${iCountTest}`)

    if( window.appLinkedIn === undefined ) {

        // Call launched too early, repeat call
        repeatGetLinkedIn();
    }
    else {
    
        const profil = new LinkedInClass( window.appLinkedIn, config.LINKEDIN_PERFIL_URL)

        const promiseAPI = profil.setPromise()

        promiseAPI
            .then( (result) => {

                displayInfo( result )
            })
            .catch( (msg) => {

                log( 'Erreur LinkedIn API', true )
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

    const sText = `
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

        log('Call API LinkedIn not ready after 2 secondes, abort !', true)
    }
    else {

        setTimeout(function() {
            linkedInCtrl()
        }, 500)

        iCountTest++;
    }
}