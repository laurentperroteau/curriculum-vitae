import debug from 'myComponents/debug/debug'
import camelize from 'myComponents/debug/camelize'

const rivets = require('rivets')

rivets.configure({
    prefix: 'my',
    templateDelimiters: ['{{', '}}']
})

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
        const html = require( 'myScreens/'+ sPath + '.html' )

        // Add CSS
        require( 'myScreens/'+ sPath + '.css' )

        // Insert HTML
        if( this.nComponent === null ) {

            // It's a screens, and should be once.. then use an ID
            this.nComponent = document.getElementById( camelize(`js ${this.sName}` ) )

            if( html != '' ) {

                // Insert template
                this.nComponent.innerHTML = html

                // Add data and data binding
                rivets.bind( this.nComponent, this.oData )

                debug( `Init template: ${this.sName}` )
            }
        }
    }
}
export default CreateComponentClass