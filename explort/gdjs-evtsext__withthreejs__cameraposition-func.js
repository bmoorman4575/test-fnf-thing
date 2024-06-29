
if (typeof gdjs.evtsExt__WithThreeJS__CameraPosition !== "undefined") {
  gdjs.evtsExt__WithThreeJS__CameraPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__CameraPosition = {};


gdjs.evtsExt__WithThreeJS__CameraPosition.userFunc0x17e6a38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Camera = gdjs.__WithThreeJS.get("Camera");
const Axis = eventsFunctionContext.getArgument("Axis");
if (Axis == "X") {
    eventsFunctionContext.returnValue = Camera.position.x;
} else if (Axis == "Y") {
    eventsFunctionContext.returnValue = Camera.position.y;
} else {
    eventsFunctionContext.returnValue = Camera.position.z;
}


};
gdjs.evtsExt__WithThreeJS__CameraPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__CameraPosition.userFunc0x17e6a38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__CameraPosition.func = function(runtimeScene, Axis, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WithThreeJS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WithThreeJS"),
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
if (argName === "Axis") return Axis;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__CameraPosition.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WithThreeJS__CameraPosition.registeredGdjsCallbacks = [];