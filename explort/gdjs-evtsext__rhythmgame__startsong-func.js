
if (typeof gdjs.evtsExt__rhythmgame__startsong !== "undefined") {
  gdjs.evtsExt__rhythmgame__startsong.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__rhythmgame__startsong = {};


gdjs.evtsExt__rhythmgame__startsong.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(67926668);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("tempvar1").setNumber(60000 / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BPM")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("tempvar2").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar1")) / 1000);
}{runtimeScene.getScene().getVariables().get("tempvar3").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar2")) * 4);
}{runtimeScene.getScene().getVariables().get("beat").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")));
}{runtimeScene.getScene().getVariables().get("beatoriginal").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")));
}{runtimeScene.getScene().getVariables().get("beathalf").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")) / 2);
}{runtimeScene.getScene().getVariables().get("beathalforiginal").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")) / 2);
}{runtimeScene.getScene().getVariables().get("beat1forth").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("beathalf")) / 2);
}{runtimeScene.getScene().getVariables().get("beat1forthoriginal").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("beathalf")) / 2);
}{runtimeScene.getScene().getVariables().get("BPMoriginal").setNumber(60000 / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("bpm")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("Channelsongon").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("channelsong")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("channeltype").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("audiochanneltype") : ""));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Songstarted"), true);
}}

}


};

gdjs.evtsExt__rhythmgame__startsong.func = function(runtimeScene, BPM, channelsong, audiochanneltype, parentEventsFunctionContext) {
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
if (argName === "BPM") return BPM;
if (argName === "channelsong") return channelsong;
if (argName === "audiochanneltype") return audiochanneltype;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__rhythmgame__startsong.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__rhythmgame__startsong.registeredGdjsCallbacks = [];