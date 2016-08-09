const nContent = document.getElementById('jsLog')

/**
 * Display log
 * ===========
 * @param  {string} sMsg   => message to show
 * @param  {boolean} bError   => if is error
 * @return display alert
 */
const displayLog = ( sMsg, bError = false ) => {

    if( nContent !== null) {

        if( !nContent.classList.contains('jsIsVisible') ) {

            nContent.classList.add('jsIsVisible')
        }

        let sClass = bError ? 'error' : ''

        let sText = `<p class="${sClass}"><strong>${sMsg}</p>`

        nContent.insertAdjacentHTML( 'beforeend', sText )

        nContent.scrollTop = nContent.scrollHeight
    }
};

export default displayLog