import $http from 'myService/async/http'

const PubSub = require('pubsub-js')

import log from 'myService/log/log'
import CreateComponent from 'myUtil/CreateComponent'
import WriteClass from 'myService/write/WriteClass'

    
class EditorClass extends CreateComponent {

    constructor( sName ) {
        super( sName )

        this.sName        = sName
        this.bIsTecnic    = false
        this.nCodeCtn     = null
        this.nMarkdownCtn = null
    }

    /**
     * Init output (set elem and init class)
     * =====================================
     * @param  {string} sId => elem id
     */
    initCodeCtn( sId ) {

        this.nCodeCtn = document.getElementById( sId )

        this.WriteClass = new WriteClass( this.nCodeCtn, this.bIsTecnic )
    }

    setMarkdownCtn( sId ) {
        
        this.nMarkdownCtn = document.getElementById( sId )
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
            self.nCodeCtn.innerHTML = ''
            self.nMarkdownCtn.innerHTML = ''
            self.nMarkdownCtn.classList.add('jsIsHidden')
        }, 100);
    }

    /**
     * Get raw text (async call)
     * =========================
     * @param  {string} sPathFile 
     */
    _getRawText( sPathFile ) {

        log( `GET content of ./${sPathFile}` );

        const sLanguage = this._getLanguage( sPathFile )

        $http(`./${sPathFile}`)
            .get()
            .then( (data) => {
                    
                this._displayOutput( data, sLanguage )
            })
            .catch( (error) => {

                this._displayOutput( '404 - Page not found', 'html' )
                log(`Can't get ./${sPathFile}`, true)
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

        // If mardwon, convert to HTML
        if( sLanguage == 'markdown' ) {
            sOutput = Markdown.toHTML( sOutput )
            this._displayMarkdown( sOutput )
        }
        else {
            this._displayCode( sOutput, sLanguage )
        }
    }

    _displayMarkdown( sOutput ) {

        // Print code
        this.nMarkdownCtn.innerHTML = sOutput

        this.nMarkdownCtn.classList.remove('jsIsHidden')
        this.nCodeCtn.parentNode.classList.add('jsIsHidden')

        log(`SHOW markdown file and highlight then`)
    }

    _displayCode( sOutput, sLanguage ) {

        // Print code
        this.nCodeCtn.innerHTML = sOutput

        this.nCodeCtn.parentNode.classList.remove('jsIsHidden')
        this.nMarkdownCtn.classList.add('jsIsHidden')

        // Switch class for Prism
        this.nCodeCtn.className = ''
        this.nCodeCtn.classList.add( sLanguage )

        // Remove spellcheck
        this._disableSpellCheck( this.nCodeCtn )

        if( typeof Prism != 'undefined' && sLanguage != 'markdown-body' ) {
            Prism.highlightAll()
        }

        log(`SHOW code file and highlight then`)
    }

    /**
     * Get current language
     * ====================
     * @param  {string} sPathFile 
     * @return {string} => class name to add for Prism
     */
    _getLanguage( sPathFile ) {

        if( sPathFile.indexOf('.md') !== - 1 ) {
            return 'markdown';
        }
        else if( sPathFile.indexOf('.html') !== - 1 ) {
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


    _disableSpellCheck( nElem ) {

        nElem.spellcheck = false;
        nElem.focus();
        nElem.blur();
    }
}
export default EditorClass