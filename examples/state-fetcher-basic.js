// Dependencies
const Connection = require('../src/connection')
const StateFetcher = require('../src/state-fetcher')
const InputMapper = require('../src/input-mapper')
const ApiDataParser = require('../src/api-data-parser')

// Modules
let connection = new Connection('localhost', 8088)
let stateFetcher = new StateFetcher(connection)

// Register callback on state fetcher success
// When data is fetched, what to do with it?
stateFetcher.registerCallbackOnSuccess(data => {
    // Manipulate data
    let xmlContent = ApiDataParser.parse(data)
    let inputs = InputMapper.extractInputsFromXML(xmlContent)
    let inputsMap = InputMapper.mapInputs(inputs)
    let inputsList = Object.values(inputsMap)

    console.log("I did read from the vMix API! Inputs: ", inputs.length)
})

stateFetcher.registerCallbackOnError(error => {
    console.error(`Error.. Not able to read API data from a vMix web controller.. Trying again in ${stateFetcher.currentRefreshRate()}ms`)
    //console.error(error)
})

// Start the state fetcher - it then runs 10 times a second
stateFetcher.start()