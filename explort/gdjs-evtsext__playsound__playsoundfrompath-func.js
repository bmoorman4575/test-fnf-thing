
if (typeof gdjs.evtsExt__PlaySound__PlaySoundFromPath !== "undefined") {
  gdjs.evtsExt__PlaySound__PlaySoundFromPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__PlaySoundFromPath = {};


gdjs.evtsExt__PlaySound__PlaySoundFromPath.userFunc0x1add2c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const audioFile = eventsFunctionContext.getArgument("URL");
const channel = "syllabux_"+eventsFunctionContext.getArgument("channel");
const loop = eventsFunctionContext.getArgument("loop");
const volume = eventsFunctionContext.getArgument("volume") || 100;
if(!window.syllabuxAudioChannels) window.syllabuxAudioChannels = {};
window.syllabuxAudioChannels[channel] = new Audio(audioFile);
window.syllabuxAudioChannels[channel].volume = volume / 100;
if (loop == 1) {
    if (typeof window.syllabuxAudioChannels[channel].loop == 'boolean') {
        window.syllabuxAudioChannels[channel].loop = true;
    }
    else {
        window.syllabuxAudioChannels[channel].addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}

window.syllabuxAudioChannels[channel].play();

};
gdjs.evtsExt__PlaySound__PlaySoundFromPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__PlaySoundFromPath.userFunc0x1add2c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__PlaySoundFromPath.func = function(runtimeScene, URL, volume, loop, channel, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "URL") return URL;
if (argName === "volume") return volume;
if (argName === "loop") return loop;
if (argName === "channel") return channel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__PlaySoundFromPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlaySound__PlaySoundFromPath.registeredGdjsCallbacks = [];