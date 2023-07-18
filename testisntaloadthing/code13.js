gdjs.menumainCode = {};
gdjs.menumainCode.forEachIndex2 = 0;

gdjs.menumainCode.forEachIndex3 = 0;

gdjs.menumainCode.forEachObjects2 = [];

gdjs.menumainCode.forEachObjects3 = [];

gdjs.menumainCode.forEachTemporary2 = null;

gdjs.menumainCode.forEachTemporary3 = null;

gdjs.menumainCode.forEachTotalCount2 = 0;

gdjs.menumainCode.forEachTotalCount3 = 0;

gdjs.menumainCode.GDmemoryObjects1= [];
gdjs.menumainCode.GDmemoryObjects2= [];
gdjs.menumainCode.GDmemoryObjects3= [];
gdjs.menumainCode.GDfpsObjects1= [];
gdjs.menumainCode.GDfpsObjects2= [];
gdjs.menumainCode.GDfpsObjects3= [];
gdjs.menumainCode.GDtext1Objects1= [];
gdjs.menumainCode.GDtext1Objects2= [];
gdjs.menumainCode.GDtext1Objects3= [];
gdjs.menumainCode.GDintenssongObjects1= [];
gdjs.menumainCode.GDintenssongObjects2= [];
gdjs.menumainCode.GDintenssongObjects3= [];
gdjs.menumainCode.GDsonicObjects1= [];
gdjs.menumainCode.GDsonicObjects2= [];
gdjs.menumainCode.GDsonicObjects3= [];
gdjs.menumainCode.GDlntObjects1= [];
gdjs.menumainCode.GDlntObjects2= [];
gdjs.menumainCode.GDlntObjects3= [];
gdjs.menumainCode.GDNewSpriteObjects1= [];
gdjs.menumainCode.GDNewSpriteObjects2= [];
gdjs.menumainCode.GDNewSpriteObjects3= [];
gdjs.menumainCode.GDdevbuldwarningObjects1= [];
gdjs.menumainCode.GDdevbuldwarningObjects2= [];
gdjs.menumainCode.GDdevbuldwarningObjects3= [];
gdjs.menumainCode.GDNewTextInputObjects1= [];
gdjs.menumainCode.GDNewTextInputObjects2= [];
gdjs.menumainCode.GDNewTextInputObjects3= [];
gdjs.menumainCode.GDtestbeginingObjects1= [];
gdjs.menumainCode.GDtestbeginingObjects2= [];
gdjs.menumainCode.GDtestbeginingObjects3= [];
gdjs.menumainCode.GDnewgoundsfunylogoObjects1= [];
gdjs.menumainCode.GDnewgoundsfunylogoObjects2= [];
gdjs.menumainCode.GDnewgoundsfunylogoObjects3= [];
gdjs.menumainCode.GDgfmenuObjects1= [];
gdjs.menumainCode.GDgfmenuObjects2= [];
gdjs.menumainCode.GDgfmenuObjects3= [];
gdjs.menumainCode.GDfnficonObjects1= [];
gdjs.menumainCode.GDfnficonObjects2= [];
gdjs.menumainCode.GDfnficonObjects3= [];
gdjs.menumainCode.GDbasckroundimageObjects1= [];
gdjs.menumainCode.GDbasckroundimageObjects2= [];
gdjs.menumainCode.GDbasckroundimageObjects3= [];
gdjs.menumainCode.GDmenutextObjects1= [];
gdjs.menumainCode.GDmenutextObjects2= [];
gdjs.menumainCode.GDmenutextObjects3= [];
gdjs.menumainCode.GDblackObjects1= [];
gdjs.menumainCode.GDblackObjects2= [];
gdjs.menumainCode.GDblackObjects3= [];
gdjs.menumainCode.GDblack2Objects1= [];
gdjs.menumainCode.GDblack2Objects2= [];
gdjs.menumainCode.GDblack2Objects3= [];
gdjs.menumainCode.GDversionnumberObjects1= [];
gdjs.menumainCode.GDversionnumberObjects2= [];
gdjs.menumainCode.GDversionnumberObjects3= [];


gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.menumainCode.GDmemoryObjects2});
gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menumainCode.GDfpsObjects2});
gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.menumainCode.GDmemoryObjects2});
gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menumainCode.GDfpsObjects2});
gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.menumainCode.GDmemoryObjects2});
gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menumainCode.GDfpsObjects2});
gdjs.menumainCode.eventsList0 = function(runtimeScene) {

};gdjs.menumainCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.menumainCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.menumainCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.menumainCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmemoryObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("memory")))) + " MB");
}
}}

}


};gdjs.menumainCode.eventsList2 = function(runtimeScene) {

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
gdjs.menumainCode.GDfpsObjects2.length = 0;

gdjs.menumainCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDmemoryObjects2Objects, 3, 29, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDfpsObjects2Objects, 3, 3, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDmemoryObjects2Objects, 3, 29, "black");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDfpsObjects2Objects, 3, 3, "black");
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
gdjs.menumainCode.GDfpsObjects2.length = 0;

gdjs.menumainCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDmemoryObjects2Objects, 3, 29, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menumainCode.mapOfGDgdjs_46menumainCode_46GDfpsObjects2Objects, 3, 3, "");
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
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.menumainCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.menumainCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmemoryObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.menumainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.menumainCode.GDmemoryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menumainCode.GDmemoryObjects2.length;i<l;++i) {
    if ( gdjs.menumainCode.GDmemoryObjects2[i].getString() == "0 MB" ) {
        isConditionTrue_0 = true;
        gdjs.menumainCode.GDmemoryObjects2[k] = gdjs.menumainCode.GDmemoryObjects2[i];
        ++k;
    }
}
gdjs.menumainCode.GDmemoryObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(108584028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menumainCode.GDmemoryObjects2 */
{for(var i = 0, len = gdjs.menumainCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmemoryObjects2[i].setString("(   memory usage not supported   )");
}
}{for(var i = 0, len = gdjs.menumainCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmemoryObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadeawakmemory", 0, "easeInQuad", 2000, true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.menumainCode.eventsList3 = function(runtimeScene) {

};gdjs.menumainCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("versionnumber"), gdjs.menumainCode.GDversionnumberObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "black");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waitforsec");
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Looking for a song", "", 1, 0, "lookinsong", "lookinsong", "lookinsong", "lookinsong", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.menumainCode.GDversionnumberObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDversionnumberObjects2[i].setString("BTM's GD - engin of fnf, ver" + gdjs.evtsExt__CurrentGameVersion__ReturnCurrentGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "menumusicup", 0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.menumainCode.GDblackObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (0.5));
}{for(var i = 0, len = gdjs.menumainCode.GDblackObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDblackObjects2[i].setY(gdjs.menumainCode.GDblackObjects2[i].getY() - (50));
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

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.menumainCode.GDmenutextObjects1);

for (gdjs.menumainCode.forEachIndex2 = 0;gdjs.menumainCode.forEachIndex2 < gdjs.menumainCode.GDmenutextObjects1.length;++gdjs.menumainCode.forEachIndex2) {
gdjs.menumainCode.GDmenutextObjects2.length = 0;


gdjs.menumainCode.forEachTemporary2 = gdjs.menumainCode.GDmenutextObjects1[gdjs.menumainCode.forEachIndex2];
gdjs.menumainCode.GDmenutextObjects2.push(gdjs.menumainCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.menumainCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmenutextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.menumainCode.GDmenutextObjects2[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.menumainCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmenutextObjects2[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.menumainCode.GDmenutextObjects2[i].getWidth()) / 2);
}
}}
}

}


};gdjs.menumainCode.eventsList5 = function(runtimeScene) {

};gdjs.menumainCode.eventsList6 = function(runtimeScene) {

};gdjs.menumainCode.eventsList7 = function(runtimeScene) {

};gdjs.menumainCode.eventsList8 = function(runtimeScene) {

};gdjs.menumainCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.menumainCode.GDmenutextObjects2);

for (gdjs.menumainCode.forEachIndex3 = 0;gdjs.menumainCode.forEachIndex3 < gdjs.menumainCode.GDmenutextObjects2.length;++gdjs.menumainCode.forEachIndex3) {
gdjs.menumainCode.GDmenutextObjects3.length = 0;


gdjs.menumainCode.forEachTemporary3 = gdjs.menumainCode.GDmenutextObjects2[gdjs.menumainCode.forEachIndex3];
gdjs.menumainCode.GDmenutextObjects3.push(gdjs.menumainCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.menumainCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.menumainCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menumainCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.menumainCode.GDmenutextObjects3[i].enableEffect("Effect", true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "menubuttons", 0), (( gdjs.menumainCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.menumainCode.GDmenutextObjects3[0].getCenterXInScene()), 0.09), "menubuttons", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "menubuttons", 0), (( gdjs.menumainCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.menumainCode.GDmenutextObjects3[0].getCenterYInScene()), 0.09), "menubuttons", 0);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.menumainCode.GDmenutextObjects2);

for (gdjs.menumainCode.forEachIndex3 = 0;gdjs.menumainCode.forEachIndex3 < gdjs.menumainCode.GDmenutextObjects2.length;++gdjs.menumainCode.forEachIndex3) {
gdjs.menumainCode.GDmenutextObjects3.length = 0;


gdjs.menumainCode.forEachTemporary3 = gdjs.menumainCode.GDmenutextObjects2[gdjs.menumainCode.forEachIndex3];
gdjs.menumainCode.GDmenutextObjects3.push(gdjs.menumainCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.menumainCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.menumainCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "textsizechange", 0.09, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menumainCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.menumainCode.GDmenutextObjects3[i].setCharacterSize(gdjs.randomFloatInRange(69.95, 70.5));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.menumainCode.GDmenutextObjects2);

for (gdjs.menumainCode.forEachIndex3 = 0;gdjs.menumainCode.forEachIndex3 < gdjs.menumainCode.GDmenutextObjects2.length;++gdjs.menumainCode.forEachIndex3) {
gdjs.menumainCode.GDmenutextObjects3.length = 0;


gdjs.menumainCode.forEachTemporary3 = gdjs.menumainCode.GDmenutextObjects2[gdjs.menumainCode.forEachIndex3];
gdjs.menumainCode.GDmenutextObjects3.push(gdjs.menumainCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.menumainCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.menumainCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105579220);
}
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.menumainCode.GDmenutextObjects1);

for (gdjs.menumainCode.forEachIndex2 = 0;gdjs.menumainCode.forEachIndex2 < gdjs.menumainCode.GDmenutextObjects1.length;++gdjs.menumainCode.forEachIndex2) {
gdjs.menumainCode.GDmenutextObjects2.length = 0;


gdjs.menumainCode.forEachTemporary2 = gdjs.menumainCode.GDmenutextObjects1[gdjs.menumainCode.forEachIndex2];
gdjs.menumainCode.GDmenutextObjects2.push(gdjs.menumainCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.menumainCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.menumainCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.menumainCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.menumainCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.menumainCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.menumainCode.GDmenutextObjects2[i].enableEffect("Effect", false);
}
}}
}

}


};gdjs.menumainCode.eventsList10 = function(runtimeScene) {

{


gdjs.menumainCode.eventsList2(runtimeScene);
}


{


gdjs.menumainCode.eventsList4(runtimeScene);
}


{


gdjs.menumainCode.eventsList9(runtimeScene);
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 3;
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
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.menumainCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.menumainCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.menumainCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.menumainCode.GDbasckroundimageObjects1[i].getPointY("")), 0, 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.menumainCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.menumainCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.menumainCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.menumainCode.GDbasckroundimageObjects1[i].getPointY("")), -(20), 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.menumainCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.menumainCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.menumainCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.menumainCode.GDbasckroundimageObjects1[i].getPointY("")), -(40), 0.09));
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
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FREEplay", true);
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
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "optionsmenu");
}}

}


};

gdjs.menumainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menumainCode.GDmemoryObjects1.length = 0;
gdjs.menumainCode.GDmemoryObjects2.length = 0;
gdjs.menumainCode.GDmemoryObjects3.length = 0;
gdjs.menumainCode.GDfpsObjects1.length = 0;
gdjs.menumainCode.GDfpsObjects2.length = 0;
gdjs.menumainCode.GDfpsObjects3.length = 0;
gdjs.menumainCode.GDtext1Objects1.length = 0;
gdjs.menumainCode.GDtext1Objects2.length = 0;
gdjs.menumainCode.GDtext1Objects3.length = 0;
gdjs.menumainCode.GDintenssongObjects1.length = 0;
gdjs.menumainCode.GDintenssongObjects2.length = 0;
gdjs.menumainCode.GDintenssongObjects3.length = 0;
gdjs.menumainCode.GDsonicObjects1.length = 0;
gdjs.menumainCode.GDsonicObjects2.length = 0;
gdjs.menumainCode.GDsonicObjects3.length = 0;
gdjs.menumainCode.GDlntObjects1.length = 0;
gdjs.menumainCode.GDlntObjects2.length = 0;
gdjs.menumainCode.GDlntObjects3.length = 0;
gdjs.menumainCode.GDNewSpriteObjects1.length = 0;
gdjs.menumainCode.GDNewSpriteObjects2.length = 0;
gdjs.menumainCode.GDNewSpriteObjects3.length = 0;
gdjs.menumainCode.GDdevbuldwarningObjects1.length = 0;
gdjs.menumainCode.GDdevbuldwarningObjects2.length = 0;
gdjs.menumainCode.GDdevbuldwarningObjects3.length = 0;
gdjs.menumainCode.GDNewTextInputObjects1.length = 0;
gdjs.menumainCode.GDNewTextInputObjects2.length = 0;
gdjs.menumainCode.GDNewTextInputObjects3.length = 0;
gdjs.menumainCode.GDtestbeginingObjects1.length = 0;
gdjs.menumainCode.GDtestbeginingObjects2.length = 0;
gdjs.menumainCode.GDtestbeginingObjects3.length = 0;
gdjs.menumainCode.GDnewgoundsfunylogoObjects1.length = 0;
gdjs.menumainCode.GDnewgoundsfunylogoObjects2.length = 0;
gdjs.menumainCode.GDnewgoundsfunylogoObjects3.length = 0;
gdjs.menumainCode.GDgfmenuObjects1.length = 0;
gdjs.menumainCode.GDgfmenuObjects2.length = 0;
gdjs.menumainCode.GDgfmenuObjects3.length = 0;
gdjs.menumainCode.GDfnficonObjects1.length = 0;
gdjs.menumainCode.GDfnficonObjects2.length = 0;
gdjs.menumainCode.GDfnficonObjects3.length = 0;
gdjs.menumainCode.GDbasckroundimageObjects1.length = 0;
gdjs.menumainCode.GDbasckroundimageObjects2.length = 0;
gdjs.menumainCode.GDbasckroundimageObjects3.length = 0;
gdjs.menumainCode.GDmenutextObjects1.length = 0;
gdjs.menumainCode.GDmenutextObjects2.length = 0;
gdjs.menumainCode.GDmenutextObjects3.length = 0;
gdjs.menumainCode.GDblackObjects1.length = 0;
gdjs.menumainCode.GDblackObjects2.length = 0;
gdjs.menumainCode.GDblackObjects3.length = 0;
gdjs.menumainCode.GDblack2Objects1.length = 0;
gdjs.menumainCode.GDblack2Objects2.length = 0;
gdjs.menumainCode.GDblack2Objects3.length = 0;
gdjs.menumainCode.GDversionnumberObjects1.length = 0;
gdjs.menumainCode.GDversionnumberObjects2.length = 0;
gdjs.menumainCode.GDversionnumberObjects3.length = 0;

gdjs.menumainCode.eventsList10(runtimeScene);

return;

}

gdjs['menumainCode'] = gdjs.menumainCode;
