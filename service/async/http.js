/**
 * HTTP request
 * ============
 * @param  {string} sUrl 
 * @return {object} => promise of result
 * @thanks => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
 */
const $http = ( sUrl ) => {

    'use strict'

    const core = {

        // Method that performs the ajax request
        ajax: (method, sUrl, args) => {

            // Creating a promise
            const promise = new Promise( (resolve, reject) => {

                // Instantiates the XMLHttpRequest
                const client = new XMLHttpRequest()
                let uri = sUrl

                if( args && (method === 'POST' || method === 'PUT') ) {

                    uri += '?'

                    let argcount = 0

                    for( const key in args ){

                        if( args.hasOwnProperty(key) ){
                            
                            if( argcount++ ) {
                                uri += '&'
                            }
                            uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key])
                        }
                    }
                }

                client.open( method, uri )

                client.send()

                client.onload = function() {

                    if( this.status >= 200 && this.status < 300 ){
                        // Performs the function "resolve" when this.status is equal to 2xx
                        resolve(this.response)
                    } 
                    else {
                        // Performs the function "reject" when this.status is different than 2xx
                        reject( this.status +' - '+ this.statusText)
                    }
                }

                client.onerror = function() {
                    reject( this.status +' - '+ this.statusText)
                }
            })

            // Return the promise
            return promise
        }
    }

    // Adapter pattern
    return {
        'get': (args) => {
            return core.ajax('GET', sUrl, args)
        },
        'post': (args) => {
            return core.ajax('POST', sUrl, args)
        },
        'put': (args) => {
            return core.ajax('PUT', sUrl, args)
        },
        'delete': (args) => {
            return core.ajax('DELETE', sUrl, args)
        }
    }
}
export default $http