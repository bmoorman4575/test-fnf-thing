gdjs.FREEplayCode = {};
gdjs.FREEplayCode.forEachIndex2 = 0;

gdjs.FREEplayCode.forEachIndex3 = 0;

gdjs.FREEplayCode.forEachObjects2 = [];

gdjs.FREEplayCode.forEachObjects3 = [];

gdjs.FREEplayCode.forEachTemporary2 = null;

gdjs.FREEplayCode.forEachTemporary3 = null;

gdjs.FREEplayCode.forEachTotalCount2 = 0;

gdjs.FREEplayCode.forEachTotalCount3 = 0;

gdjs.FREEplayCode.GDmemoryObjects1= [];
gdjs.FREEplayCode.GDmemoryObjects2= [];
gdjs.FREEplayCode.GDmemoryObjects3= [];
gdjs.FREEplayCode.GDfpsObjects1= [];
gdjs.FREEplayCode.GDfpsObjects2= [];
gdjs.FREEplayCode.GDfpsObjects3= [];
gdjs.FREEplayCode.GDtext1Objects1= [];
gdjs.FREEplayCode.GDtext1Objects2= [];
gdjs.FREEplayCode.GDtext1Objects3= [];
gdjs.FREEplayCode.GDintenssongObjects1= [];
gdjs.FREEplayCode.GDintenssongObjects2= [];
gdjs.FREEplayCode.GDintenssongObjects3= [];
gdjs.FREEplayCode.GDsonicObjects1= [];
gdjs.FREEplayCode.GDsonicObjects2= [];
gdjs.FREEplayCode.GDsonicObjects3= [];
gdjs.FREEplayCode.GDlntObjects1= [];
gdjs.FREEplayCode.GDlntObjects2= [];
gdjs.FREEplayCode.GDlntObjects3= [];
gdjs.FREEplayCode.GDNewSpriteObjects1= [];
gdjs.FREEplayCode.GDNewSpriteObjects2= [];
gdjs.FREEplayCode.GDNewSpriteObjects3= [];
gdjs.FREEplayCode.GDdevbuldwarningObjects1= [];
gdjs.FREEplayCode.GDdevbuldwarningObjects2= [];
gdjs.FREEplayCode.GDdevbuldwarningObjects3= [];
gdjs.FREEplayCode.GDNewTextInputObjects1= [];
gdjs.FREEplayCode.GDNewTextInputObjects2= [];
gdjs.FREEplayCode.GDNewTextInputObjects3= [];
gdjs.FREEplayCode.GDtestbeginingObjects1= [];
gdjs.FREEplayCode.GDtestbeginingObjects2= [];
gdjs.FREEplayCode.GDtestbeginingObjects3= [];
gdjs.FREEplayCode.GDnewgoundsfunylogoObjects1= [];
gdjs.FREEplayCode.GDnewgoundsfunylogoObjects2= [];
gdjs.FREEplayCode.GDnewgoundsfunylogoObjects3= [];
gdjs.FREEplayCode.GDgfmenuObjects1= [];
gdjs.FREEplayCode.GDgfmenuObjects2= [];
gdjs.FREEplayCode.GDgfmenuObjects3= [];
gdjs.FREEplayCode.GDfnficonObjects1= [];
gdjs.FREEplayCode.GDfnficonObjects2= [];
gdjs.FREEplayCode.GDfnficonObjects3= [];
gdjs.FREEplayCode.GDbasckroundimageObjects1= [];
gdjs.FREEplayCode.GDbasckroundimageObjects2= [];
gdjs.FREEplayCode.GDbasckroundimageObjects3= [];
gdjs.FREEplayCode.GDmenutextObjects1= [];
gdjs.FREEplayCode.GDmenutextObjects2= [];
gdjs.FREEplayCode.GDmenutextObjects3= [];
gdjs.FREEplayCode.GDblackObjects1= [];
gdjs.FREEplayCode.GDblackObjects2= [];
gdjs.FREEplayCode.GDblackObjects3= [];
gdjs.FREEplayCode.GDblack2Objects1= [];
gdjs.FREEplayCode.GDblack2Objects2= [];
gdjs.FREEplayCode.GDblack2Objects3= [];


gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.FREEplayCode.GDmemoryObjects2});
gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.FREEplayCode.GDfpsObjects2});
gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.FREEplayCode.GDmemoryObjects2});
gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.FREEplayCode.GDfpsObjects2});
gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.FREEplayCode.GDmemoryObjects2});
gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.FREEplayCode.GDfpsObjects2});
gdjs.FREEplayCode.eventsList0 = function(runtimeScene) {

};gdjs.FREEplayCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.FREEplayCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.FREEplayCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.FREEplayCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmemoryObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("memory")))) + " MB");
}
}}

}


};gdjs.FREEplayCode.eventsList2 = function(runtimeScene) {

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
gdjs.FREEplayCode.GDfpsObjects2.length = 0;

gdjs.FREEplayCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDmemoryObjects2Objects, 3, 29, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDfpsObjects2Objects, 3, 3, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDmemoryObjects2Objects, 3, 29, "black");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDfpsObjects2Objects, 3, 3, "black");
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
gdjs.FREEplayCode.GDfpsObjects2.length = 0;

gdjs.FREEplayCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDmemoryObjects2Objects, 3, 29, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FREEplayCode.mapOfGDgdjs_46FREEplayCode_46GDfpsObjects2Objects, 3, 3, "");
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
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.FREEplayCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.FREEplayCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmemoryObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.FREEplayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.FREEplayCode.GDmemoryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FREEplayCode.GDmemoryObjects2.length;i<l;++i) {
    if ( gdjs.FREEplayCode.GDmemoryObjects2[i].getString() == "0 MB" ) {
        isConditionTrue_0 = true;
        gdjs.FREEplayCode.GDmemoryObjects2[k] = gdjs.FREEplayCode.GDmemoryObjects2[i];
        ++k;
    }
}
gdjs.FREEplayCode.GDmemoryObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(108584028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FREEplayCode.GDmemoryObjects2 */
{for(var i = 0, len = gdjs.FREEplayCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmemoryObjects2[i].setString("(   memory usage not supported   )");
}
}{for(var i = 0, len = gdjs.FREEplayCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmemoryObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadeawakmemory", 0, "easeInQuad", 2000, true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FREEplayCode.eventsList3 = function(runtimeScene) {

};gdjs.FREEplayCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "black");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waitforsec");
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Looking for a song", "", 1, 0, "lookinsong", "lookinsong", "lookinsong", "lookinsong", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "menumusicup", 0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.FREEplayCode.GDblackObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (0.5));
}{for(var i = 0, len = gdjs.FREEplayCode.GDblackObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDblackObjects2[i].setY(gdjs.FREEplayCode.GDblackObjects2[i].getY() - (50));
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


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.FREEplayCode.GDmenutextObjects1);

for (gdjs.FREEplayCode.forEachIndex2 = 0;gdjs.FREEplayCode.forEachIndex2 < gdjs.FREEplayCode.GDmenutextObjects1.length;++gdjs.FREEplayCode.forEachIndex2) {
gdjs.FREEplayCode.GDmenutextObjects2.length = 0;


gdjs.FREEplayCode.forEachTemporary2 = gdjs.FREEplayCode.GDmenutextObjects1[gdjs.FREEplayCode.forEachIndex2];
gdjs.FREEplayCode.GDmenutextObjects2.push(gdjs.FREEplayCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.FREEplayCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmenutextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.FREEplayCode.GDmenutextObjects2[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.FREEplayCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmenutextObjects2[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.FREEplayCode.GDmenutextObjects2[i].getWidth()) / 2);
}
}}
}

}


};gdjs.FREEplayCode.eventsList5 = function(runtimeScene) {

};gdjs.FREEplayCode.eventsList6 = function(runtimeScene) {

};gdjs.FREEplayCode.eventsList7 = function(runtimeScene) {

};gdjs.FREEplayCode.eventsList8 = function(runtimeScene) {

};gdjs.FREEplayCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.FREEplayCode.GDmenutextObjects2);

for (gdjs.FREEplayCode.forEachIndex3 = 0;gdjs.FREEplayCode.forEachIndex3 < gdjs.FREEplayCode.GDmenutextObjects2.length;++gdjs.FREEplayCode.forEachIndex3) {
gdjs.FREEplayCode.GDmenutextObjects3.length = 0;


gdjs.FREEplayCode.forEachTemporary3 = gdjs.FREEplayCode.GDmenutextObjects2[gdjs.FREEplayCode.forEachIndex3];
gdjs.FREEplayCode.GDmenutextObjects3.push(gdjs.FREEplayCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.FREEplayCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FREEplayCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.FREEplayCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmenutextObjects3[i].enableEffect("Effect", true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "menubuttons", 0), (( gdjs.FREEplayCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.FREEplayCode.GDmenutextObjects3[0].getCenterXInScene()), 0.09), "menubuttons", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "menubuttons", 0), (( gdjs.FREEplayCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.FREEplayCode.GDmenutextObjects3[0].getCenterYInScene()), 0.09), "menubuttons", 0);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.FREEplayCode.GDmenutextObjects2);

for (gdjs.FREEplayCode.forEachIndex3 = 0;gdjs.FREEplayCode.forEachIndex3 < gdjs.FREEplayCode.GDmenutextObjects2.length;++gdjs.FREEplayCode.forEachIndex3) {
gdjs.FREEplayCode.GDmenutextObjects3.length = 0;


gdjs.FREEplayCode.forEachTemporary3 = gdjs.FREEplayCode.GDmenutextObjects2[gdjs.FREEplayCode.forEachIndex3];
gdjs.FREEplayCode.GDmenutextObjects3.push(gdjs.FREEplayCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.FREEplayCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FREEplayCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "textsizechange", 0.09, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.FREEplayCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmenutextObjects3[i].setCharacterSize(gdjs.randomFloatInRange(69.95, 70.5));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.FREEplayCode.GDmenutextObjects2);

for (gdjs.FREEplayCode.forEachIndex3 = 0;gdjs.FREEplayCode.forEachIndex3 < gdjs.FREEplayCode.GDmenutextObjects2.length;++gdjs.FREEplayCode.forEachIndex3) {
gdjs.FREEplayCode.GDmenutextObjects3.length = 0;


gdjs.FREEplayCode.forEachTemporary3 = gdjs.FREEplayCode.GDmenutextObjects2[gdjs.FREEplayCode.forEachIndex3];
gdjs.FREEplayCode.GDmenutextObjects3.push(gdjs.FREEplayCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.FREEplayCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FREEplayCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105606820);
}
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.FREEplayCode.GDmenutextObjects1);

for (gdjs.FREEplayCode.forEachIndex2 = 0;gdjs.FREEplayCode.forEachIndex2 < gdjs.FREEplayCode.GDmenutextObjects1.length;++gdjs.FREEplayCode.forEachIndex2) {
gdjs.FREEplayCode.GDmenutextObjects2.length = 0;


gdjs.FREEplayCode.forEachTemporary2 = gdjs.FREEplayCode.GDmenutextObjects1[gdjs.FREEplayCode.forEachIndex2];
gdjs.FREEplayCode.GDmenutextObjects2.push(gdjs.FREEplayCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.FREEplayCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FREEplayCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.FREEplayCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FREEplayCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.FREEplayCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.FREEplayCode.GDmenutextObjects2[i].enableEffect("Effect", false);
}
}}
}

}


};gdjs.FREEplayCode.eventsList10 = function(runtimeScene) {

{


gdjs.FREEplayCode.eventsList2(runtimeScene);
}


{


gdjs.FREEplayCode.eventsList4(runtimeScene);
}


{


gdjs.FREEplayCode.eventsList9(runtimeScene);
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 5;
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
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.FREEplayCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.FREEplayCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.FREEplayCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.FREEplayCode.GDbasckroundimageObjects1[i].getPointY("")), 0, 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.FREEplayCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.FREEplayCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.FREEplayCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.FREEplayCode.GDbasckroundimageObjects1[i].getPointY("")), -(20), 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.FREEplayCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.FREEplayCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.FREEplayCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.FREEplayCode.GDbasckroundimageObjects1[i].getPointY("")), -(40), 0.09));
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
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waitforsec") >= 1;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tripple trouble with friends", true);
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
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "trippletrobbleanimationoverid", true);
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameengine2.02", true);
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


};

gdjs.FREEplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FREEplayCode.GDmemoryObjects1.length = 0;
gdjs.FREEplayCode.GDmemoryObjects2.length = 0;
gdjs.FREEplayCode.GDmemoryObjects3.length = 0;
gdjs.FREEplayCode.GDfpsObjects1.length = 0;
gdjs.FREEplayCode.GDfpsObjects2.length = 0;
gdjs.FREEplayCode.GDfpsObjects3.length = 0;
gdjs.FREEplayCode.GDtext1Objects1.length = 0;
gdjs.FREEplayCode.GDtext1Objects2.length = 0;
gdjs.FREEplayCode.GDtext1Objects3.length = 0;
gdjs.FREEplayCode.GDintenssongObjects1.length = 0;
gdjs.FREEplayCode.GDintenssongObjects2.length = 0;
gdjs.FREEplayCode.GDintenssongObjects3.length = 0;
gdjs.FREEplayCode.GDsonicObjects1.length = 0;
gdjs.FREEplayCode.GDsonicObjects2.length = 0;
gdjs.FREEplayCode.GDsonicObjects3.length = 0;
gdjs.FREEplayCode.GDlntObjects1.length = 0;
gdjs.FREEplayCode.GDlntObjects2.length = 0;
gdjs.FREEplayCode.GDlntObjects3.length = 0;
gdjs.FREEplayCode.GDNewSpriteObjects1.length = 0;
gdjs.FREEplayCode.GDNewSpriteObjects2.length = 0;
gdjs.FREEplayCode.GDNewSpriteObjects3.length = 0;
gdjs.FREEplayCode.GDdevbuldwarningObjects1.length = 0;
gdjs.FREEplayCode.GDdevbuldwarningObjects2.length = 0;
gdjs.FREEplayCode.GDdevbuldwarningObjects3.length = 0;
gdjs.FREEplayCode.GDNewTextInputObjects1.length = 0;
gdjs.FREEplayCode.GDNewTextInputObjects2.length = 0;
gdjs.FREEplayCode.GDNewTextInputObjects3.length = 0;
gdjs.FREEplayCode.GDtestbeginingObjects1.length = 0;
gdjs.FREEplayCode.GDtestbeginingObjects2.length = 0;
gdjs.FREEplayCode.GDtestbeginingObjects3.length = 0;
gdjs.FREEplayCode.GDnewgoundsfunylogoObjects1.length = 0;
gdjs.FREEplayCode.GDnewgoundsfunylogoObjects2.length = 0;
gdjs.FREEplayCode.GDnewgoundsfunylogoObjects3.length = 0;
gdjs.FREEplayCode.GDgfmenuObjects1.length = 0;
gdjs.FREEplayCode.GDgfmenuObjects2.length = 0;
gdjs.FREEplayCode.GDgfmenuObjects3.length = 0;
gdjs.FREEplayCode.GDfnficonObjects1.length = 0;
gdjs.FREEplayCode.GDfnficonObjects2.length = 0;
gdjs.FREEplayCode.GDfnficonObjects3.length = 0;
gdjs.FREEplayCode.GDbasckroundimageObjects1.length = 0;
gdjs.FREEplayCode.GDbasckroundimageObjects2.length = 0;
gdjs.FREEplayCode.GDbasckroundimageObjects3.length = 0;
gdjs.FREEplayCode.GDmenutextObjects1.length = 0;
gdjs.FREEplayCode.GDmenutextObjects2.length = 0;
gdjs.FREEplayCode.GDmenutextObjects3.length = 0;
gdjs.FREEplayCode.GDblackObjects1.length = 0;
gdjs.FREEplayCode.GDblackObjects2.length = 0;
gdjs.FREEplayCode.GDblackObjects3.length = 0;
gdjs.FREEplayCode.GDblack2Objects1.length = 0;
gdjs.FREEplayCode.GDblack2Objects2.length = 0;
gdjs.FREEplayCode.GDblack2Objects3.length = 0;

gdjs.FREEplayCode.eventsList10(runtimeScene);

return;

}

gdjs['FREEplayCode'] = gdjs.FREEplayCode;
