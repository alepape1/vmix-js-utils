const axios = require('axios')
const querystring = require("querystring")

const Connection = require('./connection')

module.exports = class CommandSender {
    constructor(connection, onSuccess, onError) {
        if (!connection || !connection instanceof Connection) {
            throw Error("Need a connection!")
        }

        this.connection = connection

        this.onError = onError
        this.onSuccess = onSuccess

        // Prepare promise
        this.preparePromise = (commands) => {
            // If only one command were coded - send via get request
            if (!Array.isArray(commands)) {
                let command = commands

                return axios.get(this.connection.apiUrl(), { params: command })
            }
            // If multiple commands - send via POST request

            // Manipulate commands for being sent in POST request
            commands = commands.map(command => {
                return querystring.stringify(command)
            })

            let data = {
                Function: 'ScriptStartDynamic',
                Value: commands.join("\n\r")
            }

            return axios.post(this.connection.apiUrl(), data)
        }
    }

    send(commands, onSuccess, onError) {

        let promise = this.preparePromise(commands)

        promise
            .then(response => {
                this.onSuccess && this.onSuccess(response)
                onSuccess && onSuccess(response)
            })
            .catch(error => {
                this.onError && this.onError(error)
                onError && onError(error)
            })

        return promise
    }
}
