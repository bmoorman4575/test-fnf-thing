
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator || {};

/**
 * Behavior generated from JSON sprite sheet animator
 */
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator = class JSONSpriteSheetAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.JSON = behaviorData.JSON !== undefined ? behaviorData.JSON : "";
    this._behaviorData.CurrentAnimation = "__null";
    this._behaviorData.CurrentAnimationFrame = Number("") || 0;
    this._behaviorData.CurrentFrame = "";
    this._behaviorData.AnimationSpeed = behaviorData.AnimationSpeed !== undefined ? behaviorData.AnimationSpeed : Number("0.2") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.JSON !== newBehaviorData.JSON)
      this._behaviorData.JSON = newBehaviorData.JSON;
    if (oldBehaviorData.CurrentAnimation !== newBehaviorData.CurrentAnimation)
      this._behaviorData.CurrentAnimation = newBehaviorData.CurrentAnimation;
    if (oldBehaviorData.CurrentAnimationFrame !== newBehaviorData.CurrentAnimationFrame)
      this._behaviorData.CurrentAnimationFrame = newBehaviorData.CurrentAnimationFrame;
    if (oldBehaviorData.CurrentFrame !== newBehaviorData.CurrentFrame)
      this._behaviorData.CurrentFrame = newBehaviorData.CurrentFrame;
    if (oldBehaviorData.AnimationSpeed !== newBehaviorData.AnimationSpeed)
      this._behaviorData.AnimationSpeed = newBehaviorData.AnimationSpeed;

    return true;
  }

  // Properties:
  
  _getJSON() {
    return this._behaviorData.JSON !== undefined ? this._behaviorData.JSON : "";
  }
  _setJSON(newValue) {
    this._behaviorData.JSON = newValue;
  }
  _getCurrentAnimation() {
    return this._behaviorData.CurrentAnimation !== undefined ? this._behaviorData.CurrentAnimation : "__null";
  }
  _setCurrentAnimation(newValue) {
    this._behaviorData.CurrentAnimation = newValue;
  }
  _getCurrentAnimationFrame() {
    return this._behaviorData.CurrentAnimationFrame !== undefined ? this._behaviorData.CurrentAnimationFrame : Number("") || 0;
  }
  _setCurrentAnimationFrame(newValue) {
    this._behaviorData.CurrentAnimationFrame = newValue;
  }
  _getCurrentFrame() {
    return this._behaviorData.CurrentFrame !== undefined ? this._behaviorData.CurrentFrame : "";
  }
  _setCurrentFrame(newValue) {
    this._behaviorData.CurrentFrame = newValue;
  }
  _getAnimationSpeed() {
    return this._behaviorData.AnimationSpeed !== undefined ? this._behaviorData.AnimationSpeed : Number("0.2") || 0;
  }
  _setAnimationSpeed(newValue) {
    this._behaviorData.AnimationSpeed = newValue;
  }
}

/**
 * Shared data generated from JSON sprite sheet animator
 */
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.SharedData = class JSONSpriteSheetAnimatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteSheet_JSONSpriteSheetAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteSheet_JSONSpriteSheetAnimatorSharedData = new gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteSheet_JSONSpriteSheetAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1[i].pauseTimer("__SpriteSheet_Animation");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._LoadJSON((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimation() != "__null" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("__SpriteSheet_Animation", (gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationSpeed())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._UpdateAnimationFrame((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimationFrame()) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1);
{gdjs.evtTools.network.jsonToObjectVariableStructure((( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJSON()), (gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1[0] : null), ((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1[0].getVariables()).get("__SpriteSheet_data"));
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSON = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._LoadJSONContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].setXOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getVariables().get("__SpriteSheet_data").getChild("frames").getChild((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame())).getChild("frame").getChild("x"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].setYOffset((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getVariables().get("__SpriteSheet_data").getChild("frames").getChild((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame())).getChild("frame").getChild("y"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].setHeight((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getVariables().get("__SpriteSheet_data").getChild("frames").getChild((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame())).getChild("frame").getChild("h"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getVariables().get("__SpriteSheet_data").getChild("frames").getChild((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame())).getChild("frame").getChild("w"))));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObject = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateObjectContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentAnimationFrame((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("frame")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimationFrame()) > (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[0].getVariables()).get("__SpriteSheet_data").getChild("animations").getChild((( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimation())))) - 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentAnimationFrame(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFrame((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getVariables().get("__SpriteSheet_data").getChild("animations").getChild((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimation())).getChild((gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimationFrame())))));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._UpdateObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrame = function(frame, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "frame") return frame;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype._UpdateAnimationFrameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJSON((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("JSON") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._LoadJSON((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSON = function(JSON, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "JSON") return JSON;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.LoadFromJSONContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentFrame((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("frame") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentAnimation("__null");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._UpdateObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrame = function(frame, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "frame") return frame;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.DisplayFrameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].unpauseTimer("__SpriteSheet_Animation");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].resetTimer("__SpriteSheet_Animation");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentAnimation((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("AnimationName") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._UpdateAnimationFrame(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimation = function(AnimationName, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "AnimationName") return AnimationName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PlayAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAnimation()); }}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentFrame()); }}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrame = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.CurrentFrameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1[i].pauseTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.PauseAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext = {};
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1[i].unpauseTimer("__SpriteSheet_Animation");
}
}}

}


};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator.prototype.ResumeAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SpriteSheet::JSONSpriteSheetAnimator", gdjs.evtsExt__SpriteSheet__JSONSpriteSheetAnimator.JSONSpriteSheetAnimator);
