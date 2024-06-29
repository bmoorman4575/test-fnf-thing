
if (typeof gdjs.evtsExt__ScriptEngine__Eval !== "undefined") {
  gdjs.evtsExt__ScriptEngine__Eval.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScriptEngine__Eval = {};


gdjs.evtsExt__ScriptEngine__Eval.userFunc0x1635028 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
let canUseGDAPI = eventsFunctionContext.getArgument("gdapi");
let canUseDocument = eventsFunctionContext.getArgument("document");

// Create a mock global object with the APIs on it
const global = Object.assign({shared: gdjs.sharedGlobal}, gdjs.scriptingAPI);
const code = eventsFunctionContext.getArgument("code");

(function (window, globalThis, document, location, runtimeScene, eventsFunctionContext, gdjs) {
    // Remove temporary variables
    canUseGDAPI = undefined
    canUseDocument = undefined

    // Execute the code using the mock global as global
    with (global) {
        'use strict';
        eval(code);
    }
}).call(
    // Use the mock global as thisArg
    global,
    // Overwrite globals or enclosed variables locally
    global,
    global,
    // Hide DOM APIs
    canUseDocument ? document : undefined,
    canUseDocument ? location : undefined,
    // Hide GDevelop APIs
    canUseGDAPI ? runtimeScene : undefined,
    canUseGDAPI ? eventsFunctionContext : undefined,
    canUseGDAPI ? gdjs : undefined
);

};
gdjs.evtsExt__ScriptEngine__Eval.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScriptEngine__Eval.userFunc0x1635028(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScriptEngine__Eval.func = function(runtimeScene, code, gdapi, document, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScriptEngine"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScriptEngine"),
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
if (argName === "code") return code;
if (argName === "gdapi") return gdapi;
if (argName === "document") return document;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ScriptEngine__Eval.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScriptEngine__Eval.registeredGdjsCallbacks = [];