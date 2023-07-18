gdjs.optionsmenuCode = {};
gdjs.optionsmenuCode.forEachIndex2 = 0;

gdjs.optionsmenuCode.forEachIndex3 = 0;

gdjs.optionsmenuCode.forEachObjects2 = [];

gdjs.optionsmenuCode.forEachObjects3 = [];

gdjs.optionsmenuCode.forEachTemporary2 = null;

gdjs.optionsmenuCode.forEachTemporary3 = null;

gdjs.optionsmenuCode.forEachTotalCount2 = 0;

gdjs.optionsmenuCode.forEachTotalCount3 = 0;

gdjs.optionsmenuCode.GDmemoryObjects1= [];
gdjs.optionsmenuCode.GDmemoryObjects2= [];
gdjs.optionsmenuCode.GDmemoryObjects3= [];
gdjs.optionsmenuCode.GDfpsObjects1= [];
gdjs.optionsmenuCode.GDfpsObjects2= [];
gdjs.optionsmenuCode.GDfpsObjects3= [];
gdjs.optionsmenuCode.GDtext1Objects1= [];
gdjs.optionsmenuCode.GDtext1Objects2= [];
gdjs.optionsmenuCode.GDtext1Objects3= [];
gdjs.optionsmenuCode.GDintenssongObjects1= [];
gdjs.optionsmenuCode.GDintenssongObjects2= [];
gdjs.optionsmenuCode.GDintenssongObjects3= [];
gdjs.optionsmenuCode.GDsonicObjects1= [];
gdjs.optionsmenuCode.GDsonicObjects2= [];
gdjs.optionsmenuCode.GDsonicObjects3= [];
gdjs.optionsmenuCode.GDlntObjects1= [];
gdjs.optionsmenuCode.GDlntObjects2= [];
gdjs.optionsmenuCode.GDlntObjects3= [];
gdjs.optionsmenuCode.GDNewSpriteObjects1= [];
gdjs.optionsmenuCode.GDNewSpriteObjects2= [];
gdjs.optionsmenuCode.GDNewSpriteObjects3= [];
gdjs.optionsmenuCode.GDdevbuldwarningObjects1= [];
gdjs.optionsmenuCode.GDdevbuldwarningObjects2= [];
gdjs.optionsmenuCode.GDdevbuldwarningObjects3= [];
gdjs.optionsmenuCode.GDNewTextInputObjects1= [];
gdjs.optionsmenuCode.GDNewTextInputObjects2= [];
gdjs.optionsmenuCode.GDNewTextInputObjects3= [];
gdjs.optionsmenuCode.GDtestbeginingObjects1= [];
gdjs.optionsmenuCode.GDtestbeginingObjects2= [];
gdjs.optionsmenuCode.GDtestbeginingObjects3= [];
gdjs.optionsmenuCode.GDnewgoundsfunylogoObjects1= [];
gdjs.optionsmenuCode.GDnewgoundsfunylogoObjects2= [];
gdjs.optionsmenuCode.GDnewgoundsfunylogoObjects3= [];
gdjs.optionsmenuCode.GDgfmenuObjects1= [];
gdjs.optionsmenuCode.GDgfmenuObjects2= [];
gdjs.optionsmenuCode.GDgfmenuObjects3= [];
gdjs.optionsmenuCode.GDfnficonObjects1= [];
gdjs.optionsmenuCode.GDfnficonObjects2= [];
gdjs.optionsmenuCode.GDfnficonObjects3= [];
gdjs.optionsmenuCode.GDbasckroundimageObjects1= [];
gdjs.optionsmenuCode.GDbasckroundimageObjects2= [];
gdjs.optionsmenuCode.GDbasckroundimageObjects3= [];
gdjs.optionsmenuCode.GDmenutextObjects1= [];
gdjs.optionsmenuCode.GDmenutextObjects2= [];
gdjs.optionsmenuCode.GDmenutextObjects3= [];
gdjs.optionsmenuCode.GDblackObjects1= [];
gdjs.optionsmenuCode.GDblackObjects2= [];
gdjs.optionsmenuCode.GDblackObjects3= [];
gdjs.optionsmenuCode.GDblack2Objects1= [];
gdjs.optionsmenuCode.GDblack2Objects2= [];
gdjs.optionsmenuCode.GDblack2Objects3= [];


gdjs.optionsmenuCode.eventsList0 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList1 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList2 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList3 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.optionsmenuCode.GDmenutextObjects2);

for (gdjs.optionsmenuCode.forEachIndex3 = 0;gdjs.optionsmenuCode.forEachIndex3 < gdjs.optionsmenuCode.GDmenutextObjects2.length;++gdjs.optionsmenuCode.forEachIndex3) {
gdjs.optionsmenuCode.GDmenutextObjects3.length = 0;


gdjs.optionsmenuCode.forEachTemporary3 = gdjs.optionsmenuCode.GDmenutextObjects2[gdjs.optionsmenuCode.forEachIndex3];
gdjs.optionsmenuCode.GDmenutextObjects3.push(gdjs.optionsmenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.optionsmenuCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.optionsmenuCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects3[i].enableEffect("Effect", true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "menubuttons", 0), (( gdjs.optionsmenuCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.optionsmenuCode.GDmenutextObjects3[0].getCenterXInScene()), 0.09), "menubuttons", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "menubuttons", 0), (( gdjs.optionsmenuCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.optionsmenuCode.GDmenutextObjects3[0].getCenterYInScene()), 0.09), "menubuttons", 0);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.optionsmenuCode.GDmenutextObjects2);

for (gdjs.optionsmenuCode.forEachIndex3 = 0;gdjs.optionsmenuCode.forEachIndex3 < gdjs.optionsmenuCode.GDmenutextObjects2.length;++gdjs.optionsmenuCode.forEachIndex3) {
gdjs.optionsmenuCode.GDmenutextObjects3.length = 0;


gdjs.optionsmenuCode.forEachTemporary3 = gdjs.optionsmenuCode.GDmenutextObjects2[gdjs.optionsmenuCode.forEachIndex3];
gdjs.optionsmenuCode.GDmenutextObjects3.push(gdjs.optionsmenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.optionsmenuCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.optionsmenuCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "textsizechange", 0.09, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects3[i].setCharacterSize(gdjs.randomFloatInRange(69.95, 70.5));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.optionsmenuCode.GDmenutextObjects2);

for (gdjs.optionsmenuCode.forEachIndex3 = 0;gdjs.optionsmenuCode.forEachIndex3 < gdjs.optionsmenuCode.GDmenutextObjects2.length;++gdjs.optionsmenuCode.forEachIndex3) {
gdjs.optionsmenuCode.GDmenutextObjects3.length = 0;


gdjs.optionsmenuCode.forEachTemporary3 = gdjs.optionsmenuCode.GDmenutextObjects2[gdjs.optionsmenuCode.forEachIndex3];
gdjs.optionsmenuCode.GDmenutextObjects3.push(gdjs.optionsmenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.optionsmenuCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.optionsmenuCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105551932);
}
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.optionsmenuCode.GDmenutextObjects1);

for (gdjs.optionsmenuCode.forEachIndex2 = 0;gdjs.optionsmenuCode.forEachIndex2 < gdjs.optionsmenuCode.GDmenutextObjects1.length;++gdjs.optionsmenuCode.forEachIndex2) {
gdjs.optionsmenuCode.GDmenutextObjects2.length = 0;


gdjs.optionsmenuCode.forEachTemporary2 = gdjs.optionsmenuCode.GDmenutextObjects1[gdjs.optionsmenuCode.forEachIndex2];
gdjs.optionsmenuCode.GDmenutextObjects2.push(gdjs.optionsmenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.optionsmenuCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.optionsmenuCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.optionsmenuCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.optionsmenuCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects2[i].enableEffect("Effect", false);
}
}}
}

}


};gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.optionsmenuCode.GDmemoryObjects2});
gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.optionsmenuCode.GDfpsObjects2});
gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.optionsmenuCode.GDmemoryObjects2});
gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.optionsmenuCode.GDfpsObjects2});
gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.optionsmenuCode.GDmemoryObjects2});
gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.optionsmenuCode.GDfpsObjects2});
gdjs.optionsmenuCode.eventsList5 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.optionsmenuCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.optionsmenuCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.optionsmenuCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmemoryObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("memory")))) + " MB");
}
}}

}


};gdjs.optionsmenuCode.eventsList7 = function(runtimeScene) {

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
gdjs.optionsmenuCode.GDfpsObjects2.length = 0;

gdjs.optionsmenuCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDmemoryObjects2Objects, 3, 29, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDfpsObjects2Objects, 3, 3, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDmemoryObjects2Objects, 3, 29, "black");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDfpsObjects2Objects, 3, 3, "black");
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
gdjs.optionsmenuCode.GDfpsObjects2.length = 0;

gdjs.optionsmenuCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDmemoryObjects2Objects, 3, 29, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.optionsmenuCode.mapOfGDgdjs_46optionsmenuCode_46GDfpsObjects2Objects, 3, 3, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.optionsmenuCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.optionsmenuCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmemoryObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "memoryloop", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.optionsmenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.optionsmenuCode.GDmemoryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.optionsmenuCode.GDmemoryObjects2.length;i<l;++i) {
    if ( gdjs.optionsmenuCode.GDmemoryObjects2[i].getString() == "0 MB" ) {
        isConditionTrue_0 = true;
        gdjs.optionsmenuCode.GDmemoryObjects2[k] = gdjs.optionsmenuCode.GDmemoryObjects2[i];
        ++k;
    }
}
gdjs.optionsmenuCode.GDmemoryObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(108584028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.optionsmenuCode.GDmemoryObjects2 */
{for(var i = 0, len = gdjs.optionsmenuCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmemoryObjects2[i].setString("(   memory usage not supported   )");
}
}{for(var i = 0, len = gdjs.optionsmenuCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmemoryObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadeawakmemory", 0, "easeInQuad", 2000, true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.optionsmenuCode.eventsList8 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList9 = function(runtimeScene) {

};gdjs.optionsmenuCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "black");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waitforsec");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "menumusicup", 0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.optionsmenuCode.GDblackObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (0.5));
}{for(var i = 0, len = gdjs.optionsmenuCode.GDblackObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDblackObjects2[i].setY(gdjs.optionsmenuCode.GDblackObjects2[i].getY() - (50));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.optionsmenuCode.eventsList11 = function(runtimeScene) {

{


gdjs.optionsmenuCode.eventsList4(runtimeScene);
}


{


gdjs.optionsmenuCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "scrollMenu.ogg", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 4;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "scrollMenu.ogg", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.optionsmenuCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.optionsmenuCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.optionsmenuCode.GDbasckroundimageObjects1[i].getPointY("")), 0, 0.09));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.optionsmenuCode.GDmenutextObjects1);

for (gdjs.optionsmenuCode.forEachIndex2 = 0;gdjs.optionsmenuCode.forEachIndex2 < gdjs.optionsmenuCode.GDmenutextObjects1.length;++gdjs.optionsmenuCode.forEachIndex2) {
gdjs.optionsmenuCode.GDmenutextObjects2.length = 0;


gdjs.optionsmenuCode.forEachTemporary2 = gdjs.optionsmenuCode.GDmenutextObjects1[gdjs.optionsmenuCode.forEachIndex2];
gdjs.optionsmenuCode.GDmenutextObjects2.push(gdjs.optionsmenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.optionsmenuCode.GDmenutextObjects2[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects2[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.optionsmenuCode.GDmenutextObjects2[i].getWidth()) / 2);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.optionsmenuCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.optionsmenuCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.optionsmenuCode.GDbasckroundimageObjects1[i].getPointY("")), -(20), 0.09));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.optionsmenuCode.GDmenutextObjects1);

for (gdjs.optionsmenuCode.forEachIndex2 = 0;gdjs.optionsmenuCode.forEachIndex2 < gdjs.optionsmenuCode.GDmenutextObjects1.length;++gdjs.optionsmenuCode.forEachIndex2) {
gdjs.optionsmenuCode.GDmenutextObjects2.length = 0;


gdjs.optionsmenuCode.forEachTemporary2 = gdjs.optionsmenuCode.GDmenutextObjects1[gdjs.optionsmenuCode.forEachIndex2];
gdjs.optionsmenuCode.GDmenutextObjects2.push(gdjs.optionsmenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.optionsmenuCode.GDmenutextObjects2.length;i<l;++i) {
    if ( gdjs.optionsmenuCode.GDmenutextObjects2[i].getVariableNumber(gdjs.optionsmenuCode.GDmenutextObjects2[i].getVariables().getFromIndex(1)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.optionsmenuCode.GDmenutextObjects2[k] = gdjs.optionsmenuCode.GDmenutextObjects2[i];
        ++k;
    }
}
gdjs.optionsmenuCode.GDmenutextObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects2[i].setString("Do ui bop in - " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild("douibopin")));
}
}{for(var i = 0, len = gdjs.optionsmenuCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDmenutextObjects2[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.optionsmenuCode.GDmenutextObjects2[i].getWidth()) / 2);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.optionsmenuCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.optionsmenuCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.optionsmenuCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.optionsmenuCode.GDbasckroundimageObjects1[i].getPointY("")), -(40), 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waitforsec") >= 1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8).getChild("douibopin"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tripple trouble with friends but bf is falling endlessly into the void of gdevelop", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Carters weird song", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menumain", false);
}}

}


{


gdjs.optionsmenuCode.eventsList10(runtimeScene);
}


};

gdjs.optionsmenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.optionsmenuCode.GDmemoryObjects1.length = 0;
gdjs.optionsmenuCode.GDmemoryObjects2.length = 0;
gdjs.optionsmenuCode.GDmemoryObjects3.length = 0;
gdjs.optionsmenuCode.GDfpsObjects1.length = 0;
gdjs.optionsmenuCode.GDfpsObjects2.length = 0;
gdjs.optionsmenuCode.GDfpsObjects3.length = 0;
gdjs.optionsmenuCode.GDtext1Objects1.length = 0;
gdjs.optionsmenuCode.GDtext1Objects2.length = 0;
gdjs.optionsmenuCode.GDtext1Objects3.length = 0;
gdjs.optionsmenuCode.GDintenssongObjects1.length = 0;
gdjs.optionsmenuCode.GDintenssongObjects2.length = 0;
gdjs.optionsmenuCode.GDintenssongObjects3.length = 0;
gdjs.optionsmenuCode.GDsonicObjects1.length = 0;
gdjs.optionsmenuCode.GDsonicObjects2.length = 0;
gdjs.optionsmenuCode.GDsonicObjects3.length = 0;
gdjs.optionsmenuCode.GDlntObjects1.length = 0;
gdjs.optionsmenuCode.GDlntObjects2.length = 0;
gdjs.optionsmenuCode.GDlntObjects3.length = 0;
gdjs.optionsmenuCode.GDNewSpriteObjects1.length = 0;
gdjs.optionsmenuCode.GDNewSpriteObjects2.length = 0;
gdjs.optionsmenuCode.GDNewSpriteObjects3.length = 0;
gdjs.optionsmenuCode.GDdevbuldwarningObjects1.length = 0;
gdjs.optionsmenuCode.GDdevbuldwarningObjects2.length = 0;
gdjs.optionsmenuCode.GDdevbuldwarningObjects3.length = 0;
gdjs.optionsmenuCode.GDNewTextInputObjects1.length = 0;
gdjs.optionsmenuCode.GDNewTextInputObjects2.length = 0;
gdjs.optionsmenuCode.GDNewTextInputObjects3.length = 0;
gdjs.optionsmenuCode.GDtestbeginingObjects1.length = 0;
gdjs.optionsmenuCode.GDtestbeginingObjects2.length = 0;
gdjs.optionsmenuCode.GDtestbeginingObjects3.length = 0;
gdjs.optionsmenuCode.GDnewgoundsfunylogoObjects1.length = 0;
gdjs.optionsmenuCode.GDnewgoundsfunylogoObjects2.length = 0;
gdjs.optionsmenuCode.GDnewgoundsfunylogoObjects3.length = 0;
gdjs.optionsmenuCode.GDgfmenuObjects1.length = 0;
gdjs.optionsmenuCode.GDgfmenuObjects2.length = 0;
gdjs.optionsmenuCode.GDgfmenuObjects3.length = 0;
gdjs.optionsmenuCode.GDfnficonObjects1.length = 0;
gdjs.optionsmenuCode.GDfnficonObjects2.length = 0;
gdjs.optionsmenuCode.GDfnficonObjects3.length = 0;
gdjs.optionsmenuCode.GDbasckroundimageObjects1.length = 0;
gdjs.optionsmenuCode.GDbasckroundimageObjects2.length = 0;
gdjs.optionsmenuCode.GDbasckroundimageObjects3.length = 0;
gdjs.optionsmenuCode.GDmenutextObjects1.length = 0;
gdjs.optionsmenuCode.GDmenutextObjects2.length = 0;
gdjs.optionsmenuCode.GDmenutextObjects3.length = 0;
gdjs.optionsmenuCode.GDblackObjects1.length = 0;
gdjs.optionsmenuCode.GDblackObjects2.length = 0;
gdjs.optionsmenuCode.GDblackObjects3.length = 0;
gdjs.optionsmenuCode.GDblack2Objects1.length = 0;
gdjs.optionsmenuCode.GDblack2Objects2.length = 0;
gdjs.optionsmenuCode.GDblack2Objects3.length = 0;

gdjs.optionsmenuCode.eventsList11(runtimeScene);

return;

}

gdjs['optionsmenuCode'] = gdjs.optionsmenuCode;
