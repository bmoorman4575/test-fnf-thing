
if (typeof gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded = {};


gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.userFunc0x1aed520 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/**
 * The API disponible for scripts.
 */
gdjs.scriptingAPI = {};

/**
 * An internal store to know when a function has been called.
 */
gdjs.scriptTriggers = {};

/**
 * A global object shared accross all executed scripts.
 */
gdjs.sharedGlobal = {};

/**
 * Containes the arguments of a function that is being executed.
 */
gdjs.currentArgs = [];

};
gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.userFunc0x1aed520(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__ScriptEngine__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
