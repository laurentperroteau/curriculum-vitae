import debug from 'myComponents/debug/debug'

const _ = require('lodash') // TODO : require seulement besoin

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
            this.nComponent = document.getElementById( _.camelCase(`js ${this.sName}`) )
            
            if( this.nComponent !== null && html != '' ) {

                // Insert template
                this.nComponent.innerHTML = html

                // Add data and data binding
                rivets.bind( this.nComponent, this.oData )

                debug( `Init template: ${this.sName}` )
            }
            else {
                console.warn( `The element ${this.sName} is null or empty` );
            }
        }
    }
}
export default CreateComponentClass