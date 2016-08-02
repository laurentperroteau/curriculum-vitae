import log from 'myComponents/log/log'

const _ = require('lodash') // TODO : require seulement besoin

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
        const html = require( 'myScreens/'+ sPath + '.html' )

        // Add CSS
        require( 'myScreens/'+ sPath + '.css' )
        
        // Insert HTML
        if( this.nComponent === null ) {

            // It's a screens, and should be once.. then use an ID
            // ex: editor => jsEditor
            this.nComponent = document.getElementById( _.camelCase(`js ${this.sName}`) )
            
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