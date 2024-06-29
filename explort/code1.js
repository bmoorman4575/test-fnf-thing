gdjs.ModloaderCode = {};
gdjs.ModloaderCode.localVariables = [];
gdjs.ModloaderCode.GDgreymenubackroundObjects1= [];
gdjs.ModloaderCode.GDgreymenubackroundObjects2= [];
gdjs.ModloaderCode.GDtopbuttonsObjects1= [];
gdjs.ModloaderCode.GDtopbuttonsObjects2= [];
gdjs.ModloaderCode.GDloadbyurltextObjects1= [];
gdjs.ModloaderCode.GDloadbyurltextObjects2= [];
gdjs.ModloaderCode.GDloaddefaultmodsObjects1= [];
gdjs.ModloaderCode.GDloaddefaultmodsObjects2= [];
gdjs.ModloaderCode.GDbottommenuObjects1= [];
gdjs.ModloaderCode.GDbottommenuObjects2= [];
gdjs.ModloaderCode.GDmemoryObjects1= [];
gdjs.ModloaderCode.GDmemoryObjects2= [];
gdjs.ModloaderCode.GDfpsObjects1= [];
gdjs.ModloaderCode.GDfpsObjects2= [];


gdjs.ModloaderCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.ModloaderCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ModloaderCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
}

}


};

gdjs.ModloaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ModloaderCode.GDgreymenubackroundObjects1.length = 0;
gdjs.ModloaderCode.GDgreymenubackroundObjects2.length = 0;
gdjs.ModloaderCode.GDtopbuttonsObjects1.length = 0;
gdjs.ModloaderCode.GDtopbuttonsObjects2.length = 0;
gdjs.ModloaderCode.GDloadbyurltextObjects1.length = 0;
gdjs.ModloaderCode.GDloadbyurltextObjects2.length = 0;
gdjs.ModloaderCode.GDloaddefaultmodsObjects1.length = 0;
gdjs.ModloaderCode.GDloaddefaultmodsObjects2.length = 0;
gdjs.ModloaderCode.GDbottommenuObjects1.length = 0;
gdjs.ModloaderCode.GDbottommenuObjects2.length = 0;
gdjs.ModloaderCode.GDmemoryObjects1.length = 0;
gdjs.ModloaderCode.GDmemoryObjects2.length = 0;
gdjs.ModloaderCode.GDfpsObjects1.length = 0;
gdjs.ModloaderCode.GDfpsObjects2.length = 0;

gdjs.ModloaderCode.eventsList1(runtimeScene);

return;

}

gdjs['ModloaderCode'] = gdjs.ModloaderCode;
