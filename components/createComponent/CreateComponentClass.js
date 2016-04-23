import debug from 'myComponents/debug/debug'
import camelize from 'myComponents/debug/camelize'

class CreateComponentClass {

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

        // Get template
        const template = require( 'myScreens/'+ sPath + '.html' )

        // Set template with json (using Mustache)
        const html = template( this.oData )

        // Add CSS
        require( 'myScreens/'+ sPath + '.css' )

        // Insert HTML
        if( this.nComponent === null ) {

            // It's a screens, and should be once.. then use an ID
            this.nComponent = document.getElementById( camelize(`js ${this.sName}` ) )

            if( html != '' ) this.nComponent.innerHTML = html

            debug( `Init template: ${this.sName}` )
        }
    }
}
export default CreateComponentClass