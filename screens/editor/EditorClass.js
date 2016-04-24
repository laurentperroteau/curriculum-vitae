import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
    
class EditorClass extends CreateComponentClass {

    constructor( sName ) {

        super( sName )

        this.sName = sName
    }

    openFile( sFileName ) {

        // console.log( sFileName )
        // console.log( this.oData.tab )
        
        if( this._tabExist( sFileName ) ) {

            this.oData.tab.forEach(function( o ) {

                if( !o.active && o.name == sFileName ) {
                    o.active = true
                }
                else if( o.active && o.name != sFileName ) {
                    o.active = false
                }
            })
        }
        else {
            const oNewTab = {
                name: sFileName,
                active: true
            }

            this._disableAllTab()

            this.oData.tab.push( oNewTab )
        }
        
        /*const nTabItem = this.nComponent.querySelectorAll('.jsTabItem')
        nTabItem[0].classList.add('jsIsVisible','jsIsActive')
        nTabItem[1].classList.add('jsIsVisible')*/
    }

    _tabExist( sFileName ) {

        // TODO test avec lodash = https://lodash.com/docs#findIndex si besoin
        return this.oData.tab.map((e) => { return e.name }).indexOf( sFileName ) != -1
    }

    _disableAllTab() {

        this.oData.tab.map((x) => { 
            x.active = false
            return x
        })
    }
}
export default EditorClass