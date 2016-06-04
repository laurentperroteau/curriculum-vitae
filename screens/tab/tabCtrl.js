const _ = require('lodash')

import store from 'myComponents/localStorage/store'

import TabClass from 'myScreens/tab/TabClass'

const PubSub = require('pubsub-js')

const tabCtrl = {

    init: function() {

        const oTab = {
            "tab": []
        }  

        const bShowSavedTab = confirm('Voulez-vous restaurez les onglets de la dernière session précédemente ?')

        if( bShowSavedTab && store.getTab('oTab') !== null ) {

            oTab.tab = _.concat( oTab.tab, store.getTab('oTab').tab )          
        }
        else {

            oTab.tab.push( 
                {
                    name    : "demo.js",
                    fullPath: "./content/demo.js",
                    active  : true
                }
            )
        }

        this.Tab = new TabClass('tab')

        this.Tab.setData( oTab )

        this.Tab.initTemplate()

        this.Tab.openEventOnLoad()
        this.Tab.closeEventOnLoad()


        const onTabPublish = ( msg, data ) => {

            // Arrow fonction have not this, then this is tabCtrl
            if( data !== undefined ) this.Tab.openTab( data )
        }

        PubSub.subscribe('OPEN_TAB', onTabPublish )
    },

    /**
     * Open tab
     * ========
     * @param  {obj} oTab
     */
    // TODO : corriger, la function existe déjà dans la classe, je me répète
    openTab: function( oTab ) {
        
        this.Tab.openTab( oTab )
    },
    isTabOpen: function( sName ) {

        return this.Tab._getIndexActiveTab == this.Tab._getIndexTabByName( sName )
    }
}
export default tabCtrl