gdjs.menugfCode = {};
gdjs.menugfCode.GDmemoryObjects1= [];
gdjs.menugfCode.GDmemoryObjects2= [];
gdjs.menugfCode.GDmemoryObjects3= [];
gdjs.menugfCode.GDmemoryObjects4= [];
gdjs.menugfCode.GDfpsObjects1= [];
gdjs.menugfCode.GDfpsObjects2= [];
gdjs.menugfCode.GDfpsObjects3= [];
gdjs.menugfCode.GDfpsObjects4= [];
gdjs.menugfCode.GDtext1Objects1= [];
gdjs.menugfCode.GDtext1Objects2= [];
gdjs.menugfCode.GDtext1Objects3= [];
gdjs.menugfCode.GDtext1Objects4= [];
gdjs.menugfCode.GDintenssongObjects1= [];
gdjs.menugfCode.GDintenssongObjects2= [];
gdjs.menugfCode.GDintenssongObjects3= [];
gdjs.menugfCode.GDintenssongObjects4= [];
gdjs.menugfCode.GDboyfriendObjects1= [];
gdjs.menugfCode.GDboyfriendObjects2= [];
gdjs.menugfCode.GDboyfriendObjects3= [];
gdjs.menugfCode.GDboyfriendObjects4= [];
gdjs.menugfCode.GDsonicObjects1= [];
gdjs.menugfCode.GDsonicObjects2= [];
gdjs.menugfCode.GDsonicObjects3= [];
gdjs.menugfCode.GDsonicObjects4= [];
gdjs.menugfCode.GDlntObjects1= [];
gdjs.menugfCode.GDlntObjects2= [];
gdjs.menugfCode.GDlntObjects3= [];
gdjs.menugfCode.GDlntObjects4= [];
gdjs.menugfCode.GDNewSpriteObjects1= [];
gdjs.menugfCode.GDNewSpriteObjects2= [];
gdjs.menugfCode.GDNewSpriteObjects3= [];
gdjs.menugfCode.GDNewSpriteObjects4= [];
gdjs.menugfCode.GDdevbuldwarningObjects1= [];
gdjs.menugfCode.GDdevbuldwarningObjects2= [];
gdjs.menugfCode.GDdevbuldwarningObjects3= [];
gdjs.menugfCode.GDdevbuldwarningObjects4= [];
gdjs.menugfCode.GDNewTextInputObjects1= [];
gdjs.menugfCode.GDNewTextInputObjects2= [];
gdjs.menugfCode.GDNewTextInputObjects3= [];
gdjs.menugfCode.GDNewTextInputObjects4= [];
gdjs.menugfCode.GDtestbeginingObjects1= [];
gdjs.menugfCode.GDtestbeginingObjects2= [];
gdjs.menugfCode.GDtestbeginingObjects3= [];
gdjs.menugfCode.GDtestbeginingObjects4= [];
gdjs.menugfCode.GDnewgoundsfunylogoObjects1= [];
gdjs.menugfCode.GDnewgoundsfunylogoObjects2= [];
gdjs.menugfCode.GDnewgoundsfunylogoObjects3= [];
gdjs.menugfCode.GDnewgoundsfunylogoObjects4= [];
gdjs.menugfCode.GDgfmenuObjects1= [];
gdjs.menugfCode.GDgfmenuObjects2= [];
gdjs.menugfCode.GDgfmenuObjects3= [];
gdjs.menugfCode.GDgfmenuObjects4= [];
gdjs.menugfCode.GDfnficonObjects1= [];
gdjs.menugfCode.GDfnficonObjects2= [];
gdjs.menugfCode.GDfnficonObjects3= [];
gdjs.menugfCode.GDfnficonObjects4= [];
gdjs.menugfCode.GDwhiteObjects1= [];
gdjs.menugfCode.GDwhiteObjects2= [];
gdjs.menugfCode.GDwhiteObjects3= [];
gdjs.menugfCode.GDwhiteObjects4= [];
gdjs.menugfCode.GDpushenterspriteObjects1= [];
gdjs.menugfCode.GDpushenterspriteObjects2= [];
gdjs.menugfCode.GDpushenterspriteObjects3= [];
gdjs.menugfCode.GDpushenterspriteObjects4= [];
gdjs.menugfCode.GDdontaskObjects1= [];
gdjs.menugfCode.GDdontaskObjects2= [];
gdjs.menugfCode.GDdontaskObjects3= [];
gdjs.menugfCode.GDdontaskObjects4= [];
gdjs.menugfCode.GDmenuscreenshotObjects1= [];
gdjs.menugfCode.GDmenuscreenshotObjects2= [];
gdjs.menugfCode.GDmenuscreenshotObjects3= [];
gdjs.menugfCode.GDmenuscreenshotObjects4= [];


gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.menugfCode.GDmemoryObjects2});
gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menugfCode.GDfpsObjects2});
gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.menugfCode.GDmemoryObjects2});
gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menugfCode.GDfpsObjects2});
gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.menugfCode.GDmemoryObjects2});
gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menugfCode.GDfpsObjects2});
gdjs.menugfCode.eventsList0 = function(runtimeScene) {

};gdjs.menugfCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.menugfCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.menugfCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDmemoryObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("memory")))) + " MB");
}
}}

}


};gdjs.menugfCode.eventsList2 = function(runtimeScene) {

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
gdjs.menugfCode.GDfpsObjects2.length = 0;

gdjs.menugfCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDmemoryObjects2Objects, 3, 29, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDfpsObjects2Objects, 3, 3, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDmemoryObjects2Objects, 3, 29, "black");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDfpsObjects2Objects, 3, 3, "black");
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
gdjs.menugfCode.GDfpsObjects2.length = 0;

gdjs.menugfCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDmemoryObjects2Objects, 3, 29, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menugfCode.mapOfGDgdjs_46menugfCode_46GDfpsObjects2Objects, 3, 3, "");
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
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.menugfCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDmemoryObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.menugfCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.menugfCode.GDmemoryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDmemoryObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDmemoryObjects2[i].getString() == "0 MB" ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDmemoryObjects2[k] = gdjs.menugfCode.GDmemoryObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDmemoryObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(108584028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.menugfCode.GDmemoryObjects2 */
{for(var i = 0, len = gdjs.menugfCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDmemoryObjects2[i].setString("(   memory usage not supported   )");
}
}{for(var i = 0, len = gdjs.menugfCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDmemoryObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadeawakmemory", 0, "easeInQuad", 2000, true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.menugfCode.asyncCallback105459284 = function (runtimeScene, asyncObjectsList) {
}
gdjs.menugfCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.menugfCode.asyncCallback105459284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menugfCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menuwait");
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "menubackround");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtsExt__fnfesentials__runtime.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "In The Menu", "", 0, 0, "menu", "menu", "menu", "menu", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freakyMenu.ogg", 1, true, 100, 1);
}
{ //Subevents
gdjs.menugfCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("newgoundsfunylogo"), gdjs.menugfCode.GDnewgoundsfunylogoObjects3);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "FNF In Gdevelop :D");
}{for(var i = 0, len = gdjs.menugfCode.GDnewgoundsfunylogoObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDnewgoundsfunylogoObjects3[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "menumusicup", 0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (0.5));
}}

}


};gdjs.menugfCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 1.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105464412);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("    NINJAMUFFIN\nPHANTOMARCADE\n    KAWAISPRITE\n        EVILSKER \n         Presents");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 2.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105465348);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105464300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("this gdev thing is by");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 4.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105468964);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("this gdev thing is by" + gdjs.evtTools.string.newLine() + "                BTM");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 148);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 4.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105470028);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("newgoundsfunylogo"), gdjs.menugfCode.GDnewgoundsfunylogoObjects3);
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDnewgoundsfunylogoObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDnewgoundsfunylogoObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 5.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105471932);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString(" new update :O");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 6.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105472820);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString(" new update :O" + gdjs.evtTools.string.newLine() + "   Foreal :D:D");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 7.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105474364);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setBold(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 7.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105476300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("FRIDAY");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 8.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105477380);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("FRIDAY\n" + " NIGHT");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 8.9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105479132);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setString("FRIDAY\n" + " NIGHT\n" + "FUNKIN");
}
}{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menugfCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 94);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 9.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105480484);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "menumusicup12", 0.01, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("white"), gdjs.menugfCode.GDwhiteObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDwhiteObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDwhiteObjects2[i].setOpacity(gdjs.menugfCode.GDwhiteObjects2[i].getOpacity() - (2));
}
}}

}


};gdjs.menugfCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.menugfCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.menugfCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105482204);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__rhythmgame__startsong.func(runtimeScene, 100, 1, "Sound", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__rhythmgame__checkcurrentbeat.func(runtimeScene, "1/4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDgfmenuObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDgfmenuObjects3[i].setAnimationName("idle1");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__rhythmgame__checkcurrentbeat.func(runtimeScene, "2/4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105483932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDgfmenuObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDgfmenuObjects3[i].setAnimationName("idle2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__rhythmgame__checkcurrentbeat.func(runtimeScene, "3/4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105484452);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects3);
{for(var i = 0, len = gdjs.menugfCode.GDgfmenuObjects3.length ;i < len;++i) {
    gdjs.menugfCode.GDgfmenuObjects3[i].setAnimationName("idle1");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__rhythmgame__checkcurrentbeat.func(runtimeScene, "4/4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105485476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDgfmenuObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDgfmenuObjects2[i].setAnimationName("idle2");
}
}}

}


};gdjs.menugfCode.asyncCallback105486076 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Demo Song", false);
}{runtimeScene.getScene().getVariables().get("pressed").setNumber(1);
}}
gdjs.menugfCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.menugfCode.asyncCallback105486076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menugfCode.eventsList9 = function(runtimeScene) {

};gdjs.menugfCode.eventsList10 = function(runtimeScene) {

};gdjs.menugfCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "menubackround");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("pressed")) != 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105487524);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pushentersprite"), gdjs.menugfCode.GDpushenterspriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("white"), gdjs.menugfCode.GDwhiteObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs.menugfCode.GDpushenterspriteObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDpushenterspriteObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.menugfCode.GDwhiteObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDwhiteObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.menugfCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "menubackround"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menugfCode.GDtestbeginingObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDtestbeginingObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDtestbeginingObjects2[i].setString("");
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "menubackround");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(1000);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(640);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(980);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(630);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 4 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{


gdjs.menugfCode.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 15 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 16 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(1000);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(640);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 17 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(980);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(630);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menugfCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menugfCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menugfCode.GDgfmenuObjects2[i].getAnimationFrame() == 18 ) {
        isConditionTrue_0 = true;
        gdjs.menugfCode.GDgfmenuObjects2[k] = gdjs.menugfCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menugfCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menugfCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menugfCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menugfCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{


gdjs.menugfCode.eventsList10(runtimeScene);
}


};gdjs.menugfCode.eventsList12 = function(runtimeScene) {

{


gdjs.menugfCode.eventsList4(runtimeScene);
}


{


gdjs.menugfCode.eventsList6(runtimeScene);
}


{


gdjs.menugfCode.eventsList7(runtimeScene);
}


{


gdjs.menugfCode.eventsList11(runtimeScene);
}


};gdjs.menugfCode.eventsList13 = function(runtimeScene) {

{


gdjs.menugfCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.menugfCode.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.menugfCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menugfCode.GDmemoryObjects1.length = 0;
gdjs.menugfCode.GDmemoryObjects2.length = 0;
gdjs.menugfCode.GDmemoryObjects3.length = 0;
gdjs.menugfCode.GDmemoryObjects4.length = 0;
gdjs.menugfCode.GDfpsObjects1.length = 0;
gdjs.menugfCode.GDfpsObjects2.length = 0;
gdjs.menugfCode.GDfpsObjects3.length = 0;
gdjs.menugfCode.GDfpsObjects4.length = 0;
gdjs.menugfCode.GDtext1Objects1.length = 0;
gdjs.menugfCode.GDtext1Objects2.length = 0;
gdjs.menugfCode.GDtext1Objects3.length = 0;
gdjs.menugfCode.GDtext1Objects4.length = 0;
gdjs.menugfCode.GDintenssongObjects1.length = 0;
gdjs.menugfCode.GDintenssongObjects2.length = 0;
gdjs.menugfCode.GDintenssongObjects3.length = 0;
gdjs.menugfCode.GDintenssongObjects4.length = 0;
gdjs.menugfCode.GDboyfriendObjects1.length = 0;
gdjs.menugfCode.GDboyfriendObjects2.length = 0;
gdjs.menugfCode.GDboyfriendObjects3.length = 0;
gdjs.menugfCode.GDboyfriendObjects4.length = 0;
gdjs.menugfCode.GDsonicObjects1.length = 0;
gdjs.menugfCode.GDsonicObjects2.length = 0;
gdjs.menugfCode.GDsonicObjects3.length = 0;
gdjs.menugfCode.GDsonicObjects4.length = 0;
gdjs.menugfCode.GDlntObjects1.length = 0;
gdjs.menugfCode.GDlntObjects2.length = 0;
gdjs.menugfCode.GDlntObjects3.length = 0;
gdjs.menugfCode.GDlntObjects4.length = 0;
gdjs.menugfCode.GDNewSpriteObjects1.length = 0;
gdjs.menugfCode.GDNewSpriteObjects2.length = 0;
gdjs.menugfCode.GDNewSpriteObjects3.length = 0;
gdjs.menugfCode.GDNewSpriteObjects4.length = 0;
gdjs.menugfCode.GDdevbuldwarningObjects1.length = 0;
gdjs.menugfCode.GDdevbuldwarningObjects2.length = 0;
gdjs.menugfCode.GDdevbuldwarningObjects3.length = 0;
gdjs.menugfCode.GDdevbuldwarningObjects4.length = 0;
gdjs.menugfCode.GDNewTextInputObjects1.length = 0;
gdjs.menugfCode.GDNewTextInputObjects2.length = 0;
gdjs.menugfCode.GDNewTextInputObjects3.length = 0;
gdjs.menugfCode.GDNewTextInputObjects4.length = 0;
gdjs.menugfCode.GDtestbeginingObjects1.length = 0;
gdjs.menugfCode.GDtestbeginingObjects2.length = 0;
gdjs.menugfCode.GDtestbeginingObjects3.length = 0;
gdjs.menugfCode.GDtestbeginingObjects4.length = 0;
gdjs.menugfCode.GDnewgoundsfunylogoObjects1.length = 0;
gdjs.menugfCode.GDnewgoundsfunylogoObjects2.length = 0;
gdjs.menugfCode.GDnewgoundsfunylogoObjects3.length = 0;
gdjs.menugfCode.GDnewgoundsfunylogoObjects4.length = 0;
gdjs.menugfCode.GDgfmenuObjects1.length = 0;
gdjs.menugfCode.GDgfmenuObjects2.length = 0;
gdjs.menugfCode.GDgfmenuObjects3.length = 0;
gdjs.menugfCode.GDgfmenuObjects4.length = 0;
gdjs.menugfCode.GDfnficonObjects1.length = 0;
gdjs.menugfCode.GDfnficonObjects2.length = 0;
gdjs.menugfCode.GDfnficonObjects3.length = 0;
gdjs.menugfCode.GDfnficonObjects4.length = 0;
gdjs.menugfCode.GDwhiteObjects1.length = 0;
gdjs.menugfCode.GDwhiteObjects2.length = 0;
gdjs.menugfCode.GDwhiteObjects3.length = 0;
gdjs.menugfCode.GDwhiteObjects4.length = 0;
gdjs.menugfCode.GDpushenterspriteObjects1.length = 0;
gdjs.menugfCode.GDpushenterspriteObjects2.length = 0;
gdjs.menugfCode.GDpushenterspriteObjects3.length = 0;
gdjs.menugfCode.GDpushenterspriteObjects4.length = 0;
gdjs.menugfCode.GDdontaskObjects1.length = 0;
gdjs.menugfCode.GDdontaskObjects2.length = 0;
gdjs.menugfCode.GDdontaskObjects3.length = 0;
gdjs.menugfCode.GDdontaskObjects4.length = 0;
gdjs.menugfCode.GDmenuscreenshotObjects1.length = 0;
gdjs.menugfCode.GDmenuscreenshotObjects2.length = 0;
gdjs.menugfCode.GDmenuscreenshotObjects3.length = 0;
gdjs.menugfCode.GDmenuscreenshotObjects4.length = 0;

gdjs.menugfCode.eventsList13(runtimeScene);

return;

}

gdjs['menugfCode'] = gdjs.menugfCode;
