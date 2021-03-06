import log from 'myService/log/log'
import LogCtrl from 'myService/log/LogCtrl'

class LinkedIn {

    constructor(oApp, sUrlProfil) {

        this.oApp        = oApp
        this.sUrlProfil  = sUrlProfil
        this.oDataProfil = {}
    }

    setPromise() {

        return new Promise( (resolve, reject) => {

            this._callAPI( resolve, reject )
        })
    }

    _callAPI( resolve, reject ) {

        log('Call LinkedIn api ')

        this.oApp.API.Profile( this.sUrlProfil )
            .fields(
                "id",
                "firstName", 
                "lastName", 
                "formatted-name",
                "headline",
                "location",
                "industry",
                "summary",
                "specialties",
                "positions", // Only current positions are available for people other than the authenticated member.
                "picture-url"
            )                
            .result( resolveData )
            .error( rejectData )

        function resolveData( profile ) {

            log('Result LinkedIn api :'+ profile._total )

            return resolve( profile.values[0] )
        }

        function rejectData( error ) {

            console.warn( error );

            return reject( error.message )
        }
    }
}
export default LinkedIn