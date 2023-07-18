
if (typeof gdjs.evtsExt__CameraImpulse__AddImpulseAngle !== "undefined") {
  gdjs.evtsExt__CameraImpulse__AddImpulseAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__AddImpulseAngle = {};


gdjs.evtsExt__CameraImpulse__AddImpulseAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CameraImpulse__AddImpulse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Identifier") : ""), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), gdjs.evtTools.common.getXFromAngleAndDistance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Amplitude")) || 0 : 0)), gdjs.evtTools.common.getYFromAngleAndDistance((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Amplitude")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AwayDuration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AwayEasing") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("StayDuration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BackDuration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("BackEasing") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__CameraImpulse__AddImpulseAngle.func = function(runtimeScene, Identifier, Layer, Amplitude, Angle, AwayDuration, AwayEasing, StayDuration, BackDuration, BackEasing, parentEventsFunctionContext) {
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
if (argName === "Amplitude") return Amplitude;
if (argName === "Angle") return Angle;
if (argName === "AwayDuration") return AwayDuration;
if (argName === "AwayEasing") return AwayEasing;
if (argName === "StayDuration") return StayDuration;
if (argName === "BackDuration") return BackDuration;
if (argName === "BackEasing") return BackEasing;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraImpulse__AddImpulseAngle.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraImpulse__AddImpulseAngle.registeredGdjsCallbacks = [];