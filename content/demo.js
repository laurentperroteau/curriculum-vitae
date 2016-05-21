/**
 * Get raw text (async call)
 * =========================
 * @param  {string} sPathFile 
 */
_getRawText( sPathFile ) {

    debug( `GET ./${sPathFile}` );

    const sLanguage = this._getLanguage( sPathFile )

    $http(`./${sPathFile}`)
        .get()
        .then( (data) => {
                
            this._displayOutput( data, sLanguage )
        })
        .catch( (error) => {

            this._displayOutput( '404 - Page not found', 'html' )
            console.warn( error )
        })
}