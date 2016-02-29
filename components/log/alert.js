/**
 * Display alert
 * =============
 * @param  {string} msg   => message to show
 * @return display alert
 */
let displayAlert = ( sLabel, sMsg ) => {

    const nContent = document.getElementById('alert')

    if( nContent !== null) {

        nContent.insertAdjacentHTML(
            'beforeend', 
            `<p><strong>${sLabel}</strong> : ${sMsg}</p>`
        )
    }
};

module.exports = displayAlert;