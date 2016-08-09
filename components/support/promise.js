const supportPromise = () => {

    if( typeof Promise !== 'undefined' ) {

        return Promise.toString().indexOf("[native code]") !== -1
    }
    else {
        return false;
    }
};

export default supportPromise;