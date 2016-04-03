/**
 * Get json from async call
 * ========================
 * @param  {string} sUrl 
 * @return {object} => promise of result
 * @thanks => http://blog.mgechev.com/2014/12/21/handling-asynchronous-calls-with-es6-javascript-generators/
 */
const getAsyncJson = ( sUrl ) => {

    'use strict'

    const xhr      = new XMLHttpRequest()
    const oPromise = Promise.defer()

    xhr.onreadystatechange = () => {

        if( xhr.readyState === 4 ) {

            if( xhr.status === 200 ) {
                oPromise.resolve( JSON.parse(xhr.responseText) )
            } 
            else {
                oPromise.reject( xhr.responseText )
            }
        }
    }
    
    xhr.open('GET', sUrl)
    xhr.send()

    return oPromise.promise
}
export default getAsyncJson