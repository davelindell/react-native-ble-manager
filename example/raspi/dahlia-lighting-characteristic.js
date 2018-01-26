var util = require('util');
var bleno = require('../..');
var dahlia = require('./dahlia');

function DahliaLightingCharacteristic(dahlia) {
  bleno.Characteristic.call(this, {
    uuid: '13333333333333333333333333330001',
    properties: ['read', 'write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: 'Gets or sets the type of scene lighting.'
      })
    ]
  });

  this.dahlia = dahlia;
}

util.inherits(DahliaLightingCharacteristic, bleno.Characteristic);

DahliaLightingCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG);
  }
  else if (data.length !== 1) {
    callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
  }
  else {
    var lighting_scene = data.readUInt8(0);
    switch (lighting_scene) {
      case dahlia.LightingScene.NORMAL:
      case dahlia.LightingScene.MOVIE:
      case dahlia.LightingScene.SLEEP:
        this.dahlia.lighting_scene = lighting_scene;
	console.log('Setting lighting to ', lighting_scene);
        callback(this.RESULT_SUCCESS);
        break;
      default:
        callback(this.RESULT_UNLIKELY_ERROR);
        break;
    }
  }
};

DahliaLightingCharacteristic.prototype.onReadRequest = function(offset, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG, null);
  }
  else {
    var data = new Buffer(1);
    data.writeUInt8(this.dahlia.lighting_scene, 0);
    callback(this.RESULT_SUCCESS, data);
  }
};

module.exports = DahliaLightingCharacteristic;
