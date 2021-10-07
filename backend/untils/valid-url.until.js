const stringValidUrl = (s) => {
    try {
        new URL(s);
        return true;
    } catch (err) {
        return false;
    }
};

module.exports = {
    stringValidUrl
}