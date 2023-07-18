
if (typeof gdjs.evtsExt__rhythmgame__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__rhythmgame__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__rhythmgame__onScenePreEvents = {};


gdjs.evtsExt__rhythmgame__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__rhythmgame__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__rhythmgame__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__rhythmgame__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Songstarted"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__rhythmgame__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__rhythmgame__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__rhythmgame__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__rhythmgame__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__rhythmgame__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__rhythmgame__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__rhythmgame__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__rhythmgame__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
