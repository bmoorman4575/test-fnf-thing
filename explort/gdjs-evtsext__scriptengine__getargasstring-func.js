
if (typeof gdjs.evtsExt__ScriptEngine__GetArgAsString !== "undefined") {
  gdjs.evtsExt__ScriptEngine__GetArgAsString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScriptEngine__GetArgAsString = {};


gdjs.evtsExt__ScriptEngine__GetArgAsString.userFunc0x1624c78 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const index = eventsFunctionContext.getArgument("index");
eventsFunctionContext.returnValue = gdjs.currentArgs.length < index ? "undefined" : gdjs.currentArgs[index];

};
gdjs.evtsExt__ScriptEngine__GetArgAsString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScriptEngine__GetArgAsString.userFunc0x1624c78(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScriptEngine__GetArgAsString.func = function(runtimeScene, index, parentEventsFunctionContext) {
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
if (argName === "index") return index;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ScriptEngine__GetArgAsString.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ScriptEngine__GetArgAsString.registeredGdjsCallbacks = [];