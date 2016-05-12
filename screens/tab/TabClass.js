const _ = require('lodash') // TODO : require seulement besoin

const PubSub = require('pubsub-js')

import debug from 'myComponents/debug/debug'
import CreateComponentClass from 'myComponents/createComponent/CreateComponentClass'
    
class TabClass extends CreateComponentClass {

    constructor( sName ) {

        super( sName )

        this.sName = sName
        this.sFileName = ''
        this.aCloseEvent = []
    }

    closeEventOnLoad() {

        const self = this

        const nItemS = this.nComponent.querySelectorAll('.jsEventTabItemClose')

        Array.from( nItemS ).forEach( ( nItem ) => {

            this._bindUnbindCloseEvent( nItem, 'add' )
        })
    }

    openTab( sFileName ) {

        if( this.sFileName == sFileName ) return false

        this.sFileName = sFileName

        const self = this

        // If tab exist yet, switch active tab        
        if( this._getIndexTabByName( this.sFileName ) !== -1 ) {

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
        // Tab doesn't exist : unactive all and add it
        else {
            this._unactiveAllTab()

            this._addTabWithName( this.sFileName )

            this._showFile()

            const nElem = this.nComponent.querySelector(`.jsEventTabItemClose[data-name="${this.sFileName}"]`)

            if( nElem !== null ) this._bindUnbindCloseEvent( nElem, 'add' )
        }
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

                debug(`DELETE tab ${item.name}`)

                this._deleteTabByIndex( i )

                this._bindUnbindCloseEvent( nElem, 'remove' )

                return // Stop forEach
            }
        })

        // If the tab was active, now activate the tab with the index of the closed
        if( this.oData.tab.length > 0 && bTabWasActive ) {

            if( this.oData.tab.length <= iLastItem ) {

                this._activeOtherTab( this.oData.tab.length - 1 )
            }
            else {
                this._activeOtherTab( iLastItem )
            }
        }

        if( !this.oData.tab.length ) {
            
            PubSub.publish( 'DELETE_FILE', sFileName )
        }
    }

    _activeOtherTab( i ) {

        this._unactiveAllTab()

        this._activeTabByIndex( i )
    }

    _showFile() {

        PubSub.publish( 'DISPLAY_FILE', this.sFileName )

        debug( 'SHOW ' + this.sFileName )
    }

    _bindUnbindCloseEvent( nItem, sType ) {

        if( sType == 'add' ) {

            nItem.addEventListener('click', (e) => this._closeTab(e), false )
        }
        else {
            nItem.removeEventListener('click', (e) => this._closeTab(e), false )
        }
    }


    // Array tabs method tested
    // ------------------------

    _getIndexTabByName( sFileName ) {

        return _.findIndex(this.oData.tab, function(o) { return o.name == sFileName })
    }

    _getIndexActiveTab() {

        return _.findIndex(this.oData.tab, function(o) { return o.active == true })
    }

    _deleteTabByIndex( i ) {

        this.oData.tab.splice(i, 1)
    }

    _addTabWithName( sFileName ) {

        const oNewTab = {
            name: sFileName,
            active: true
        }

        this.oData.tab.push( oNewTab )
    }

    _unactiveAllTab() {

        // TODO: voir utilise loadash
        this.oData.tab.map((x) => { 
            x.active = false
            return x
        })
    }

    _activeTabByIndex( i ) {

        this.oData.tab[ i ].active = true
    }
}
export default TabClass