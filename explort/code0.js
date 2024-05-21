gdjs.BeginingloadCode = {};
gdjs.BeginingloadCode.GDbackroundObjects1= [];
gdjs.BeginingloadCode.GDbackroundObjects2= [];
gdjs.BeginingloadCode.GDbackroundObjects3= [];
gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects1= [];
gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects2= [];
gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects3= [];
gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1= [];
gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects2= [];
gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects3= [];
gdjs.BeginingloadCode.GDloadingtxtObjects1= [];
gdjs.BeginingloadCode.GDloadingtxtObjects2= [];
gdjs.BeginingloadCode.GDloadingtxtObjects3= [];
gdjs.BeginingloadCode.GDspinObjects1= [];
gdjs.BeginingloadCode.GDspinObjects2= [];
gdjs.BeginingloadCode.GDspinObjects3= [];
gdjs.BeginingloadCode.GDNewSpriteObjects1= [];
gdjs.BeginingloadCode.GDNewSpriteObjects2= [];
gdjs.BeginingloadCode.GDNewSpriteObjects3= [];
gdjs.BeginingloadCode.GDNewTextObjects1= [];
gdjs.BeginingloadCode.GDNewTextObjects2= [];
gdjs.BeginingloadCode.GDNewTextObjects3= [];
gdjs.BeginingloadCode.GDmemoryObjects1= [];
gdjs.BeginingloadCode.GDmemoryObjects2= [];
gdjs.BeginingloadCode.GDmemoryObjects3= [];
gdjs.BeginingloadCode.GDfpsObjects1= [];
gdjs.BeginingloadCode.GDfpsObjects2= [];
gdjs.BeginingloadCode.GDfpsObjects3= [];


gdjs.BeginingloadCode.mapOfGDgdjs_9546BeginingloadCode_9546GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.BeginingloadCode.GDfpsObjects2});
gdjs.BeginingloadCode.mapOfGDgdjs_9546BeginingloadCode_9546GDfpsObjects1Objects = Hashtable.newFrom({"fps": gdjs.BeginingloadCode.GDfpsObjects1});
gdjs.BeginingloadCode.eventsList0 = function(runtimeScene) {

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
gdjs.BeginingloadCode.GDfpsObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BeginingloadCode.mapOfGDgdjs_9546BeginingloadCode_9546GDfpsObjects2Objects, 3, 3, "notes / ui");
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
gdjs.BeginingloadCode.GDfpsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BeginingloadCode.mapOfGDgdjs_9546BeginingloadCode_9546GDfpsObjects1Objects, 3, 3, "");
}}

}


};gdjs.BeginingloadCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loaddone") >= 5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).getChild("scenetogoto").setString("keybinds");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loadingscenes", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.BeginingloadCode.eventsList2 = function(runtimeScene) {

{


gdjs.BeginingloadCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clicktoloadmodtxt"), gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.BeginingloadCode.GDloadingtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("spin"), gdjs.BeginingloadCode.GDspinObjects1);
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "992927976557654088", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "In The Menu", "", 0, 0, "menu", "menu", "", "Playing", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.BeginingloadCode.GDloadingtxtObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDloadingtxtObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.BeginingloadCode.GDspinObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDspinObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loaddone");
}{for(var i = 0, len = gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1[i].getBehavior("Tween").addObjectOpacityTween("modtextcolorshowthingy", 255, "easeOutQuad", 500, false);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "freakyMenu.ogg");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "events") >= 0.03;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loadinggdeveloppreload"), gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.BeginingloadCode.GDloadingtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("spin"), gdjs.BeginingloadCode.GDspinObjects1);
{for(var i = 0, len = gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects1[i].setOpacity(gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects1[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.BeginingloadCode.GDloadingtxtObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDloadingtxtObjects1[i].setOpacity(gdjs.BeginingloadCode.GDloadingtxtObjects1[i].getOpacity() + (10));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.BeginingloadCode.GDspinObjects1.length ;i < len;++i) {
    gdjs.BeginingloadCode.GDspinObjects1[i].setOpacity(gdjs.BeginingloadCode.GDspinObjects1[i].getOpacity() + (7));
}
}}

}


{


gdjs.BeginingloadCode.eventsList1(runtimeScene);
}


};

gdjs.BeginingloadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BeginingloadCode.GDbackroundObjects1.length = 0;
gdjs.BeginingloadCode.GDbackroundObjects2.length = 0;
gdjs.BeginingloadCode.GDbackroundObjects3.length = 0;
gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects1.length = 0;
gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects2.length = 0;
gdjs.BeginingloadCode.GDloadinggdeveloppreloadObjects3.length = 0;
gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects1.length = 0;
gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects2.length = 0;
gdjs.BeginingloadCode.GDclicktoloadmodtxtObjects3.length = 0;
gdjs.BeginingloadCode.GDloadingtxtObjects1.length = 0;
gdjs.BeginingloadCode.GDloadingtxtObjects2.length = 0;
gdjs.BeginingloadCode.GDloadingtxtObjects3.length = 0;
gdjs.BeginingloadCode.GDspinObjects1.length = 0;
gdjs.BeginingloadCode.GDspinObjects2.length = 0;
gdjs.BeginingloadCode.GDspinObjects3.length = 0;
gdjs.BeginingloadCode.GDNewSpriteObjects1.length = 0;
gdjs.BeginingloadCode.GDNewSpriteObjects2.length = 0;
gdjs.BeginingloadCode.GDNewSpriteObjects3.length = 0;
gdjs.BeginingloadCode.GDNewTextObjects1.length = 0;
gdjs.BeginingloadCode.GDNewTextObjects2.length = 0;
gdjs.BeginingloadCode.GDNewTextObjects3.length = 0;
gdjs.BeginingloadCode.GDmemoryObjects1.length = 0;
gdjs.BeginingloadCode.GDmemoryObjects2.length = 0;
gdjs.BeginingloadCode.GDmemoryObjects3.length = 0;
gdjs.BeginingloadCode.GDfpsObjects1.length = 0;
gdjs.BeginingloadCode.GDfpsObjects2.length = 0;
gdjs.BeginingloadCode.GDfpsObjects3.length = 0;

gdjs.BeginingloadCode.eventsList2(runtimeScene);

return;

}

gdjs['BeginingloadCode'] = gdjs.BeginingloadCode;
