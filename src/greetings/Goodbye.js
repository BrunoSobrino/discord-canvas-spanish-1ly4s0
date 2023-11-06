
const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "ADIÓS";
        this.textMessage = "Grupo: {server}";
        this.colorTitle = "#03A9F4";
    }
};
