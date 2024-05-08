
if (typeof gdjs.evtsExt__CameraImpulse__AddImpulse !== "undefined") {
  gdjs.evtsExt__CameraImpulse__AddImpulse.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__AddImpulse = {};


gdjs.evtsExt__CameraImpulse__AddImpulse.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("Layer").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("DeltaX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DisplacementX")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("DeltaY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DisplacementY")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("AwayDuration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AwayDuration")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("StayDuration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StayDuration")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("BackDuration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BackDuration")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("AwayEasing").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AwayEasing") : ""));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("BackEasing").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("BackEasing") : ""));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : "")).getChild("Time").setNumber(0);
}}

}


};

gdjs.evtsExt__CameraImpulse__AddImpulse.func = function(runtimeScene, Identifier, Layer, DisplacementX, DisplacementY, AwayDuration, AwayEasing, StayDuration, BackDuration, BackEasing, parentEventsFunctionContext) {
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
if (argName === "Identifier") return Identifier;
if (argName === "Layer") return Layer;
if (argName === "DisplacementX") return DisplacementX;
if (argName === "DisplacementY") return DisplacementY;
if (argName === "AwayDuration") return AwayDuration;
if (argName === "AwayEasing") return AwayEasing;
if (argName === "StayDuration") return StayDuration;
if (argName === "BackDuration") return BackDuration;
if (argName === "BackEasing") return BackEasing;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraImpulse__AddImpulse.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraImpulse__AddImpulse.registeredGdjsCallbacks = [];