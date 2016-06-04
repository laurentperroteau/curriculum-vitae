
const store = {

    setTab: function( oTab ) {

        if( typeof( Storage ) !== undefined ) {

            localStorage.setItem("oTab", JSON.stringify( oTab ))   
        }
    },
    getTab: function() {

        if( typeof( Storage ) !== undefined ) {
            return JSON.parse( localStorage.getItem("oTab") )
        }
    }
}
export default store