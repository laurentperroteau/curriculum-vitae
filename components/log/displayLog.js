/**
 * Display log
 * ===========
 * @param  {string} msg   => message to show
 * @return display alert
 */
const displayLog = (sLabel,sMsg) => {

    const nContent = document.getElementById('alert')

    if( nContent !== null) {

        nContent.insertAdjacentHTML(
            'beforeend', 
            `<p><strong>${sLabel}</strong> : ${sMsg}</p>`
        )
    }
};

export default displayLog