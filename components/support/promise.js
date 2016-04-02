const supportPromise = () => {

    return typeof Promise !== undefined && Promise.toString().indexOf("[native code]") !== -1
};

module.exports = supportPromise;