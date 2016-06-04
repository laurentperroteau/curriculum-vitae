/**
 * Display log
 * ===========
 * @param  {string} msg   => message to show
 * @return display alert
 */
const displayLog = ( sMsg ) => {

    const nContent = document.getElementById('jsLog')

    if( nContent !== null) {

        nContent.insertAdjacentHTML(
            'beforeend', 
            `<p><strong>${sMsg}</p>`
        )
    }
};

export default displayLog