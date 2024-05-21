
if (typeof gdjs.evtsExt__rhythmgame__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__rhythmgame__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__rhythmgame__onScenePostEvents = {};


gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Channelsongon")));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(67974692);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setMusicOnChannelPlayingOffset(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Channelsongon")), 0);
}{runtimeScene.getScene().getVariables().get("currentbeat").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beat1forth");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beatmain");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beathalf");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "howlongsongbeen");
}}

}


};gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Channelsongon")));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(67976484);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setSoundOnChannelPlayingOffset(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Channelsongon")), 0);
}{runtimeScene.getScene().getVariables().get("currentbeat").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beat1forth");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beatmain");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beathalf");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "howlongsongbeen");
}}

}


};gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("channeltype")) == "Music";
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("channeltype")) == "Sound";
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("mainbeathit"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("halfbeathit"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("oneforthbeathit"), false);
}}

}


{


gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Songstarted"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__rhythmgame__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__rhythmgame__onScenePostEvents.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__rhythmgame__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__rhythmgame__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__rhythmgame__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__rhythmgame__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__rhythmgame__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
