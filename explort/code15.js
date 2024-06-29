gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDinObjects1= [];
gdjs.Untitled_32sceneCode.GDinObjects2= [];
gdjs.Untitled_32sceneCode.GDmemoryObjects1= [];
gdjs.Untitled_32sceneCode.GDmemoryObjects2= [];
gdjs.Untitled_32sceneCode.GDfpsObjects1= [];
gdjs.Untitled_32sceneCode.GDfpsObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.Untitled_32sceneCode.GDfpsObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.Untitled_32sceneCode.GDfpsObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "lolxd", 0.05, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("in"), gdjs.Untitled_32sceneCode.GDinObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinObjects1[i].setX(gdjs.randomInRange(0, 1920));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


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
gdjs.Untitled_32sceneCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfpsObjects1Objects, 3, 3, "notes / ui");
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
gdjs.Untitled_32sceneCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDfpsObjects1Objects, 3, 3, "");
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmemoryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDmemoryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfpsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfpsObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
