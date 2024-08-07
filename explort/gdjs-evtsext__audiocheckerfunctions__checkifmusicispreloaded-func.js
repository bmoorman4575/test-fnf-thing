
if (typeof gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded !== "undefined") {
  gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded = {};


gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.userFunc0x1600a40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const SoundManager = runtimeScene.getGame().getSoundManager();
const FullPath = eventsFunctionContext.getArgument("Filename");
const FileName = SoundManager._availableResources[FullPath].file;

eventsFunctionContext.returnValue = (SoundManager._loadedMusics[FileName] != undefined);
};
gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.userFunc0x1600a40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.func = function(runtimeScene, Filename, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AudioCheckerFunctions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AudioCheckerFunctions"),
  localVariables: [],
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
if (argName === "Filename") return Filename;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__AudioCheckerFunctions__CheckIfMusicIsPreloaded.registeredGdjsCallbacks = [];