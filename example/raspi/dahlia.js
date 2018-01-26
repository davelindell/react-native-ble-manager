var util = require('util');
var events = require('events');

var LightingScene = {
  NORMAL:    0,
  MOVIE:     1,
  SLEEP:     2,
};

function Dahlia() {
  events.EventEmitter.call(this);
  this.lighting_scene = LightingScene.NORMAL;
}

util.inherits(Dahlia, events.EventEmitter);

module.exports.Dahlia = Dahlia;
module.exports.LightingScene = LightingScene;
