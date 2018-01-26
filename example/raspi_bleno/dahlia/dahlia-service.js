var util = require('util');
var bleno = require('../');

var DahliaLightingCharacteristic = require('./dahlia-lighting-characteristic');

function DahliaService(dahlia) {
    bleno.PrimaryService.call(this, {
        uuid: '13333333333333333333333333333337',
        characteristics: [
            new DahliaLightingCharacteristic(dahlia),
        ]
    });
}

util.inherits(DahliaService, bleno.PrimaryService);

module.exports = DahliaService;
