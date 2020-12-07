(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AEGAAQAABthNBMQhMBNhtAAQhrAAhNhNQhNhMAAhtQAAhrBNhNQBNhNBrAAQBtAABMBNQBNBNAABrg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00335D").s().p("Ai4C5QhNhNAAhsQAAhrBNhNQBNhNBrAAQBsAABNBNQBNBNAABrQAABshNBNQhNBNhsAAQhrAAhNhNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-27.2,54.4,54.4);


(lib.Tween2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00335D").s().p("Egl6AMbQADhTAI2lQAQAAANgJQAJgFAPgPQAcgbAbABQAZABAcAcQAcAbAcgEQAYgDAdgcQAcgbAcAHQAWAEAeAdQAcAZAdgIQATgFAggcQAdgaAcAKQAQAFAkAeQAcAZAdgMQAMgFAmgfQAegYAcANQAEACAvAkQAeAXAdgQQAggaASgMQAegWAdARQAfAcASAMQAfAUAcgTQAfgdASgKQAfgTAcATQAeAdATALQAfASAcgVQAfgeATgKQAfgQAdAXIAxAnQAgANAcgXQApgkAJgDQAfgLAcAZQAmAiANADQAeAJAbgZQAkghAPgDQAdgIAcAaQAiAgARADQAcAHAdgbQAiggATgDQAbgEAeAcQAgAfAVABQAaACAegdQAggeAXABQAYACAcAaQAaAaAagCQAQACANgJQAJgFAPgPQAagaAZAAIABAAIAHABQAVAFAdAZIABABIACABQAaAWAZgDQAYgDAdgcQAcgbAcAHQAWAEAeAdQAcAZAdgIQATgFAggcQAdgaAcAKQAQAFAkAeQAcAZAdgMQAMgFAmgfQAegYAcANQAEACAvAkQAeAXAdgQQAggaASgMQAegWAdARQAfAcASAMQAfAUAcgTQAfgdASgKQAfgTAcATQAeAdATALQAfASAcgVQAfgeATgKQAfgQAdAXIAxAnQAgANAcgXQApgkAJgDQAfgLAcAZQAmAiANADQAeAJAbgZQAkghAPgDQAdgIAcAaQAiAgARADQAcAHAdgbQAiggATgDQAbgEAeAcQAgAfAVABQAaACAegdQAggeAXABQAYACAcAaQAcAcAcgEQAYgDAdgcQAcgbAcAGQAWAFAeAcIAMYTg");
	this.shape.setTransform(0,57.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.6,-22.2,485.4,159);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,1,1).p("EAlwAAEQgegbgWgFQgdgGgcAaQgdAbgYADQgcAEgbgaQgcgbgYgCQgYAAgfAdQgfAdgZgCQgVgCghgdQgdgcgbAEQgTADgiAeQgdAbgdgGQgQgEgjgfQgcgZgdAHQgOAEgkAfQgcAagegJQgMgEgnghQgcgZgfAMQgIADgqAiQgcAYgfgOQgBAAgxgmQgcgWggAQQgTAJgeAdQgcAVgggSQgSgKgegcQgcgUgfATQgTALgeAbQgcATgfgUQgSgLgggbQgcgSgfAWQgSANggAZQgdAPgegXQgugigEgCQgdgOgeAZQglAegNAFQgcALgdgYQgjgdgQgGQgdgKgdAaQggAbgTAGQgcAIgcgaQgfgbgVgFQgdgGgcAbQgdAagYADQgZAEgZgWQgBgBgBgBQgBAAAAgBQgBgBgBgBQgcgagagBQgBAAgBAAIgBAAQgYAAgbAaQgOANgJAGQgOAIgQgBQgaABgZgZQgcgagYgCQgYAAgfAdQgfAdgZgCQgVgCghgdQgdgcgbAEQgTADgiAeQgdAbgdgGQgQgEgjgfQgcgZgdAHQgOAEgkAfQgcAagegJQgMgEgnghQgcgZgfAMQgIADgqAiQgcAYgfgOQgBAAgxgmQgcgWggAQQgTAJgeAdQgcAVgggSQgSgKgegcQgcgUgfATQgTALgeAbQgcATgfgUQgSgLgggbQgcgSgfAWQgSANggAZQgdAPgegXQgugigEgCQgdgOgeAZQglAegNAFQgcALgdgYQgjgdgQgGQgdgKgdAaQggAbgTAGQgcAIgcgaQgfgbgVgFQgdgGgcAbQgdAagYADQgbAEgcgbQgcgagagBQgbgCgcAbQgOAOgJAGQgOAIgQAAABRADQgdgXgVgFQgEgBgEAAAAWgaQgXgBgYAWQgdAbgYADQgCABgCAA");
	this.shape.setTransform(0,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.6,-23.2,485.2,8.1);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AA5AAQAAAXgRARQgRARgXAAQgWAAgRgRQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARAQAAAXg");
	this.shape.setTransform(0,0,0.641,0.641);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(-4.6,-4.6,9.2,9.2), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AAAmqIAANV");
	this.shape.setTransform(0,0.2,0.627,0.627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AgBG1QAAhrgigwQgLgPgTgQQgYgTgEgFQgVgWgGgoIgCmxIB6ibIB7CbIgCGxQgGAogVAWQgFAFgYATQgTAQgLAPQghAwAABr");
	this.shape_1.setTransform(0,-0.4,0.627,0.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(-8.7,-28.1,17.5,56.1), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ASigqMgkRAAAQgSAAgMANQgNAMAAARQAAARANANQAMANASAAQASAAAMgNQANgNAAgR");
	this.shape.setTransform(-0.2,0,0.615,0.615);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-73.7,-3.6,147.5,7.3), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AyuAAQAAgXgSgSQgRgSgZAAQgZAAgRASQgSARAAAYQAAAZASARQARASAZAAMAoYAAA");
	this.shape.setTransform(-0.2,0,0.615,0.615);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(-82.3,-4.6,164.7,9.4), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ARPArMghrAAAQgSAAgMgNQgNgNAAgRQAAgRANgMQAMgNASAAQASAAAMANQANAMAAAR");
	this.shape.setTransform(-0.2,0,0.615,0.615);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(-68.6,-3.6,137.3,7.3), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjlCXQgIgHgDgKQgOAOgOAHQgOAFgTAAQgRAAgOgEQgOgFgJgJQgJgJgEgMQgEgLgBgPQAAgTAIgOQAGgOAOgJQAOgKAUgFQAUgFAaABIAPAAIAAgMQAAgUgGgIQgGgKgTAAQgJABgMADIgTAHQgOAHgLAIIgUgjQAYgPAWgHQAWgHAYAAIAYACQAKADAJAEQAHAFAGAGQAHAHADAJQADAGABAMIgBBhQAAAWACAJQAEAKANAJIgZAeQgKgEgIgIgAkiA2QgLACgIAFQgGAGgEAIQgCAHAAALQgBAPAJAJQAHAJAOAAQAMAAALgGQAKgGAHgLIABg0IgJAAQgRABgNACgAEyCXQgSgHgOgPQgNgPgHgVQgHgWAAgZQAAgdAHgUQAGgTAOgRQAOgPAQgGQAQgIAVAAQARAAAOAFQAQAFAMAMQAIAHAFAIQAFAJAEALQAHAiAAAZIAAAKIiCAAIAAADQAAANACAKQADALAGAJQAGAJALAFQALAGAPgBQAPABAOgGQANgFAMgLIATAdQgRAOgUAHQgTAIgXgBQgWABgTgJgAF8AXQAAgNgDgKQgCgKgFgHQgGgHgHgFQgHgDgJAAQgKAAgIADQgIAFgFAHQgFAHgDAKQgDAKABANIBQAAIAAAAgAA5CXQgRgIgLgOQgMgPgGgUQgGgWgBgYQAAgaAIgVQAGgUAMgPQAMgQAQgIQARgIAUgBQAOAAALAGQAMAEAKAKIgChzIAvAHIADEbQABASADAIIgrAAQgCgFgCgMQgLALgNAGQgOAFgQAAQgUAAgQgIgABSgYQgJAFgGAJQgFAJgDAOQgCAOAAAUQAAATACAMQADAPAEAIQAFAKAJADQAJAFANAAQANAAALgGQAJgGAFgJIAAhtQgHgIgLgFQgJgEgMgBQgMABgHAEgAokCcQgOgDgMgFQgNgFgKgJQgKgHgKgLQgIgKgGgMQgGgMgFgOQgFgRgDgsQAAgVAEgUQADgTAIgRQAHgQAKgOQALgNAOgKQAQgMARgGQASgFAWgBQAZAAAXAIQAWAIATAQIgZAfQgPgMgQgGQgPgFgRAAQgUAAgPAJQgOAIgKAQQgIAPgEAWQgEAVgBAaQABAfAFAWQAGAWALAMQAIALAQAGQAOAGASAAQAQAAAYgJIAAhOIgzAAIgHgnIBsAAIAACLQgVAMgYAGQgXAHgZAAQgQAAgNgCgAJcCaIAAiQQAAgVgGgJQgGgHgNAAQgKAAgOAGQgNAIgLAKIAACdIgvAAIgCi7QgBgMgEgMIAqgLQAIAPAAAPQASgPAQgHQAQgIARAAQANAAAKAEQAKAEAHAIQAJAHADALQAFAMAAAPIAAChgAiECaIAAiZQAAgbgIgfIAsgLQAIAPAAATQANgRANgJQAOgIAQAAQAJgBAHAEIgPArQgHgCgGAAQgPAAgLAJQgMAKgDAMIAACTg");
	this.shape.setTransform(0.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(-64.9,-14,130.1,32.6), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANrCXQgIgHgEgKQgNAOgPAHQgOAFgSAAQgSAAgOgEQgOgFgIgJQgKgJgEgMQgEgLAAgPQAAgTAHgOQAHgOAOgJQANgKAUgFQAUgFAbABIAOAAIAAgMQAAgUgFgIQgHgKgSAAQgKABgLADIgUAHQgOAHgKAIIgVgjQAZgPAVgHQAWgHAZAAIAXACQAKADAJAEQAIAFAGAGQAGAHAEAJQADAGAAAMIgBBhQAAAWADAJQAEAKAMAJIgYAeQgLgEgHgIgAMuA2QgMACgHAFQgHAGgDAIQgDAHAAALQAAAPAIAJQAIAJAOAAQAMAAAKgGQAKgGAHgLIABg0IgJAAQgRABgMACgAGXCXQgIgHgEgKQgNAOgPAHQgOAFgSAAQgSAAgOgEQgOgFgIgJQgKgJgEgMQgEgLAAgPQAAgTAHgOQAHgOAOgJQANgKAUgFQAUgFAbABIAOAAIAAgMQAAgUgFgIQgHgKgSAAQgKABgLADIgUAHQgOAHgKAIIgVgjQAZgPAVgHQAWgHAZAAIAXACQAKADAJAEQAIAFAGAGQAGAHAEAJQADAGAAAMIgBBhQAAAWADAJQAEAKAMAJIgYAeQgLgEgHgIgAFaA2QgMACgHAFQgHAGgDAIQgDAHAAALQAAAPAIAJQAIAJAOAAQAMAAAKgGQAKgGAHgLIABg0IgJAAQgRABgMACgAg5CXQgHgHgEgKQgNAOgPAHQgOAFgTAAQgSAAgOgEQgNgFgJgJQgJgJgEgMQgEgLgBgPQAAgTAIgOQAGgOAOgJQAOgKAUgFQAUgFAaABIAPAAIAAgMQAAgUgGgIQgGgKgTAAQgKABgKADIgUAHQgOAHgLAIIgUgjQAZgPAVgHQAWgHAYAAIAYACQAKADAJAEQAHAFAGAGQAHAHADAJQADAGABAMIgBBhQAAAWADAJQADAKANAJIgZAeQgKgEgIgIgAh2A2QgLACgIAFQgGAGgEAIQgCAHAAALQAAAPAIAJQAHAJAOAAQAMAAAKgGQALgGAHgLIABg0IgJAAQgRABgNACgAtcCXQgRgHgNgPQgMgPgIgVQgGgWAAgZQAAgaAHgVQAGgVANgPQANgPARgHQASgJAVAAQAXAAATAJQARAHANAQQAMAPAGAVQAHAUAAAaQAAAagHAWQgGAUgNAPQgMAPgSAHQgTAJgVgBQgWABgSgJgAtIgcQgIAFgGAJQgFAJgCANQgDAOAAAUQAAAYAEAQQADAPAFAKQAGAJAIAFQAHADALAAQAMABAHgFQAJgFAFgJQAGgKACgOQADgOAAgVQAAgXgDgQQgDgOgGgJQgGgJgIgFQgIgDgLAAQgLAAgIAEgAIfCXQgRgIgLgOQgMgPgGgUQgGgWAAgYQgBgaAIgVQAGgUAMgPQANgQAQgIQAQgIAUgBQAOAAAMAGQALAEAKAKIgChzIAvAHIACEbQACASAEAIIgsAAQgCgFgCgMQgLALgNAGQgNAFgQAAQgVAAgQgIgAI3gYQgIAFgFAJQgFAJgDAOQgDAOAAAUQAAATACAMQADAPAEAIQAGAKAIADQAJAFAOAAQAMAAAKgGQALgGAEgJIAAhtQgIgIgKgFQgJgEgMgBQgMABgIAEgAlaCcQgNgDgNgFQgLgGgKgIQgKgHgKgLQgHgKgHgMIgKgaQgHgRgCgpQAAgaAEgXQAGgWAKgSQAIgRALgNQAMgMAOgJQAPgIAPgGQARgEARAAQAWAAATAGQAUAGANALIgWAgQgNgIgMgEQgMgEgPAAQgTAAgPAJQgPAJgJASQgIANgFAUQgDASAAAaQAAAbACASQAEAQAFANQAFAKAHAIQAHAIAIAGQAJAEAKAEQAKACAKAAQAQAAANgFQAMgEANgKIAXAfQgSAOgTAGQgVAHgXAAQgPAAgNgDgACeCaIAAiQQAAgVgGgJQgFgHgOAAQgKAAgNAGQgOAIgKAKIAACdIgvAAIgCi7QgBgMgFgMIArgLQAIAPgBAPQATgPAPgHQAQgIARAAQANAAAKAEQALAEAHAIQAIAHAEALQAEAMAAAPIAAChgAqaCaIAAi4IgUAAIAAghIAVAAIgCggQAAgRAGgMQAFgNAIgIQAJgIAMgEQAMgEAPAAQAOAAALADQAMADAMAHIgQAdQgQgHgKAAQgNAAgGAIQgIAIAAAPIAAAgIA6AAIgNAhIgsAAIAAC4g");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-92.2,-14,183.4,32.6), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AokCvIAUgIQAJgEAHgHQAHgHAGgLQAGgKAEgQIgPAAQgFgVgPguIgyiSIAwgIIA0C0QAIggAIgaIAlh1IAyAAIhaEAQgIAPgIAKQgKALgNAHQgNAHgTADgAH3BuQgIgIgEgKQgNAOgOAHQgOAGgTAAQgSAAgOgFQgNgFgJgJQgJgIgEgNQgFgLAAgPQAAgSAHgPQAHgOAOgIQAOgKATgFQAVgEAaAAIAOAAIAAgMQAAgUgFgIQgHgKgSAAQgKAAgLADIgTAHQgOAHgLAIIgVgiQAZgQAVgHQAWgHAZAAIAXACQALADAIAEQAIAFAGAHQAGAGAEAJQADAHAAALIAABhQgBAWADAKQAEAKAMAIIgYAeQgKgEgIgHgAG6AMQgLADgIAFQgHAFgDAIQgDAHAAALQAAAPAIAJQAIAJAOAAQAMAAAKgGQALgGAHgLIABgzIgJAAQgSAAgMACgAjKBuQgHgIgEgKQgNAOgPAHQgOAGgSAAQgSAAgOgFQgOgFgJgJQgJgIgEgNQgEgLAAgPQAAgSAHgPQAHgOANgIQAOgKAUgFQAUgEAaAAIAPAAIAAgMQAAgUgGgIQgGgKgSAAQgKAAgLADIgUAHQgOAHgKAIIgVgiQAZgQAVgHQAWgHAYAAIAYACQAKADAJAEQAIAFAGAHQAGAGADAJQADAHABALIgBBhQAAAWADAKQAEAKAMAIIgZAeQgKgEgIgHgAkGAMQgMADgHAFQgHAFgDAIQgDAHAAALQAAAPAIAJQAIAJAOAAQALAAALgGQAKgGAHgLIABgzIgJAAQgRAAgMACgArgBuQgRgIgNgPQgMgPgHgVQgHgVAAgaQAAgZAHgVQAHgVAMgPQANgQARgHQASgJAVAAQAXAAATAJQARAIANAPQAMAPAHAVQAGAWAAAYQAAAagGAWQgHAVgNAOQgMAPgSAIQgSAIgWAAQgWAAgSgIgArMhFQgIAEgFAJQgFAJgDAPQgCAOAAATQAAAXADAQQADAQAFAJQAGAJAIAFQAIAEALAAQALAAAIgFQAIgEAFgKQAGgJACgPQADgOAAgVQAAgWgDgPQgDgPgGgKQgFgJgJgEQgIgEgKAAQgMAAgIAFgAhpA4IAAi5QAAgmgEgZIAxgLQADAfAAAcIAAC4QAAAgAFAHQAGAIAKgEIAHAdQgNAFgPAAQgwAAAAg9gAPLBwIhSh6IBBheIA5AAIhLBcIBcB8gANHBwIAAj8QAAgdgFgXIAvgMQAFAXAAAjIAAECgALPBwIAAiPQAAgWgGgIQgFgIgOAAQgKAAgOAHQgNAHgLAKIAACdIguAAIgCi7QgCgMgEgLIArgMQAHAPAAAQQASgQAQgHQAQgIARAAQANAAAKAEQALAEAHAIQAIAHAEALQAEAMAAAPIAAChgABwBwIAAkoIBPAAQAgAAAQADQAQADAOAIQARALAIAOQAIAPAAATQAAAMgDAKQgDAKgHAJQgHAIgJAGQgKAGgMAEQASAEANAIQAMAIAHALQAHAJADALQADALAAAMQAAAWgHAQQgIAQgOAKQgPAKgWAFQgVAFgdAAgAChBHIAtAAQANAAALgDQAKgEAHgHQAGgGAEgJQADgIAAgLQAAgQgIgLQgIgMgMgDQgJgDgTAAIgrAAgAChg/IApAAQAPAAAHgCQAIgCAHgHQAJgJACgUQAAgNgGgLQgHgKgLgDQgJgEgTAAIglAAgAtzBwIg0haQgMgRgMgLQgJgJgLAAIAAB/IgwAAIAAkoIBaAAQAZAAATAGQASAHAMAMQAMALAGAQQAFAPAAASQAAAQgFAPQgFAOgJAMQgKALgOAHQgOAGgRAAQAIAEAOASIBEBsgAvTgyIAaAAQATAAALgDQAMgDAGgHQAHgGADgJQAEgJAAgMQAAgLgEgJQgDgIgHgGQgHgFgMgDQgLgDgQAAIgcAAg");
	this.shape.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-103.1,-20.6,205.7,41.1), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnGB7QgHgGgDgIQgKALgMAGQgMAFgPAAQgOAAgMgFQgLgDgHgHQgHgHgEgKQgDgKAAgMQAAgPAFgMQAGgLALgIQALgIARgDQAQgEAVAAIAMAAIAAgKQAAgPgEgHQgGgIgOAAQgIAAgJADIgQAGQgMAFgIAGIgRgbQAUgNARgGQASgFAUAAIATABQAJACAGAEQAHAEAFAFQAFAGADAHQACAFABAKIgBBOQAAASACAIQADAIAKAHIgUAZQgIgEgGgGgAn4AsQgJACgGAEQgGAEgCAGQgDAGAAAJQAAANAHAHQAGAIAMAAQAJAAAJgGQAIgFAGgIIAAgqIgHAAQgOAAgKACgAGEBtQgKALgNAFQgNAGgPAAQgOAAgMgFQgLgFgHgIQgFgGgDgKQgCgKAAgQIAAh3IAmgHIAAB2QAAATAEAIQADAFAFADQAGADAIAAQAKAAAKgHQAKgHAFgJIAAh+IAlgHIAACEQAAAYALAMIgbASQgLgIgEgOgAB/B7QgOgGgKgMQgKgNgGgQQgFgSAAgVQAAgVAFgQQAGgRAKgNQAKgMAOgGQAPgHARAAQATAAAPAHQAOAGALANQAKAMAFARQAFAQAAAVQAAAWgFARQgGARgKAMQgKAMgPAGQgOAHgSAAQgSAAgPgHgACQgWQgHADgEAIQgEAHgDALQgCALAAARQAAATADANQACAMAFAIQAEAHAHAEQAGADAJAAQAJAAAHgDQAGgEAFgIQAEgHACgMQADgMAAgRQAAgSgDgNQgCgLgFgIQgFgIgGgDQgHgDgJAAQgJAAgGAEgAiVB7QgOgGgJgMQgKgMgEgRQgFgRAAgVQAAgUAFgSQAFgQAKgMQAKgNANgGQAOgHAQAAQALAAAKAEQAJAEAIAIIgBheIAmAGIACDmQABAOADAHIgjAAQgCgEgCgJQgJAIgKAFQgLAEgNAAQgRAAgNgGgAiBgUQgHAEgEAIQgEAIgDAKQgCAMAAAQQAAAPACALQACALAEAHQAEAIAHADQAHAEALAAQAKAAAJgFQAIgFAEgHIAAhZQgHgHgHgEQgIgDgKAAQgJAAgHADgAHeB9IAAh9QAAgVgGgZIAjgJQAHAMAAAQQAKgPALgHQALgHANAAQAIAAAFADIgLAkQgHgDgEAAQgMAAgKAIQgJAIgDAKIAAB3gAkXB9IAAh1QAAgRgEgHQgFgGgLAAQgIAAgLAGQgLAFgJAJIAAB/IgmAAIgBiYQgBgJgEgKIAjgKQAGAMAAAOQAPgNAMgGQAOgGANAAQALAAAIADQAJADAGAGQAGAHADAJQAEAJAAAMIAACDg");
	this.shape.setTransform(-0.3,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-57.5,-17.8,114.5,26.6), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AN3B+QgJgDgFgGQgGgGgCgJQgDgIABgKIAAhsIgUAAIAAgbIAUAAIAAgZIABgTIAogJIgCAcIgBAZIAqAAIgKAbIghAAIAABiQABARAEAGQAEAGANAAQAHAAAJgEIAGAXQgRAIgSAAQgMAAgKgEgAIKB7QgOgGgMgMQgKgNgGgQQgFgSAAgVQAAgXAFgQQAFgQAMgNQALgMANgGQANgGARAAIAMAAIANAEQANAEALAKQAFAGAFAGQAFAHACAJQAGAbAAAVIAAAIIhqAAIAAADQAAAKACAIQACAKAFAGQAFAIAIAEQAKAEAMAAIACAAQALAAAKgEQALgEAKgJIAPAXQgOAMgQAGQgNAFgOABIgGAAQgUAAgPgHgAJHATQAAgLgCgIQgDgIgDgGQgFgGgGgDIgBAAQgGgDgGAAQgIAAgGADQgHADgEAGQgEAGgCAIQgCAIAAALIBBAAIAAAAgABsB+QgJgDgFgGQgFgGgDgJQgDgIAAgKIAAhsIgTAAIAAgbIATAAQAAgeADgOIAngJQgDAaAAAbIAqAAIgKAbIggAAIAABiQgBARAFAGQAFAGAMAAQAHAAAKgEIAEAXQgRAIgRAAQgNAAgJgEgArgB7QgOgGgLgMQgJgNgGgQQgFgSgBgVQABgVAFgQQAGgRAJgNQALgMAOgGQAPgHARAAQATAAAOAHQAPAGAKANQALAMAFARQAFAQAAAVQAAAWgFARQgGARgKAMQgLAMgOAGQgPAHgRAAQgSAAgPgHgArQgWQgGADgEAIQgFAHgCALQgCALAAARQAAATACANQADAMAFAIQAEAHAHAEQAGADAJAAQAJAAAHgDQAGgEAFgIQAEgHACgMQACgMABgRQgBgSgCgNQgCgLgFgIQgFgIgHgDQgGgDgJAAQgJAAgHAEgAuEB8QgNgGgKgMQgKgMgEgRQgGgRAAgVQABgQAGgZQAGgSAMgMQAKgLAPgHQANgFAPAAQAPAAALAEQAMAEALALIgTAZQgIgHgHgDQgHgDgIAAQgJAAgHAEQgHAFgFAJQgEAGgCANQgBAMAAARQAAASADAMQADAMAGAGQAEAFAGADQAGACAHAAQAJAAAKgEQAIgEAJgJIASAXQgMANgNAFQgOAGgRAAQgTAAgOgGgAL9B9IAAh1QAAgRgEgHQgFgGgLAAQgJAAgKAGQgLAFgJAJIAAB/IgmAAIgCiYQgBgJgDgKIAigKQAHAMAAAOQAPgNAMgGQAOgGANAAQAKAAAJADQAIADAHAGQAGAHADAJQAEAJgBAMIAACDgAGEB9IAAh6QABgPgFgFQgEgGgKAAQgJAAgKAGQgIAFgKAJIAACAIglAAIAAh5QAAgPgEgGQgEgFgLAAQgJAAgJAEQgJAEgKAJIAACCIglAAIgCiZQgBgKgDgIIAjgJQAEAIACAOQALgKAMgGQAMgGAMAAQANAAAJAFQALAGAJAPQANgNANgHQANgGAOAAQALAAAIADQAJADAGAGQAGAGADAKQADAKAAAOIAACAgAgOB9IAAitIAngHIAAC0gAhuB9IAAh6QAAgPgFgFQgDgGgKAAQgKAAgJAGQgIAFgLAJIAACAIglAAIAAh5QAAgPgEgGQgEgFgLAAQgIAAgKAEQgJAEgKAJIAACCIglAAIgBiZQgCgKgDgIIAjgJQAFAIABAOQALgKAMgGQAMgGAMAAQANAAAKAFQAKAGAKAPQANgNANgHQANgGAOAAQALAAAIADQAIADAHAGQAFAGAEAKQADAKAAAOIAACAgAmJB9IAAh6QABgPgFgFQgDgGgLAAQgJAAgKAGQgIAFgLAJIAACAIgkAAIAAh5QAAgPgEgGQgEgFgLAAQgJAAgJAEQgJAEgKAJIAACCIglAAIgCiZQgCgKgDgIIAkgJQAEAIACAOQAKgKAMgGQANgGAMAAQANAAAJAFQALAGAJAPQANgNANgHQANgGAOAAQALAAAJADQAIADAGAGQAGAGADAKQADAKAAAOIAACAgAgLhVQgIgHAAgLQAAgLAIgHQAHgIAKAAQAKAAAIAIQAHAHAAALQAAALgHAHQgIAIgLAAQgKAAgGgIg");
	this.shape.setTransform(1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(-93.4,-14.3,188.7,26), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACPBtQgHgFgDgJQgKAMgMAFQgMAFgPAAQgOAAgMgEQgLgEgHgHQgHgHgEgKQgDgKAAgMQAAgOAFgNQAGgLALgIQALgIARgDQAQgEAVAAIAMAAIAAgJQAAgQgEgGQgGgJgOABQgIgBgJADIgQAGQgMAGgIAFIgRgbQAUgMARgGQASgGAUAAIATABQAJADAGADQAHAEAFAFQAFAGADAHQACAFABAKIgBBPQAAASACAHQADAIAKAIIgUAYQgIgDgGgHgABdAeQgJACgGAEQgGAEgCAGQgDAHAAAJQAAAMAHAHQAGAIAMAAQAJAAAJgGQAIgEAGgJIAAgqIgHAAQgOAAgKACgAF6BtQgPgGgLgMQgLgMgFgRQgGgSAAgUQAAgYAFgQQAFgQAMgNQALgMANgGQANgGARAAQAOAAAMAEQAMAFALAJQAGAGAEAHQAFAHACAIQAGAcAAAVIAAAIIhqAAIAAACQAAAKACAIQADAKAEAHQAFAHAJAEQAJAFAMAAQAMAAALgFQALgEAKgJIAPAXQgOANgQAFQgPAGgSAAQgTAAgPgHgAG2AFQAAgJgCgJQgCgJgEgFQgFgHgGgCQgGgEgHAAQgIAAgGAEQgGACgFAHQgEAFgCAJQgCAJAAAJIBBAAIAAAAgAD2BxQgJgEgFgGQgGgGgCgIQgDgJAAgJIAAhtIgTAAIAAgaIATAAQAAgfACgNIAogKQgDAaAAAcIAqAAIgKAaIghAAIAABjQAAAQAFAGQAEAGANAAQAHAAAJgEIAFAXQgRAIgRAAQgNAAgJgDgAm9BtQgOgGgKgMQgKgMgGgRQgFgSAAgUQAAgWAFgQQAGgRAKgNQAKgMAOgGQAPgHARAAQATAAAPAHQAOAGALANQAKANAFAQQAFARAAAVQAAAVgFARQgGARgKAMQgKANgPAFQgOAHgSAAQgSAAgPgHgAmsgkQgHAEgEAHQgEAHgDAMQgCALAAAQQAAATADANQACANAFAHQAEAIAHADQAGADAJABQAJgBAHgDQAGgEAFgIQAEgHACgMQADgMAAgQQAAgTgDgMQgCgMgFgIQgFgIgGgCQgHgEgJAAQgJAAgGAEgAo9BxQgIgEgGgGQgFgGgDgIQgCgJAAgJIAAhtIgUAAIAAgaIAUAAQAAgfACgNIAngKQgDAaAAAcIAqAAIgKAaIggAAIAABjQAAAQAEAGQAFAGAMAAQAHAAAKgEIAFAXQgRAIgSAAQgMAAgKgDgAhSBwIghiBIgBAAQgCAOgJAkIgWBPIgkAAIgwiuIAmgGIAdCEIABAAQADgYAHgXIAWhRIAmAAIAUBPQAIAdADAUIABAAQADgVAGgaIAShRIAnAAIgxCwgAILBvIAAh7QAAgXgGgZIAkgJQAGANAAAPQALgOALgIQALgHAMAAQAIABAGACIgMAkQgHgCgEgBQgMAAgJAIQgJAIgDALIAAB2g");
	this.shape.setTransform(1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(-60.8,-11.8,123.6,23.8), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AAZABQgBAKgHAHQgIAHgJAAQgKgBgHgHQgHgIAAgJQABgKAHgHQAIgHAJAAQAKABAHAHQAHAIAAAJg");
	this.shape.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-3.4,-5.9,7,7.1), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AVKgqMgphAAAQgSAAgMANQgNAMAAARQAAARANANQAMANASAAQASAAAMgNQANgNAAgR");
	this.shape.setTransform(-0.4,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-136,-9.5,272.1,10.6), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AxqAAQAAgXgSgSQgRgSgZAAQgZAAgRASQgSARAAAYQAAAZASARQARASAZAAMAmQAAA");
	this.shape.setTransform(-2.6,-41.7,1.128,1.128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00335D").s().p("A4AN8IAA5zICTAAQgPgFgMgMQgUgUABgcQgBgcAUgTQAUgUAcAAQAcAAATAUQAUATAAAcIBOBBMArIAAAIAAZzg");
	this.shape_1.setTransform(0,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-153.7,-49.4,307.4,179.4), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AAADGQgTAAgPgPQgOgOAAgVIAAkoQAAgVAOgOQAPgOATAAQAVAAAOAOQAOAPAAAUIAAEoQAAAVgOAOQgOAPgVAAg");
	this.shape.setTransform(0,-43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00335D").s().p("AgiC4QgOgPAAgVIAAkoQAAgUAOgPQAPgOATAAQAVAAAOAOQAOAPAAAUIAAEoQAAAVgOAPQgOAOgVAAQgTAAgPgOg");
	this.shape_1.setTransform(0,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AADpWIgFSt");
	this.shape_2.setTransform(-0.3,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-5.9,-64.5,11.9,146.1), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ABKAyIiThj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-8.4,-6,16.8,12), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AAqBPIhTid");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-5.2,-8.9,10.4,17.8), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AAABZIAAix");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-1,-9.9,2,19.8), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AgpBPIBTid");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-5.1,-8.9,10.4,17.8), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AhJAyICThj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-8.3,-6,16.8,12), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AA8gqIg8BOIg7hM");
	this.shape.setTransform(43.4,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AGwEqImtpWImyJi");
	this.shape_1.setTransform(43.2,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-1,-1.3,88.4,63.5), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AheAXQAKgdAZgTQAagTAgAAQAnAAAcAdQAdAbAAAo");
	this.shape.setTransform(18.7,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AhFgpQgUgYgeAAQgcAAgTATQgTAUAAAaQAAAcATATQATATAcAAIDvAAQAcAAATgTQATgTAAgbQAAgagTgTQgTgTgcAAQgOAAgOAG");
	this.shape_1.setTransform(18.6,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,39.2,21.4), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AAAB2QgQgNgQgVQghgqAAgoQAAgnAhgqIAggjIAhAjQAhAqAAAnQAAAoghAqQgRAVgQANg");
	this.shape.setTransform(6.6,11.4,1,1,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-1,-1,15.3,25.2), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("Ag9AAQAHgHALgJQAWgSAVAAQAVAAAXASQALAJAHAHIgSASQgXARgVAAQgVAAgWgRg");
	this.shape.setTransform(6.3,3.5,1,1,-7,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1,-1,14.4,9), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ABHBHIiNiN");
	this.shape.setTransform(8,6.2,1,1,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-1,-1,17.9,14.4), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AithIIgPAAQgMAAgIgIQgIgHAAgMIAAhYQAAgLAIgIQAIgIAMAAIBYAAQALAAAIAIQAIAIAAALIAAAbIAAAAQAAgQALgLQAMgLAPAAIADAAQAPAAAMALQAKALAAAQIAAAlQADgOALgLQAPgPAVAAIADAAQAVAAAPAPQAPAPAAAVIAADbIBmBlIAIAJAhahbIBQBPIAAhMAAxAvIAAAAIAAhLAgKgMIA7A7IA8A8IjdAAQgVAAgPgPQgPgPAAgVIAAgDQAAgVAPgPQALgLAQgDQAEgBAFAAAgbAvIBMAAAhXgMIBNAAAh5ADIgnAAQgQAAgLgKQgMgLAAgQIAAgCQAAgQAMgLQAGgGAIgDQAGgCAHAAAAEhwQAAgFABgG");
	this.shape.setTransform(-21.9,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-44.6,-44.1,45.6,45.2), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AAAkSIAAIl");
	this.shape.setTransform(0,-27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("ACihQIjeCdIhlhI");
	this.shape_1.setTransform(6.1,-29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AAAkcIBHB1IBKgkIgmC6QgBAFAFADQAFACAEgEIBPhWIAhA3IBkgTIggBqIAtAbIilCEQgNAKAEAPIANA9Ii4gpIi2ApIANg9QAEgPgNgKIiliEIAsgbIgfhqIBkATIAhg3IBPBWQAEAEAFgCQAFgDgBgFIgmi6IBJAkg");
	this.shape_2.setTransform(0,-40.9,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-35.7,-71.4,71.5,72.5), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ABhhrIAABuQAAAogcAdQgdAcgoAAQgnAAgcgcQgcgdAAgoIAAhu");
	this.shape.setTransform(0,-11.4,1.143,1.143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AgWAeQgQgBgKgMQgJgMAAgOQAAgPAMgMQANgNAWAAQATAAARAQQAIAIAFAIIANAWQALAbgJAR");
	this.shape_1.setTransform(2.6,-21.9,1.143,1.143);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgQAgAgAAAtg");
	this.shape_2.setTransform(0,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-12,-35,24.1,36.1), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AhfhfQAYgCAfADQA8AIAhAiQAhAhAIA8QAEAfgCAYQgYADgfgEQg9gIghghQghghgIg9g");
	this.shape.setTransform(-11,-11.1,1.143,1.143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-23,-23.2,24.1,24.2), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49B5E2").ss(1.5,0,0,4).p("AAAjUIAAGp");
	this.shape.setTransform(0,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1,-43.6,2,44.6), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AAogVQAFAYgOASQgSAYgtACQgQgsAQgZQAMgUAYgF");
	this.shape.setTransform(5.7,4.1,1,1,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1,-1,12,9.9), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AgvgWQASgSAYACQAdADAaAnQgfAlgegCQgYgBgQgV");
	this.shape.setTransform(4.8,5.2,1,1,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-1,10.4,11.3), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AgCAxQgZgHgJgWQgLgaAVgqQAuAJAPAcQALAUgLAY");
	this.shape.setTransform(4.5,5.2,1,1,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1,-1,10.1,12.1), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AgYgRQAHgLAMgCQALgDALAHQAKAIACANQADAMgHALQgHALgMADQgLACgKgHQgLgHgCgNQgDgMAHgMg");
	this.shape.setTransform(3.1,3.1,1,1,49.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1,-1,8.2,8.3), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AAAB2QgQgNgQgVQghgqAAgpQAAgnAhgqQAQgVAQgNIAhAiQAhAqAAAnQAAApghAqQgQAVgRANg");
	this.shape.setTransform(5.6,5.8,0.686,0.686,-135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-1,13.4,13.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("Ag9AAQAHgHALgJQAWgSAVAAQAVAAAXASQALAJAHAHQgHAJgLAJQgXARgVAAQgVAAgWgRg");
	this.shape.setTransform(3,3,0.686,0.686,-135,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,-1,8.1,8.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AApApIhRhR");
	this.shape.setTransform(0,4,0.686,0.686,-135);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,2,10), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA2IgNgxIgHgcIAAAAQgBAJgGAUIgNAwIgVAAIgdhoIAXgDIALAzIAGAbIAAAAIAGgbIAOgxIAWAAIAMAvIAHAeIAAAAQACgNADgPIALgxIAYAAIgeBpg");
	this.shape.setTransform(270.4,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA0QgIgEgGgIQgHgGgDgLQgDgLAAgMQAAgMAEgKQACgKAHgIQAGgHAIgEQAJgEAKAAQAKAAAKAFQAIADAGAHQAHAIACAKQAEALAAAMQAAAMgEAKQgDAKgGAIQgGAHgIAEQgJAEgLAAQgKAAgJgEgAgJgjQgEACgCAEQgDAFgBAHQgBAHgBAKQABAKABAIQACAHACAFQADAFAEACQAEACAEgBQAFABAEgCQAEgDADgFQADgEABgHQABgHABgKQgBgKgBgIQgCgHgDgFQgCgEgFgCQgDgCgFgBQgFAAgEADg");
	this.shape_1.setTransform(257.3,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVBNIAAhIQAAgJgDgDQgEgEgGAAQgHAAgGAEQgGADgGAFIAABMIgXAAIAAh9QAAgOgCgJIAXgFQACAIAAARIAAAWIgBAMQAIgHAIgDQAHgEAJAAQAJAAAHAEQAHAEADAFIADAJIAAALIAABLg");
	this.shape_2.setTransform(245.4,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBIQgNgEgKgGIAJgTQAKAGAJADQAKADAKAAQAGAAAFgBQAGgCADgDQAEgDACgEQACgEAAgGQAAgIgFgFQgGgFgLgDIgOgFQgKgDgHgDQgHgEgEgGIgFgKQgCgFAAgGQAAgKAEgIQAEgIAGgGQAHgFAJgDQAJgDAKAAQAMAAAMADQAMAEAKAGIgLARQgKgGgIgCQgIgDgIAAQgFAAgEACIgIAEQgDACgBAEQgCAEAAAEQAAAHAEAEQAFAEAKADIAQAFQAIACAHAEQAHAEAEAEQAFAFADAGQACAHAAAIQAAAKgDAIQgEAIgHAHQgIAGgKAEQgPAEgJAAQgMAAgMgDg");
	this.shape_3.setTransform(233.3,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA2IAAhJQAAgOgEgPIAVgGQAEAIAAAKQAFgJAHgFQAGgEAIAAQAFABADABIgHAWIgGgCQgHAAgGAFQgFAEgBAGIAABHg");
	this.shape_4.setTransform(219.4,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA0QgJgEgGgIQgGgGgEgLQgEgLAAgMQABgNADgKQADgJAHgJQAGgHAJgDQAHgEAKAAQAIAAAGADQAIACAHAGIAFAIQAEAEABAFQAEARgBAMIAAAEIg+AAIAAACIABALQABAGADAEQAEAEAFADQAEACAHAAQAHAAAHgCQAHgDAFgFIAJANQgHAHgKAFQgJADgLAAQgKAAgKgEgAAVgKQAAgGgCgGIgEgIIgGgFQgDgCgEgBQgFABgDACQgEACgCADQgDAEgCAEQgBAGAAAGIAnAAIAAAAg");
	this.shape_5.setTransform(209.6,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA2IgNgxIgHgcIAAAAQgBAJgGAUIgNAwIgVAAIgdhoIAXgDIALAzIAGAbIAAAAIAGgbIAOgxIAWAAIAMAvIAHAeIAAAAQACgNADgPIALgxIAYAAIgeBpg");
	this.shape_6.setTransform(196.6,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSA0QgKgEgFgIQgGgGgEgLQgDgLAAgMQAAgMADgKQAEgKAGgIQAGgHAJgEQAIgEAKAAQALAAAIAFQAJADAHAHQAFAIAEAKQADALAAAMQAAAMgDAKQgEAKgGAIQgGAHgJAEQgJAEgKAAQgKAAgIgEgAgJgjQgEACgCAEQgDAFgBAHQgCAHAAAKQAAAKACAIQABAHADAFQADAFAEACQAEACAEgBQAGABAEgCQADgDADgFQACgEACgHQACgHgBgKQABgKgCgIQgCgHgCgFQgDgEgEgCQgEgCgFgBQgFAAgEADg");
	this.shape_7.setTransform(183.5,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAxIAAhaQAAgSgCgNIAWgGQACAQAAAOIAABZQAAAQACADQADAEAFgDIAEAPQgHACgIABQgVAAAAgeg");
	this.shape_8.setTransform(175.4,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBJIAAiRIBLAAIgCAUIgxAAIAAAoIAnAAIAAASIgnAAIAABDg");
	this.shape_9.setTransform(168.2,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYAzQgDgEgCgFQgGAHgHAEQgHACgJAAQgIAAgHgCQgGgCgFgFQgEgEgCgGQgDgFAAgIQAAgJAEgHQADgHAHgDQAHgFAKgCQAJgCAMAAIAHAAIAAgGQAAgKgCgEQgEgFgIAAIgKACIgKADIgLAHIgKgQQAMgIAKgDQALgEALAAIALABIAKAEIAGAFIAFAIQABADAAAGIAAARIAAAdQAAALACAFQACAFAFAEIgMAPQgFgCgEgEgAgEADQgFACgEACQgDADgCADQgBAEgBAFQAAAIAFAEQAEAFAGAAQAFAAAFgDQAFgDAEgGIAAgZIgFAAIgNABg");
	this.shape_10.setTransform(152.5,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPA0QgJgEgHgIQgFgGgEgLQgEgLABgMQAAgNACgKQAEgJAHgJQAGgHAJgDQAHgEAKAAQAHAAAIADQAHACAGAGIAHAIQADAEABAFQAEARAAAMIAAAEIg/AAIAAACIABALQABAGADAEQAEAEAEADQAFACAHAAQAIAAAGgCQAGgDAGgFIAJANQgHAHgKAFQgKADgLAAQgKAAgJgEgAAVgKQgBgGgBgGIgEgIIgGgFQgEgCgDgBQgEABgEACQgEACgDADQgCAEgBAEQgCAGAAAGIAnAAIAAAAg");
	this.shape_11.setTransform(141.5,20.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA1QgKgCgLgHIAIgQQAJAFAIACQAKAEAHAAQAHAAAFgEQAFgEAAgGQAAgHgEgDQgEgDgJgDIgMgCQgGgBgFgEIgIgEQgDgFgCgEQgBgFAAgFQAAgIACgGQADgGAFgFQAGgEAHgDQAHgDAIABQAKAAAKACQAHACAIAFIgHAQIgOgGQgGgCgHAAQgGAAgEAEQgFADAAAHQAAAEADADQAEADAHADIANACQAIACAFAEQAFADADADQADADACAFIABAJQAAAIgDAHQgDAGgGAFQgGAFgIADQgIACgIAAQgKAAgKgDg");
	this.shape_12.setTransform(130.8,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAxIAAhaQAAgSgDgNIAXgGQACAQAAAOIAABZQAAAQACADQADAEAFgDIAEAPQgHACgIABQgVAAAAgeg");
	this.shape_13.setTransform(123.4,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA0QgJgEgHgIQgFgGgEgLQgEgLABgMQAAgNACgKQAEgJAHgJQAGgHAJgDQAHgEAKAAQAHAAAIADQAHACAGAGIAHAIQADAEABAFQAEARAAAMIAAAEIg/AAIAAACIABALQABAGADAEQAEAEAEADQAFACAHAAQAIAAAGgCQAGgDAGgFIAJANQgHAHgKAFQgKADgLAAQgKAAgJgEgAAUgKQAAgGgBgGIgEgIIgGgFQgEgCgDgBQgEABgEACQgEACgDADQgCAEgBAEQgCAGAAAGIAmAAIAAAAg");
	this.shape_14.setTransform(114.5,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVBNIAAhIQAAgJgDgDQgEgEgGAAQgHAAgGAEQgGADgGAFIAABMIgXAAIAAh9QAAgOgCgJIAXgFQACAIAAARIAAAWIgBAMQAIgHAIgDQAHgEAJAAQAJAAAHAEQAHAEADAFIADAJIAAALIAABLg");
	this.shape_15.setTransform(102.8,18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBBKIgNgEQgFgDgFgEIgKgJIgHgLIgFgMQgDgJgBgUQAAgMACgLQADgLAEgJQAFgIAFgGQAGgGAHgEQAHgFAIgCQAHgCAIAAQALAAAJADQAKADAGAFIgLAQQgGgEgGgCQgGgCgHAAQgJAAgHAEQgHAFgFAIQgEAHgBAJQgCAKAAAMQAAAMABAJQABAIADAHIAGAJIAIAGQAEADAEABQAEABAGAAQAHAAAGgCQAHgCAGgFIALAPQgIAHgKADQgKADgMAAQgHAAgFgBg");
	this.shape_16.setTransform(91,18.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcBIQgNgEgKgGIAJgTQAKAGAJADQAKADAKAAQAGAAAFgBQAGgCADgDQAEgDACgEQACgEAAgGQAAgIgFgFQgGgFgLgDIgOgFQgKgDgHgDQgHgEgEgGIgFgKQgCgFAAgGQAAgKAEgIQAEgIAGgGQAHgFAJgDQAJgDAKAAQAMAAAMADQAMAEAKAGIgLARQgKgGgIgCQgIgDgIAAQgFAAgEACIgIAEQgDACgBAEQgCAEAAAEQAAAHAEAEQAFAEAKADIAQAFQAIACAHAEQAHAEAEAEQAFAFADAGQACAHAAAIQAAAKgDAIQgEAIgHAHQgIAGgKAEQgPAEgJAAQgMAAgMgDg");
	this.shape_17.setTransform(73.8,18.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAZBJIAAhDIgxAAIAABDIgYAAIAAiRIAYAAIAAA7IAxAAIAAg7IAYAAIAACRg");
	this.shape_18.setTransform(60.9,18.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVBJIgNgXIgMgVQgFgJgHgGQgEgEgFAAIAAA/IgXAAIAAiRIAsAAQAKAAAKAEQAIADAHAGQAFAFADAIQADAHAAAJQAAAIgCAHQgDAHgEAGQgGAFgGADQgHADgIAAQAEACAGAJIAMASIAWAjgAgZgGIANAAIANgBQAGgCADgDQADgDACgFQABgEAAgGQAAgFgBgEQgCgFgDgCQgDgDgGgCQgFgBgHAAIgOAAg");
	this.shape_19.setTransform(48.8,18.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDBEQgFgCgDgDQgDgFgCgEQgBgFAAgGIAAhBIgMAAIAAgQIAMAAIABgaIAWgFQgCAPAAAQIAaAAIgGAQIgUAAIAAA7QAAAKADADQADAEAHAAQAEAAAGgDIADAPQgKAEgLAAQgHAAgFgCg");
	this.shape_20.setTransform(33.8,19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYAzQgDgEgCgFQgGAHgIAEQgFACgKAAQgIAAgHgCQgGgCgFgFQgEgEgCgGQgCgFgBgIQAAgJAEgHQAEgHAGgDQAHgFAKgCQAJgCAMAAIAHAAIAAgGQAAgKgCgEQgDgFgJAAIgKACIgKADIgLAHIgKgQQAMgIAKgDQALgEALAAIALABIAJAEIAHAFIAFAIQACADAAAGIAAARIgBAdQAAALACAFQABAFAHAEIgNAPQgEgCgFgEgAgEADQgFACgEACQgEADgBADQgBAEgBAFQAAAIAFAEQAEAFAGAAQAFAAAFgDQAFgDAEgGIAAgZIgEAAIgOABg");
	this.shape_21.setTransform(24.8,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA8BKQgDgEgCgFQgHAHgHAEQgHACgJAAQgIAAgHgCQgHgCgDgFQgEgEgDgGQgCgFAAgIQAAgJAEgHQADgHAGgEQAGgFAKgCQAKgCANAAIAHAAIAAgGQAAgJgDgFQgDgEgJAAIgKACIgKADIgMAHIgJgRQALgHALgEQALgDALAAIAMABIAJADIAHAGIAFAIQABADAAAGIAAAuQAAALABAFQACAEAGAFIgMAOQgFgCgEgDgAAfAaQgGABgDADQgEADgBADQgCAEAAAFQAAAIAEAEQAEAFAHgBQAFAAAGgDQAFgCADgGIAAgZIgEAAIgOABgAzABKQgDgEgCgFQgHAHgHAEQgHACgJAAQgIAAgHgCQgHgCgEgFQgEgEgDgGQgCgFAAgIQAAgJAEgHQADgHAHgEQAGgFAKgCQAKgCANAAIAHAAIAAgGQAAgJgDgFQgDgEgJAAIgKACIgKADIgMAHIgKgRQAMgHALgEQALgDALAAIAMABIAJADIAHAGIAFAIQABADAAAGIAAAuQAAALABAFQACAEAGAFIgMAOQgFgCgEgDgAzdAaQgGABgDADQgEADgBADQgCAEAAAFQAAAIAEAEQAEAFAHgBQAFAAAGgDQAFgCADgGIAAgZIgEAAIgOABgAQpBKQgJgEgGgIQgGgGgEgLQgDgLAAgMQAAgMAEgKQADgKAGgIQAGgHAJgEQAIgEALAAQALAAAJAEQAJAEAGAHQAGAIADAKQADAJAAANQAAANgDALQgDAJgHAIQgGAHgIAEQgJAEgLAAQgLAAgIgEgAQygNQgEACgCAFQgDAEgBAGQgBAHAAAKQAAALABAIQACAHACAFQADAEAEACQAEACAFAAQAGAAAEgCQAEgCACgFQADgEABgHQACgHAAgLQAAgLgCgHQgBgHgDgEQgDgEgEgCQgEgCgFAAQgGAAgEACgAMvBLQgNgEgKgGIAJgTQAKAGAJADQAKADAKAAQAHAAAFgBQAGgCADgDQAEgDACgEQACgEAAgGQAAgIgFgFQgGgGgLgDIgPgEQgKgDgHgEQgHgDgEgGIgFgKQgCgFAAgHQAAgJAEgIQAEgIAGgGQAHgFAJgDQAJgDALgBQAMAAAMAEQAMAEAKAGIgLARQgKgGgIgCQgIgDgIAAQgGAAgEACIgIADQgDADgBAEQgCADAAAFQAAAHAEADQAFAFAKADIARAFQAIACAHAEQAHADAEAEQAFAGADAGQACAHAAAIQAAAJgDAJQgEAIgHAHQgIAGgKAEQgPAEgKAAQgMAAgMgDgAJPBKQgJgEgGgIQgGgGgEgLQgDgLAAgMQAAgOADgJQADgJAHgJQAGgHAJgEQAHgDALAAQAIAAAHADQAHACAHAGIAGAIQADAEABAFQAEAQAAAMIAAAFIhAAAIAAACIABALQACAGACADQAEAFAFADQAFACAHAAQAIAAAGgCQAHgDAGgGIAJAPQgIAGgKAFQgJADgLAAQgLAAgKgEgAJ0ALQAAgGgCgFIgDgIIgHgFQgDgCgEAAQgFAAgEACQgEACgCADQgDADgBAFQgCAFAAAGIAoAAIAAAAgAFGBKQgJgEgGgIQgGgGgDgLQgDgLAAgMQAAgMADgKQADgKAGgIQAHgHAIgEQAJgEAKAAQALAAAJAEQAJAEAGAHQAGAIADAKQAEAJAAANQAAANgEALQgDAJgGAIQgGAHgJAEQgJAEgKAAQgLAAgJgEgAFQgNQgEACgDAFQgCAEgBAGQgCAHAAAKQAAALACAIQABAHADAFQADAEAEACQAEACAFAAQAFAAAEgCQAEgCADgFQACgEACgHQABgHAAgLQAAgLgBgHQgCgHgDgEQgCgEgFgCQgDgCgGAAQgFAAgEACgAhZBKQgJgEgGgIQgGgGgEgLQgDgLAAgMQAAgOADgJQADgJAHgJQAGgHAJgEQAHgDALAAQAIAAAHADQAHACAHAGIAGAIQADAEABAFQAEAQAAAMIAAAFIhAAAIAAACIABALQACAGACADQAEAFAFADQAFACAHAAQAIAAAGgCQAHgDAGgGIAJAPQgIAGgKAFQgJADgLAAQgLAAgKgEgAg0ALQAAgGgCgFIgDgIIgHgFQgDgCgEAAQgFAAgEACQgEACgCADQgDADgBAFQgCAFAAAGIAoAAIAAAAgAjJBLQgKgDgLgGIAIgRQAJAFAIADQAKAEAIgBQAHAAAFgDQAFgFAAgGQAAgGgEgEQgEgDgJgCIgNgDQgGgBgFgDIgIgGQgDgEgCgEQgBgGAAgEQAAgIACgFQADgHAFgEQAGgFAHgCQAHgDAJAAQAKAAAKADQAHACAIAFIgHAPIgOgFQgGgCgHAAQgHAAgEAEQgFADAAAGQAAAEADADQAEADAIACIANADQAIACAFADQAFAEADADQADAEACAFIABAJQAAAIgDAHQgDAGgGAFQgGAFgIADQgIACgJAAQgKAAgKgDgAlnBKQgJgEgGgIQgGgGgEgLQgDgLAAgMQAAgOADgJQADgJAHgJQAGgHAJgEQAHgDALAAQAIAAAHADQAHACAHAGIAGAIQADAEABAFQAEAQAAAMIAAAFIhAAAIAAACIABALQACAGACADQAEAFAFADQAFACAHAAQAIAAAGgCQAHgDAGgGIAJAPQgIAGgKAFQgJADgLAAQgLAAgKgEgAlCALQAAgGgCgFIgDgIIgHgFQgDgCgEAAQgFAAgEACQgEACgCADQgDADgBAFQgCAFAAAGIAoAAIAAAAgAsLBLQgMgEgLgGIAKgTQAKAGAJADQAJADALAAQAGAAAGgBQAFgCAEgDQADgDACgEQACgEAAgGQAAgIgFgFQgFgGgLgDIgQgEQgKgDgHgEQgHgDgEgGIgFgKQgBgFAAgHQAAgJAEgIQADgIAHgGQAGgFAJgDQAJgDALgBQANAAAMAEQAMAEAJAGIgLARQgKgGgIgCQgHgDgJAAQgFAAgFACIgHADQgDADgCAEQgCADAAAFQAAAHAFADQAEAFALADIARAFQAIACAGAEQAHADAFAEQAEAGADAGQADAHAAAIQAAAJgEAJQgEAIgHAHQgHAGgLAEQgPAEgJAAQgNAAgMgDgAyCBMQgFgCgDgEQgDgEgCgFQgBgFAAgGIAAhAIgMAAIAAgQIAMAAIABgbIAXgFQgCAPAAARIAaAAIgGAQIgUAAIAAA6QAAAKADAEQADAEAHgBQAEAAAGgCIADAOQgKAFgLAAQgHAAgGgCgAD3AwIAAhaQAAgSgCgOIAYgEQACAPAAAOIAABZQAAAPACAEQADAEAFgDIADAPQgGADgIgBQgXAAAAgdgAkPAwIAAhaQAAgSgCgOIAXgEQACAPAAAOIAABZQAAAPACAEQADAEAFgDIAEAPQgHADgHgBQgXAAAAgdgApEBMIgMgEQgGgCgFgEIgJgJIgHgLIgFgNQgDgIgCgVQAAgMADgLQACgKAFgKQAEgHAGgGQAFgHAHgEQAHgEAIgCQAIgDAJAAQAKAAAKADQAJADAHAGIgLAPQgGgEgGgCQgGgCgHAAQgKAAgHAFQgHAEgFAIQgEAHgCAJQgCAKAAAMQAAAMACAJQABAJADAGIAGAJIAHAGQAEADAFABQAFABAFAAQAIAAAGgCQAGgCAGgFIAMAQQgJAGgKADQgKADgLAAQgHABgHgCgATTBMIgUhOIAAAAQgBAIgGAWIgNAwIgWAAIgdhpIAXgDIARBPIABAAIAGgdIAOgwIAWAAIAMAuIAHAfIABAAQABgNAEgPIALgxIAYAAIgeBqgAHxBMIgUhOIgBAAQgBAIgGAWIgNAwIgVAAIgdhpIAXgDIARBPIAAAAIAGgdIAOgwIAXAAIAMAuIAHAfIAAAAQACgNADgPIALgxIAYAAIgeBqgAPaBLIAAhIQAAgJgDgEQgDgDgHAAQgGAAgHADQgHAEgGAGIAABLIgXAAIAAh9QAAgOgCgKIAXgEQACAIAAAQIAAAjQAIgHAIgEQAIgDAJAAQAJAAAHAEQAHADACAGIADAIIABBXgAKnBLIAAhLQAAgNgEgPIAVgFQAEAHAAAKQAGgJAHgEQAGgEAIAAQAFAAADACIgHAVIgGgCQgHABgGAEQgGAEgBAGIAABIgACbBLIAAiQIBMAAIgCAUIgyAAIAAAnIAoAAIAAASIgoAAIAABDgAm3BLIAAhIQAAgJgDgEQgEgDgGAAQgHAAgHADQgGAEgGAGIAABLIgXAAIAAh9QAAgOgCgKIAXgEQACAIAAAQIgBAjQAIgHAIgEQAIgDAJAAQAJAAAHAEQAHADADAGIADAIIAABXgAtWBLIAAhDIgyAAIAABDIgYAAIAAiQIAYAAIAAA6IAyAAIAAg6IAYAAIAACQgAvTBLIgagsQgGgIgGgHQgEgEgFAAIAAA/IgYAAIAAiQIAsAAQAMgBAKAEQAIADAGAGQAGAFADAIQADAIAAAIQAAAIgDAIQgCAGgFAGQgFAFgGADQgHADgIAAQADACAHAJIAhA1gAwCgEIAMAAIAPgBQAGgCADgDQADgDACgFQABgEAAgGQAAgFgBgEQgCgFgDgCQgEgDgFgBQgGgCgIAAIgNAAg");
	this.shape_22.setTransform(148.4,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(9,-0.2,279,35.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBfIgqhKIAgg4IAoAAIgpA2IAzBMgAg5BfIAAiTQAAgUgCgOIAigIQACANAAAdIAACTg");
	this.shape.setTransform(118,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBGIAAhXQgBgMgCgFQgCgDgIAAQgJAAgNALIAABgIgjAAIAAhhQgBgTgEgOIAfgJQAFAJgBAIIAQgKQAKgGANAAQALAAAJAGQAJAFADAJQADAIAAAMIAABig");
	this.shape_1.setTransform(103.5,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA2IgJAIQgKAGgPABQgvAAAAgpQAAgsBAAAIAIAAIAAgGQAAgKgDgEQgEgFgIAAQgRAAgWAPIgQgZIAXgKQATgIARAAQAjAAAJAXQACAHAAAQIgBArQAAAMACAFQADAGAIAGIgTAVQgNgEgGgMgAgOAKQgHAFgBAMQABAHAEAFQAEAEAIABQAIgBAJgIIABgcIgCAAQgSAAgHADg");
	this.shape_2.setTransform(90,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAhZIA+AAQAeAAAOANQAPANABAUQAAASgNALQgGAGgLADQAlAKAAAjQAAAUgMAOQgNAPgYABIhQAAgAgbA8IAYAAQALAAAGgEQAJgHAAgNQAAgIgDgHQgFgFgGgDQgGgBgHAAIgXAAgAgcgRIAXAAQAKAAAEgCQAEgCADgFQADgGAAgGQAAgNgLgFQgFgCgJAAIgWAAg");
	this.shape_3.setTransform(75.5,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBOQgEgIABgWIAAhfQgBgVgBgSIAlgIQACAKAAAYIAABjQAAAaACAEQACADAFAAIAFgBIAGAUQgJAEgNAAQgZAAgHgRg");
	this.shape_4.setTransform(58,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA2IgJAIQgKAGgQABQgWAAgMgLQgMgLAAgTQAAgsBAAAIAIAAIAAgGQAAgKgDgEQgDgFgJAAQgRAAgWAPIgQgZIAXgKQATgIARAAQAjAAAJAXQACAHAAAQIgBArQAAAMACAFQACAGAJAGIgTAVQgNgEgGgMgAgOAKQgIAFAAAMQABAHAEAFQAFAEAGABQAJgBAJgIIAAgcIgBAAQgSAAgHADg");
	this.shape_5.setTransform(47,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBJQAPgFAFgEQAFgDAFgHIAIgQIgJAAIgrh/IAjgFIAdBnIADgVIAahQIAkAAIgwCEQgMAigMAKQgOAJgSACg");
	this.shape_6.setTransform(33.5,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqAzQgRgTAAgfQAAgfARgUQAQgTAaAAQAbAAASAUQAPATAAAeQAAAggRAUQgQASgbAAQgaAAgQgTgAgRgdQgEAKAAATQAAAYAFAKQAFALAMAAQAVAAAAgtQAAgagHgJQgGgIgJAAQgMAAgFAOg");
	this.shape_7.setTransform(20,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBaIgRgeIgSggQgFgKgFgBIgGgCIAABLIgjAAIAAizIBCAAQAYAAAOAOQAOAPAAAYQAAAVgMAOQgLAOgRAAQAFADACAFQALANAhA4gAgdgLIAMAAQAUAAAHgGQAGgHABgLQAAgSgOgEQgGgCgNgBIgNAAg");
	this.shape_8.setTransform(6.5,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,1,124,24), null);


(lib.RBoC_textsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWA3IgIAHQgKAGgQABQgXAAgMgLQgMgLAAgTQAAgsBAAAIAIAAIAAgGQAAgKgDgEQgEgFgIAAQgRAAgWAPIgPgZIAVgKQAUgIAQAAQAkAAAIAXQADAHAAAQIgBArQAAAMACAFQADAGAIAGIgTAVQgNgEgGgLgAgOAKQgIAFABAMQgBAHAFAFQAFAEAGABQAJgBAJgIIAAgcIgCAAQgRAAgHADg");
	this.shape.setTransform(104,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBOQgPgSAAgfQAAgdAQgTQAPgSAaAAQAOAAAJAHIgBhAIAjAFIAACGQAAAlAFAKIgfAAIgDgHQgNAKgRAAQgaAAgOgRgAgOgBQgGAJAAAWQAAAVAGAIQAEAHANABQAKgBAIgHIAAg9QgLgIgIAAQgMgBgEAKg");
	this.shape_1.setTransform(90,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWA3IgJAHQgJAGgRABQgWAAgMgLQgMgLAAgTQAAgsBAAAIAIAAIAAgGQAAgKgDgEQgEgFgIAAQgRAAgWAPIgPgZIAVgKQAUgIAQAAQAkAAAIAXQADAHAAAQIgBArQAAAMACAFQACAGAJAGIgTAVQgNgEgGgLgAgOAKQgIAFAAAMQAAAHAFAFQAFAEAGABQAJgBAJgIIAAgcIgCAAQgRAAgHADg");
	this.shape_2.setTransform(76,40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBGIAAhXQABgMgDgFQgDgDgGAAQgKAAgOALIAABgIgjAAIAAhhQABgTgFgOIAfgJQAEAJABAIIAPgKQAKgGANAAQALAAAJAGQAJAFADAJQADAIAAAMIAABig");
	this.shape_3.setTransform(62.5,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWA3IgJAHQgJAGgRABQgWAAgMgLQgMgLAAgTQAAgsBAAAIAIAAIAAgGQAAgKgDgEQgEgFgIAAQgRAAgWAPIgPgZIAWgKQATgIAQAAQAkAAAIAXQADAHAAAQIgBArQAAAMACAFQACAGAJAGIgTAVQgOgFgFgKgAgOAKQgIAFAAAMQAAAHAFAFQAFAEAGABQAJgBAJgIIAAgcIgBAAQgSAAgHADg");
	this.shape_4.setTransform(49,40);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBGQgVgYAAgpQAAgiAMgXQALgTARgLQATgMAVAAQAcAAARAOIgQAaQgOgLgPABQgTgBgLARQgKAPAAAgQABAiAHANQALAVAXAAQAPAAAPgMIARAXQgVARgdAAQgkAAgWgZg");
	this.shape_5.setTransform(34.5,37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBfIAAhqIgLAAIAAgYIALAAIgBgSQAAgUALgKQALgLASAAQAPAAAOAJIgKAVQgJgFgFAAQgNAAAAAPIAAATIAfAAIgJAYIgWAAIAABqg");
	this.shape_6.setTransform(17,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrAzQgQgTAAggQAAgeAQgUQARgTAaAAQAbAAARAUQAQATAAAeQAAAggRAUQgQASgbAAQgaAAgRgTgAgRgdQgEAKABATQgBAYAFAKQAEALAMAAQAWAAAAgtQAAgagHgJQgGgIgJAAQgMAAgFAOg");
	this.shape_7.setTransform(6,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,28,110,19);


(lib.RBoC_emblemsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA4QgYgSAAglQAAgiAWgTQAVgRAiAAQAdAAAMAJIgGAYIgCgBQgDgHgIgEQgLgGgOAAQgqAAABA2QAAAeASAPQAMAKATgBQAZAAAMgKIAAAQQgNAKghAAQgeAAgTgOg");
	this.shape.setTransform(43.4,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBGIgrg+IgLAAIAAA+IggAAIAAhsQABgSgIgGQgDgEgEgCIAAgBIBKAAQAaAAAMAJQAMAJAAATQAAAcgjAIIAyBCgAgXgEIAQAAQANAAAJgGQAIgIAAgNQAAgNgHgHQgFgEgNAAIgVAAg");
	this.shape_1.setTransform(12.4,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBGIAAhvQgBgQgHgFQgDgEgEgCIAAgBIBGAAQAdAAAMAKQAIAHAAAPQAAAMgIAIQgIAIgLACQAQABAJAHQAMAJAAARQAAAWgQALQgPAKgaAAgAgTA5IATAAQAhAAAAgeQAAgPgIgFQgHgHgTAAIgSAAgAgTgMIAOAAQAcAAAAgXQAAgMgHgFQgGgDgMAAIgRAAg");
	this.shape_2.setTransform(27.9,59.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDA1A").s().p("ABND1QgGgsgagfQgTgYgrgeIAAAdIgEAAQgTgpg0glIgXgQIAAAfIgEAAQgJgVgQgVQgOgQgZgYQgZgUgMgPQgMgPgGgQQgGgPAAgVQAAgSAIgPQAIgPALgHIAAAMQgLAQAAAUQAAAUAJARQAMAXAoAhQAYASAtAeQBmBEAVARQAfAZAPAfQADAGADANIBpgPQAPgKANgRIgwgFIgHAPIgEAAIAEgPIgNgBIAAgCIAOgCQADgTAAgTIg7gDIgBARIgDAAIgEgRIgNgBIAAgFIANAAQgDgZACgTIgjgBIAEAJQAKAcgHAeIgEAAQgBgWgIgSQgNgeg2gkIAAAdIgEAAQgJgagXgUQgTgQglgTQgbgOgLgSQgKgRACgbIAMAGQADAYAQAPQAQANAVAAQAVAAAXgEQAngIAQAFIAAgTIgMAAQgJAIgRAAQgPABgMgJQgQgKAAgUQAAggAqAAIAeAAQAIgBACgCQACgCABgFIAAgfIhUAAIAAAhIghgMIAAgJIAQAAIAAgMIg6AAIAAgcIgUAAQgIgBgHAGQgIAGAAAKQgBAKAFAIQAFAHAKAAIADAAIAAARIgDAAQgSAAgNgNQgMgMAAgSQAAgUAOgNQAOgNAUAAIAqAAIAAAdICiAAIgBA/QgCALgJAHQgHAFgRABIgdgCQgWgBgCAOIAAAEQARgMASAFQASAGAHAAQAJAAAJgIIABAEQgBADgGAFIAMAAIAAA/IAlgWIBnAAIAzAaQAJAFABAJQABAJgEAGIgTAfQAdAgAAArQAAA2gqAhQATAGALAQIgKAiIgFAAQAAgkg2AAIhVAAQAFAYgDAWgAClCLIA2gHQAFgPABgLIgygDQgDARgHATgABkBcIA7gCQAAgVgEgQIgxgCQgFAYgBARgACxBZIAwgDQgCgQgHgPIgogBQACAPgBAUgAA5ArIAigBQACgUADgLQgYAKgPAWgAB5AEIgMAkIAqgCQgFgRgJgSgACtAlIAdgCQgPgRgWgJQAEAMAEAQgAAGgBQAYAPAMAOQAPgVAYgMQAYgMAaAAQAWAAAOAEIAGgHIgJgNIABgCIAZANIgFAQIAMAHIAQgZIgpgVIhcAAgAgbgrIgYAFIAkAWIAogYQgNgGgOAAQgIgBgRAEgAgmhlQAIADAHAAQAKAAAGgJIgKgCQgMAAgJAIg");
	this.shape_3.setTransform(27.9,27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDA1A").s().p("ABuB9QgMgagbgVQgSgPglgUIAAAeIgFAAQgRgqgtggQgVgQgKgKQgLgKgIgMQgNgTAAgXQAAgSAJgPIAHAFQgEANABAMQABAWAXAVQAVAUA7AkQA7AjAZAdQAXAZAFAfg");
	this.shape_4.setTransform(14.9,38.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.5,0,0,4).p("AETEQQAAAigdALQhwAriGAAQiFAAhxgrQgcgLAAgiIAAp3IIlAAg");
	this.shape_5.setTransform(27.9,36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005794").s().p("Aj2E9QgcgLAAgiIAAp3IIlAAIAAJ3QAAAigdALQhwAriGAAQiFAAhxgrg");
	this.shape_6.setTransform(27.9,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,57,74);


(lib.ourroots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AltBfQgKALgNAGQgNAFgPAAQgOAAgMgFQgLgEgHgJQgFgGgDgJQgCgKAAgQIAAh4IAmgHIAAB2QAAATAEAIQADAGAFACQAGADAIAAQAKAAAKgHQAKgGAFgKIAAh+IAlgHIAACFQAAAYALALIgbASQgLgIgEgOgAI3BwQgRgFgRgKIANgcQAOAIAOAFQAQAGAOAAQANAAAHgHQAJgHAAgLQAAgKgHgGQgHgFgPgEIgWgEQgJgCgIgFQgIgEgGgGQgFgHgDgIQgDgHAAgJQAAgMAFgLQAFgKAIgIQAJgHAMgEQAMgEAPAAQAQAAARAEQAMAEANAHIgMAbQgNgHgKgDQgKgDgLAAQgMAAgHAGQgIAGAAALQAAAIAGAEQAFAFANADIAWAFQANADAJAGQAJAFAFAGQAFAHACAHQACAHAAAIQAAAOgFALQgFALgJAIQgKAIgNAEQgNAFgQAAQgQAAgSgFgAHGBxQgJgEgFgGQgGgGgCgIQgDgIAAgKIAAhtIgTAAIAAgaIATAAIABgUQAAgQABgIIAigIIAGAAQgCAPgBARIAAAUIAqAAIgKAaIghAAIAABjQAAAQAFAGQAEAGANAAQAHAAAJgEIAFAYQgRAHgRAAQgNAAgJgDgAEQBuQgPgHgKgMQgKgMgFgRQgGgRAAgVQAAgVAGgRQAFgRAKgMQALgNAOgGQAOgHASAAQASAAAPAHQAPAHAKAMQAKANAFARQAGAQAAAVQAAAVgGARQgFARgKAMQgLANgOAGQgPAGgSAAQgRAAgPgGgAEggkQgGAEgFAHQgEAIgCALQgCALAAAQQAAATACANQADANAEAIQAFAHAHADQAGAEAJAAQAJAAAGgEQAHgEAEgHQAFgIACgMQACgMAAgQQAAgTgCgMQgDgMgEgIQgFgHgHgDQgGgEgJAAQgJAAgHAEgABRBuQgPgHgKgMQgKgMgFgRQgGgRAAgVQAAgVAGgRQAFgRAKgMQALgNAOgGQAOgHASAAQASAAAPAHQAPAHAKAMQAKANAFARQAGAQAAAVQAAAVgGARQgFARgKAMQgLANgOAGQgPAGgSAAQgRAAgPgGgABhgkQgGAEgFAHQgEAIgCALQgCALAAAQQAAATACANQADANAEAIQAFAHAHADQAGAEAJAAQAJAAAGgEQAHgEAEgHQAFgIACgMQACgMAAgQQAAgTgCgMQgDgMgEgIQgFgHgHgDQgGgEgJAAQgJAAgHAEgApyBuQgOgHgKgMQgKgMgGgRQgFgRAAgVQAAgVAFgRQAGgRAKgMQAKgNAOgGQAPgHARAAQATAAAPAHQAOAHALAMQAKANAFARQAFAQAAAVQAAAVgFARQgGARgKAMQgKANgPAGQgOAGgSAAQgSAAgPgGgAphgkQgHAEgEAHQgEAIgDALQgCALAAAQQAAATADANQACANAFAIQAEAHAHADQAGAEAJAAQAJAAAHgEQAGgEAFgHQAEgIACgMQADgMAAgQQAAgTgDgMQgCgMgFgIQgFgHgGgDQgHgEgJAAQgJAAgGAEgAhKBwIAAh8QAAgXgGgZIAjgJQAHANAAAPQAKgOALgHQALgHAMAAQAIAAAFACIgLAkQgHgCgDAAQgMAAgKAHQgJAIgDALIAAB3gAkTBwIAAh8QAAgXgGgZIAjgJQAHANAAAPQAKgOALgHQALgHANAAQAIAAAFACIgLAkQgHgCgEAAQgMAAgKAHQgJAIgDALIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ourroots, new cjs.Rectangle(-67.2,-11.7,134.5,23.5), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("ANrgqI6jAAQgSAAgMANQgNAMAAARQAAARANANQAMANASAAQASAAAMgNQANgNAAgR");
	this.shape.setTransform(133.6,6.5,1.527,1.527,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-1,-1,268.1,15.1), null);


(lib.celebrating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHGC5IAGgBIAAABgALrCKQgPgDgKgGQgLgHgGgJQgGgJAAgMQAAgIAEgLIAkAAQgCAGAAAHQAAAMAKAGQAKAHATAAQAJAAAIgCQAIgCAGgEQAKgHAAgMQAAgHgDgGQgDgEgGgDQgGgCgJgCIgVgBQgSAAgMgBQgLgCgGgEQgHgDgCgGQgDgEAAgHQAAgMAKgHQAHgGARgFQgKgDgIgEQgHgEgFgHQgFgGgDgIQgCgIAAgKQAAgNAFgLQAFgLAJgIQAKgIAMgEQAOgFAPAAQAOABARAEQASAEAFAAQAJAAAIgDQAIgCAHgHIASAZQgHAGgHADQgHACgKAAQgIAAgFgBQALAMAAASQAAAMgEAKQgFAJgJAIQgIAHgNAEQgMADgQAAQgKAEgGAEQgHAGAAADQAAAGAGABQAHAAAfAAQALAAAKADQALAEAIAFQAIAHAFAJQAFAKAAANQAAAOgFALQgGALgKAHQgLAHgOAFQgPADgRAAQgSAAgOgCgALvhGQgHAHAAAPQAAAQAIAHQAHAHAPAAQAPAAAIgHQAIgIAAgPQAAgPgIgHQgIgIgPAAQgPAAgIAIgADfBHQgGgGgDgIQgLALgMAGQgLAEgPAAQgPABgLgFQgLgEgIgGQgHgIgDgJQgEgKAAgMQAAgPAGgLQAGgMALgHQALgIAQgDQAQgEAWgBIAMAAIAAgJQAAgQgFgHQgFgIgPAAQgIAAgJACIgQAHQgLAFgJAGIgRgcQAUgMASgGQASgGATAAIATACQAJACAHAEQAHADAEAGQAFAFADAIQADAFAAAJIgBBPQAAASADAHQADAJAKAHIgUAYQgIgDgHgGgACugHQgKABgGAFQgFADgDAGQgCAGAAAJQAAAMAGAIQAHAHALAAQAJAAAJgFQAIgFAGgJIABgoIgHgBQgOAAgKADgAFGBKQgIgEgGgFQgFgHgDgIQgCgIAAgKIAAhsIgUAAIAAgbIAUAAQAAgeACgOIAngKQgDAaAAAcIAqAAIgKAbIggAAIAABiQAAARAEAFQAFAHAMgBQAHAAAKgDIAFAXQgRAHgSAAQgMAAgKgDgAlbBHQgPgHgLgMQgKgMgGgRQgFgRAAgUQAAgXAFgRQAFgQAMgOQAKgLAOgHQANgFARgBQAOABALAEQANAEAKAKQAGAFAFAHQAEAHADAJQAGAcAAAVIAAAIIhqAAIAAADQAAAIACAJQACAJAFAHQAFAIAIAEQAJAEANAAQAMAAALgEQALgEAKgJIAPAXQgOAMgQAGQgQAFgSAAQgTAAgPgGgAkeggQAAgLgDgIQgCgJgEgGQgEgGgGgDQgGgEgHABQgIgBgHAEQgGADgEAGQgEAGgDAJQgCAIAAALIBCAAIAAAAgAp0BHQgPgHgLgMQgLgMgFgRQgGgRAAgUQAAgXAFgRQAFgQAMgOQALgLANgHQANgFARgBQAOABAMAEQAMAEALAKQAGAFAEAHQAFAHACAJQAGAcAAAVIAAAIIhqAAIAAADQAAAIACAJQADAJAEAHQAFAIAJAEQAJAEAMAAQAMAAALgEQALgEAKgJIAPAXQgOAMgQAGQgPAFgSAAQgTAAgPgGgAo4ggQAAgLgCgIQgCgJgEgGQgFgGgGgDQgGgEgHABQgIgBgGAEQgGADgFAGQgEAGgCAJQgCAIAAALIBBAAIAAAAgAiSBHQgLgEgIgKQgDAMgCAEIgkAAQAFgPAAgZIAAilQAAgdgFgOIAogJQADARAAATIgBA5IABABQAKgJAKgEQAKgFAMAAQAQAAANAHQANAGAJAMQAJAMAFAQQAFARAAAUQAAAUgGATQgFARgJAMQgKANgNAHQgNAHgPAAQgNAAgLgGgAiVhFQgHAEgHAIIAABWQAHAHAIAEQAJAEAJAAQAKAAAGgEQAHgDAEgHQAEgIACgLQACgMAAgQIgBgXQgCgLgEgHQgDgIgHgEQgHgEgKgBQgLABgJAFgAnjAbIAAiWQAAgfgDgVIAogJQADAaAAAXIAACVQAAAbAEAFQAEAHAIgEIAHAYQgLAEgNAAQgnAAAAgygAscBLQgLgCgKgFQgJgFgIgGQgJgHgHgIQgHgJgFgJIgIgUQgFgOgCghQAAgXADgSQAEgSAJgPQAGgNAKgKQAJgKAMgIQAMgHAMgEQAOgEAOAAQARAAAQAFQAQAGALAIIgSAaQgKgGgKgEQgKgDgMAAQgPAAgNAIQgMAHgIAOQgHAMgDAPQgDAPAAAWQAAAVADAPQACAMAFALQAEAIAFAHQAGAGAHAFQAHAEAIACQAIACAJABQAMgBALgEQAKgDAKgIIATAaQgOAKgQAFQgRAGgTAAQgMAAgLgCgAJoBJIAAh0QAAgTgFgGQgEgGgLgBQgJAAgLAHQgLAFgIAIIAACAIgmAAIgCiYQgBgKgEgKIAjgJQAHAMAAANQAOgNANgFQANgHAOAAQAKAAAJAEQAIADAGAGQAHAHADAJQADAJAAAMIAACDgAGlBJIAAiuIAngHIAAC1gAgDBJIAAh8QAAgWgGgaIAigJQAHANAAAQQAKgPALgHQALgHANAAQAIAAAFADIgLAkQgHgDgEAAQgMAAgKAHQgJAJgDAKIAAB3gAGniJQgIgIAAgKQAAgLAIgIQAHgHALAAQAKAAAIAHQAHAIAAALQAAAKgHAIQgIAHgLAAQgKAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.celebrating, new cjs.Rectangle(-87.8,-18.5,175.6,37), null);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.4,1,1,0,0,0,0,-24.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDC2D").ss(1.5,0,0,4).p("AgBAAIADAB");
	this.shape.setTransform(-122.2,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.7,-24.9,307.4,179.1);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(-2,76.3,1,1,0,0,0,0.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-2.1,76.3,-2,76.2,-1.9,76.1,0.3,73.3,-0.1,70.6,-0.4,68,-3,64.9,-5.7,61.8,-5.1,58.8,-4.6,56.4,-1.9,53.1,0.7,50.1,-0.1,47,-0.7,45,-3.4,41.5,-6,38.4,-5,35.4,-4.4,33.6,-1.5,29.8,0.9,26.7,-0.2,23.6,-0.7,22.4,-3.2,18.9]}},39,cjs.Ease.get(-0.52)).to({guide:{path:[-3.2,18.8,-3.5,18.5,-3.7,18.1,-6.2,14.9,-4.8,11.8,-4.6,11.4,-1.2,6.4,1.1,3.2,-0.4,0.1]},alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,72.9,6.6,6.9);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// Sun
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

	// 1
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,14.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:-38.4,y:-11.4,alpha:1},9,cjs.Ease.get(1)).wait(16));

	// 2
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,14.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({x:-21.8,y:-26.4,alpha:1},9,cjs.Ease.get(1)).wait(12));

	// 3
	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,14.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({x:0,y:-31.8},9,cjs.Ease.get(1)).wait(8));

	// 4
	this.instance_4 = new lib.Symbol29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.4,14.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({x:21.8,y:-26.4},9,cjs.Ease.get(1)).wait(4));

	// 5
	this.instance_5 = new lib.Symbol28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.4,14.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({x:38.5,y:-11.4},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-12.6,54.4,54.4);


(lib.Symbol24copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(241.6,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:57.2,y:79.5},0).wait(1).to({x:241.5},0).wait(1).to({x:241.4},0).wait(1).to({x:241.3},0).wait(1).to({x:241.1},0).wait(1).to({x:240.9},0).wait(1).to({x:240.6},0).wait(1).to({x:240.3},0).wait(1).to({x:240},0).wait(1).to({x:239.5},0).wait(1).to({x:239.1},0).wait(1).to({x:238.5},0).wait(1).to({x:237.9},0).wait(1).to({x:237.3},0).wait(1).to({x:236.6},0).wait(1).to({x:235.8},0).wait(1).to({x:235.1},0).wait(1).to({x:234.2},0).wait(1).to({x:233.4},0).wait(1).to({x:232.6},0).wait(1).to({x:231.8},0).wait(1).to({x:230.9},0).wait(1).to({x:230.2},0).wait(1).to({x:229.4},0).wait(1).to({x:228.7},0).wait(1).to({x:228.1},0).wait(1).to({x:227.5},0).wait(1).to({x:226.9},0).wait(1).to({x:226.5},0).wait(1).to({x:226},0).wait(1).to({x:225.7},0).wait(1).to({x:225.4},0).wait(1).to({x:225.1},0).wait(1).to({x:224.9},0).wait(1).to({x:224.7},0).wait(1).to({x:224.6},0).wait(1).to({x:224.5},0).wait(1).to({x:224.4},0).wait(1).to({regY:0,y:22.3},0).wait(1).to({regY:57.2,y:79.5},0).wait(1).to({x:224.5},0).wait(1).to({x:224.6},0).wait(1).to({x:224.7},0).wait(1).to({x:224.9},0).wait(1).to({x:225.1},0).wait(1).to({x:225.4},0).wait(1).to({x:225.7},0).wait(1).to({x:226},0).wait(1).to({x:226.5},0).wait(1).to({x:226.9},0).wait(1).to({x:227.5},0).wait(1).to({x:228.1},0).wait(1).to({x:228.7},0).wait(1).to({x:229.4},0).wait(1).to({x:230.2},0).wait(1).to({x:230.9},0).wait(1).to({x:231.8},0).wait(1).to({x:232.6},0).wait(1).to({x:233.4},0).wait(1).to({x:234.2},0).wait(1).to({x:235.1},0).wait(1).to({x:235.8},0).wait(1).to({x:236.6},0).wait(1).to({x:237.3},0).wait(1).to({x:237.9},0).wait(1).to({x:238.5},0).wait(1).to({x:239.1},0).wait(1).to({x:239.5},0).wait(1).to({x:240},0).wait(1).to({x:240.3},0).wait(1).to({x:240.6},0).wait(1).to({x:240.9},0).wait(1).to({x:241.1},0).wait(1).to({x:241.3},0).wait(1).to({x:241.4},0).wait(1).to({x:241.5},0).wait(1).to({x:241.6},0).wait(1).to({regY:0,y:22.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,485.4,159);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(241.6,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-19.2,y:3.1},0).wait(1).to({x:241.5},0).wait(1).to({x:241.4},0).wait(1).to({x:241.3},0).wait(1).to({x:241.1},0).wait(1).to({x:240.9},0).wait(1).to({x:240.6},0).wait(1).to({x:240.3},0).wait(1).to({x:240},0).wait(1).to({x:239.5},0).wait(1).to({x:239.1},0).wait(1).to({x:238.5},0).wait(1).to({x:237.9},0).wait(1).to({x:237.3},0).wait(1).to({x:236.6},0).wait(1).to({x:235.8},0).wait(1).to({x:235.1},0).wait(1).to({x:234.2},0).wait(1).to({x:233.4},0).wait(1).to({x:232.6},0).wait(1).to({x:231.8},0).wait(1).to({x:230.9},0).wait(1).to({x:230.2},0).wait(1).to({x:229.4},0).wait(1).to({x:228.7},0).wait(1).to({x:228.1},0).wait(1).to({x:227.5},0).wait(1).to({x:226.9},0).wait(1).to({x:226.5},0).wait(1).to({x:226},0).wait(1).to({x:225.7},0).wait(1).to({x:225.4},0).wait(1).to({x:225.1},0).wait(1).to({x:224.9},0).wait(1).to({x:224.7},0).wait(1).to({x:224.6},0).wait(1).to({x:224.5},0).wait(1).to({x:224.4},0).wait(1).to({regY:0,y:22.3},0).wait(1).to({regY:-19.2,y:3.1},0).wait(1).to({x:224.5},0).wait(1).to({x:224.6},0).wait(1).to({x:224.7},0).wait(1).to({x:224.9},0).wait(1).to({x:225.1},0).wait(1).to({x:225.4},0).wait(1).to({x:225.7},0).wait(1).to({x:226},0).wait(1).to({x:226.5},0).wait(1).to({x:226.9},0).wait(1).to({x:227.5},0).wait(1).to({x:228.1},0).wait(1).to({x:228.7},0).wait(1).to({x:229.4},0).wait(1).to({x:230.2},0).wait(1).to({x:230.9},0).wait(1).to({x:231.8},0).wait(1).to({x:232.6},0).wait(1).to({x:233.4},0).wait(1).to({x:234.2},0).wait(1).to({x:235.1},0).wait(1).to({x:235.8},0).wait(1).to({x:236.6},0).wait(1).to({x:237.3},0).wait(1).to({x:237.9},0).wait(1).to({x:238.5},0).wait(1).to({x:239.1},0).wait(1).to({x:239.5},0).wait(1).to({x:240},0).wait(1).to({x:240.3},0).wait(1).to({x:240.6},0).wait(1).to({x:240.9},0).wait(1).to({x:241.1},0).wait(1).to({x:241.3},0).wait(1).to({x:241.4},0).wait(1).to({x:241.5},0).wait(1).to({x:241.6},0).wait(1).to({regY:0,y:22.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,485.2,8.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(12.7,12,0.161,0.161,180,0,0,2.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.1,regY:3.2,scaleX:1,scaleY:1,rotation:0,x:12.6,y:11.9},6,cjs.Ease.get(1)).wait(13));

	// Layer 5
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.6,11.8,0.063,0.063,0,0,0,9.5,4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regY:3.6,scaleX:1,scaleY:1,x:9.5},6,cjs.Ease.get(1)).wait(7));

	// Layer 4
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.1,8.7,0.035,0.035,0,0,0,2.9,8.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:3.1,scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(4));

	// Layer 3
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.4,14.3,0.062,0.062,0,0,0,2.4,2.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({regY:2,scaleX:1,scaleY:1,y:14.2},6,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJAVIAAgcIgCgLIAIgCQACADAAAEIAEgFQACgCAEAAIACABIgCAIIgDgBQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQAAABAAAAQAAAAAAABQAAABAAAAIAAAbg");
	this.shape.setTransform(-89.8,76.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAUIgGgEIgEgHIgBgJIABgIIAEgHQADgDADgBQADgBADAAIAFABIAGADIACADIACADIABALIAAABIgXAAIAAABIAAAEIACAEIADADIAEABIAFgBIAFgDIADAFQgDADgDABIgIABQgDAAgEgBgAAIgDIgBgEIgBgEIgCgCIgDgBIgDABIgCACIgCAEIAAAEIAOAAIAAAAg");
	this.shape_1.setTransform(-93.5,77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAHAVIgEgTIgDgKIgCALIgFASIgIAAIgLgoIAJgBIAEAUIACAKIADgLIAFgSIAIAAIAEASIADALIACgKIAEgTIAJAAIgLAog");
	this.shape_2.setTransform(-98.5,77);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHAUQgDgCgCgCIgEgHIgBgJQAAgEABgEQABgEADgCQACgDADgCQADgBAEAAQAEAAAEABIAFAFQACADACADQABAEAAAEQAAAFgBAEQgCAEgCADIgFAEQgEABgEAAQgDAAgEgBgAgDgNIgDADIgBAEIAAAGIAAAHIACAFIADACIACABIADgBIADgDIACgEIAAgHIAAgGIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgDgBIgDABg");
	this.shape_3.setTransform(-103.4,77);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgFASIAAghIgBgMIAIgCIAAALIAAAiQAAAFABACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIABAFIgFABQgHAAAAgMg");
	this.shape_4.setTransform(-106.5,76.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgOAcIAAg3IAcAAIgBAIIgSAAIAAAPIAPAAIAAAGIgPAAIAAAag");
	this.shape_5.setTransform(-109.2,76.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCAyIAAhjIEFAAIAABjg");
	this.shape_6.setTransform(-100.1,76.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,11.4,126.7,72.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJAVIAAgcIgCgLIAIgCQACADAAAEIAEgFQACgCAEAAIACABIgCAIIgDgBQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBABgBAAQAAABAAAAQAAAAAAABQAAABAAAAIAAAbg");
	this.shape.setTransform(28.1,116.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAUIgGgEIgEgHIgBgJIABgIIAEgHQADgDADgBQADgBADAAIAFABIAGADIACADIACADIABALIAAABIgXAAIAAABIAAAEIACAEIADADIAEABIAFgBIAFgDIADAFQgDADgDABIgIABQgDAAgEgBgAAIgDIgBgEIgBgEIgCgCIgDgBIgDABIgCACIgCAEIAAAEIAOAAIAAAAg");
	this.shape_1.setTransform(24.4,116.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAHAVIgEgTIgDgKIgCALIgFASIgIAAIgLgoIAJgBIAEAUIACAKIADgLIAFgSIAIAAIAEASIADALIACgKIAEgTIAJAAIgLAog");
	this.shape_2.setTransform(19.4,116.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHAUQgDgCgCgCIgEgHIgBgJQAAgEABgEQABgEADgCQACgDADgCQADgBAEAAQAEAAAEABIAFAFQACADACADQABAEAAAEQAAAFgBAEQgCAEgCADIgFAEQgEABgEAAQgDAAgEgBgAgDgNIgDADIgBAEIAAAGIAAAHIACAFIADACIACABIADgBIADgDIACgEIAAgHIAAgGIgCgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgDgBIgDABg");
	this.shape_3.setTransform(14.5,116.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgFASIAAghIgBgMIAIgCIAAALIAAAiQAAAFABACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIABAFIgFABQgHAAAAgMg");
	this.shape_4.setTransform(11.4,115.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgOAcIAAg3IAcAAIgBAIIgSAAIAAAPIAPAAIAAAGIgPAAIAAAag");
	this.shape_5.setTransform(8.7,115.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCAyIAAhjIEFAAIAABjg");
	this.shape_6.setTransform(17.8,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(18));

	// Symbol 15
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(22.1,76.7,1,0.019);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1},9,cjs.Ease.get(1)).wait(10));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.1,71.2,0.036,0.036);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(6));

	// Symbol 17
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.1,34.1,0.023,0.023);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,75.9,26.9,47.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 4
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(6.4,11.5,0.044,0.044,0,0,0,0,11.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({regY:11.5,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(2));

	// Layer 3
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,11.5,0.094,0.094,0,0,0,6.4,6.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:6.2,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(11));

	// Layer 2
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.1,19.5,1,0.075,0,0,0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,y:19.4},9,cjs.Ease.get(1)).wait(20));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJAVIAAgcIgBgLIAIgCQABADAAAEIAEgFQADgCADAAIACABIgCAIIgDgBQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAbg");
	this.shape.setTransform(19.3,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAUIgGgEIgEgHIgBgJIABgIIAEgHQADgDADgBQADgBADAAIAFABIAGADIACADIACADIABALIAAABIgXAAIAAABIAAAEIACAEIADADIAEABIAFgBIAFgDIADAFQgDADgDABIgIABQgDAAgEgBgAAIgDIgBgEIgBgEIgCgCIgDgBIgDABIgCACIgCAEIAAAEIAOAAIAAAAg");
	this.shape_1.setTransform(15.6,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAHAVIgEgTIgDgKIgCALIgFASIgIAAIgLgoIAJgBIAEAUIACAKIADgLIAFgSIAIAAIAEASIADALIACgKIAEgTIAJAAIgLAog");
	this.shape_2.setTransform(10.6,59.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHAUQgDgCgCgCIgEgHIgBgJQAAgEABgEQACgEACgCQACgDADgCQAEgBADAAQAEAAADABIAGAFQACADABADQACAEAAAEQAAAFgCAEQgBAEgCADIgGAEQgDABgEAAQgDAAgEgBgAgDgNIgCADIgCAEIAAAGIAAAHIACAFIADACIACABIAEgBIACgDIABgEIABgHIgBgGIgBgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgDgBIgDABg");
	this.shape_3.setTransform(5.7,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgGASIAAghIgBgMIAJgCIAAALIAAAiQAAAFABACQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIACAFIgGABQgIAAAAgMg");
	this.shape_4.setTransform(2.6,58.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgOAcIAAg3IAcAAIgBAIIgSAAIAAAPIAPAAIAAAGIgPAAIAAAag");
	this.shape_5.setTransform(-0.1,58.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiCAyIAAhjIEFAAIAABjg");
	this.shape_6.setTransform(9,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,18.8,26.9,47.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RBoC_textsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62,-4.5,1,1,0,0,0,62,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,110,19), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RBoC_emblemsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.5,36.1,1,1,0,0,0,27.9,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,57,74), null);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 3
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.258,0.258);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(16));

	// Layer 2
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.9,12.4,0.049,0.049,0,0,0,0,4.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:4.2,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(7));

	// Layer 1
	this.instance_2 = new lib.Symbol22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16,12.4,0.098,0.098,0,0,0,5.6,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({regY:-0.4,scaleX:1,scaleY:1,x:15.9},8,cjs.Ease.get(1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,4.5,3.6);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 8
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-80.8,1,1,0,0,0,0.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},49).wait(24));

	// Layer 1 copy 9
	this.instance_1 = new lib.Symbol38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.3,-104.8,1,1,0,0,0,0.1,-2.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},49).wait(19));

	// Layer 1 copy 10
	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-189.7,-104.8,1,1,0,0,0,0.1,-2.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},49).wait(22));

	// Layer 1 copy 11
	this.instance_3 = new lib.Symbol38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-160.9,-105.6,1,1,0,0,0,0.1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},49).wait(24));

	// Layer 1 copy 12
	this.instance_4 = new lib.Symbol38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55.3,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({_off:true},49).wait(14));

	// Layer 1 copy 13
	this.instance_5 = new lib.Symbol38();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-101.7,-72.8,1,1,0,0,0,0.1,-2.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true},49).wait(18));

	// Layer 1 copy 14
	this.instance_6 = new lib.Symbol38();
	this.instance_6.parent = this;
	this.instance_6.setTransform(37.5,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({_off:true},49).wait(9));

	// Layer 1 copy 15
	this.instance_7 = new lib.Symbol38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56.7,-104.8,1,1,0,0,0,0.1,-2.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({_off:true},49).wait(15));

	// Layer 1 copy 4
	this.instance_8 = new lib.Symbol38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(66.3,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).to({_off:true},49).wait(11));

	// Layer 1 copy 5
	this.instance_9 = new lib.Symbol38();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-141.7,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({_off:true},49).wait(19));

	// Layer 1 copy 6
	this.instance_10 = new lib.Symbol38();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-21.7,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({_off:true},49).wait(5));

	// Layer 1 copy 7
	this.instance_11 = new lib.Symbol38();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-69.7,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({_off:true},49).wait(15));

	// Layer 1 copy 2
	this.instance_12 = new lib.Symbol38();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-175.3,-104.8,1,1,0,0,0,0.1,-2.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({_off:false},0).to({_off:true},49).wait(12));

	// Layer 1 copy 3
	this.instance_13 = new lib.Symbol38();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-21.7,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).to({_off:true},49).wait(21));

	// Layer 1 copy
	this.instance_14 = new lib.Symbol38();
	this.instance_14.parent = this;
	this.instance_14.setTransform(58.3,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).wait(49));

	// Layer 1
	this.instance_15 = new lib.Symbol38();
	this.instance_15.parent = this;
	this.instance_15.setTransform(10.3,-80.8,1,1,0,0,0,0.1,-2.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).to({_off:true},49).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-30.5,169.8,31.7);


// stage content:
(lib.RBoCBanner300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_269 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(269).call(this.frame_269).wait(1));

	// Top Flower Right
	this.instance = new lib.leaf1();
	this.instance.parent = this;
	this.instance.setTransform(292.4,14.7,1,1,0,0,180,14.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270));

	// Top Flower Left
	this.instance_1 = new lib.leaf1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.5,12.4,1,1,0,0,0,14.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270));

	// RBoC_emblem
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.4,74.5,1,1,0,0,0,27.5,36);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5,alpha:1},7,cjs.Ease.get(1)).wait(263));

	// RBoC_Text1
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(190.8,54.8,1,1,0,0,0,62,12.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:38.8,alpha:1},7,cjs.Ease.get(1)).wait(261));

	// RBoC_Text2
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(183.6,77.2,1,1,0,0,0,55,7.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({y:61.2,alpha:1},7,cjs.Ease.get(1)).wait(257));

	// Text1
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.1,140.7,1,1,0,0,0,148,17.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:124.7,alpha:1},7).wait(254));

	// Flower Underline
	this.instance_6 = new lib.line();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.6,611,1,1,0,0,0,133.1,6.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({y:587},7,cjs.Ease.get(1)).wait(251));

	// Flower 1
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(28.4,561.5,1,1,0,0,0,10.1,10.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(256));

	// Flower 2
	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(69.7,542.6,1,1,0,0,0,16.6,38.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).wait(254));

	// Flower 3
	this.instance_9 = new lib.Symbol5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(103.7,571.2,1,1,0,0,0,8.9,9.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(252));

	// Leaf 4
	this.instance_10 = new lib.Symbol18();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.8,580.8,0.011,0.011);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(0.99)).wait(243));

	// Flower 5
	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(196.7,571.2,1,1,0,0,0,8.9,9.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).wait(248));

	// Leaf 6
	this.instance_12 = new lib.Symbol19();
	this.instance_12.parent = this;
	this.instance_12.setTransform(257.8,580.2,0.032,0.032);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(239));

	// Flower 7
	this.instance_13 = new lib.Symbol10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(270.2,561.5,1,1,0,0,0,10.1,10.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(26).to({_off:false},0).wait(244));

	// Reed Underline 2
	this.instance_14 = new lib.Symbol36();
	this.instance_14.parent = this;
	this.instance_14.setTransform(154.7,462.9,1,1,0,0,0,0,-4.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(62).to({_off:false},0).to({y:424.9},7,cjs.Ease.get(1)).wait(68).to({regX:-0.4,x:154.3,y:425.5},0).wait(1).to({y:428},0).wait(1).to({y:433.2},0).wait(1).to({y:439.9},0).wait(1).to({y:443.8},0).wait(1).to({regX:0,x:154.7,y:444.9},0).wait(90).to({y:494.9,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(30));

	// Reed Underline
	this.instance_15 = new lib.Tween3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.3,462);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).to({y:424},7,cjs.Ease.get(1)).wait(76).to({startPosition:0},0).wait(1).to({regY:64.6,y:489.4},0).wait(1).to({y:492.5},0).wait(1).to({y:499.1},0).wait(1).to({y:505.2},0).wait(1).to({y:507.9},0).wait(1).to({regY:0,y:444},0).wait(85).to({startPosition:0},0).to({y:494,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(28));

	// Reed1
	this.instance_16 = new lib.Symbol34();
	this.instance_16.parent = this;
	this.instance_16.setTransform(15.9,514);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(64).to({_off:false},0).to({y:414,alpha:1},7,cjs.Ease.get(1)).wait(77).to({regY:8.2,y:421.5},0).wait(1).to({y:419.4},0).wait(1).to({y:415.4},0).wait(1).to({y:410.2},0).wait(1).to({y:405.5},0).wait(1).to({y:402.9},0).wait(1).to({regY:0,y:394},0).wait(68).to({y:530,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(40));

	// Reed 2
	this.instance_17 = new lib.Symbol34();
	this.instance_17.parent = this;
	this.instance_17.setTransform(33.1,490.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(66).to({_off:false},0).to({y:390.8,alpha:1},7,cjs.Ease.get(1)).wait(73).to({regY:8.2,y:398.3},0).wait(1).to({y:396.2},0).wait(1).to({y:392.2},0).wait(1).to({y:387},0).wait(1).to({y:382.3},0).wait(1).to({y:379.7},0).wait(1).to({regY:0,y:370.8},0).wait(71).to({y:506.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(39));

	// Reed 3
	this.instance_18 = new lib.Symbol34();
	this.instance_18.parent = this;
	this.instance_18.setTransform(50.7,523.6);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(68).to({_off:false},0).to({y:423.6,alpha:1},7,cjs.Ease.get(1)).wait(69).to({regY:8.2,y:431.1},0).wait(1).to({y:429},0).wait(1).to({y:425},0).wait(1).to({y:419.8},0).wait(1).to({y:415.1},0).wait(1).to({y:412.5},0).wait(1).to({regY:0,y:403.6},0).wait(74).to({y:539.6,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(38));

	// Reed 4
	this.instance_19 = new lib.Symbol34();
	this.instance_19.parent = this;
	this.instance_19.setTransform(249.9,523.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(70).to({_off:false},0).to({y:423.6,alpha:1},6,cjs.Ease.get(1)).wait(66).to({regY:8.2,y:431.5},0).wait(1).to({y:430.7},0).wait(1).to({y:429.1},0).wait(1).to({y:427},0).wait(1).to({y:425.1},0).wait(1).to({y:424.1},0).wait(1).to({regY:0,y:415.6},0).wait(77).to({y:551.6,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(37));

	// Reed 5
	this.instance_20 = new lib.Symbol34();
	this.instance_20.parent = this;
	this.instance_20.setTransform(267.5,490.8);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(72).to({_off:false},0).to({y:390.8,alpha:1},6,cjs.Ease.get(1)).wait(62).to({regY:8.2,y:398.7},0).wait(1).to({y:397.9},0).wait(1).to({y:396.3},0).wait(1).to({y:394.2},0).wait(1).to({y:392.3},0).wait(1).to({y:391.3},0).wait(1).to({regY:0,y:382.8},0).wait(80).to({y:518.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(36));

	// Reed 6
	this.instance_21 = new lib.Symbol34();
	this.instance_21.parent = this;
	this.instance_21.setTransform(284.3,513.6);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(74).to({_off:false},0).to({y:413.6,alpha:1},7,cjs.Ease.get(1)).wait(57).to({regY:8.2,y:421.5},0).wait(1).to({y:420.7},0).wait(1).to({y:419.1},0).wait(1).to({y:417},0).wait(1).to({y:415.1},0).wait(1).to({y:414.1},0).wait(1).to({regY:0,y:405.6},0).wait(83).to({y:541.6,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(35));

	// Bubble
	this.instance_22 = new lib.Symbol40();
	this.instance_22.parent = this;
	this.instance_22.setTransform(204.2,445.4,1,1,0,0,0,0.1,-39.9);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(156).to({_off:false},0).wait(72).to({y:581.4,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

	// Flower 2
	this.instance_23 = new lib.Symbol10();
	this.instance_23.parent = this;
	this.instance_23.setTransform(284.6,305.3,1,1,-170,0,0,10.1,10.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(80).to({_off:false},0).wait(58).to({x:316.6},7,cjs.Ease.get(-1)).to({_off:true},1).wait(124));

	// Flower 1
	this.instance_24 = new lib.Symbol10();
	this.instance_24.parent = this;
	this.instance_24.setTransform(13.3,298,1,1,68.4,0,0,10.2,10.7);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(80).to({_off:false},0).wait(58).to({x:-14.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(124));

	// to water
	this.instance_25 = new lib.Symbol41();
	this.instance_25.parent = this;
	this.instance_25.setTransform(149.9,343.8);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(162).to({_off:false},0).to({y:327.8,alpha:1},6,cjs.Ease.get(1)).wait(54).to({y:311.8,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(41));

	// commitment
	this.instance_26 = new lib.Symbol42();
	this.instance_26.parent = this;
	this.instance_26.setTransform(150,310);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(160).to({_off:false},0).to({y:294,alpha:1},6,cjs.Ease.get(1)).wait(55).to({y:278,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(42));

	// and our
	this.instance_27 = new lib.Symbol43();
	this.instance_27.parent = this;
	this.instance_27.setTransform(150.3,280.4);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(158).to({_off:false},0).to({y:264.4,alpha:1},6,cjs.Ease.get(1)).wait(55).to({y:248.4,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(44));

	// Our roots
	this.instance_28 = new lib.ourroots();
	this.instance_28.parent = this;
	this.instance_28.setTransform(149.5,364.7);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(60).to({_off:false},0).to({y:352.7,alpha:1},8,cjs.Ease.get(1)).wait(79).to({y:344.7,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// Celebrating
	this.instance_29 = new lib.celebrating();
	this.instance_29.parent = this;
	this.instance_29.setTransform(150.5,334.5);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(55).to({_off:false},0).to({y:322.5,alpha:1},7,cjs.Ease.get(1)).wait(80).to({y:314.5,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(120));

	// Cloud 3
	this.instance_30 = new lib.Symbol23();
	this.instance_30.parent = this;
	this.instance_30.setTransform(373.4,224.7,1,1,0,0,0,18.6,9.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(54).to({_off:false},0).wait(1).to({x:350},0).wait(1).to({x:328.5},0).wait(1).to({x:311.1},0).wait(1).to({x:298.5},0).wait(1).to({x:290.2},0).wait(1).to({x:284.8},0).wait(1).to({x:281.4},0).to({x:225.8,y:223.9},166).to({x:195.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(35));

	// Cloud 2
	this.instance_31 = new lib.Symbol23();
	this.instance_31.parent = this;
	this.instance_31.setTransform(364.4,195.5,1,1,0,0,0,18.6,9.7);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(51).to({_off:false},0).wait(1).to({x:341},0).wait(1).to({x:319.5},0).wait(1).to({x:302.1},0).wait(1).to({x:289.5},0).wait(1).to({x:281.2},0).wait(1).to({x:275.8},0).wait(1).to({x:272.4},0).to({x:216.8,y:194.7},167).to({x:186.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(37));

	// Cloud 1
	this.instance_32 = new lib.Symbol23();
	this.instance_32.parent = this;
	this.instance_32.setTransform(322.4,207.5,1,1,0,0,0,18.6,9.7);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(48).to({_off:false},0).wait(1).to({x:299},0).wait(1).to({x:277.5},0).wait(1).to({x:260.1},0).wait(1).to({x:247.5},0).wait(1).to({x:239.2},0).wait(1).to({x:233.8},0).wait(1).to({x:230.4},0).to({x:174.8,y:206.7},168).to({x:144.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(39));

	// Wave 3 mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_54 = new cjs.Graphics().p("ABdYiIAAmIMA3sAAAIAAGIg");
	var mask_graphics_55 = new cjs.Graphics().p("AkTYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_56 = new cjs.Graphics().p("ApLYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_57 = new cjs.Graphics().p("AtKYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_58 = new cjs.Graphics().p("AwRYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_59 = new cjs.Graphics().p("AyfYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_60 = new cjs.Graphics().p("Az0YiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_61 = new cjs.Graphics().p("A0QYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_153 = new cjs.Graphics().p("A0QYiIAAmIMA3rAAAIAAGIg");
	var mask_graphics_154 = new cjs.Graphics().p("Az/Y0IAAmIMA27AAAIAAGIg");
	var mask_graphics_155 = new cjs.Graphics().p("AzFZzIAAmIMA0VAAAIAAGIg");
	var mask_graphics_156 = new cjs.Graphics().p("AxXbpIAAmIMAvcAAAIAAGIg");
	var mask_graphics_157 = new cjs.Graphics().p("AvFeHIAAmIMAo8AAAIAAGIg");
	var mask_graphics_158 = new cjs.Graphics().p("EgNFAgRIAAmIMAjQAAAIAAGIg");
	var mask_graphics_159 = new cjs.Graphics().p("EgL9AheIAAmIMAgCAAAIAAGIg");
	var mask_graphics_160 = new cjs.Graphics().p("EgLoAh1IAAmIIfHAAIAAGIg");
	var mask_graphics_227 = new cjs.Graphics().p("EgLoAh4IAAmJIfHAAIAAGJg");
	var mask_graphics_228 = new cjs.Graphics().p("EgLoAiCIAAmIIfHAAIAAGIg");
	var mask_graphics_229 = new cjs.Graphics().p("EgLoAigIAAmIIfHAAIAAGIg");
	var mask_graphics_230 = new cjs.Graphics().p("EgLoAjTIAAmIIfHAAIAAGIg");
	var mask_graphics_231 = new cjs.Graphics().p("EgLoAkbIAAmIIfHAAIAAGIg");
	var mask_graphics_232 = new cjs.Graphics().p("EgLoAl3IAAmIIfHAAIAAGIg");
	var mask_graphics_233 = new cjs.Graphics().p("EgLoAnnIAAmIIfHAAIAAGIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:365.7,y:157}).wait(1).to({graphics:mask_graphics_55,x:328.8,y:157}).wait(1).to({graphics:mask_graphics_56,x:297.6,y:157}).wait(1).to({graphics:mask_graphics_57,x:272.1,y:157}).wait(1).to({graphics:mask_graphics_58,x:252.2,y:157}).wait(1).to({graphics:mask_graphics_59,x:238,y:157}).wait(1).to({graphics:mask_graphics_60,x:229.5,y:157}).wait(1).to({graphics:mask_graphics_61,x:226.7,y:157}).wait(92).to({graphics:mask_graphics_153,x:226.7,y:157}).wait(1).to({graphics:mask_graphics_154,x:223.6,y:158.8}).wait(1).to({graphics:mask_graphics_155,x:212.8,y:165.1}).wait(1).to({graphics:mask_graphics_156,x:192.5,y:176.9}).wait(1).to({graphics:mask_graphics_157,x:165.5,y:192.7}).wait(1).to({graphics:mask_graphics_158,x:141.9,y:206.5}).wait(1).to({graphics:mask_graphics_159,x:128.5,y:214.2}).wait(1).to({graphics:mask_graphics_160,x:124.7,y:216.5}).wait(67).to({graphics:mask_graphics_227,x:124.7,y:216.8}).wait(1).to({graphics:mask_graphics_228,x:124.7,y:217.8}).wait(1).to({graphics:mask_graphics_229,x:124.7,y:220.8}).wait(1).to({graphics:mask_graphics_230,x:124.7,y:225.9}).wait(1).to({graphics:mask_graphics_231,x:124.7,y:233.1}).wait(1).to({graphics:mask_graphics_232,x:124.7,y:242.3}).wait(1).to({graphics:mask_graphics_233,x:124.7,y:253.5}).wait(2).to({graphics:null,x:0,y:0}).wait(35));

	// Wave 3
	this.instance_33 = new lib.Symbol24();
	this.instance_33.parent = this;
	this.instance_33.setTransform(594.5,281.1,1,1,0,0,0,241.6,3.1);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(54).to({_off:false},0).to({x:318.5},7,cjs.Ease.get(1)).wait(93).to({regX:233,regY:3,x:305.6,y:284.6},0).wait(1).to({x:290.7,y:297},0).wait(1).to({x:262.7,y:320.4},0).wait(1).to({x:225.5,y:351.5},0).wait(1).to({x:192.9,y:378.7},0).wait(1).to({x:174.5,y:394.1},0).wait(1).to({regX:241.6,regY:3.1,x:177.7,y:398.7},0).wait(67).to({y:470.7,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},2).wait(35));

	// Wave 2 mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_51 = new cjs.Graphics().p("AAhWWIAAmIMA3sAAAIAAGIg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AlMWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AqBWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_54 = new cjs.Graphics().p("At+WWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AxDWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AzQWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A0kWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A1AWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A1AWWIAAmIMA3rAAAIAAGIg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A0uWoIAAmIMA27AAAIAAGIg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AzuXnIAAmIMA0UAAAIAAGIg");
	var mask_1_graphics_158 = new cjs.Graphics().p("Ax1ZfIAAmIMAvZAAAIAAGIg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AvVb+IAAmIMAo3AAAIAAGIg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AtJeIIAAmIMAjKAAAIAAGIg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Ar5fXIAAmIIf6AAIAAGIg");
	var mask_1_graphics_162 = new cjs.Graphics().p("ArifuIAAmIIe+AAIAAGIg");
	var mask_1_graphics_229 = new cjs.Graphics().p("ArifuIAAmIIe+AAIAAGIg");
	var mask_1_graphics_230 = new cjs.Graphics().p("Arif4IAAmIIe+AAIAAGIg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EgLiAgWIAAmIIe+AAIAAGIg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EgLiAhIIAAmIIe+AAIAAGIg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EgLiAiOIAAmIIe+AAIAAGIg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgLiAjoIAAmIIe+AAIAAGIg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgLiAlWIAAmIIe+AAIAAGIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_1_graphics_51,x:359.7,y:143}).wait(1).to({graphics:mask_1_graphics_52,x:323.1,y:143}).wait(1).to({graphics:mask_1_graphics_53,x:292.2,y:143}).wait(1).to({graphics:mask_1_graphics_54,x:266.9,y:143}).wait(1).to({graphics:mask_1_graphics_55,x:247.2,y:143}).wait(1).to({graphics:mask_1_graphics_56,x:233.1,y:143}).wait(1).to({graphics:mask_1_graphics_57,x:224.7,y:143}).wait(1).to({graphics:mask_1_graphics_58,x:221.9,y:143}).wait(97).to({graphics:mask_1_graphics_155,x:221.9,y:143}).wait(1).to({graphics:mask_1_graphics_156,x:218.9,y:144.8}).wait(1).to({graphics:mask_1_graphics_157,x:208.6,y:151.1}).wait(1).to({graphics:mask_1_graphics_158,x:189.2,y:163.1}).wait(1).to({graphics:mask_1_graphics_159,x:163.4,y:179}).wait(1).to({graphics:mask_1_graphics_160,x:140.9,y:192.8}).wait(1).to({graphics:mask_1_graphics_161,x:128.1,y:200.7}).wait(1).to({graphics:mask_1_graphics_162,x:124.4,y:203}).wait(67).to({graphics:mask_1_graphics_229,x:124.4,y:203}).wait(1).to({graphics:mask_1_graphics_230,x:124.4,y:204}).wait(1).to({graphics:mask_1_graphics_231,x:124.4,y:207}).wait(1).to({graphics:mask_1_graphics_232,x:124.4,y:212}).wait(1).to({graphics:mask_1_graphics_233,x:124.4,y:219}).wait(1).to({graphics:mask_1_graphics_234,x:124.4,y:228}).wait(1).to({graphics:mask_1_graphics_235,x:124.4,y:239}).wait(1).to({graphics:null,x:0,y:0}).wait(34));

	// Wave 2
	this.instance_34 = new lib.Symbol24();
	this.instance_34.parent = this;
	this.instance_34.setTransform(584.9,270.3,1,1,0,0,0,241.6,3.1);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(51).to({_off:false},0).to({x:308.9},7,cjs.Ease.get(1)).wait(98).to({regX:233,regY:3,x:296.6,y:273.8},0).wait(1).to({x:284,y:286.1},0).wait(1).to({x:260.1,y:309.3},0).wait(1).to({x:228.4,y:340.3},0).wait(1).to({x:200.6,y:367.3},0).wait(1).to({x:184.9,y:382.6},0).wait(1).to({regX:241.6,regY:3.1,x:188.9,y:387.1},0).wait(67).to({y:459.1,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

	// Wave 1 mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_48 = new cjs.Graphics().p("AjiWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_49 = new cjs.Graphics().p("ApwWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AvBWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AzUWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_52 = new cjs.Graphics().p("A2rWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_53 = new cjs.Graphics().p("A5EWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_54 = new cjs.Graphics().p("A6gWWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_55 = new cjs.Graphics().p("A6+WWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_157 = new cjs.Graphics().p("A6+WWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_158 = new cjs.Graphics().p("A7EWkIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_159 = new cjs.Graphics().p("A7aXWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_160 = new cjs.Graphics().p("A71Y0IAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_161 = new cjs.Graphics().p("A71axIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_162 = new cjs.Graphics().p("A71ceIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_163 = new cjs.Graphics().p("A71dcIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_164 = new cjs.Graphics().p("A71duIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_231 = new cjs.Graphics().p("A71duIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_232 = new cjs.Graphics().p("A71d4IAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_233 = new cjs.Graphics().p("A71eWIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_234 = new cjs.Graphics().p("A71fIIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_235 = new cjs.Graphics().p("Egb1AgOIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_236 = new cjs.Graphics().p("Egb1AhoIAAmIMA3rAAAIAAGIg");
	var mask_2_graphics_237 = new cjs.Graphics().p("Egb1AjWIAAmIMA3rAAAIAAGIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_2_graphics_48,x:333.7,y:143}).wait(1).to({graphics:mask_2_graphics_49,x:293.9,y:143}).wait(1).to({graphics:mask_2_graphics_50,x:260.2,y:143}).wait(1).to({graphics:mask_2_graphics_51,x:232.7,y:143}).wait(1).to({graphics:mask_2_graphics_52,x:211.2,y:143}).wait(1).to({graphics:mask_2_graphics_53,x:195.9,y:143}).wait(1).to({graphics:mask_2_graphics_54,x:186.7,y:143}).wait(1).to({graphics:mask_2_graphics_55,x:183.7,y:143}).wait(102).to({graphics:mask_2_graphics_157,x:183.7,y:143}).wait(1).to({graphics:mask_2_graphics_158,x:183.1,y:144.4}).wait(1).to({graphics:mask_2_graphics_159,x:181,y:149.4}).wait(1).to({graphics:mask_2_graphics_160,x:175.7,y:158.8}).wait(1).to({graphics:mask_2_graphics_161,x:165.2,y:171.3}).wait(1).to({graphics:mask_2_graphics_162,x:155.9,y:182.2}).wait(1).to({graphics:mask_2_graphics_163,x:150.7,y:188.4}).wait(1).to({graphics:mask_2_graphics_164,x:149.2,y:190.2}).wait(67).to({graphics:mask_2_graphics_231,x:149.2,y:190.2}).wait(1).to({graphics:mask_2_graphics_232,x:149.2,y:191.2}).wait(1).to({graphics:mask_2_graphics_233,x:149.2,y:194.2}).wait(1).to({graphics:mask_2_graphics_234,x:149.2,y:199.2}).wait(1).to({graphics:mask_2_graphics_235,x:149.2,y:206.2}).wait(1).to({graphics:mask_2_graphics_236,x:149.2,y:215.2}).wait(1).to({graphics:mask_2_graphics_237,x:149.2,y:226.2}).wait(1).to({graphics:null,x:0,y:0}).wait(32));

	// Wave 1
	this.instance_35 = new lib.Symbol24();
	this.instance_35.parent = this;
	this.instance_35.setTransform(530.5,259.5,1,1,0,0,0,241.6,3.1);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(48).to({_off:false},0).to({x:232.5},7,cjs.Ease.get(1)).wait(103).to({regX:233,regY:3,x:222,y:262.9},0).wait(1).to({x:215.1,y:275},0).wait(1).to({x:202.2,y:297.7},0).wait(1).to({x:185.1,y:328},0).wait(1).to({x:170.1,y:354.5},0).wait(1).to({x:161.6,y:369.5},0).wait(1).to({regX:241.6,regY:3.1,x:167.7,y:373.9},0).wait(67).to({y:445.9,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(32));

	// Wave 1 block mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_48 = new cjs.Graphics().p("EAMdAgdIAA5oMAnsAAAIAAZog");
	var mask_3_graphics_49 = new cjs.Graphics().p("EAGPAgdIAA5oMAnsAAAIAAZog");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAA+AgdIAA5oMAnsAAAIAAZog");
	var mask_3_graphics_51 = new cjs.Graphics().p("EgDUAgdIAA5oMAnrAAAIAAZog");
	var mask_3_graphics_52 = new cjs.Graphics().p("EgGqAgdIAA5oMAnrAAAIAAZog");
	var mask_3_graphics_53 = new cjs.Graphics().p("EgJEAgdIAA5oMAnrAAAIAAZog");
	var mask_3_graphics_54 = new cjs.Graphics().p("EgKfAgdIAA5oMAnrAAAIAAZog");
	var mask_3_graphics_55 = new cjs.Graphics().p("EgK+AgdIAA5oMAnrAAAIAAZog");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_3_graphics_48,x:333.7,y:207.7}).wait(1).to({graphics:mask_3_graphics_49,x:293.9,y:207.7}).wait(1).to({graphics:mask_3_graphics_50,x:260.2,y:207.7}).wait(1).to({graphics:mask_3_graphics_51,x:232.7,y:207.7}).wait(1).to({graphics:mask_3_graphics_52,x:211.3,y:207.7}).wait(1).to({graphics:mask_3_graphics_53,x:195.9,y:207.7}).wait(1).to({graphics:mask_3_graphics_54,x:186.8,y:207.7}).wait(1).to({graphics:mask_3_graphics_55,x:183.7,y:207.7}).wait(104).to({graphics:null,x:0,y:0}).wait(111));

	// Wave 1 block
	this.instance_36 = new lib.Symbol24copy();
	this.instance_36.parent = this;
	this.instance_36.setTransform(530.5,259.5,1,1,0,0,0,241.6,3.1);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(48).to({_off:false},0).to({x:232.5},7,cjs.Ease.get(1)).to({_off:true},104).wait(111));

	// Mountain
	this.instance_37 = new lib.Symbol26();
	this.instance_37.parent = this;
	this.instance_37.setTransform(176.2,293.3,1,1,0,0,0,43.2,30.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(56).to({_off:false},0).to({y:229.3},7,cjs.Ease.get(1)).wait(1).to({regY:30.1,y:230.1},0).wait(1).to({y:232.7},0).wait(1).to({y:235.9},0).wait(1).to({regY:30.2,y:237.3},0).wait(76).to({regY:30.1,y:236.6},0).wait(1).to({y:234.7},0).wait(1).to({y:232},0).wait(1).to({y:229.9},0).wait(1).to({regY:30.2,y:229.3},0).to({y:293.3},7,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// Sun
	this.instance_38 = new lib.Symbol27();
	this.instance_38.parent = this;
	this.instance_38.setTransform(58.4,290.2,1,1,90,0,0,0,14.6);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(60).to({_off:false},0).to({rotation:0,y:246.2,alpha:1},10,cjs.Ease.get(1)).wait(1).to({regY:0.4,y:233.1},0).wait(1).to({y:236},0).wait(1).to({y:238.9},0).wait(1).to({regY:14.6,y:254.2},0).wait(64).to({regY:0.4,y:240.6},0).wait(1).to({y:242.4},0).wait(1).to({y:245.2},0).wait(1).to({y:247.3},0).wait(1).to({regY:14.6,y:262.2},0).to({y:154.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(120));

	// Layer 69
	this.instance_39 = new lib.Symbol18();
	this.instance_39.parent = this;
	this.instance_39.setTransform(149.9,433,0.049,0.049);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(245).to({_off:false},0).to({regX:0.1,scaleX:0.76,scaleY:0.76},7,cjs.Ease.get(1)).wait(18));

	// Layer 96 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_242 = new cjs.Graphics().p("Ai/EnIAApNIF/AAIAAJNg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(242).to({graphics:mask_4_graphics_242,x:249.6,y:223.9}).wait(28));

	// Reed 4
	this.instance_40 = new lib.Symbol34();
	this.instance_40.parent = this;
	this.instance_40.setTransform(236.7,334.8,0.666,0.666,0,0,0,0.2,0.1);
	this.instance_40._off = true;

	var maskedShapeInstanceList = [this.instance_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(257).to({_off:false},0).to({y:255.7},7,cjs.Ease.get(1)).wait(6));

	// Reed 5
	this.instance_41 = new lib.Symbol34();
	this.instance_41.parent = this;
	this.instance_41.setTransform(247.5,312.9,0.666,0.666,0,0,0,0.1,0.1);
	this.instance_41._off = true;

	var maskedShapeInstanceList = [this.instance_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(258).to({_off:false},0).to({y:241.1},7,cjs.Ease.get(1)).wait(5));

	// Reed 6
	this.instance_42 = new lib.Symbol34();
	this.instance_42.parent = this;
	this.instance_42.setTransform(258.7,328.1,0.666,0.666,0,0,0,0.1,0.1);
	this.instance_42._off = true;

	var maskedShapeInstanceList = [this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(259).to({_off:false},0).to({y:261.5},7,cjs.Ease.get(1)).wait(4));

	// Layer 97
	this.instance_43 = new lib.Symbol23();
	this.instance_43.parent = this;
	this.instance_43.setTransform(421,231.5,0.655,0.655,0,0,0,18.7,9.8);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(254).to({_off:false},0).to({x:189},7,cjs.Ease.get(1)).wait(9));

	// Royal Bank
	this.instance_44 = new lib.Symbol44();
	this.instance_44.parent = this;
	this.instance_44.setTransform(153.3,287,1,1,0,0,0,0.3,-0.1);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(233).to({_off:false},0).to({y:279,alpha:1},8,cjs.Ease.get(1)).wait(29));

	// Of Canada
	this.instance_45 = new lib.Symbol45();
	this.instance_45.parent = this;
	this.instance_45.setTransform(150.2,317.8,1,1,0,0,0,0.1,0.1);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(235).to({_off:false},0).to({y:309.8,alpha:1},8,cjs.Ease.get(1)).wait(27));

	// Garden
	this.instance_46 = new lib.Symbol46();
	this.instance_46.parent = this;
	this.instance_46.setTransform(147.2,353.3);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(237).to({_off:false},0).to({y:345.3,alpha:1},8,cjs.Ease.get(1)).wait(25));

	// Symbol 47
	this.instance_47 = new lib.Symbol47();
	this.instance_47.parent = this;
	this.instance_47.setTransform(162.5,392.1);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(239).to({_off:false},0).to({y:376.1,alpha:1},8,cjs.Ease.get(1)).wait(23));

	// Symbol 48
	this.instance_48 = new lib.Symbol48();
	this.instance_48.parent = this;
	this.instance_48.setTransform(140.8,395.9);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(241).to({_off:false},0).to({y:379.9,alpha:1},8,cjs.Ease.get(1)).wait(21));

	// Symbol 49
	this.instance_49 = new lib.Symbol49();
	this.instance_49.parent = this;
	this.instance_49.setTransform(143.7,406.8);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(243).to({_off:false},0).to({y:390.8,alpha:1},8,cjs.Ease.get(1)).wait(19));

	// Wave 3 mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_247 = new cjs.Graphics().p("ALrUbIAAjyIYrAAIAADyg");
	var mask_5_graphics_248 = new cjs.Graphics().p("AG9UbIAAjyIYqAAIAADyg");
	var mask_5_graphics_249 = new cjs.Graphics().p("AC9UbIAAjyIYqAAIAADyg");
	var mask_5_graphics_250 = new cjs.Graphics().p("AgUUbIAAjyIYqAAIAADyg");
	var mask_5_graphics_251 = new cjs.Graphics().p("Ai3UcIAAjzIYqAAIAADzg");
	var mask_5_graphics_252 = new cjs.Graphics().p("AkrUcIAAjzIYpAAIAADzg");
	var mask_5_graphics_253 = new cjs.Graphics().p("AlxUcIAAjzIYpAAIAADzg");
	var mask_5_graphics_254 = new cjs.Graphics().p("AmIUbIAAjyIYpAAIAADyg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(247).to({graphics:mask_5_graphics_247,x:232.6,y:130.7}).wait(1).to({graphics:mask_5_graphics_248,x:202.3,y:130.7}).wait(1).to({graphics:mask_5_graphics_249,x:176.7,y:130.7}).wait(1).to({graphics:mask_5_graphics_250,x:155.8,y:130.7}).wait(1).to({graphics:mask_5_graphics_251,x:139.5,y:130.8}).wait(1).to({graphics:mask_5_graphics_252,x:127.8,y:130.8}).wait(1).to({graphics:mask_5_graphics_253,x:120.8,y:130.8}).wait(1).to({graphics:mask_5_graphics_254,x:118.5,y:130.7}).wait(16));

	// Wave 3
	this.instance_50 = new lib.Symbol24();
	this.instance_50.parent = this;
	this.instance_50.setTransform(391.9,241.2,0.618,0.618,0,0,0,241.6,3.1);
	this.instance_50._off = true;

	var maskedShapeInstanceList = [this.instance_50];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(247).to({_off:false},0).to({x:221.3},7,cjs.Ease.get(1)).wait(16));

	// Wave 2 mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_244 = new cjs.Graphics().p("AQPTFIAAjzIPvAAIAADzg");
	var mask_6_graphics_245 = new cjs.Graphics().p("ALhTFIAAjzIPpAAIAADzg");
	var mask_6_graphics_246 = new cjs.Graphics().p("AHhTFIAAjzIPlAAIAADzg");
	var mask_6_graphics_247 = new cjs.Graphics().p("AEPTFIAAjzIPiAAIAADzg");
	var mask_6_graphics_248 = new cjs.Graphics().p("ABsTFIAAjzIPfAAIAADzg");
	var mask_6_graphics_249 = new cjs.Graphics().p("AgHTFIAAjzIPbAAIAADzg");
	var mask_6_graphics_250 = new cjs.Graphics().p("AhNTFIAAjzIPaAAIAADzg");
	var mask_6_graphics_251 = new cjs.Graphics().p("AhkTFIAAjzIPZAAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(244).to({graphics:mask_6_graphics_244,x:204.6,y:122.1}).wait(1).to({graphics:mask_6_graphics_245,x:173.8,y:122.1}).wait(1).to({graphics:mask_6_graphics_246,x:147.8,y:122.1}).wait(1).to({graphics:mask_6_graphics_247,x:126.5,y:122.1}).wait(1).to({graphics:mask_6_graphics_248,x:109.9,y:122.1}).wait(1).to({graphics:mask_6_graphics_249,x:98,y:122.1}).wait(1).to({graphics:mask_6_graphics_250,x:90.9,y:122.1}).wait(1).to({graphics:mask_6_graphics_251,x:88.5,y:122.1}).wait(19));

	// Wave 2
	this.instance_51 = new lib.Symbol24();
	this.instance_51.parent = this;
	this.instance_51.setTransform(386,234.5,0.618,0.618,0,0,0,241.6,3.1);
	this.instance_51._off = true;

	var maskedShapeInstanceList = [this.instance_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(244).to({_off:false},0).to({regX:241.7,x:215.5},7,cjs.Ease.get(1)).wait(19));

	// Wave 1 mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_242 = new cjs.Graphics().p("AP1TFIAAjzIP3AAIAADzg");
	var mask_7_graphics_243 = new cjs.Graphics().p("AJYTFIAAjzIRdAAIAADzg");
	var mask_7_graphics_244 = new cjs.Graphics().p("AD7TFIAAjzISzAAIAADzg");
	var mask_7_graphics_245 = new cjs.Graphics().p("AgiTFIAAjzIT4AAIAADzg");
	var mask_7_graphics_246 = new cjs.Graphics().p("AkATFIAAjzIUvAAIAADzg");
	var mask_7_graphics_247 = new cjs.Graphics().p("AmfTFIAAjzIVWAAIAADzg");
	var mask_7_graphics_248 = new cjs.Graphics().p("An+TFIAAjzIVuAAIAADzg");
	var mask_7_graphics_249 = new cjs.Graphics().p("AoeTFIAAjzIV1AAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(242).to({graphics:mask_7_graphics_242,x:202.8,y:122.1}).wait(1).to({graphics:mask_7_graphics_243,x:171.7,y:122.1}).wait(1).to({graphics:mask_7_graphics_244,x:145.4,y:122.1}).wait(1).to({graphics:mask_7_graphics_245,x:123.8,y:122.1}).wait(1).to({graphics:mask_7_graphics_246,x:107.1,y:122.1}).wait(1).to({graphics:mask_7_graphics_247,x:95.1,y:122.1}).wait(1).to({graphics:mask_7_graphics_248,x:88,y:122.1}).wait(1).to({graphics:mask_7_graphics_249,x:85.5,y:122.1}).wait(21));

	// Wave 1
	this.instance_52 = new lib.Symbol24();
	this.instance_52.parent = this;
	this.instance_52.setTransform(352.4,227.8,0.618,0.618,0,0,0,241.6,3.1);
	this.instance_52._off = true;

	var maskedShapeInstanceList = [this.instance_52];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(242).to({_off:false},0).to({regX:241.5,x:168.2},7,cjs.Ease.get(1)).wait(21));

	// Wave 1 block mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_242 = new cjs.Graphics().p("ATTXTIAAryIJIAAIAALyg");
	var mask_8_graphics_243 = new cjs.Graphics().p("AO7XTIAAryIJIAAIAALyg");
	var mask_8_graphics_244 = new cjs.Graphics().p("ALOXTIAAryIJIAAIAALyg");
	var mask_8_graphics_245 = new cjs.Graphics().p("AINXTIAAryIJIAAIAALyg");
	var mask_8_graphics_246 = new cjs.Graphics().p("AF2XTIAAryIJIAAIAALyg");
	var mask_8_graphics_247 = new cjs.Graphics().p("AEKXTIAAryIJJAAIAALyg");
	var mask_8_graphics_248 = new cjs.Graphics().p("ADKXTIAAryIJIAAIAALyg");
	var mask_8_graphics_249 = new cjs.Graphics().p("AC0XTIAAryIJJAAIAALyg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(242).to({graphics:mask_8_graphics_242,x:181.9,y:149.1}).wait(1).to({graphics:mask_8_graphics_243,x:153.9,y:149.1}).wait(1).to({graphics:mask_8_graphics_244,x:130.2,y:149.1}).wait(1).to({graphics:mask_8_graphics_245,x:110.9,y:149.1}).wait(1).to({graphics:mask_8_graphics_246,x:95.8,y:149.1}).wait(1).to({graphics:mask_8_graphics_247,x:85.1,y:149.1}).wait(1).to({graphics:mask_8_graphics_248,x:78.6,y:149.1}).wait(1).to({graphics:mask_8_graphics_249,x:76.5,y:149.1}).wait(21));

	// Wave 1 block
	this.instance_53 = new lib.Symbol24copy();
	this.instance_53.parent = this;
	this.instance_53.setTransform(352.4,227.8,0.618,0.618,0,0,0,241.6,3.1);
	this.instance_53._off = true;

	var maskedShapeInstanceList = [this.instance_53];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(242).to({_off:false},0).to({regX:241.5,x:168.2},7,cjs.Ease.get(1)).wait(21));

	// Mountain
	this.instance_54 = new lib.Symbol26();
	this.instance_54.parent = this;
	this.instance_54.setTransform(121.4,251.9,0.618,0.618,0,0,0,43.2,30.2);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(250).to({_off:false},0).to({y:212.4},7,cjs.Ease.get(1)).wait(1).to({regY:30.1,y:212.5},0).wait(1).to({y:213},0).wait(1).to({y:213.9},0).wait(1).to({y:215.1},0).wait(1).to({y:216.2},0).wait(1).to({y:217},0).wait(1).to({regY:30.2,y:217.3},0).wait(6));

	// Symbol 51
	this.instance_55 = new lib.Symbol51();
	this.instance_55.parent = this;
	this.instance_55.setTransform(308.9,243.6,0.375,0.375);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(250).to({_off:false},0).to({x:72.9},7,cjs.Ease.get(1)).wait(13));

	// Symbol 51
	this.instance_56 = new lib.Symbol51();
	this.instance_56.parent = this;
	this.instance_56.setTransform(369.7,201.4,0.5,0.5);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(252).to({_off:false},0).to({x:133.7},7,cjs.Ease.get(1)).wait(11));

	// Symbol 51
	this.instance_57 = new lib.Symbol51();
	this.instance_57.parent = this;
	this.instance_57.setTransform(461.5,231.8);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(254).to({_off:false},0).to({x:225.5},7,cjs.Ease.get(1)).wait(9));

	// Symbol 51
	this.instance_58 = new lib.Symbol51();
	this.instance_58.parent = this;
	this.instance_58.setTransform(461.5,220.4);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(256).to({_off:false},0).to({x:225.5},7,cjs.Ease.get(1)).wait(7));

	// Isolation Mode
	this.instance_59 = new lib.Symbol50();
	this.instance_59.parent = this;
	this.instance_59.setTransform(210.1,241.6,0.029,0.029,0,0,0,0,27.9);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(256).to({_off:false},0).to({regY:27,scaleX:1,scaleY:1,y:241.5},7,cjs.Ease.get(1)).wait(7));

	// Sun
	this.instance_60 = new lib.Symbol27();
	this.instance_60.parent = this;
	this.instance_60.setTransform(60.6,246.8,0.618,0.618,90,0,0,0.1,14.5);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(246).to({_off:false},0).to({regY:14.6,rotation:0,y:219.6,alpha:1},9,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0.4,y:211.3},0).wait(1).to({y:212.5},0).wait(1).to({y:214.1},0).wait(1).to({y:215.4},0).wait(1).to({regX:0.1,regY:14.7,y:224.6},0).wait(10));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00335D").s().p("EgXlAvCMAAAheDMAvLAAAMAAABeDg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.1,294.1,312.7,606.9);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;