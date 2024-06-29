gdjs.ModdingtoolsCode = {};
gdjs.ModdingtoolsCode.localVariables = [];
gdjs.ModdingtoolsCode.forEachIndex2 = 0;

gdjs.ModdingtoolsCode.forEachIndex3 = 0;

gdjs.ModdingtoolsCode.forEachObjects2 = [];

gdjs.ModdingtoolsCode.forEachObjects3 = [];

gdjs.ModdingtoolsCode.forEachTemporary2 = null;

gdjs.ModdingtoolsCode.forEachTemporary3 = null;

gdjs.ModdingtoolsCode.forEachTotalCount2 = 0;

gdjs.ModdingtoolsCode.forEachTotalCount3 = 0;

gdjs.ModdingtoolsCode.GDtext1Objects1= [];
gdjs.ModdingtoolsCode.GDtext1Objects2= [];
gdjs.ModdingtoolsCode.GDtext1Objects3= [];
gdjs.ModdingtoolsCode.GDintenssongObjects1= [];
gdjs.ModdingtoolsCode.GDintenssongObjects2= [];
gdjs.ModdingtoolsCode.GDintenssongObjects3= [];
gdjs.ModdingtoolsCode.GDsonicObjects1= [];
gdjs.ModdingtoolsCode.GDsonicObjects2= [];
gdjs.ModdingtoolsCode.GDsonicObjects3= [];
gdjs.ModdingtoolsCode.GDlntObjects1= [];
gdjs.ModdingtoolsCode.GDlntObjects2= [];
gdjs.ModdingtoolsCode.GDlntObjects3= [];
gdjs.ModdingtoolsCode.GDNewSpriteObjects1= [];
gdjs.ModdingtoolsCode.GDNewSpriteObjects2= [];
gdjs.ModdingtoolsCode.GDNewSpriteObjects3= [];
gdjs.ModdingtoolsCode.GDdevbuldwarningObjects1= [];
gdjs.ModdingtoolsCode.GDdevbuldwarningObjects2= [];
gdjs.ModdingtoolsCode.GDdevbuldwarningObjects3= [];
gdjs.ModdingtoolsCode.GDNewTextInputObjects1= [];
gdjs.ModdingtoolsCode.GDNewTextInputObjects2= [];
gdjs.ModdingtoolsCode.GDNewTextInputObjects3= [];
gdjs.ModdingtoolsCode.GDtestbeginingObjects1= [];
gdjs.ModdingtoolsCode.GDtestbeginingObjects2= [];
gdjs.ModdingtoolsCode.GDtestbeginingObjects3= [];
gdjs.ModdingtoolsCode.GDnewgoundsfunylogoObjects1= [];
gdjs.ModdingtoolsCode.GDnewgoundsfunylogoObjects2= [];
gdjs.ModdingtoolsCode.GDnewgoundsfunylogoObjects3= [];
gdjs.ModdingtoolsCode.GDgfmenuObjects1= [];
gdjs.ModdingtoolsCode.GDgfmenuObjects2= [];
gdjs.ModdingtoolsCode.GDgfmenuObjects3= [];
gdjs.ModdingtoolsCode.GDfnficonObjects1= [];
gdjs.ModdingtoolsCode.GDfnficonObjects2= [];
gdjs.ModdingtoolsCode.GDfnficonObjects3= [];
gdjs.ModdingtoolsCode.GDbasckroundimageObjects1= [];
gdjs.ModdingtoolsCode.GDbasckroundimageObjects2= [];
gdjs.ModdingtoolsCode.GDbasckroundimageObjects3= [];
gdjs.ModdingtoolsCode.GDmenutextObjects1= [];
gdjs.ModdingtoolsCode.GDmenutextObjects2= [];
gdjs.ModdingtoolsCode.GDmenutextObjects3= [];
gdjs.ModdingtoolsCode.GDblackObjects1= [];
gdjs.ModdingtoolsCode.GDblackObjects2= [];
gdjs.ModdingtoolsCode.GDblackObjects3= [];
gdjs.ModdingtoolsCode.GDblack2Objects1= [];
gdjs.ModdingtoolsCode.GDblack2Objects2= [];
gdjs.ModdingtoolsCode.GDblack2Objects3= [];
gdjs.ModdingtoolsCode.GDmemoryObjects1= [];
gdjs.ModdingtoolsCode.GDmemoryObjects2= [];
gdjs.ModdingtoolsCode.GDmemoryObjects3= [];
gdjs.ModdingtoolsCode.GDfpsObjects1= [];
gdjs.ModdingtoolsCode.GDfpsObjects2= [];
gdjs.ModdingtoolsCode.GDfpsObjects3= [];


gdjs.ModdingtoolsCode.mapOfGDgdjs_9546ModdingtoolsCode_9546GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.ModdingtoolsCode.GDfpsObjects2});
gdjs.ModdingtoolsCode.mapOfGDgdjs_9546ModdingtoolsCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.ModdingtoolsCode.GDfpsObjects1});
gdjs.ModdingtoolsCode.eventsList0 = function(runtimeScene) {

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
gdjs.ModdingtoolsCode.GDfpsObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ModdingtoolsCode.mapOfGDgdjs_9546ModdingtoolsCode_9546GDfpsObjects2Objects, 3, 3, "notes / ui");
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
gdjs.ModdingtoolsCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ModdingtoolsCode.mapOfGDgdjs_9546ModdingtoolsCode_9546GDfpsObjects1Objects, 3, 3, "");
}}

}


};gdjs.ModdingtoolsCode.eventsList1 = function(runtimeScene) {

};gdjs.ModdingtoolsCode.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.ModdingtoolsCode.GDblackObjects2);
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDblackObjects2.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDblackObjects2[i].setY(gdjs.ModdingtoolsCode.GDblackObjects2[i].getY() - (50));
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

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.ModdingtoolsCode.GDmenutextObjects1);

for (gdjs.ModdingtoolsCode.forEachIndex2 = 0;gdjs.ModdingtoolsCode.forEachIndex2 < gdjs.ModdingtoolsCode.GDmenutextObjects1.length;++gdjs.ModdingtoolsCode.forEachIndex2) {
gdjs.ModdingtoolsCode.GDmenutextObjects2.length = 0;


gdjs.ModdingtoolsCode.forEachTemporary2 = gdjs.ModdingtoolsCode.GDmenutextObjects1[gdjs.ModdingtoolsCode.forEachIndex2];
gdjs.ModdingtoolsCode.GDmenutextObjects2.push(gdjs.ModdingtoolsCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDmenutextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.ModdingtoolsCode.GDmenutextObjects2[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.ModdingtoolsCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDmenutextObjects2[i].setX(gdjs.evtTools.window.getWindowInnerWidth() / 2 - (gdjs.ModdingtoolsCode.GDmenutextObjects2[i].getWidth()) / 2);
}
}}
}

}


};gdjs.ModdingtoolsCode.eventsList3 = function(runtimeScene) {

};gdjs.ModdingtoolsCode.eventsList4 = function(runtimeScene) {

};gdjs.ModdingtoolsCode.eventsList5 = function(runtimeScene) {

};gdjs.ModdingtoolsCode.eventsList6 = function(runtimeScene) {

};gdjs.ModdingtoolsCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.ModdingtoolsCode.GDmenutextObjects2);

for (gdjs.ModdingtoolsCode.forEachIndex3 = 0;gdjs.ModdingtoolsCode.forEachIndex3 < gdjs.ModdingtoolsCode.GDmenutextObjects2.length;++gdjs.ModdingtoolsCode.forEachIndex3) {
gdjs.ModdingtoolsCode.GDmenutextObjects3.length = 0;


gdjs.ModdingtoolsCode.forEachTemporary3 = gdjs.ModdingtoolsCode.GDmenutextObjects2[gdjs.ModdingtoolsCode.forEachIndex3];
gdjs.ModdingtoolsCode.GDmenutextObjects3.push(gdjs.ModdingtoolsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.ModdingtoolsCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ModdingtoolsCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDmenutextObjects3[i].enableEffect("Effect", true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "menubuttons", 0), (( gdjs.ModdingtoolsCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.ModdingtoolsCode.GDmenutextObjects3[0].getCenterXInScene()), 0.09), "menubuttons", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "menubuttons", 0), (( gdjs.ModdingtoolsCode.GDmenutextObjects3.length === 0 ) ? 0 :gdjs.ModdingtoolsCode.GDmenutextObjects3[0].getCenterYInScene()), 0.09), "menubuttons", 0);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.ModdingtoolsCode.GDmenutextObjects2);

for (gdjs.ModdingtoolsCode.forEachIndex3 = 0;gdjs.ModdingtoolsCode.forEachIndex3 < gdjs.ModdingtoolsCode.GDmenutextObjects2.length;++gdjs.ModdingtoolsCode.forEachIndex3) {
gdjs.ModdingtoolsCode.GDmenutextObjects3.length = 0;


gdjs.ModdingtoolsCode.forEachTemporary3 = gdjs.ModdingtoolsCode.GDmenutextObjects2[gdjs.ModdingtoolsCode.forEachIndex3];
gdjs.ModdingtoolsCode.GDmenutextObjects3.push(gdjs.ModdingtoolsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.ModdingtoolsCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ModdingtoolsCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "textsizechange", 0.09, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDmenutextObjects3.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDmenutextObjects3[i].setCharacterSize(gdjs.randomFloatInRange(69.95, 70.5));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.ModdingtoolsCode.GDmenutextObjects2);

for (gdjs.ModdingtoolsCode.forEachIndex3 = 0;gdjs.ModdingtoolsCode.forEachIndex3 < gdjs.ModdingtoolsCode.GDmenutextObjects2.length;++gdjs.ModdingtoolsCode.forEachIndex3) {
gdjs.ModdingtoolsCode.GDmenutextObjects3.length = 0;


gdjs.ModdingtoolsCode.forEachTemporary3 = gdjs.ModdingtoolsCode.GDmenutextObjects2[gdjs.ModdingtoolsCode.forEachIndex3];
gdjs.ModdingtoolsCode.GDmenutextObjects3.push(gdjs.ModdingtoolsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.ModdingtoolsCode.GDmenutextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ModdingtoolsCode.GDmenutextObjects3[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90571484);
}
}
if (isConditionTrue_0) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menutext"), gdjs.ModdingtoolsCode.GDmenutextObjects1);

for (gdjs.ModdingtoolsCode.forEachIndex2 = 0;gdjs.ModdingtoolsCode.forEachIndex2 < gdjs.ModdingtoolsCode.GDmenutextObjects1.length;++gdjs.ModdingtoolsCode.forEachIndex2) {
gdjs.ModdingtoolsCode.GDmenutextObjects2.length = 0;


gdjs.ModdingtoolsCode.forEachTemporary2 = gdjs.ModdingtoolsCode.GDmenutextObjects1[gdjs.ModdingtoolsCode.forEachIndex2];
gdjs.ModdingtoolsCode.GDmenutextObjects2.push(gdjs.ModdingtoolsCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.ModdingtoolsCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ModdingtoolsCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.ModdingtoolsCode.GDmenutextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ModdingtoolsCode.GDmenutextObjects2[0].getVariables()).getFromIndex(1))));
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDmenutextObjects2.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDmenutextObjects2[i].enableEffect("Effect", false);
}
}}
}

}


};gdjs.ModdingtoolsCode.asyncCallback90584836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ModdingtoolsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameengine2.022", false);
}}
gdjs.ModdingtoolsCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ModdingtoolsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.ModdingtoolsCode.asyncCallback90584836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ModdingtoolsCode.eventsList9 = function(runtimeScene) {

{


gdjs.ModdingtoolsCode.eventsList0(runtimeScene);
}


{


gdjs.ModdingtoolsCode.eventsList2(runtimeScene);
}


{


gdjs.ModdingtoolsCode.eventsList7(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.ModdingtoolsCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.ModdingtoolsCode.GDbasckroundimageObjects1[i].getPointY("")), 0, 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.ModdingtoolsCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.ModdingtoolsCode.GDbasckroundimageObjects1[i].getPointY("")), -(20), 0.09));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("basckroundimage"), gdjs.ModdingtoolsCode.GDbasckroundimageObjects1);
{for(var i = 0, len = gdjs.ModdingtoolsCode.GDbasckroundimageObjects1.length ;i < len;++i) {
    gdjs.ModdingtoolsCode.GDbasckroundimageObjects1[i].setY(gdjs.evtTools.common.lerp((gdjs.ModdingtoolsCode.GDbasckroundimageObjects1[i].getPointY("")), -(40), 0.09));
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
{runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").setString("modedit.charteditor");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loadingscenes", false);
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
{runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").setString("modeedit.charactereditor");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loadingscenes", false);
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
{runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").setString("modeedit.stageeditor");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loadingscenes", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__UploadDownloadTextFile__UploadFinished.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90584724);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(9).getChild("data"));
}
{ //Subevents
gdjs.ModdingtoolsCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.ModdingtoolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ModdingtoolsCode.GDtext1Objects1.length = 0;
gdjs.ModdingtoolsCode.GDtext1Objects2.length = 0;
gdjs.ModdingtoolsCode.GDtext1Objects3.length = 0;
gdjs.ModdingtoolsCode.GDintenssongObjects1.length = 0;
gdjs.ModdingtoolsCode.GDintenssongObjects2.length = 0;
gdjs.ModdingtoolsCode.GDintenssongObjects3.length = 0;
gdjs.ModdingtoolsCode.GDsonicObjects1.length = 0;
gdjs.ModdingtoolsCode.GDsonicObjects2.length = 0;
gdjs.ModdingtoolsCode.GDsonicObjects3.length = 0;
gdjs.ModdingtoolsCode.GDlntObjects1.length = 0;
gdjs.ModdingtoolsCode.GDlntObjects2.length = 0;
gdjs.ModdingtoolsCode.GDlntObjects3.length = 0;
gdjs.ModdingtoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.ModdingtoolsCode.GDNewSpriteObjects2.length = 0;
gdjs.ModdingtoolsCode.GDNewSpriteObjects3.length = 0;
gdjs.ModdingtoolsCode.GDdevbuldwarningObjects1.length = 0;
gdjs.ModdingtoolsCode.GDdevbuldwarningObjects2.length = 0;
gdjs.ModdingtoolsCode.GDdevbuldwarningObjects3.length = 0;
gdjs.ModdingtoolsCode.GDNewTextInputObjects1.length = 0;
gdjs.ModdingtoolsCode.GDNewTextInputObjects2.length = 0;
gdjs.ModdingtoolsCode.GDNewTextInputObjects3.length = 0;
gdjs.ModdingtoolsCode.GDtestbeginingObjects1.length = 0;
gdjs.ModdingtoolsCode.GDtestbeginingObjects2.length = 0;
gdjs.ModdingtoolsCode.GDtestbeginingObjects3.length = 0;
gdjs.ModdingtoolsCode.GDnewgoundsfunylogoObjects1.length = 0;
gdjs.ModdingtoolsCode.GDnewgoundsfunylogoObjects2.length = 0;
gdjs.ModdingtoolsCode.GDnewgoundsfunylogoObjects3.length = 0;
gdjs.ModdingtoolsCode.GDgfmenuObjects1.length = 0;
gdjs.ModdingtoolsCode.GDgfmenuObjects2.length = 0;
gdjs.ModdingtoolsCode.GDgfmenuObjects3.length = 0;
gdjs.ModdingtoolsCode.GDfnficonObjects1.length = 0;
gdjs.ModdingtoolsCode.GDfnficonObjects2.length = 0;
gdjs.ModdingtoolsCode.GDfnficonObjects3.length = 0;
gdjs.ModdingtoolsCode.GDbasckroundimageObjects1.length = 0;
gdjs.ModdingtoolsCode.GDbasckroundimageObjects2.length = 0;
gdjs.ModdingtoolsCode.GDbasckroundimageObjects3.length = 0;
gdjs.ModdingtoolsCode.GDmenutextObjects1.length = 0;
gdjs.ModdingtoolsCode.GDmenutextObjects2.length = 0;
gdjs.ModdingtoolsCode.GDmenutextObjects3.length = 0;
gdjs.ModdingtoolsCode.GDblackObjects1.length = 0;
gdjs.ModdingtoolsCode.GDblackObjects2.length = 0;
gdjs.ModdingtoolsCode.GDblackObjects3.length = 0;
gdjs.ModdingtoolsCode.GDblack2Objects1.length = 0;
gdjs.ModdingtoolsCode.GDblack2Objects2.length = 0;
gdjs.ModdingtoolsCode.GDblack2Objects3.length = 0;
gdjs.ModdingtoolsCode.GDmemoryObjects1.length = 0;
gdjs.ModdingtoolsCode.GDmemoryObjects2.length = 0;
gdjs.ModdingtoolsCode.GDmemoryObjects3.length = 0;
gdjs.ModdingtoolsCode.GDfpsObjects1.length = 0;
gdjs.ModdingtoolsCode.GDfpsObjects2.length = 0;
gdjs.ModdingtoolsCode.GDfpsObjects3.length = 0;

gdjs.ModdingtoolsCode.eventsList9(runtimeScene);

return;

}

gdjs['ModdingtoolsCode'] = gdjs.ModdingtoolsCode;
