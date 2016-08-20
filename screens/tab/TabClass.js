// Lodash: on import method only, using param is diferent on some method
// @info: https://github.com/lodash/lodash/wiki/FP-Guide
const _fp_cloneDeep = require('lodash/fp/cloneDeep')
const _fp_findIndex = require('lodash/fp/findIndex')

const PubSub = require('pubsub-js')

import store from 'myComponents/localStorage/store'
import log from 'myComponents/log/log'

import CreateScreenClass from 'myComponents/createScreen/CreateScreenClass'

class TabClass extends CreateScreenClass {

    constructor( sName ) {

        super( sName )

        this.sName         = sName
        this.sFileName     = ''
        this.sFileFullPath = ''
    }

    openEventOnLoad() {

        const nItemS = this.nComponent.querySelectorAll('.jsEventTabItem')

        Array.from( nItemS ).forEach( ( nItem ) => {

            this._bindUnbindOpenEvent( nItem, 'add' )
        })
    }

    closeEventOnLoad() {

        const nItemS = this.nComponent.querySelectorAll('.jsEventTabItemClose')

        Array.from( nItemS ).forEach( ( nItem ) => {

            this._bindUnbindCloseEvent( nItem, 'add' )
        })
    }

    /**
     * Open tab (calling or triggring)
     * ===============================
     * @param  {obj} data => mouse event or dataset
     */
    openTab( data ) {

        if( data.target !== undefined ) {
            data = data.target.dataset
        }

        if( this.sFileName == data.name ) return false

        this.sFileName     = data.name
        this.sFileFullPath = data.fullPath

        const self = this

        // If tab exist yet, switch active tab        
        if( this._getIndexTabByName( this.sFileName ) !== -1 ) {

            this.oData.tab.forEach( ( item ) => {

                if( !item.active && item.name == self.sFileName ) {

                    item.active = true
                    self._showFile( this.sFileFullPath )

                    log(`ACTIVE tab ${item.name}`)
                }
                else if( item.active && item.name != self.sFileName ) {

                    item.active = false
                    
                    log(`ACTIVE tab ${item.name}`)
                }

            })
        }
        // Tab doesn't exist : unactive all and add it
        else {
            this._unactiveAllTab()

            this._addTabWithName()

            this._showFile( this.sFileFullPath )

            // TODO: bof...
            const nElemTab = this.nComponent.querySelector(`.jsEventTabItem[data-name="${this.sFileName}"]`)
            const nElemBtnClose = this.nComponent.querySelector(`.jsEventTabItemClose[data-name="${this.sFileName}"]`)

            if( nElemTab !== null && nElemBtnClose !== null ) {

                this._bindUnbindOpenEvent( nElemTab, 'add' )
                this._bindUnbindCloseEvent( nElemBtnClose, 'add' )
            }
        }
    }

    /**
     * On close tab
     * ============
     * @param  {obj} e => event on click
     */
    _closeTab( e ) {

        let iTabToClose = null
        let bTabWasActive = null

        const nElem = e.currentTarget

        const sFileName = nElem.dataset.name

        // We will perhaps remove an item, thus saving a clone to work with
        const aClone = _fp_cloneDeep( this.oData.tab )

        aClone.forEach( ( item, i, object ) => {

            if( item.name == sFileName ) {

                bTabWasActive = item.active
                iTabToClose = i

                log(`DELETE tab ${item.name}`)

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

                    this._showFile( aClone[ indexToActive ].fullPath )
                }
            }
            // If not, show next
            else {

                if( aClone[ iTabToClose + 1 ] !== undefined ) {

                    this._activeOtherTab( iTabToClose + 1 )

                    this._showFile( aClone[ iTabToClose + 1 ].fullPath )
                }
            }
        }
        
        // Close tab to close (only after all others things)
        if( iTabToClose !== null ) {

            if( this.oData.tab[ iTabToClose ] !== undefined ) {

                this._deleteTabByIndex( iTabToClose )

                this._bindUnbindOpenEvent( nElem.parentElement, 'remove' )
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

    _bindUnbindOpenEvent( nItem, sType ) {

        if( sType == 'add' ) {

            nItem.addEventListener('click', (e) => this.openTab(e), false )
        }
        else {
            nItem.removeEventListener('click', (e) => this.openTab(e), false )
        }
    }

    _bindUnbindCloseEvent( nItem, sType ) {

        if( sType == 'add' ) {

            nItem.addEventListener('click', (e) => this._closeTab(e), false )
        }
        else {
            nItem.removeEventListener('click', (e) => this._closeTab(e), false )
        }
    }

    _updateStore() {

        store.setTab( this.oData )
        log('Save tab in localStorage')
    }


    // Tabs event tested
    // -----------------

    _showFile( sFileFullPath ) {

        PubSub.publish( 'DISPLAY_FILE', sFileFullPath )

        log( 'PUBLISH display file event of ' + sFileFullPath )
    }
    

    // Array tabs method (tested)
    // --------------------------

    _getIndexTabByName( sFileName ) {

        return _fp_findIndex( function(o) { return o.name == sFileName } )( this.oData.tab )
    }

    _getIndexActiveTab() {

        return _fp_findIndex( function(o) { return o.active == true } )( this.oData.tab )
    }

    _deleteTabByIndex( i ) {

        this.oData.tab.splice(i, 1)
        this._updateStore()
    }

    _addTabWithName() {

        const oNewTab = {
            name     : this.sFileName,
            fullPath : this.sFileFullPath,
            active   : true
        }

        this.oData.tab.push( oNewTab )
        this._updateStore()
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
        this._updateStore()
    }
}
export default TabClass