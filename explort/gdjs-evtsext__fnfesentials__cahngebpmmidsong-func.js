
if (typeof gdjs.evtsExt__fnfesentials__cahngebpmmidsong !== "undefined") {
  gdjs.evtsExt__fnfesentials__cahngebpmmidsong.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__fnfesentials__cahngebpmmidsong = {};


gdjs.evtsExt__fnfesentials__cahngebpmmidsong.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(55695036);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("tempvar1").setNumber(60000 / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("bpm")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("tempvar2").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar1")) / 1000);
}{runtimeScene.getScene().getVariables().get("tempvar3").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar2")) * 4);
}{runtimeScene.getScene().getVariables().get("bopip").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")));
}{runtimeScene.getScene().getVariables().get("bopinoriginal").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")));
}{runtimeScene.getScene().getVariables().get("beat").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")) / 2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bopin");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beat2");
}{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__fnfesentials__cahngebpmmidsong.func = function(runtimeScene, bpm, parentEventsFunctionContext) {
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
if (argName === "bpm") return bpm;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__fnfesentials__cahngebpmmidsong.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__fnfesentials__cahngebpmmidsong.registeredGdjsCallbacks = [];