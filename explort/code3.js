gdjs.LoadingscenesCode = {};
gdjs.LoadingscenesCode.GDNewSpriteObjects1= [];
gdjs.LoadingscenesCode.GDNewSpriteObjects2= [];
gdjs.LoadingscenesCode.GDinfoObjects1= [];
gdjs.LoadingscenesCode.GDinfoObjects2= [];
gdjs.LoadingscenesCode.GDgradiantObjects1= [];
gdjs.LoadingscenesCode.GDgradiantObjects2= [];
gdjs.LoadingscenesCode.GDbackdropmainloadingObjects1= [];
gdjs.LoadingscenesCode.GDbackdropmainloadingObjects2= [];
gdjs.LoadingscenesCode.GDmemoryObjects1= [];
gdjs.LoadingscenesCode.GDmemoryObjects2= [];
gdjs.LoadingscenesCode.GDfpsObjects1= [];
gdjs.LoadingscenesCode.GDfpsObjects2= [];


gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.LoadingscenesCode.GDfpsObjects1});
gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.LoadingscenesCode.GDfpsObjects1});
gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDbackdropmainloadingObjects1Objects = Hashtable.newFrom({"backdropmainloading": gdjs.LoadingscenesCode.GDbackdropmainloadingObjects1});
gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDinfoObjects1Objects = Hashtable.newFrom({"info": gdjs.LoadingscenesCode.GDinfoObjects1});
gdjs.LoadingscenesCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("leftused")) == 0);
}
}
if (isConditionTrue_0) {
gdjs.LoadingscenesCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDfpsObjects1Objects, 3, 3, "notes / ui");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("leftused")) != 0);
}
}
if (isConditionTrue_0) {
gdjs.LoadingscenesCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDfpsObjects1Objects, 3, 3, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("backdropmainloading"), gdjs.LoadingscenesCode.GDbackdropmainloadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.LoadingscenesCode.GDinfoObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto")));
}{gdjs.evtsExt__AlignObject__ToScreenCentered.func(runtimeScene, gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDbackdropmainloadingObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToScreenCentered.func(runtimeScene, gdjs.LoadingscenesCode.mapOfGDgdjs_9546LoadingscenesCode_9546GDinfoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.LoadingscenesCode.GDinfoObjects1.length ;i < len;++i) {
    gdjs.LoadingscenesCode.GDinfoObjects1[i].setY(gdjs.LoadingscenesCode.GDinfoObjects1[i].getY() - ((gdjs.LoadingscenesCode.GDinfoObjects1[i].getY()) / 3));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.LoadingscenesCode.GDinfoObjects1);
{for(var i = 0, len = gdjs.LoadingscenesCode.GDinfoObjects1.length ;i < len;++i) {
    gdjs.LoadingscenesCode.GDinfoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12).getChild("loadingscreentext")) + "\n-----------------------------------------------------" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "(" + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").getAsString()) * 100)) + ") percent");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").getAsString());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").getAsString(), false);
}}

}


};

gdjs.LoadingscenesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingscenesCode.GDNewSpriteObjects1.length = 0;
gdjs.LoadingscenesCode.GDNewSpriteObjects2.length = 0;
gdjs.LoadingscenesCode.GDinfoObjects1.length = 0;
gdjs.LoadingscenesCode.GDinfoObjects2.length = 0;
gdjs.LoadingscenesCode.GDgradiantObjects1.length = 0;
gdjs.LoadingscenesCode.GDgradiantObjects2.length = 0;
gdjs.LoadingscenesCode.GDbackdropmainloadingObjects1.length = 0;
gdjs.LoadingscenesCode.GDbackdropmainloadingObjects2.length = 0;
gdjs.LoadingscenesCode.GDmemoryObjects1.length = 0;
gdjs.LoadingscenesCode.GDmemoryObjects2.length = 0;
gdjs.LoadingscenesCode.GDfpsObjects1.length = 0;
gdjs.LoadingscenesCode.GDfpsObjects2.length = 0;

gdjs.LoadingscenesCode.eventsList0(runtimeScene);

return;

}

gdjs['LoadingscenesCode'] = gdjs.LoadingscenesCode;
