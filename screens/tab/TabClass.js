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
                    self._showFile( this.sFileName )

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

            this._showFile( this.sFileName )

            const nElem = this.nComponent.querySelector(`.jsEventTabItemClose[data-name="${this.sFileName}"]`)

            if( nElem !== null ) this._bindUnbindCloseEvent( nElem, 'add' )
        }
    }

    /**
     * On close tab
     * ============
     * @param  {obj} e => event on click
     */
    _closeTab( e ) {

        const self = this 

        let iTabToClose = null
        let bTabWasActive = null

        const nElem = e.currentTarget

        const sFileName = nElem.dataset.name

        // We will perhaps remove an item, thus saving a clone to work with
        const aClone = _.cloneDeep( this.oData.tab )

        aClone.forEach( ( item, i, object ) => {

            if( item.name == sFileName ) {

                bTabWasActive = item.active
                iTabToClose = i

                debug(`DELETE tab ${item.name}`)

                return // Stop forEach
            }
        })

        // If the tab was active, now activate the tab with its index
        if( aClone.length > 0 && bTabWasActive && iTabToClose !== null ) {

            // If was the last open on right, close one before
            if( aClone.length == iTabToClose + 1 ) {

                const indexToActive = iTabToClose - 1

                if( aClone[ indexToActive ] !== undefined ) {

                    this._activeOtherTab( indexToActive )

                    this._showFile( aClone[ indexToActive ].name )
                }
            }
            // If not, show newt
            else {

                if( aClone[ iTabToClose + 1 ] !== undefined ) {

                    this._activeOtherTab( iTabToClose + 1 )

                    this._showFile( aClone[ iTabToClose + 1 ].name )
                }
            }
        }
        
        // Close tab to close (only after all others things)
        if( iTabToClose !== null ) {

            if( this.oData.tab[ iTabToClose ] !== undefined ) {

                this._deleteTabByIndex( iTabToClose )

                this._bindUnbindCloseEvent( nElem, 'remove' )
            }

            // If after delete, no more tab, empty editor 
            if( this.oData.tab.length === 0 ) {
                
                PubSub.publish( 'EMPTY_EDITOR', sFileName )
            }
        }
    }

    _activeOtherTab( i ) {

        this._unactiveAllTab()

        this._activeTabByIndex( i )
    }

    _showFile( sFileNameToShow ) {

        PubSub.publish( 'DISPLAY_FILE', sFileNameToShow )

        debug( 'SHOW ' + sFileNameToShow )
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