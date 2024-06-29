
if (typeof gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded = {};


gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.userFunc0x1635028 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Define an new private object javascript for this extension
gdjs._objectSlicer = {};

/** 
 * @param {HTMLCanvasElement} canvas
 */
gdjs._objectSlicer.getCanvasType = function (canvas) {
    const is2d = canvas.getContext("2d");
    const isBitmap = canvas.getContext("bitmaprenderer");
    const isWebGL1 = canvas.getContext("webgl");
    const isWebGL2 = canvas.getContext("webgl2");
    const isExperimentalWebGL = canvas.getContext("experimental-webgl");

    return is2d ?
        "2d" : isBitmap ?
            "bitmaprenderer" : isWebGL1 ?
                "webgl" : isWebGL2 ?
                    "webgl2" : isExperimentalWebGL ?
                        "experimental-webgl" : null;
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {number} colorIndex Should be 0, 1, 2 or 3, for red, green, blue or alpha channel.
 * @param {number} positionX The X position of the pixel on the canvas to read
 * @param {number} positionY The Y position of the pixel on the canvas to read
 */
gdjs._objectSlicer.getPixelColor = function (canvas, colorIndex, positionX, positionY) {

    const gl = canvas.getContext("webgl2") ||  canvas.getContext("webgl") || canvas.getContext("experimental-webgl") ;

    const data = new Uint8Array(1 * 4); // [255,255,255,255] RGBA

    const invertedPositionY = gl.drawingBufferHeight - positionY;
    // mandatory because textures in webGL are invert before rendering in the canvas,
    // otherwise the bottom left corner will be used

    gl.readPixels(positionX, invertedPositionY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
    // Read 1 pixel and store it in data.

    return data[colorIndex];
}


};
gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.userFunc0x1635028(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSlicer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSlicer"),
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


gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__ObjectSlicer__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
