import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
    
class EditorClass extends CreateComponentClass {

    constructor( sName ) {

        super( sName )

        this.sName = sName
        this.sFileName = ''
    }

    openFile( sFileName ) {

        if( this.sFileName == sFileName ) return false

        this.sFileName = sFileName
        const self = this

        // If tab exist yet, switch active tab        
        if( this._tabExist( this.sFileName ) ) {

            this.oData.tab.forEach( ( item ) => {

                if( !item.active && item.name == self.sFileName ) {
                    item.active = true
                    self._showFile()
                }
                else if( item.active && item.name != self.sFileName ) {
                    item.active = false
                }
            })
        }
        // Tab doesn't exist :disable all and add it
        else {
            const oNewTab = {
                name: this.sFileName,
                active: true
            }

            this._disableAllTab()

            this.oData.tab.push( oNewTab )

            // TODO : problem, on refait la boucle sur toute les tabs
            this.initCloseEvent()

            this._showFile()
        }
    }

    initCloseEvent() {

        const nItemS = this.nComponent.querySelectorAll('.jsEventTabItemClose')

        Array.from( nItemS ).forEach( ( nItem ) => {

            nItem.addEventListener('click', (e) => this._closeTab(e), false )
        })
    }

    _closeTab( e ) {

        const self = this 

        let bTabWasActive = false
        let iLastItem = 0

        const nElem = e.currentTarget

        const sFileName = nElem.dataset.name

        this.oData.tab.forEach( ( item, i, object ) => {

            if( item.name == sFileName ) {

                bTabWasActive = item.active
                iLastItem = i

                return object.splice(i, 1)
            }
        })

        // If the tab was active, now activate the tab with the index of the closed
        if( bTabWasActive ) {

            // TODO : a retester
            this.oData.tab[ iLastItem ].active = true
        }
    }

    _activeOtherTab( i ) {

        let newIndex = 0

        if( i == 0 ) newIndex = 1


    }

    _tabExist() {

        // TODO test avec lodash = https://lodash.com/docs#findIndex si besoin
        return this.oData.tab.map((e) => { return e.name }).indexOf( this.sFileName ) != -1
    }

    _disableAllTab() {

        this.oData.tab.map((x) => { 
            x.active = false
            return x
        })
    }

    _showFile() {

        console.log( 'show ' + this.sFileName );
    }
}
export default EditorClass