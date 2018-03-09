const axios = require('axios')

module.exports = class Connection {
    constructor(host = 'localhost', port = 8088) {

        // Validate host and port
        if (!host || host.length < 3) {
            throw new ApiUrlError('Invalid host provided')
        }
        if (!port || port < 80 || port > 99999) {
            throw new ApiUrlError('Invalid port provided')
        }

        // Set params
        this.host = host
        this.port = port
    }

    // Public functions
    webcontrollerUrl() {
        return `http://${this.host}:${this.port}`
    }

    apiUrl() {
        // For testing purposes
        if (this.port === 1) {
            return `http://localhost:${location.port}/data/vmix-data.xml`
        }

        return `${this.webcontrollerUrl()}/api`
    }

    testConnection() {
        axios.get(this.webcontrollerUrl(), { timeout: 500 })
            .then(_ => {
                return true
            })
            .catch(_ => {
                return false
            })
    }
}