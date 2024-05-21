
if (typeof gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld = {};


gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.userFunc0x14beaa0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const Operator = eventsFunctionContext.getArgument("Operator");
const AngleX = eventsFunctionContext.getArgument("AngleX");
const AngleY = eventsFunctionContext.getArgument("AngleY");
const AngleZ = eventsFunctionContext.getArgument("AngleZ");
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found.");
    return;
}
//
if (Operator == "=") {
    Obj.rotation.set(0, 0, 0);
    Obj.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), gdjs.toRad(AngleX));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(AngleY));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), gdjs.toRad(AngleZ));
} else if (Operator == "+") {
    Obj.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), gdjs.toRad(AngleX));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(AngleY));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), gdjs.toRad(AngleZ));
} else {
    Obj.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), gdjs.toRad(-AngleX));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), gdjs.toRad(-AngleY));
    Obj.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), gdjs.toRad(-AngleZ));
}


};
gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.userFunc0x14beaa0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.func = function(runtimeScene, Id, Operator, AngleX, AngleY, AngleZ, parentEventsFunctionContext) {
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
if (argName === "Id") return Id;
if (argName === "Operator") return Operator;
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Rotate3DObjectOnWorld.registeredGdjsCallbacks = [];