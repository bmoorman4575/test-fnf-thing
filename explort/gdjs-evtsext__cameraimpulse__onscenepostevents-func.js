
if (typeof gdjs.evtsExt__CameraImpulse__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__onScenePostEvents = {};


gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Identifer"))).getChild("Time").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


};gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("DistanceFactor").setNumber(gdjs.evtTools.tween.ease(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayEasing")), 0, 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration"))));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("StayDuration"));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("DistanceFactor").setNumber(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("StayDuration"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("DistanceFactor").setNumber(gdjs.evtTools.tween.ease(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("BackEasing")), 0, 1, (1 - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("StayDuration"))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("BackDuration")))));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer"))).getChild("CameraDeltaX").add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("DeltaX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("DistanceFactor")));
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer"))).getChild("CameraDeltaY").add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("DeltaY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("DistanceFactor")));
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer")), 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer"))).getChild("CameraDeltaX"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer")), 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer")), 0) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer"))).getChild("CameraDeltaY"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Layer")), 0);
}}

}


};gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("StayDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("BackDuration"));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Identifer"))));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("Time")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("AwayDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("StayDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse").getChild("BackDuration"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Identifer");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse");
const iterableReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


{



}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Identifer");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulse");
const iterableReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Impulses");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};

gdjs.evtsExt__CameraImpulse__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraImpulse__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
