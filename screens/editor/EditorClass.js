import debug from 'myComponents/debug/debug'
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

                    debug(`ACTIVE tab ${item.name}`)
                }
                else if( item.active && item.name != self.sFileName ) {
                    item.active = false
                    
                    debug(`ACTIVE tab ${item.name}`)
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

        console.log( this.oData.tab );

        this.oData.tab.forEach( ( item, i, object ) => {

            if( item.name == sFileName ) {

                bTabWasActive = item.active
                iLastItem = i

                debug(`DELETE tab ${item.name}`)

                return object.splice(i, 1)
            }
        })

        // If the tab was active, now activate the tab with the index of the closed
        if( bTabWasActive ) {

            // console.log( iLastItem );

            if( this.oData.tab.length <= iLastItem ) {

                this._activeOtherTab( this.oData.tab.length - 1 )
            }
            else {
                this._activeOtherTab( iLastItem )
            }
        }
    }

    _activeOtherTab( i ) {

        const newIndex = i == 0 ? 1 : i;

        console.log( newIndex );

        // this.oData.tab[ newIndex ].active = true
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

        debug( 'SHOW ' + this.sFileName );
    }


    getIndexTabByName( sFileName ) {

        return _.findIndex(this.oData.tab, function(o) { return o.name == sFileName })
    }

    getIndexActiveTab() {

        return _.findIndex(this.oData.tab, function(o) { return o.active == true })
    }

    deleteTabByIndex( i ) {

        this.oData.tab.splice(i, 1)
    }

    addTabWithName( sFileName ) {

        const oNewTab = {
            name: sFileName,
            active: true
        }

        this.oData.tab.push( oNewTab )
    }

    unactiveTab() {

        const iCurrentActive = getIndexActiveTab()

        if( iCurrentActive !== -1 ) {

            this.oData.tab[ iCurrentActive ].active = false
        }

        /*this.oData.tab.map((x) => { 
            x.active = false
            return x
        })*/
    }

    activeTabByIndex( i ) {

        this.oData.tab[ i ].active = true
    }
}
export default EditorClass