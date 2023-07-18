gdjs.loadCode = {};
gdjs.loadCode.GDmemoryObjects1= [];
gdjs.loadCode.GDmemoryObjects2= [];
gdjs.loadCode.GDmemoryObjects3= [];
gdjs.loadCode.GDfpsObjects1= [];
gdjs.loadCode.GDfpsObjects2= [];
gdjs.loadCode.GDfpsObjects3= [];
gdjs.loadCode.GDbackroundObjects1= [];
gdjs.loadCode.GDbackroundObjects2= [];
gdjs.loadCode.GDbackroundObjects3= [];
gdjs.loadCode.GDloadinggdeveloppreloadObjects1= [];
gdjs.loadCode.GDloadinggdeveloppreloadObjects2= [];
gdjs.loadCode.GDloadinggdeveloppreloadObjects3= [];
gdjs.loadCode.GDclicktoloadmodtxtObjects1= [];
gdjs.loadCode.GDclicktoloadmodtxtObjects2= [];
gdjs.loadCode.GDclicktoloadmodtxtObjects3= [];
gdjs.loadCode.GDloadingtxtObjects1= [];
gdjs.loadCode.GDloadingtxtObjects2= [];
gdjs.loadCode.GDloadingtxtObjects3= [];
gdjs.loadCode.GDspinObjects1= [];
gdjs.loadCode.GDspinObjects2= [];
gdjs.loadCode.GDspinObjects3= [];
gdjs.loadCode.GDNewSpriteObjects1= [];
gdjs.loadCode.GDNewSpriteObjects2= [];
gdjs.loadCode.GDNewSpriteObjects3= [];
gdjs.loadCode.GDNewTextObjects1= [];
gdjs.loadCode.GDNewTextObjects2= [];
gdjs.loadCode.GDNewTextObjects3= [];


gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.loadCode.GDmemoryObjects2});
gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.loadCode.GDfpsObjects2});
gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.loadCode.GDmemoryObjects2});
gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.loadCode.GDfpsObjects2});
gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.loadCode.GDmemoryObjects2});
gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.loadCode.GDfpsObjects2});
gdjs.loadCode.eventsList0 = function(runtimeScene) {

};gdjs.loadCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.loadCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.loadCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.loadCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.loadCode.GDmemoryObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("memory")))) + " MB");
}
}}

}


};gdjs.loadCode.eventsList2 = function(runtimeScene) {

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
gdjs.loadCode.GDfpsObjects2.length = 0;

gdjs.loadCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDmemoryObjects2Objects, 3, 29, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDfpsObjects2Objects, 3, 3, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDmemoryObjects2Objects, 3, 29, "black");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDfpsObjects2Objects, 3, 3, "black");
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
gdjs.loadCode.GDfpsObjects2.length = 0;

gdjs.loadCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDmemoryObjects2Objects, 3, 29, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadCode.mapOfGDgdjs_46loadCode_46GDfpsObjects2Objects, 3, 3, "");
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
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.loadCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.loadCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.loadCode.GDmemoryObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.loadCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.loadCode.GDmemoryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadCode.GDmemoryObjects2.length;i<l;++i) {
    if ( gdjs.loadCode.GDmemoryObjects2[i].getString() == "0 MB" ) {
        isConditionTrue_0 = true;
        gdjs.loadCode.GDmemoryObjects2[k] = gdjs.loadCode.GDmemoryObjects2[i];
        ++k;
    }
}
gdjs.loadCode.GDmemoryObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(108584028);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.loadCode.GDmemoryObjects2 */
{for(var i = 0, len = gdjs.loadCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.loadCode.GDmemoryObjects2[i].setString("(   memory usage not supported   )");
}
}{for(var i = 0, len = gdjs.loadCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.loadCode.GDmemoryObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadeawakmemory", 0, "easeInQuad", 2000, true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.loadCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loaddone") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "modedit.charteditor", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.loadCode.eventsList4 = function(runtimeScene) {

{


gdjs.loadCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clicktoloadmodtxt"), gdjs.loadCode.GDclicktoloadmodtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.loadCode.GDloadingtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("spin"), gdjs.loadCode.GDspinObjects1);
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "992927976557654088", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "In The Menu", "", 0, 0, "menu", "menu", "", "Playing", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.loadCode.GDloadingtxtObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDloadingtxtObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.loadCode.GDspinObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDspinObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loaddone");
}{for(var i = 0, len = gdjs.loadCode.GDclicktoloadmodtxtObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDclicktoloadmodtxtObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.loadCode.GDclicktoloadmodtxtObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDclicktoloadmodtxtObjects1[i].getBehavior("Tween").addObjectOpacityTween("modtextcolorshowthingy", 255, "easeOutQuad", 500, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "events") >= 0.03;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loadinggdeveloppreload"), gdjs.loadCode.GDloadinggdeveloppreloadObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.loadCode.GDloadingtxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("spin"), gdjs.loadCode.GDspinObjects1);
{for(var i = 0, len = gdjs.loadCode.GDloadinggdeveloppreloadObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDloadinggdeveloppreloadObjects1[i].setOpacity(gdjs.loadCode.GDloadinggdeveloppreloadObjects1[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.loadCode.GDloadingtxtObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDloadingtxtObjects1[i].setOpacity(gdjs.loadCode.GDloadingtxtObjects1[i].getOpacity() + (10));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.loadCode.GDspinObjects1.length ;i < len;++i) {
    gdjs.loadCode.GDspinObjects1[i].setOpacity(gdjs.loadCode.GDspinObjects1[i].getOpacity() + (7));
}
}}

}


{


gdjs.loadCode.eventsList3(runtimeScene);
}


};

gdjs.loadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadCode.GDmemoryObjects1.length = 0;
gdjs.loadCode.GDmemoryObjects2.length = 0;
gdjs.loadCode.GDmemoryObjects3.length = 0;
gdjs.loadCode.GDfpsObjects1.length = 0;
gdjs.loadCode.GDfpsObjects2.length = 0;
gdjs.loadCode.GDfpsObjects3.length = 0;
gdjs.loadCode.GDbackroundObjects1.length = 0;
gdjs.loadCode.GDbackroundObjects2.length = 0;
gdjs.loadCode.GDbackroundObjects3.length = 0;
gdjs.loadCode.GDloadinggdeveloppreloadObjects1.length = 0;
gdjs.loadCode.GDloadinggdeveloppreloadObjects2.length = 0;
gdjs.loadCode.GDloadinggdeveloppreloadObjects3.length = 0;
gdjs.loadCode.GDclicktoloadmodtxtObjects1.length = 0;
gdjs.loadCode.GDclicktoloadmodtxtObjects2.length = 0;
gdjs.loadCode.GDclicktoloadmodtxtObjects3.length = 0;
gdjs.loadCode.GDloadingtxtObjects1.length = 0;
gdjs.loadCode.GDloadingtxtObjects2.length = 0;
gdjs.loadCode.GDloadingtxtObjects3.length = 0;
gdjs.loadCode.GDspinObjects1.length = 0;
gdjs.loadCode.GDspinObjects2.length = 0;
gdjs.loadCode.GDspinObjects3.length = 0;
gdjs.loadCode.GDNewSpriteObjects1.length = 0;
gdjs.loadCode.GDNewSpriteObjects2.length = 0;
gdjs.loadCode.GDNewSpriteObjects3.length = 0;
gdjs.loadCode.GDNewTextObjects1.length = 0;
gdjs.loadCode.GDNewTextObjects2.length = 0;
gdjs.loadCode.GDNewTextObjects3.length = 0;

gdjs.loadCode.eventsList4(runtimeScene);

return;

}

gdjs['loadCode'] = gdjs.loadCode;
