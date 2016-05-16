import $http from 'myComponents/async/http'

const PubSub = require('pubsub-js')

import debug from 'myComponents/debug/debug'
import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
import WriteClass from 'myComponents/write/WriteClass'

    
class EditorClass extends CreateComponentClass {

    constructor( sName ) {
        super( sName )

        this.sName = sName
        this.bIsTecnic = false
        this.nOutputCtn = null
    }

    /**
     * Init output (set elem and init class)
     * =====================================
     * @param  {string} sId => elem id
     */
    initOutpupCtn( sId ) {

        this.nOutputCtn = document.getElementById( sId )

        this.WriteClass = new WriteClass( this.nOutputCtn, this.bIsTecnic )
    }

    /**
     * Init writting
     * =============
     * @param  {string} sCode => code to display
     * @return {$promise}       
     */
    initWrite( sCode ) {

        return this.WriteClass.init( sCode )
    }

    /**
     * Show output
     * ===========
     * @param  {string} sFileName 
     */
    showOutput( sFileName ) {

        this._getRawText( sFileName )
    }

    removeOutput() {

        const self = this

        this.WriteClass.stop()

        setTimeout(function() {
            self.nOutputCtn.innerHTML = ''
        }, 100);
    }

    /**
     * Get raw text (async call)
     * =========================
     * @param  {string} sPathFile 
     */
    _getRawText( sPathFile ) {

        debug( `GET ./tree/${sPathFile}.txt` );

        const sLanguage = this._getLanguage( sPathFile )

        $http(`./tree/${sPathFile}.txt`)
            .get()
            .then( (data) => {
                    
                this._displayOutput( data, sLanguage )
            })
            .catch( (error) => {

                console.warn( error )
            })
    }

    /**
     * Display/print code
     * ==================
     * @param  {string} sOutput   
     * @param  {string} sLanguage => language-{js/css/html}
     */
    _displayOutput( sOutput, sLanguage ) {

        // Stop writting
        if( this.WriteClass.isWritting ) {
            this.WriteClass.stop()
        }

        // If convert HTML to string
        if( sLanguage == 'language-html' ) {
            sOutput = this._htmlEntities( sOutput )
        }

        // Print code
        this.nOutputCtn.innerHTML = sOutput

        // Switch class for Prism
        this.nOutputCtn.className = ''
        this.nOutputCtn.classList.add( sLanguage )

        // Remove spellcheck
        this._disableSpellCheck

        Prism.highlightAll()

        debug(`SHOW new fille, highlight then`)
    }

    /**
     * Get current language
     * ====================
     * @param  {string} sPathFile 
     * @return {string} => class name to add for Prism
     */
    _getLanguage( sPathFile ) {

        if( sPathFile.indexOf('.html') !== - 1 ) {
            return 'language-html';
        }
        else if( sPathFile.indexOf('.css') !== - 1 ) {
            return 'language-css';
        }
        else {
            return 'language-js';
        }
    }

    /**
     * HTML entities
     * =============
     * @param  {string} html markup
     * @return {string} => html with escaped <, > and &
     */
    _htmlEntities( html ) {

        return String(html).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    }


    _disableSpellCheck() {

        this.nOutputCtn.spellcheck = false;
        this.nOutputCtn.focus();
        this.nOutputCtn.blur();
    }
}
export default EditorClass