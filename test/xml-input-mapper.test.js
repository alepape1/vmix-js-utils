// Using assert library
const assert = require('assert')

// Import the modules
const { XmlApiDataParser, XmlInputMapper } = require('../dist/index')

const data = `
<vmix>
<version>20.0.0.55</version>
<edition>Pro</edition>
<inputs>
<input key="69aa648d-3984-41bf-bd62-7255edff9a6d" number="1" type="Blank" title="Blank" state="Paused" position="0" duration="0" loop="False">Blank</input>
<input key="6723ec7c-6c15-409c-a838-0bf51a05711e" number="2" type="Blank" title="Blank" state="Paused" position="0" duration="0" loop="False">Blank</input>
</inputs>
<overlays>
<overlay number="1"/>
<overlay number="2"/>
<overlay number="3"/>
<overlay number="4"/>
<overlay number="5"/>
<overlay number="6"/>
</overlays>
<preview>1</preview>
<active>2</active>
<fadeToBlack>False</fadeToBlack>
<transitions>
<transition number="1" effect="Fade" duration="500"/>
<transition number="2" effect="Merge" duration="1000"/>
<transition number="3" effect="Wipe" duration="1000"/>
<transition number="4" effect="CubeZoom" duration="1000"/>
</transitions>
<recording>False</recording>
<external>False</external>
<streaming>False</streaming>
<playList>False</playList>
<multiCorder>False</multiCorder>
<fullscreen>False</fullscreen>
<audio>
<master volume="100" muted="False" meterF1="0" meterF2="0" headphonesVolume="100"/>
<busA volume="100" muted="False" meterF1="0" meterF2="0"/>
<busB volume="100" muted="False" meterF1="0" meterF2="0"/>
</audio>
</vmix>
`

describe('xml-input-mapper', function () {
    it('should have 2 inputs from the sample data', function () {
        const xmlContent = XmlApiDataParser.parse(data)
        const inputs = XmlInputMapper.extractInputsFromXML(xmlContent)

        // Manipulate to wanted format
        const inputsMap = XmlInputMapper.mapInputs(inputs)
        const inputsList = Object.values(inputsMap)

        // Assert the inputs were found
        assert.equal(inputsList.length, 2, 'Did not See expected number of inputs')
    })

    it('should have 2 default inputs from the sample data which is both blank', function () {

        const xmlContent = XmlApiDataParser.parse(data)
        const inputs = XmlInputMapper.extractInputsFromXML(xmlContent)

        // Manipulate to wanted format
        const inputsMap = XmlInputMapper.mapInputs(inputs)
        const inputsList = Object.values(inputsMap)

        // Assert the inputs were found
        assert.equal(inputsList[0].type, 'Blank')
        assert.equal(inputsList[1].type, 'Blank')
    })

    it('should have input 1 as active preview', function () {
        const xmlContent = XmlApiDataParser.parse(data)

        const preview = XmlInputMapper.extractPreviewFromXML(xmlContent)

        // Assert the preview input number
        assert.equal(preview, 1)
    })

    it('should have input 2 as active program', function () {

        const xmlContent = XmlApiDataParser.parse(data)

        const program = XmlInputMapper.extractProgramFromXML(xmlContent)

        // Assert the program input number
        assert.equal(program, 2)
    })
})