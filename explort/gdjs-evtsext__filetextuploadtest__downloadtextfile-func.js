
if (typeof gdjs.evtsExt__filetextuploadtest__DownloadTextFile !== "undefined") {
  gdjs.evtsExt__filetextuploadtest__DownloadTextFile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__filetextuploadtest__DownloadTextFile = {};


gdjs.evtsExt__filetextuploadtest__DownloadTextFile.userFunc0x4892ef0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function DownloadImageContent(filename, mimeType, dataUrl) {
  var link = document.createElement('a');
  link.setAttribute('href', dataUrl);
  link.setAttribute('download', filename);
  link.click();
}

function convertDataUrlToPng(dataUrl) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(this, 0, 0);
      var pngDataUrl = canvas.toDataURL('image/png');
      resolve(pngDataUrl);
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

const FileName = eventsFunctionContext.getArgument("FileName");
const TextContent = eventsFunctionContext.getArgument("TextContent");

convertDataUrlToPng(TextContent)
  .then(pngDataUrl => {
    DownloadImageContent(FileName + '.png', 'image/png', pngDataUrl);
  })
  .catch(error => console.error(error));

};
gdjs.evtsExt__filetextuploadtest__DownloadTextFile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__filetextuploadtest__DownloadTextFile.userFunc0x4892ef0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__filetextuploadtest__DownloadTextFile.func = function(runtimeScene, FileName, TextContent, parentEventsFunctionContext) {
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
if (argName === "FileName") return FileName;
if (argName === "TextContent") return TextContent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__filetextuploadtest__DownloadTextFile.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__filetextuploadtest__DownloadTextFile.registeredGdjsCallbacks = [];