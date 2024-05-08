
if (typeof gdjs.evtsExt__filetextuploadtest__UploadTextFile !== "undefined") {
  gdjs.evtsExt__filetextuploadtest__UploadTextFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__filetextuploadtest__UploadTextFile = {};


gdjs.evtsExt__filetextuploadtest__UploadTextFile.userFunc0x4892ef0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const allowedFileTypes = ["image/png", "image/jpeg"];

const InputElement = document.createElement('input');
InputElement.type = "file";

InputElement.addEventListener("change", handleFiles, false);
InputElement.click();

const SceneVariable = eventsFunctionContext.getArgument("SceneVariable");
const Uploading = runtimeScene.getVariables().get("__UploadDownloadTextFile");

Uploading.fromJSObject({Uploading:false});

const canvasWidth = eventsFunctionContext.getArgument("width"); // Set canvas width here
const canvasHeight = eventsFunctionContext.getArgument("height"); // Set canvas height here

async function handleFiles() {
  const files = this.files;
  
  if (!files.length) {
    SceneVariable.setString("No Files Selected!");
  } else if(!allowedFileTypes.includes(files[0].type)) {
    SceneVariable.setString("Please choose PNG or JPG files only.");
  } else {
    const file = files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // set canvas size
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      
      // draw image on canvas
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
      
      // convert canvas to data URL
      const dataURL = canvas.toDataURL();
      
      // set data URL as value of SceneVariable
      SceneVariable.setString(dataURL);
    }
  }

  Uploading.fromJSObject({Uploading:true});
  InputElement.remove();
}

};
gdjs.evtsExt__filetextuploadtest__UploadTextFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__filetextuploadtest__UploadTextFile.userFunc0x4892ef0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{



}


};

gdjs.evtsExt__filetextuploadtest__UploadTextFile.func = function(runtimeScene, SceneVariable, width, height, parentEventsFunctionContext) {
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
if (argName === "SceneVariable") return SceneVariable;
if (argName === "width") return width;
if (argName === "height") return height;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__filetextuploadtest__UploadTextFile.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__filetextuploadtest__UploadTextFile.registeredGdjsCallbacks = [];