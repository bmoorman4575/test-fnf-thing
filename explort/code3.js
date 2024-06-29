gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDtext1Objects1= [];
gdjs.menuCode.GDtext1Objects2= [];
gdjs.menuCode.GDtext1Objects3= [];
gdjs.menuCode.GDtext1Objects4= [];
gdjs.menuCode.GDintenssongObjects1= [];
gdjs.menuCode.GDintenssongObjects2= [];
gdjs.menuCode.GDintenssongObjects3= [];
gdjs.menuCode.GDintenssongObjects4= [];
gdjs.menuCode.GDsonicObjects1= [];
gdjs.menuCode.GDsonicObjects2= [];
gdjs.menuCode.GDsonicObjects3= [];
gdjs.menuCode.GDsonicObjects4= [];
gdjs.menuCode.GDlntObjects1= [];
gdjs.menuCode.GDlntObjects2= [];
gdjs.menuCode.GDlntObjects3= [];
gdjs.menuCode.GDlntObjects4= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSpriteObjects3= [];
gdjs.menuCode.GDNewSpriteObjects4= [];
gdjs.menuCode.GDdevbuldwarningObjects1= [];
gdjs.menuCode.GDdevbuldwarningObjects2= [];
gdjs.menuCode.GDdevbuldwarningObjects3= [];
gdjs.menuCode.GDdevbuldwarningObjects4= [];
gdjs.menuCode.GDNewTextInputObjects1= [];
gdjs.menuCode.GDNewTextInputObjects2= [];
gdjs.menuCode.GDNewTextInputObjects3= [];
gdjs.menuCode.GDNewTextInputObjects4= [];
gdjs.menuCode.GDtestbeginingObjects1= [];
gdjs.menuCode.GDtestbeginingObjects2= [];
gdjs.menuCode.GDtestbeginingObjects3= [];
gdjs.menuCode.GDtestbeginingObjects4= [];
gdjs.menuCode.GDnewgoundsfunylogoObjects1= [];
gdjs.menuCode.GDnewgoundsfunylogoObjects2= [];
gdjs.menuCode.GDnewgoundsfunylogoObjects3= [];
gdjs.menuCode.GDnewgoundsfunylogoObjects4= [];
gdjs.menuCode.GDgfmenuObjects1= [];
gdjs.menuCode.GDgfmenuObjects2= [];
gdjs.menuCode.GDgfmenuObjects3= [];
gdjs.menuCode.GDgfmenuObjects4= [];
gdjs.menuCode.GDfnficonObjects1= [];
gdjs.menuCode.GDfnficonObjects2= [];
gdjs.menuCode.GDfnficonObjects3= [];
gdjs.menuCode.GDfnficonObjects4= [];
gdjs.menuCode.GDwhiteObjects1= [];
gdjs.menuCode.GDwhiteObjects2= [];
gdjs.menuCode.GDwhiteObjects3= [];
gdjs.menuCode.GDwhiteObjects4= [];
gdjs.menuCode.GDpushenterspriteObjects1= [];
gdjs.menuCode.GDpushenterspriteObjects2= [];
gdjs.menuCode.GDpushenterspriteObjects3= [];
gdjs.menuCode.GDpushenterspriteObjects4= [];
gdjs.menuCode.GDdontaskObjects1= [];
gdjs.menuCode.GDdontaskObjects2= [];
gdjs.menuCode.GDdontaskObjects3= [];
gdjs.menuCode.GDdontaskObjects4= [];
gdjs.menuCode.GDmenuscreenshotObjects1= [];
gdjs.menuCode.GDmenuscreenshotObjects2= [];
gdjs.menuCode.GDmenuscreenshotObjects3= [];
gdjs.menuCode.GDmenuscreenshotObjects4= [];
gdjs.menuCode.GDblackObjects1= [];
gdjs.menuCode.GDblackObjects2= [];
gdjs.menuCode.GDblackObjects3= [];
gdjs.menuCode.GDblackObjects4= [];
gdjs.menuCode.GDdebugObjects1= [];
gdjs.menuCode.GDdebugObjects2= [];
gdjs.menuCode.GDdebugObjects3= [];
gdjs.menuCode.GDdebugObjects4= [];
gdjs.menuCode.GDmemoryObjects1= [];
gdjs.menuCode.GDmemoryObjects2= [];
gdjs.menuCode.GDmemoryObjects3= [];
gdjs.menuCode.GDmemoryObjects4= [];
gdjs.menuCode.GDfpsObjects1= [];
gdjs.menuCode.GDfpsObjects2= [];
gdjs.menuCode.GDfpsObjects3= [];
gdjs.menuCode.GDfpsObjects4= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.menuCode.GDfpsObjects2});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.menuCode.GDfpsObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

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
gdjs.menuCode.GDfpsObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfpsObjects2Objects, 3, 3, "notes / ui");
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
gdjs.menuCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDfpsObjects1Objects, 3, 3, "");
}}

}


};gdjs.menuCode.asyncCallback90427276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menuCode.localVariables);
}
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.menuCode.asyncCallback90427276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menuwait");
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "menubackround");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}{gdjs.evtsExt__fnfesentials__runtime.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "In The Menu", "", 0, 0, "menu", "menu", "menu", "menu", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freakyMenu.ogg", 1, true, 100, 1);
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("newgoundsfunylogo"), gdjs.menuCode.GDnewgoundsfunylogoObjects3);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "FNF In Gdevelop");
}{for(var i = 0, len = gdjs.menuCode.GDnewgoundsfunylogoObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDnewgoundsfunylogoObjects3[i].hide();
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
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, gdjs.evtTools.sound.getSoundOnChannelVolume(runtimeScene, 1) + (0.5));
}}

}


};gdjs.menuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 1.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90432924);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("    NINJAMUFFIN\nPHANTOMARCADE\n    KAWAISPRITE\n        EVILSKER \n         Presents");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 2.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90434804);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90436236);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("this gdev thing is by");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 4.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90437692);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("this gdev thing is by" + gdjs.evtTools.string.newLine() + "                BTM");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 4.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90439116);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("newgoundsfunylogo"), gdjs.menuCode.GDnewgoundsfunylogoObjects3);
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDnewgoundsfunylogoObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDnewgoundsfunylogoObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 5.4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90439532);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString(" new update :O");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 6.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90442140);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString(" new update :O" + gdjs.evtTools.string.newLine() + "   Foreal :D:D");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 7.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90443132);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setBold(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 7.7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90445228);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("FRIDAY");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 8.3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90440124);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("FRIDAY\n" + " NIGHT");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 147);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 8.9;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90447580);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects3);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setString("FRIDAY\n" + " NIGHT\n" + "FUNKIN");
}
}{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.menuCode.GDtestbeginingObjects3[i].getHeight()) / 2 - 94);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "menuwait") >= 9.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90448404);
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
gdjs.copyArray(runtimeScene.getObjects("white"), gdjs.menuCode.GDwhiteObjects2);
{for(var i = 0, len = gdjs.menuCode.GDwhiteObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDwhiteObjects2[i].setOpacity(gdjs.menuCode.GDwhiteObjects2[i].getOpacity() - (2));
}
}}

}


};gdjs.menuCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.menuCode.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90469172);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__fnfesentials__songdeatales.func(runtimeScene, "gfmenufreakymenusong", 1, 115, 1, "debug", 1, 100, "1:20", false, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("started"), true);
}{runtimeScene.getScene().getVariables().get("songstarted").setNumber(1);
}{runtimeScene.getScene().getVariables().get("zoomevte").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("zoompreset")));
}{runtimeScene.getScene().getVariables().get("zoomui").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bopin");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "bopin");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90471412);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yea");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects3);
{for(var i = 0, len = gdjs.menuCode.GDgfmenuObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDgfmenuObjects3[i].setAnimationName("idle2");
}
}{for(var i = 0, len = gdjs.menuCode.GDgfmenuObjects3.length ;i < len;++i) {
    gdjs.menuCode.GDgfmenuObjects3[i].setAnimationName("idle1");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yea");
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



}


};gdjs.menuCode.eventsList6 = function(runtimeScene) {

};gdjs.menuCode.eventsList7 = function(runtimeScene) {

};gdjs.menuCode.eventsList8 = function(runtimeScene) {

{



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
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
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
gdjs.copyArray(runtimeScene.getObjects("testbegining"), gdjs.menuCode.GDtestbeginingObjects2);
{for(var i = 0, len = gdjs.menuCode.GDtestbeginingObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDtestbeginingObjects2[i].setString("");
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "menubackround");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(1000);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(640);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(980);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(630);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 4 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{


gdjs.menuCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 15 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 16 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(1000);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(640);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 17 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(980);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(630);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gfmenu"), gdjs.menuCode.GDgfmenuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDgfmenuObjects2.length;i<l;++i) {
    if ( gdjs.menuCode.GDgfmenuObjects2[i].getAnimationFrame() == 18 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDgfmenuObjects2[k] = gdjs.menuCode.GDgfmenuObjects2[i];
        ++k;
    }
}
gdjs.menuCode.GDgfmenuObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fnficon"), gdjs.menuCode.GDfnficonObjects2);
{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setWidth(975);
}
}{for(var i = 0, len = gdjs.menuCode.GDfnficonObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDfnficonObjects2[i].setHeight(603);
}
}}

}


{


gdjs.menuCode.eventsList7(runtimeScene);
}


};gdjs.menuCode.eventsList9 = function(runtimeScene) {

{


gdjs.menuCode.eventsList2(runtimeScene);
}


{


gdjs.menuCode.eventsList4(runtimeScene);
}


{



}


{


gdjs.menuCode.eventsList5(runtimeScene);
}


{


gdjs.menuCode.eventsList8(runtimeScene);
}


};gdjs.menuCode.eventsList10 = function(runtimeScene) {

{


gdjs.menuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.menuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug"), gdjs.menuCode.GDdebugObjects1);
{for(var i = 0, len = gdjs.menuCode.GDdebugObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDdebugObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("bopinoriginal")));
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDtext1Objects1.length = 0;
gdjs.menuCode.GDtext1Objects2.length = 0;
gdjs.menuCode.GDtext1Objects3.length = 0;
gdjs.menuCode.GDtext1Objects4.length = 0;
gdjs.menuCode.GDintenssongObjects1.length = 0;
gdjs.menuCode.GDintenssongObjects2.length = 0;
gdjs.menuCode.GDintenssongObjects3.length = 0;
gdjs.menuCode.GDintenssongObjects4.length = 0;
gdjs.menuCode.GDsonicObjects1.length = 0;
gdjs.menuCode.GDsonicObjects2.length = 0;
gdjs.menuCode.GDsonicObjects3.length = 0;
gdjs.menuCode.GDsonicObjects4.length = 0;
gdjs.menuCode.GDlntObjects1.length = 0;
gdjs.menuCode.GDlntObjects2.length = 0;
gdjs.menuCode.GDlntObjects3.length = 0;
gdjs.menuCode.GDlntObjects4.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects3.length = 0;
gdjs.menuCode.GDNewSpriteObjects4.length = 0;
gdjs.menuCode.GDdevbuldwarningObjects1.length = 0;
gdjs.menuCode.GDdevbuldwarningObjects2.length = 0;
gdjs.menuCode.GDdevbuldwarningObjects3.length = 0;
gdjs.menuCode.GDdevbuldwarningObjects4.length = 0;
gdjs.menuCode.GDNewTextInputObjects1.length = 0;
gdjs.menuCode.GDNewTextInputObjects2.length = 0;
gdjs.menuCode.GDNewTextInputObjects3.length = 0;
gdjs.menuCode.GDNewTextInputObjects4.length = 0;
gdjs.menuCode.GDtestbeginingObjects1.length = 0;
gdjs.menuCode.GDtestbeginingObjects2.length = 0;
gdjs.menuCode.GDtestbeginingObjects3.length = 0;
gdjs.menuCode.GDtestbeginingObjects4.length = 0;
gdjs.menuCode.GDnewgoundsfunylogoObjects1.length = 0;
gdjs.menuCode.GDnewgoundsfunylogoObjects2.length = 0;
gdjs.menuCode.GDnewgoundsfunylogoObjects3.length = 0;
gdjs.menuCode.GDnewgoundsfunylogoObjects4.length = 0;
gdjs.menuCode.GDgfmenuObjects1.length = 0;
gdjs.menuCode.GDgfmenuObjects2.length = 0;
gdjs.menuCode.GDgfmenuObjects3.length = 0;
gdjs.menuCode.GDgfmenuObjects4.length = 0;
gdjs.menuCode.GDfnficonObjects1.length = 0;
gdjs.menuCode.GDfnficonObjects2.length = 0;
gdjs.menuCode.GDfnficonObjects3.length = 0;
gdjs.menuCode.GDfnficonObjects4.length = 0;
gdjs.menuCode.GDwhiteObjects1.length = 0;
gdjs.menuCode.GDwhiteObjects2.length = 0;
gdjs.menuCode.GDwhiteObjects3.length = 0;
gdjs.menuCode.GDwhiteObjects4.length = 0;
gdjs.menuCode.GDpushenterspriteObjects1.length = 0;
gdjs.menuCode.GDpushenterspriteObjects2.length = 0;
gdjs.menuCode.GDpushenterspriteObjects3.length = 0;
gdjs.menuCode.GDpushenterspriteObjects4.length = 0;
gdjs.menuCode.GDdontaskObjects1.length = 0;
gdjs.menuCode.GDdontaskObjects2.length = 0;
gdjs.menuCode.GDdontaskObjects3.length = 0;
gdjs.menuCode.GDdontaskObjects4.length = 0;
gdjs.menuCode.GDmenuscreenshotObjects1.length = 0;
gdjs.menuCode.GDmenuscreenshotObjects2.length = 0;
gdjs.menuCode.GDmenuscreenshotObjects3.length = 0;
gdjs.menuCode.GDmenuscreenshotObjects4.length = 0;
gdjs.menuCode.GDblackObjects1.length = 0;
gdjs.menuCode.GDblackObjects2.length = 0;
gdjs.menuCode.GDblackObjects3.length = 0;
gdjs.menuCode.GDblackObjects4.length = 0;
gdjs.menuCode.GDdebugObjects1.length = 0;
gdjs.menuCode.GDdebugObjects2.length = 0;
gdjs.menuCode.GDdebugObjects3.length = 0;
gdjs.menuCode.GDdebugObjects4.length = 0;
gdjs.menuCode.GDmemoryObjects1.length = 0;
gdjs.menuCode.GDmemoryObjects2.length = 0;
gdjs.menuCode.GDmemoryObjects3.length = 0;
gdjs.menuCode.GDmemoryObjects4.length = 0;
gdjs.menuCode.GDfpsObjects1.length = 0;
gdjs.menuCode.GDfpsObjects2.length = 0;
gdjs.menuCode.GDfpsObjects3.length = 0;
gdjs.menuCode.GDfpsObjects4.length = 0;

gdjs.menuCode.eventsList10(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
