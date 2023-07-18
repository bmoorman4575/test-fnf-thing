
if (typeof gdjs.evtsExt__fnfesentials__songdeatales !== "undefined") {
  gdjs.evtsExt__fnfesentials__songdeatales.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__fnfesentials__songdeatales = {};


gdjs.evtsExt__fnfesentials__songdeatales.userFunc0x5749ad8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
//CONVERT TO MILLISECONDS
function durationToMilliseconds(duration) {
  // Split the duration into minutes and seconds
  var parts = duration.split(":");
  if (parts.length !== 2) {
    throw new Error("Invalid duration format");
  }

  var minutes = parseInt(parts[0], 10);
  var seconds = parseInt(parts[1], 10);

  // Validate the minutes and seconds values
  if (isNaN(minutes) || isNaN(seconds)) {
    throw new Error("Invalid duration format");
  }
  if (minutes < 0 || seconds < 0 || seconds >= 60) {
    throw new Error("Invalid duration value");
  }

  // Convert the minutes and seconds to milliseconds
  return (minutes * 60 + seconds) * 1000;
}
//CONVERT TO SECONDS
function durationToSeconds(duration) {
  // Split the duration into minutes and seconds
  var parts = duration.split(":");
  var minutes = parseInt(parts[0], 10);
  var seconds = parseInt(parts[1], 10);

  // Convert the minutes and seconds to seconds
  return minutes * 60 + seconds;
}
var songlenthvar = runtimeScene.getVariables().get("songlenth").getAsString();

runtimeScene.getVariables().get("songlenthasmillisec").setNumber(durationToMilliseconds(songlenthvar));
runtimeScene.getVariables().get("songlenthassec").setNumber(durationToSeconds(songlenthvar));
};
gdjs.evtsExt__fnfesentials__songdeatales.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("notespeed").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("notespeed")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("songname").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("songname") : ""));
}{runtimeScene.getScene().getVariables().get("damagepervalue").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("healthaddloss")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("bopip").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("bopinui")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("beat").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("bopinui")) || 0 : 0) / 2);
}{runtimeScene.getScene().getVariables().get("loadingtext").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("loadingscreentext") : ""));
}{runtimeScene.getScene().getVariables().get("zoompreset").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("defultzoomamount") : ""));
}{runtimeScene.getScene().getVariables().get("songlenth").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("songlenth") : ""));
}}

}


{


gdjs.evtsExt__fnfesentials__songdeatales.userFunc0x5749ad8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("newsongenginetype")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "modedit.charteditor");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("tempvar1").setNumber(60000 / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("bpm")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("tempvar2").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar1")) / 1000);
}{runtimeScene.getScene().getVariables().get("tempvar3").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar2")) * 4);
}{runtimeScene.getScene().getVariables().get("bopip").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")));
}{runtimeScene.getScene().getVariables().get("bopipx16").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")) / 16);
}{runtimeScene.getScene().getVariables().get("bopipx16original").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")) / 16);
}{runtimeScene.getScene().getVariables().get("bopinoriginal").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")));
}{runtimeScene.getScene().getVariables().get("beat").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("tempvar3")) / 2);
}{runtimeScene.getScene().getVariables().get("bpm").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("bpm")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("is3d") : false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("mode3D"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("gfenabled") : false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("gfenabled"), true);
}}

}


};

gdjs.evtsExt__fnfesentials__songdeatales.func = function(runtimeScene, songname, notespeed, bopinui, healthaddloss, loadingscreentext, defultzoomamount, bpm, songlenth, is3d, gfenabled, parentEventsFunctionContext) {
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
if (argName === "songname") return songname;
if (argName === "notespeed") return notespeed;
if (argName === "bopinui") return bopinui;
if (argName === "healthaddloss") return healthaddloss;
if (argName === "loadingscreentext") return loadingscreentext;
if (argName === "defultzoomamount") return defultzoomamount;
if (argName === "bpm") return bpm;
if (argName === "songlenth") return songlenth;
if (argName === "is3d") return is3d;
if (argName === "gfenabled") return gfenabled;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__fnfesentials__songdeatales.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__fnfesentials__songdeatales.registeredGdjsCallbacks = [];