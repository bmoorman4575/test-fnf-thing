
if (typeof gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces !== "undefined") {
  gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces = {};
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects4= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects5= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects7= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects8= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects1= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects2= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects3= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects4= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects5= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7= [];
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects8= [];


gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSlicer_9595_9595SliceObjectIntoPieces_9546GDWhitePieceObjects6Objects = Hashtable.newFrom({"WhitePiece": gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6});
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DeleteObject") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects7);

gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7);

{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects7.length !== 0 ? gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects7[0] : null), (gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length !== 0 ? gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[0] : null));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7);

{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentWidth")));
}
}{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].setHeight(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentHeight")));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7);

{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].setCenterPositionInScene(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterY")));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7);

{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].setColor(gdjs.evtTools.common.toString(gdjs.evtsExt__ObjectSlicer__ReadPixelRed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterY")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + ";" + gdjs.evtTools.common.toString(gdjs.evtsExt__ObjectSlicer__ReadPixelGreen.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterY")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + ";" + gdjs.evtTools.common.toString(gdjs.evtsExt__ObjectSlicer__ReadPixelBlue.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterY")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7);

{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].returnVariable(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].getVariables().get("CreationID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CreationID")));
}
}{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].returnVariable(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].getVariables().get("RowID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RowID")));
}
}{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].returnVariable(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7[i].getVariables().get("ColumnID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ColumnID")));
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CreationID").add(1);
}}

}


};gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterX").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentX")) + 0.5 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentWidth")));
}{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterY").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentY")) + 0.5 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentHeight")));
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects5, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6[i].isCollidingWithPoint(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentCenterY"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6[k] = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6 */
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSlicer_9595_9595SliceObjectIntoPieces_9546GDWhitePieceObjects6Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentY")), (( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6.length === 0 ) ? "" :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6[0].getLayer()));
}
{ //Subevents
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentX").add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentWidth")));
}}

}


};gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentX")) <= (( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects5[0].getAABBRight());
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3, gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects4);

{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentX").setNumber((( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects4[0].getAABBLeft()));
}{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentY").add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentHeight")));
}}

}


};gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2);
{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentHeight").setNumber(Math.max(1, Math.round((( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2[0].getHeight()) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HorizontalSlices")) || 0 : 0))));
}{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("FragmentWidth").setNumber(Math.max(1, Math.round((( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2[0].getWidth()) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VerticalSlices")) || 0 : 0))));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2);
{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentX").setNumber((( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2[0].getAABBLeft()));
}{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentY").setNumber((( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2[0].getAABBTop()));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CreationID").setNumber(1);
}}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ObjectSlicer").getChild("CurrentY")) <= (( gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3[0].getAABBBottom());
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DeleteObject") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.func = function(runtimeScene, Object, WhitePiece, VerticalSlices, HorizontalSlices, DeleteObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "WhitePiece": WhitePiece
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "WhitePiece": gdjs.objectsListsToArray(WhitePiece)
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
if (argName === "VerticalSlices") return VerticalSlices;
if (argName === "HorizontalSlices") return HorizontalSlices;
if (argName === "DeleteObject") return DeleteObject;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects3.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects4.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects5.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects6.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects7.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDObjectObjects8.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects1.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects2.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects3.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects4.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects5.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects6.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects7.length = 0;
gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.GDWhitePieceObjects8.length = 0;

gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ObjectSlicer__SliceObjectIntoPieces.registeredGdjsCallbacks = [];