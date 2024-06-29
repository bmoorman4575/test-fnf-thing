
if (typeof gdjs.evtsExt__CameraImpulse__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__onScenePreEvents = {};


gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layer");
const iterableReference2 = runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers");
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
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName")), 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layer").getChild("CameraDeltaX"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName")), 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName")), 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layer").getChild("CameraDeltaY"))), gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName")), 0);
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName"))).getChild("CameraDeltaX").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraImpulse").getChild("LayerName"))).getChild("CameraDeltaY").setNumber(0);
}}
}
}

}


};

gdjs.evtsExt__CameraImpulse__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraImpulse"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraImpulse"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraImpulse__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
