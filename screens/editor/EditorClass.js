import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
    
class EditorClass extends CreateComponentClass {

    constructor( sName ) {

        super( sName )

        this.sName = sName
    }

    openFile( sFileName ) {

        console.log( sFileName )
        console.log( this.oData )

        this.oData.tab.forEach(function( o ){

            if( o.name == sFileName ) {
                o.class = 'jsIsActive'
            }
        })

        console.log( this.oData );
        
        /*const nTabItem = this.nComponent.querySelectorAll('.jsTabItem')
        nTabItem[0].classList.add('jsIsVisible','jsIsActive')
        nTabItem[1].classList.add('jsIsVisible')*/
    }
}
export default EditorClass