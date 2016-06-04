const nContent = document.getElementById('jsLog')

/**
 * Display log
 * ===========
 * @param  {string} msg   => message to show
 * @return display alert
 */
const displayLog = ( sMsg, bError = false ) => {

    if( nContent !== null) {

        if( !nContent.classList.contains('jsIsVisible') ) {

            nContent.classList.add('jsIsVisible')
        }

        const sClass = bError ? 'error' : ''

        const sText = `<p class="${sClass}"><strong>${sMsg}</p>`

        nContent.insertAdjacentHTML( 'beforeend', sText )

        nContent.scrollTop = nContent.scrollHeight
    }
};

export default displayLog