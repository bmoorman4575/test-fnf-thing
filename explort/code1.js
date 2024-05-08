gdjs.keybindsCode = {};
gdjs.keybindsCode.GDleftObjects1= [];
gdjs.keybindsCode.GDleftObjects2= [];
gdjs.keybindsCode.GDleftObjects3= [];
gdjs.keybindsCode.GDleftObjects4= [];
gdjs.keybindsCode.GDdownObjects1= [];
gdjs.keybindsCode.GDdownObjects2= [];
gdjs.keybindsCode.GDdownObjects3= [];
gdjs.keybindsCode.GDdownObjects4= [];
gdjs.keybindsCode.GDupObjects1= [];
gdjs.keybindsCode.GDupObjects2= [];
gdjs.keybindsCode.GDupObjects3= [];
gdjs.keybindsCode.GDupObjects4= [];
gdjs.keybindsCode.GDrightObjects1= [];
gdjs.keybindsCode.GDrightObjects2= [];
gdjs.keybindsCode.GDrightObjects3= [];
gdjs.keybindsCode.GDrightObjects4= [];
gdjs.keybindsCode.GDarrowkeyonObjects1= [];
gdjs.keybindsCode.GDarrowkeyonObjects2= [];
gdjs.keybindsCode.GDarrowkeyonObjects3= [];
gdjs.keybindsCode.GDarrowkeyonObjects4= [];
gdjs.keybindsCode.GDinfoObjects1= [];
gdjs.keybindsCode.GDinfoObjects2= [];
gdjs.keybindsCode.GDinfoObjects3= [];
gdjs.keybindsCode.GDinfoObjects4= [];
gdjs.keybindsCode.GDNewObjectObjects1= [];
gdjs.keybindsCode.GDNewObjectObjects2= [];
gdjs.keybindsCode.GDNewObjectObjects3= [];
gdjs.keybindsCode.GDNewObjectObjects4= [];
gdjs.keybindsCode.GDrighttextObjects1= [];
gdjs.keybindsCode.GDrighttextObjects2= [];
gdjs.keybindsCode.GDrighttextObjects3= [];
gdjs.keybindsCode.GDrighttextObjects4= [];
gdjs.keybindsCode.GDuptextObjects1= [];
gdjs.keybindsCode.GDuptextObjects2= [];
gdjs.keybindsCode.GDuptextObjects3= [];
gdjs.keybindsCode.GDuptextObjects4= [];
gdjs.keybindsCode.GDdowntextObjects1= [];
gdjs.keybindsCode.GDdowntextObjects2= [];
gdjs.keybindsCode.GDdowntextObjects3= [];
gdjs.keybindsCode.GDdowntextObjects4= [];
gdjs.keybindsCode.GDlefttextObjects1= [];
gdjs.keybindsCode.GDlefttextObjects2= [];
gdjs.keybindsCode.GDlefttextObjects3= [];
gdjs.keybindsCode.GDlefttextObjects4= [];
gdjs.keybindsCode.GDstartObjects1= [];
gdjs.keybindsCode.GDstartObjects2= [];
gdjs.keybindsCode.GDstartObjects3= [];
gdjs.keybindsCode.GDstartObjects4= [];
gdjs.keybindsCode.GDdoneObjects1= [];
gdjs.keybindsCode.GDdoneObjects2= [];
gdjs.keybindsCode.GDdoneObjects3= [];
gdjs.keybindsCode.GDdoneObjects4= [];
gdjs.keybindsCode.GDmemoryObjects1= [];
gdjs.keybindsCode.GDmemoryObjects2= [];
gdjs.keybindsCode.GDmemoryObjects3= [];
gdjs.keybindsCode.GDmemoryObjects4= [];
gdjs.keybindsCode.GDfpsObjects1= [];
gdjs.keybindsCode.GDfpsObjects2= [];
gdjs.keybindsCode.GDfpsObjects3= [];
gdjs.keybindsCode.GDfpsObjects4= [];


gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDleftObjects2Objects = Hashtable.newFrom({"left": gdjs.keybindsCode.GDleftObjects2});
gdjs.keybindsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDleftObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
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
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects2);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDleftObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDleftObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDlefttextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDlefttextObjects2[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDleftObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDlefttextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDlefttextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDdownObjects2Objects = Hashtable.newFrom({"down": gdjs.keybindsCode.GDdownObjects2});
gdjs.keybindsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDdownObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects2);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDdownObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDdownObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDdowntextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDdowntextObjects2[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects1);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDdownObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDdownObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDdowntextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDdowntextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDupObjects2Objects = Hashtable.newFrom({"up": gdjs.keybindsCode.GDupObjects2});
gdjs.keybindsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDupObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects2);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDupObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDupObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDuptextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDuptextObjects2[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects1);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDupObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDupObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDuptextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDuptextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDrightObjects2Objects = Hashtable.newFrom({"right": gdjs.keybindsCode.GDrightObjects2});
gdjs.keybindsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDrightObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects2);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDrightObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDrightObjects2[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDrighttextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDrighttextObjects2[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects1);
{for(var i = 0, len = gdjs.keybindsCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDrightObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDrighttextObjects1.length ;i < len;++i) {
    gdjs.keybindsCode.GDrighttextObjects1[i].setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.keybindsCode.GDmemoryObjects2});
gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.keybindsCode.GDfpsObjects2});
gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.keybindsCode.GDmemoryObjects2});
gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDmemoryObjects2Objects = Hashtable.newFrom({"memory": gdjs.keybindsCode.GDmemoryObjects2});
gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDfpsObjects2Objects = Hashtable.newFrom({"fps": gdjs.keybindsCode.GDfpsObjects2});
gdjs.keybindsCode.eventsList4 = function(runtimeScene) {

};gdjs.keybindsCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.keybindsCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.keybindsCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDmemoryObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("memory")))) + " MB");
}
}}

}


};gdjs.keybindsCode.eventsList6 = function(runtimeScene) {

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
gdjs.keybindsCode.GDfpsObjects2.length = 0;

gdjs.keybindsCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDmemoryObjects2Objects, 3, 29, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDfpsObjects2Objects, 3, 3, "notes / ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDmemoryObjects2Objects, 3, 29, "black");
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
gdjs.keybindsCode.GDfpsObjects2.length = 0;

gdjs.keybindsCode.GDmemoryObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDmemoryObjects2Objects, 3, 29, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDfpsObjects2Objects, 3, 3, "");
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
gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.keybindsCode.GDmemoryObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDmemoryObjects2[i].deleteFromScene(runtimeScene);
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
gdjs.keybindsCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("memory"), gdjs.keybindsCode.GDmemoryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.keybindsCode.GDmemoryObjects2.length;i<l;++i) {
    if ( gdjs.keybindsCode.GDmemoryObjects2[i].getString() == "0 MB" ) {
        isConditionTrue_0 = true;
        gdjs.keybindsCode.GDmemoryObjects2[k] = gdjs.keybindsCode.GDmemoryObjects2[i];
        ++k;
    }
}
gdjs.keybindsCode.GDmemoryObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(75797468);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.keybindsCode.GDmemoryObjects2 */
{for(var i = 0, len = gdjs.keybindsCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDmemoryObjects2[i].setString("(   memory usage not supported   )");
}
}{for(var i = 0, len = gdjs.keybindsCode.GDmemoryObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDmemoryObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadeawakmemory", 0, "easeInQuad", 2000, true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(10), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.keybindsCode.GDstartObjects1});
gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDleftObjects3Objects = Hashtable.newFrom({"left": gdjs.keybindsCode.GDleftObjects3});
gdjs.keybindsCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDleftObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
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
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects3);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects3);
{for(var i = 0, len = gdjs.keybindsCode.GDleftObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDleftObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDlefttextObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDlefttextObjects3[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.keybindsCode.GDleftObjects2);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDleftObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDleftObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDlefttextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDlefttextObjects2[i].setString(gdjs.evtsExt__Gamepads__LastButtonString.func(runtimeScene, 1, "XBOX", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDdownObjects3Objects = Hashtable.newFrom({"down": gdjs.keybindsCode.GDdownObjects3});
gdjs.keybindsCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDdownObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects3);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects3);
{for(var i = 0, len = gdjs.keybindsCode.GDdownObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDdownObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDdowntextObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDdowntextObjects3[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.keybindsCode.GDdownObjects2);
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDdownObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDdownObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDdowntextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDdowntextObjects2[i].setString(gdjs.evtsExt__Gamepads__LastButtonString.func(runtimeScene, 1, "XBOX", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDupObjects3Objects = Hashtable.newFrom({"up": gdjs.keybindsCode.GDupObjects3});
gdjs.keybindsCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDupObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects3);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects3);
{for(var i = 0, len = gdjs.keybindsCode.GDupObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDupObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDuptextObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDuptextObjects3[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.keybindsCode.GDupObjects2);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDupObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDupObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDuptextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDuptextObjects2[i].setString(gdjs.evtsExt__Gamepads__LastButtonString.func(runtimeScene, 1, "XBOX", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


};gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDrightObjects3Objects = Hashtable.newFrom({"right": gdjs.keybindsCode.GDrightObjects3});
gdjs.keybindsCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDrightObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects3);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects3);
{for(var i = 0, len = gdjs.keybindsCode.GDrightObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDrightObjects3[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDrighttextObjects3.length ;i < len;++i) {
    gdjs.keybindsCode.GDrighttextObjects3[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.keybindsCode.GDrightObjects2);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects2);
{for(var i = 0, len = gdjs.keybindsCode.GDrightObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDrightObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.keybindsCode.GDrighttextObjects2.length ;i < len;++i) {
    gdjs.keybindsCode.GDrighttextObjects2[i].setString(gdjs.evtsExt__Gamepads__LastButtonString.func(runtimeScene, 1, "XBOX", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}}

}


};gdjs.keybindsCode.eventsList11 = function(runtimeScene) {

{


gdjs.keybindsCode.eventsList7(runtimeScene);
}


{


gdjs.keybindsCode.eventsList8(runtimeScene);
}


{


gdjs.keybindsCode.eventsList9(runtimeScene);
}


{


gdjs.keybindsCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.keybindsCode.eventsList12 = function(runtimeScene) {

{


gdjs.keybindsCode.eventsList0(runtimeScene);
}


{


gdjs.keybindsCode.eventsList1(runtimeScene);
}


{


gdjs.keybindsCode.eventsList2(runtimeScene);
}


{


gdjs.keybindsCode.eventsList3(runtimeScene);
}


{


gdjs.keybindsCode.eventsList6(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.keybindsCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.keybindsCode.mapOfGDgdjs_9546keybindsCode_9546GDstartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("downtext"), gdjs.keybindsCode.GDdowntextObjects1);
gdjs.copyArray(runtimeScene.getObjects("lefttext"), gdjs.keybindsCode.GDlefttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("righttext"), gdjs.keybindsCode.GDrighttextObjects1);
gdjs.copyArray(runtimeScene.getObjects("uptext"), gdjs.keybindsCode.GDuptextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.keybindsCode.GDlefttextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDlefttextObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.keybindsCode.GDdowntextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDdowntextObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.keybindsCode.GDuptextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDuptextObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.keybindsCode.GDrighttextObjects1.length === 0 ) ? "" :gdjs.keybindsCode.GDrighttextObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.keybindsCode.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.keybindsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.keybindsCode.GDleftObjects1.length = 0;
gdjs.keybindsCode.GDleftObjects2.length = 0;
gdjs.keybindsCode.GDleftObjects3.length = 0;
gdjs.keybindsCode.GDleftObjects4.length = 0;
gdjs.keybindsCode.GDdownObjects1.length = 0;
gdjs.keybindsCode.GDdownObjects2.length = 0;
gdjs.keybindsCode.GDdownObjects3.length = 0;
gdjs.keybindsCode.GDdownObjects4.length = 0;
gdjs.keybindsCode.GDupObjects1.length = 0;
gdjs.keybindsCode.GDupObjects2.length = 0;
gdjs.keybindsCode.GDupObjects3.length = 0;
gdjs.keybindsCode.GDupObjects4.length = 0;
gdjs.keybindsCode.GDrightObjects1.length = 0;
gdjs.keybindsCode.GDrightObjects2.length = 0;
gdjs.keybindsCode.GDrightObjects3.length = 0;
gdjs.keybindsCode.GDrightObjects4.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects1.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects2.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects3.length = 0;
gdjs.keybindsCode.GDarrowkeyonObjects4.length = 0;
gdjs.keybindsCode.GDinfoObjects1.length = 0;
gdjs.keybindsCode.GDinfoObjects2.length = 0;
gdjs.keybindsCode.GDinfoObjects3.length = 0;
gdjs.keybindsCode.GDinfoObjects4.length = 0;
gdjs.keybindsCode.GDNewObjectObjects1.length = 0;
gdjs.keybindsCode.GDNewObjectObjects2.length = 0;
gdjs.keybindsCode.GDNewObjectObjects3.length = 0;
gdjs.keybindsCode.GDNewObjectObjects4.length = 0;
gdjs.keybindsCode.GDrighttextObjects1.length = 0;
gdjs.keybindsCode.GDrighttextObjects2.length = 0;
gdjs.keybindsCode.GDrighttextObjects3.length = 0;
gdjs.keybindsCode.GDrighttextObjects4.length = 0;
gdjs.keybindsCode.GDuptextObjects1.length = 0;
gdjs.keybindsCode.GDuptextObjects2.length = 0;
gdjs.keybindsCode.GDuptextObjects3.length = 0;
gdjs.keybindsCode.GDuptextObjects4.length = 0;
gdjs.keybindsCode.GDdowntextObjects1.length = 0;
gdjs.keybindsCode.GDdowntextObjects2.length = 0;
gdjs.keybindsCode.GDdowntextObjects3.length = 0;
gdjs.keybindsCode.GDdowntextObjects4.length = 0;
gdjs.keybindsCode.GDlefttextObjects1.length = 0;
gdjs.keybindsCode.GDlefttextObjects2.length = 0;
gdjs.keybindsCode.GDlefttextObjects3.length = 0;
gdjs.keybindsCode.GDlefttextObjects4.length = 0;
gdjs.keybindsCode.GDstartObjects1.length = 0;
gdjs.keybindsCode.GDstartObjects2.length = 0;
gdjs.keybindsCode.GDstartObjects3.length = 0;
gdjs.keybindsCode.GDstartObjects4.length = 0;
gdjs.keybindsCode.GDdoneObjects1.length = 0;
gdjs.keybindsCode.GDdoneObjects2.length = 0;
gdjs.keybindsCode.GDdoneObjects3.length = 0;
gdjs.keybindsCode.GDdoneObjects4.length = 0;
gdjs.keybindsCode.GDmemoryObjects1.length = 0;
gdjs.keybindsCode.GDmemoryObjects2.length = 0;
gdjs.keybindsCode.GDmemoryObjects3.length = 0;
gdjs.keybindsCode.GDmemoryObjects4.length = 0;
gdjs.keybindsCode.GDfpsObjects1.length = 0;
gdjs.keybindsCode.GDfpsObjects2.length = 0;
gdjs.keybindsCode.GDfpsObjects3.length = 0;
gdjs.keybindsCode.GDfpsObjects4.length = 0;

gdjs.keybindsCode.eventsList12(runtimeScene);

return;

}

gdjs['keybindsCode'] = gdjs.keybindsCode;
