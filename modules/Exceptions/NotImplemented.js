class NotImplementedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotImplementedException'
    }
}

module.exports = NotImplementedException;