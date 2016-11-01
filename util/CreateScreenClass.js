import log from 'myService/log/log'

const _fp_camelCase = require('lodash/fp/camelCase')

const rivets = require('rivets')

rivets.configure({
    prefix: 'my',
    templateDelimiters: ['{{', '}}']
})

/**
 * Helper to create screen
 *
 * @param string sName normalise name of screen
 */
class CreateScreenClass {

    constructor( sName ) {

        this.sName = sName
        this.oData = undefined
        this.nComponent = null
    }

    setData( oData ) {
        this.oData = oData
    }

    initTemplate() {

        // Get path screens
        const sPath = `${this.sName}/${this.sName}`

        // Get template htlm
        const html = require( 'myComponent/'+ sPath + '.html' )

        // Add CSS
        require( 'myComponent/'+ sPath + '.css' )
        
        // Insert HTML
        if( this.nComponent === null ) {

            // It's a screens, and should be once.. then use an ID
            // ex: editor => jsEditor
            this.nComponent = document.getElementById( _fp_camelCase(`js ${this.sName}`) )
            
            if( this.nComponent !== null && html != '' ) {

                // Insert template
                this.nComponent.innerHTML = html

                // Add node and data binding
                rivets.bind( this.nComponent, this.oData )

                log( `Init template: ${this.sName}` )
            }
            else {
                console.warn( `The element ${this.sName} is null or empty` );
            }
        }
    }
}
export default CreateScreenClass