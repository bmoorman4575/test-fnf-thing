
if (typeof gdjs.evtsExt__ScriptEngine__UseAPI !== "undefined") {
  gdjs.evtsExt__ScriptEngine__UseAPI.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScriptEngine__UseAPI = {};


gdjs.evtsExt__ScriptEngine__UseAPI.userFunc0x16f5ee0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const name = eventsFunctionContext.getArgument("name");

// Create the function in case it does not exist
if (!gdjs.scriptingAPI.hasOwnProperty(name)) gdjs.scriptingAPI[name] = function () {
    Array.isArray(gdjs.scriptTriggers[name])
        ? gdjs.scriptTriggers[name].push(arguments)
        : gdjs.scriptTriggers[name] = [arguments];
}

// Trigger the condition if its function was called
if (Array.isArray(gdjs.scriptTriggers[name]) && gdjs.scriptTriggers[name].length > 0) {
    eventsFunctionContext.returnValue = true;
    gdjs.currentArgs = gdjs.scriptTriggers[name].shift();
}

};
gdjs.evtsExt__ScriptEngine__UseAPI.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScriptEngine__UseAPI.userFunc0x16f5ee0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScriptEngine__UseAPI.func = function(runtimeScene, name, parentEventsFunctionContext) {
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
if (argName === "name") return name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ScriptEngine__UseAPI.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ScriptEngine__UseAPI.registeredGdjsCallbacks = [];