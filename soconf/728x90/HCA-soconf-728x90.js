(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HCA_soconf_728x90_atlas_P_1", frames: [[0,1733,172,60],[0,1795,99,42],[0,1647,459,84],[0,1202,600,286],[0,1490,600,155],[0,0,600,1200]]},
		{name:"HCA_soconf_728x90_atlas_NP_1", frames: [[0,0,1456,180]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._728x90paper = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Arrows300x600 = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Arrows728x90lower = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CTALearnMore = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.WAHBECLINE300x600 = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.WAHBEconfusing300x600 = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.WAHBEpuzz300x600 = function() {
	this.initialize(ss["HCA_soconf_728x90_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.SUBHEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EghMAG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_1 = new cjs.Graphics().p("A+zG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_2 = new cjs.Graphics().p("A8bG8IAAt3MAukAAAIAAN3g");
	var mask_graphics_3 = new cjs.Graphics().p("A6CG8IAAt3MAukAAAIAAN3g");
	var mask_graphics_4 = new cjs.Graphics().p("A3pG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_5 = new cjs.Graphics().p("A3RG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_6 = new cjs.Graphics().p("A3RG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_7 = new cjs.Graphics().p("A3RG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_8 = new cjs.Graphics().p("A3RG8IAAt3MAujAAAIAAN3g");
	var mask_graphics_9 = new cjs.Graphics().p("A3RG8IAAt3MAujAAAIAAN3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-212.525,y:1.625}).wait(1).to({graphics:mask_graphics_1,x:-197.2444,y:1.625}).wait(1).to({graphics:mask_graphics_2,x:-181.9639,y:1.625}).wait(1).to({graphics:mask_graphics_3,x:-166.6833,y:1.625}).wait(1).to({graphics:mask_graphics_4,x:-151.4028,y:1.625}).wait(1).to({graphics:mask_graphics_5,x:-123.2194,y:1.625}).wait(1).to({graphics:mask_graphics_6,x:-92.6583,y:1.625}).wait(1).to({graphics:mask_graphics_7,x:-62.0972,y:1.625}).wait(1).to({graphics:mask_graphics_8,x:-31.5361,y:1.625}).wait(1).to({graphics:mask_graphics_9,x:-0.975,y:1.625}).wait(87).to({graphics:null,x:0,y:0}).wait(1));

	// Layer_1
	this.instance = new lib.WAHBEconfusing300x600();
	this.instance.setTransform(-150,-38.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},96).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-38.7,298.1,77.5);


(lib.LOGOlockupsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO-lockup.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxgpIBKgRIAEAPIg4AOIAGAaIAxgMIAEAPIgxAMIAGAbIA5gOIAEAQIhLASg");
	this.shape.setTransform(851.075,130.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA0IgBhmIAtgBQASAAAKAJQAKAIAAAQQABAYgZAGIAcAnIgVABIgZgkIgXAAIABAkgAgZgiIAAAiIAaAAQAKAAAFgEQAGgFAAgIQAAgRgVAAg");
	this.shape_1.setTransform(839.25,132.1487);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjA0IgKgZIgxAAIgLAZIgSAAIAuhnIAQAAIAtBngAgRALIAjAAIgSgpg");
	this.shape_2.setTransform(826.15,132.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA0IAAAAQgWgFgLgTQgMgSAGgVQAFgWASgMQASgMAWAGQAXAFANAUIgPAKQgLgQgOgDQgNgDgMAIQgMAIgEAPQgDAOAHANQAHAMAOAEQAOAEARgKIAJAOQgPAKgRAAIgMgCg");
	this.shape_3.setTransform(813.661,130.9561);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9ATIA9hTIA+AuIgKANIgvgjIgPAWIApAeIgKANIgpgeIgQAVIAuAjIgJAOg");
	this.shape_4.setTransform(868.825,28.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA1IgjgPIAnhfIAjAPQAWAJAJAUQAJASgJAVQgIAUgUAIQgJAEgKAAQgLAAgMgFgAgfAeIATAHQAOAHANgGQAMgFAGgOQAGgPgFgMQgGgNgPgGIgSgIg");
	this.shape_5.setTransform(857.2314,21.1829);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjA1IgIgaIgvgGIgOAXIgTgCIA6hhIARACIAgBtgAgMAGIAjAEIgNgqg");
	this.shape_6.setTransform(844.125,18.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAmQgPgPAAgXQAAgWAPgPQAPgQAWAAQAYAAARAQIgMAOQgOgNgPAAQgOAAgKALQgJAKAAAPQAAAPAJALQAKALAOAAQAPAAAPgOIALAMQgRATgZAAQgVAAgPgQg");
	this.shape_7.setTransform(832.175,18.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkApIAJgOQARALAQgCQASgBgBgOQgBgGgFgCQgFgDgNgCQgTgCgIgFQgKgFgBgOQgCgNAJgJQAJgKAPgCQAUgDASALIgIAPQgQgIgMABQgIABgEAEQgEAEABAGQABAGAFADQAFACAOACIAAAAQASACAIAFQAJAGACAMQACAPgKAJQgJAJgQADIgIAAQgTAAgRgMg");
	this.shape_8.setTransform(820.4992,18.4618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Agsg1IAQgGIBPBRIgSAHIgTgUIgtARIgBAbIgSAHgAgeAJIAggMIgeggg");
	this.shape_9.setTransform(810.425,22.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA2QgWgEgNgTQgNgSAEgUQADgWATgNQATgOAWADIgBASQgTgCgMAIQgMAJgBAOQgCANAJANQAJANAOADQANADAMgJQANgIAEgUIAQADQgEAZgUAPIAAgBQgOAKgQAAIgIAAg");
	this.shape_10.setTransform(797.6879,27.0271);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAIIgWACIARgOIgJgVIATAMIAQgPIgFAWIATALIgWACIgFAWg");
	this.shape_11.setTransform(797.35,123.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAHIgXgCIAUgLIgFgWIAQAPIATgMIgIAVIARAOIgXgCIgIAVg");
	this.shape_12.setTransform(868.3,123.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAHIgVgHIAVgGIABgXIAMATIAVgGIgNARIAMASIgVgIIgMASg");
	this.shape_13.setTransform(881.525,40.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFALIgVAIIANgSIgOgRIAWAGIALgTIABAXIAVAGIgVAHIABAWg");
	this.shape_14.setTransform(784.075,40.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#253867").s().p("Ag5KlQj/AAi3i1Qi1i2AAkAIAAhyQAAkBC1i1QC3i2D/AAIBzAAQB5AABwAtQBvAtBYBVQBXBVAwBuQAxBuADB5IAAABIjOAAQgHilh3hzQh5h0imAAIhyAAQisAAh4B5Qh6B5AACsIAABxQAACsB6B5QB4B5CsAAIByAAQCjAAB4hxQB3hxALiiIDOAAIAAADQgFB4gyBsQgxBshXBTQhXBUhvAsQhuAsh4AAg");
	this.shape_15.setTransform(832.4,74.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#367586").s().p("AlJB7QgfgggUggIFkAAIgKgOIljAAQgGgKgGgMIFgAAIgJgPIleAAQgFgJgEgMIFYAAIgKgOIlTAAIgHgWIFLAAIgKgOIlEAAQgDgLgCgLIE6AAIgJgPIkzAAIgCgWINzAAIgCAWIi8AAIgKAPIDEAAIgFAWIjNAAIgJAOIDTAAIgHAWIjaAAIgJAOIDeAAQgEAMgFAJIjjAAIgJAPIDlAAQgGAMgGAKIlgAAIgJAOIFgAAQgUAggfAggACVAXIgKgOIhPAAIgJAOIBiAAgAB7gMIgKgPIgeAAIgJAPIAxAAgABigxIgBgBIAAAAIgBABIACAAg");
	this.shape_16.setTransform(832.525,95.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#88B155").s().p("AiKAdIAAg5IEVAAIgnA5g");
	this.shape_17.setTransform(802.175,71.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#88B155").s().p("Am6AgIAAg/IN1AAIAAA/g");
	this.shape_18.setTransform(832.525,78.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#88B155").s().p("AgrAdIglg5IChAAIAAA5g");
	this.shape_19.setTransform(868.675,71.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DD9D43").s().p("AEPC1IhuisIhABcIheiXIicDnIkgAAQAJiXBvhoQBvhqCZAAIBzAAQCZAABvBpQBvBoAJCYgAkIgVQgQAQAAAWQAAAXAQAQQARARAXAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgXAAgRARg");
	this.shape_20.setTransform(832.525,48.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#367586").s().p("AgMAHIgJgNIArAAIgJANg");
	this.shape_21.setTransform(848.55,97.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#367586").s().p("AglAHIgIgNIBbAAIgJANg");
	this.shape_22.setTransform(848.4,93.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#367586").s().p("AgaAHIgKgNIBJAAIgJANg");
	this.shape_23.setTransform(832.675,100.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#367586").s().p("AgyAHIgJgNIB3AAIgJANg");
	this.shape_24.setTransform(832.55,97.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#367586").s().p("AhKAHIgJgNICnAAIgJANg");
	this.shape_25.setTransform(832.4,93.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#367586").s().p("AifAHIgJgNIFRAAIgJANg");
	this.shape_26.setTransform(838.475,89.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#367586").s().p("Ai2AHIgKgNIGBAAIgJANg");
	this.shape_27.setTransform(838.375,86.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#367586").s().p("Ag5AxQhIAAhDgaQhBgYg0gvIJzAAQgzAuhCAZQhCAahJAAg");
	this.shape_28.setTransform(832.5,114.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009DDC").s().p("AjZAZIgigxIH3AAIggAxg");
	this.shape_29.setTransform(838.3,79.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C685F").s().p("AiVCOIAAghIAtAAIAAjTIgtAAIAAgeIBYAAIAAAxIABAAQAKgeAUgOQAUgOAgAAQAhAAAUAOQAUAOAKAeQACAMAAAXIAACdIArAAIAAAgIiBAAIAAggIAsAAIAAiOQAAgigKgSQgNgXggAAQgMAAgGACQgJACgJAGQgOAJgKASQgHAPgCATQgCANAAAXIAABuIAsAAIAAAhg");
	this.shape_30.setTransform(432.65,38.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C685F").s().p("AhhBhQgegrAAg3QAAhAAigmQAlgoA6AAQA/AAAhArQAeAnAAA+QAAA9ggAoQgiAqg+AAQhAAAghgvgAhChHQgQAbAAAsQAAAzATAZQAZAjAmAAQAUAAASgMQATgLAJgSQAPgdAAgrQAAgtgRgcQgUgjgsAAQgqAAgYAng");
	this.shape_31.setTransform(403.25,38.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C685F").s().p("AgBCrQgYgEgMgdQgEgMAAgmIAAihIgwAAIAAgfIAwAAIAAg1IApgRIAABGIABABIBPAAIAAAeIhPAAIAACyQAAAmAbAAQASAAAGgVQADgMAAgYIAjAAIgBAUQgCAxgiAOQgTAGgKAAQgHAAgSgEg");
	this.shape_32.setTransform(378.875,35.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C685F").s().p("AiEB2IAwAAQAHAqA8ABQATAAARgIQAVgIAJgQQAHgOADgUQABgLABgZIAAgRQgTAdgVAMQgVAMggAAQg3AAgggqQgdgnAAg5QAAgfAEgVQAFgYAMgVQAOgZAdgOQAZgNAcAAQAeAAAXANQAaANANAaIAAgsIBYAAIAAAgIguAAIAADZQAAAigFATQgGAZgVAVQgPAOgbAHQgXAIgXgBQhqABgJhLgAhUh4QgSAdAAAvQAAAtAUAcQAXAiAkAAQAnAAAagkQATgaAAgqQAAgagDgQQgEgTgMgTQgKgPgRgKQgQgJgSAAQgrAAgWAjg");
	this.shape_33.setTransform(352.725,43.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C685F").s().p("AiVCOIAAghIAtAAIAAjTIgtAAIAAgeIBYAAIAAAxQALgeATgOQAVgOAfAAQAhAAAVAOQAUAOAKAeQACAMAAAXIAACdIArAAIAAAgIiBAAIAAggIAsAAIAAiOQgBgigJgSQgNgXggAAQgMAAgHACQgIACgJAGQgOAIgKATQgHAPgCATQgCANAAAXIAABuIAsAAIAAAhg");
	this.shape_34.setTransform(321.4,38.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C685F").s().p("AhAC9IAAghIAtAAIAAjTIgsAAIAAgeIBWAAIAADxIAqAAIAAAhgAgXiQIAAgsIAxAAIAAAsg");
	this.shape_35.setTransform(297.5,33.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C685F").s().p("AASC9IAAghIAtAAIAAiOQAAgcgDgMQgFgXgVgJQgKgEgMAAQgXAAgQAJQgXAOgIAaQgGARAAAgIAAB4IAtAAIAAAhIiEAAIAAghIAsAAIAAk5IgsAAIAAgfIBXAAIAACLQAhgtA0AAQATAAASAHQATAHALAOQAMAOAEASQADAMgBAXIAACbIAuAAIAAAhg");
	this.shape_36.setTransform(273.4,33.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C685F").s().p("AgjCGQgTgKgPgcIAAAsIgiAAIAAhfIAiAAQAGAlATAOQAVAQAaAAQAYAAAPgOQARgNAAgYQAAgZgYgLQgIgDgmgGQgqgGgUgNQgagSAAgnQAAghANgOQAggkAzAAQAVAAATAIQATAKALASIAAgcIAhAAIAABZIghAAQgCgYgHgNQgJgRgUgGQgPgEgMAAQgZgBgQAMQgRAOAAAXQAAAHADAHQADAIAFADQAKAHAOADIAaAGQAwAIAUAMQAeASAAAoQAAAcgHALQggAwgzAAQgfAAgRgKg");
	this.shape_37.setTransform(246.25,38.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6C685F").s().p("AhfCCQgZgPgHgdQgDgLAAgPQAAgsAggVQAcgUAtAAIBJAAIAAgZQgBgRgEgIQgEgLgKgKQgPgPgZAAQgTAAgLADQgOAFgLAOQgIALgCAWIgsAAQADg+A4gTQARgGAeAAQAWAAARAFQATAGARANQAPAMAGASQAFAPAAAXIAACeIAsAAIAAAhIhTAAIAAg2QgOAegWAOQgUAOgiAAQgfAAgWgOgAg3AMQgdAMAAAlQAAAXAMAOQANAOAXAAQAqAAAWggQASgcACguQgOgCgdAAQgpAAgTAIg");
	this.shape_38.setTransform(219.925,38.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C685F").s().p("ABECKIhBjwIgEAAIhCDwIg5AAIhHj0IgfAAIAAgeIB7AAIAAAeIguAAIA1DMIADAAIBBjqIA8AAIBBDqIAFAAIAzjMIguAAIAAgfIB4AAIAAAfIggAAIhGD0g");
	this.shape_39.setTransform(183.05,38.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C685F").s().p("AjxAAIHIkHIAbAuIl4DZIF4DZIgbAvg");
	this.shape_40.setTransform(106.475,72.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C685F").s().p("AjxDZIF4jZIl4jZIAaguIHJEHInJEIg");
	this.shape_41.setTransform(24.2,72.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C685F").s().p("AjkAAIAbgtIF4DYIAAmyIA2AAIAAIPg");
	this.shape_42.setTransform(33.975,31.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C685F").s().p("AjkEIIAAoPIHJEHIgbAuIl4jZIAAGzg");
	this.shape_43.setTransform(96.675,113.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C685F").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_44.setTransform(453.575,167.575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6C685F").s().p("Ag1BbQgSgUgBggQAAgfAUgTQATgVAgAAQAOAAANAGQANAGAHALIAAAAIAAhmIAaAAIAADbIgaAAIAAgTIAAAAQgQAXgfAAQggAAgUgVgAgfAFQgNANAAAVQAAAWANANQAMANAUAAQAVAAAMgNQAMgNAAgWQAAgVgMgNQgNgNgUAAQgUAAgMANg");
	this.shape_45.setTransform(441.25,158.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6C685F").s().p("AgxA0QgTgUAAggQAAgeAUgVQAUgUAeAAQAiAAASAWQAPAVAAAcIAAAKIhtAAQAAASAOALQANALASAAQAVAAARgVIAUAQQgWAbgnAAQggABgTgVgAgdglQgLAMAAAPIBRAAQAAgSgKgLQgLgMgTAAQgRAAgNAOg");
	this.shape_46.setTransform(425.375,162.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6C685F").s().p("AgnBHIAAiJIAbAAIAAAVIAAAAQAFgLAKgHQAMgHANAAQAIAAAEACIgBAcIgNgCQgmAAAAArIAABGg");
	this.shape_47.setTransform(413.6,162.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C685F").s().p("AgxA0QgTgUAAggQAAgeAUgVQAUgUAeAAQAiAAASAWQAPAVAAAcIAAAKIhtAAQAAASAOALQAOALARAAQAVAAARgVIAUAQQgWAbgnAAQgfABgUgVgAgdglQgLAMAAAPIBRAAQAAgSgKgLQgKgMgTAAQgSAAgNAOg");
	this.shape_48.setTransform(400.225,162.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6C685F").s().p("AgNBFIg4iJIAfAAIAoBpIAohpIAcAAIg3CJg");
	this.shape_49.setTransform(386.125,162.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6C685F").s().p("AgzA0QgVgVAAgfQAAgdAVgVQAVgWAeABQAegBAWAWQAVAVAAAdQAAAfgVAVQgVAUgfAAQgeAAgVgUgAgggiQgNAOAAAUQAAAWANANQAMANAUAAQAVAAAMgNQAMgNAAgWQAAgUgMgOQgNgNgUAAQgUAAgMANg");
	this.shape_50.setTransform(371.625,162.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C685F").s().p("AgqA1QgUgVABggQgBgeAUgVQAUgVAgABQAgAAAVAVIgVASIAAABQgOgPgTAAQgUAAgMAOQgLANAAAUQAAAUAMAOQANANATAAQAUAAAOgPIASASQgTAWghgBQggAAgUgTg");
	this.shape_51.setTransform(357.5,162.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6C685F").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_52.setTransform(339.525,167.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C685F").s().p("AgxA0QgTgUAAggQAAgeAUgVQAUgUAeAAQAiAAASAWQAPAVAAAcIAAAKIhtAAQAAASAOALQAOALARAAQAWAAAQgVIAUAQQgVAbgoAAQgfABgUgVgAgdglQgLAMAAAPIBSAAQgBgSgJgLQgLgMgTAAQgSAAgNAOg");
	this.shape_53.setTransform(328.725,162.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C685F").s().p("AgnBHIAAiJIAaAAIAAAVIABAAQAFgLAKgHQAMgHAOAAQAGAAAFACIgBAcIgNgCQgnAAAAArIAABGg");
	this.shape_54.setTransform(317,162.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C685F").s().p("AgtA+QgOgMgBgTQAAgYAXgMQATgLAhAAIAUAAIAAgGQgBgLgHgIQgJgKgQAAQgMAAgLAGIgPAKIgQgQQAWgVAgABQAcgBAQAOQANANAAATIAABGIABAZIgXAAIAAgVIgBAAQgQAZgggBQgUAAgNgKgAghAdQAAAWAdABQAUAAAKgOQAJgLAAgQIAAgJIgOAAQg2ABAAAag");
	this.shape_55.setTransform(303.95,162.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6C685F").s().p("AhIBwIAAjbIAaAAIAAAUIABAAQAIgLANgHQANgGANAAQAgAAATAVQATAVAAAfQAAAfgTATQgUAVgfAAQgOAAgNgGQgNgGgHgLIgBAAIAABmgAghhJQgNAOAAAVQAAAVANANQAMANAVAAQAUAAANgNQAMgNgBgVQABgVgMgOQgOgNgTAAQgVAAgMANg");
	this.shape_56.setTransform(289.05,166.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C685F").s().p("ABOBHIAAhMQAAgpgeAAQgjABAAAqIAABJIgZAAIAAhHQAAgWgFgJQgGgNgSgBQgPABgKAKQgLANAAAWIAABGIgaAAIAAiIIAYAAIAAAVIABAAQACgHAMgJQANgJARAAQAeAAAMAaQAHgMAMgIQAMgGANAAQA0AAAAA9IAABQg");
	this.shape_57.setTransform(268.15,162.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6C685F").s().p("AgzA0QgWgVABgfQgBgdAWgVQAVgWAeABQAfgBAVAWQAWAVgBAdQABAfgWAVQgVAUgfAAQgeAAgVgUgAgggiQgMAOAAAUQAAAWAMANQANANATAAQAVAAANgNQAMgNgBgWQABgUgMgOQgNgNgVAAQgTAAgNANg");
	this.shape_58.setTransform(247.9,162.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6C685F").s().p("AgpA1QgVgVAAggQAAgeAUgVQAVgVAfABQAgAAAVAVIgUASIAAABQgOgPgVAAQgTAAgMAOQgLANAAAUQAAAUAMAOQANANATAAQAVAAAMgPIATASQgTAWghgBQgfAAgUgTg");
	this.shape_59.setTransform(233.775,162.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6C685F").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_60.setTransform(215.825,167.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6C685F").s().p("AAbBuIg/hIIAABIIgbAAIAAjbIAbAAIAACNIA6g7IAkAAIg/A+IBFBLg");
	this.shape_61.setTransform(206.05,158.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6C685F").s().p("AgqA1QgTgVgBggQABgeATgVQAVgVAeABQAiAAATAVIgTASIAAABQgPgPgUAAQgUAAgLAOQgLANAAAUQAAAUAMAOQANANATAAQAUAAANgPIATASQgTAWgigBQgeAAgVgTg");
	this.shape_62.setTransform(191.85,162.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6C685F").s().p("AgMBnIAAiJIAZAAIAACJgAgNhGQgFgFAAgIQAAgIAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAIQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_63.setTransform(181.75,158.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6C685F").s().p("AgMBuIAAjbIAZAAIAADbg");
	this.shape_64.setTransform(175.7,158.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6C685F").s().p("AgpA1QgVgVABggQgBgeAVgVQATgVAgABQAhAAATAVIgTASIAAABQgOgPgVAAQgTAAgLAOQgLANAAAUQAAAUALAOQANANATAAQAUAAANgPIATASQgSAWgigBQggAAgTgTg");
	this.shape_65.setTransform(166.5,162.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#243868").s().p("Aj4kfIHxEfInxEgg");
	this.shape_66.setTransform(98.675,28.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#243868").s().p("AiCC/IAAl0IBzAAIAAA8IACAAQARgjAagQQAagSAlAAQAaAAAMAEIAABpQgagIgXAAQg8AAgWAjQgPAaAAA/IAACcg");
	this.shape_67.setTransform(683.8,100.675);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#243868").s().p("AiBCPQg9g3AAhYQAAhWA9g3QA6g1BXgBQBQABAwA1QAvA1AABYIAAAkIkKAAQAHAhAXAUQAYATAgAAQAxAAAhgtIBQA7QgbAigrAUQgqATgtABQhXAAg6g1gAg0hZQgUATgDAdICXAAQABgdgUgUQgVgWgeAAQgjAAgXAXg");
	this.shape_68.setTransform(648.175,101.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#243868").s().p("AiXDwQgzg1ABhVQAAhRAtg4QAxg8BMAAQBRAAAkAxIABAAIAAj3IB0AAIAAJCIhrAAIAAgxIgBAAQgPAWgdARQgiATgjAAQhSAAgzg2gAg+AfQgYAZAAArQAAAqAYAaQAZAaAqAAQAqAAAZgaQAZgagBgqQABgrgZgZQgZgagqAAQgqAAgZAag");
	this.shape_69.setTransform(605.15,91.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#243868").s().p("ABAC/IAAi3QAAgsgIgUQgNghgnAAQgnAAgQAeQgNAWAAAqIAAC6IhyAAIAAl0IBuAAIAAAzIABAAQANgZAbgQQAdgTAnAAQBRAAAgAzQAZAoAABVIAADNg");
	this.shape_70.setTransform(563.925,100.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#243868").s().p("ABjEmIAAlzIByAAIAAFzgAiREmIAAkYIhNAAIAAhbIBMAAIAAhCQAAhHAagjQAigsBWAAQAmAAAcAHIgFBhQgWgIgQAAQgcAAgMAMQgOAOAAAjIAAA7IBVAAIAABbIhVAAIAAEYgABtiTQgUgUAAgcQAAgbAUgUQATgTAcAAQAbAAAUATQATAUABAbQgBAcgTAUQgUATgbAAQgcAAgTgTg");
	this.shape_71.setTransform(519.6,90.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#243868").s().p("ABBEiIAAi3QgBgtgHgUQgNghgnAAQgoAAgQAeQgNAWAAArIAAC6IhzAAIAApDIBzAAIAAECIACAAQAJgYAagRQAdgTAnAAQBRAAAgAzQAZAoAABUIAADOg");
	this.shape_72.setTransform(340.55,90.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#243868").s().p("AgfDcQgngdAAg5IAAiwIhKAAIAAhcIBKAAIAAhvIBxAAIAABvIBmAAIAABcIhmAAIAAB7QAAAiAJAPQAMATAiAAQAkAAALgKIAABgQgfALgxAAQg+AAgigag");
	this.shape_73.setTransform(304.75,96.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#243868").s().p("Ag4EhIAApBIBxAAIAAJBg");
	this.shape_74.setTransform(282.55,90.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#243868").s().p("AiKCmQgoggAAg2QAAhTBagdQA1gSBsAAQAAgdgVgTQgVgSgfAAQg1AAgoAsIg9g+QAfgeAsgPQAqgPAuAAQBgAAAnAxQAjAsAABjIAAC8IhqAAIAAgvIgBAAQgSAdghAOQgdANglAAQg3AAgmgdgAhDBMQAAAUARALQAQAKAVAAQAjAAAZgRQAbgUAAghIAAgYIgdAAQhwAAAAA1g");
	this.shape_75.setTransform(254.975,101.125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#243868").s().p("AiCCPQg8g3AAhYQAAhWA8g3QA7g1BXgBQBRABAvA1QAvA1AABYIAAAkIkKAAQAHAhAYAUQAXATAgAAQAxAAAhgtIBQA7IABAAQgcAigrAUQgqATgtABQhXAAg7g1gAg0hZQgUATgDAdICXAAQAAgegTgTQgVgWgfAAQgiAAgXAXg");
	this.shape_76.setTransform(217,101.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#243868").s().p("ABAEiIAAi3QAAgtgHgUQgNghgnAAQgnAAgRAeQgMAWAAArIAAC6IhzAAIAApDIBzAAIAAECIABAAQAJgYAbgRQAcgTAoAAQBQAAAgAzQAZAoAABUIAADOg");
	this.shape_77.setTransform(176.925,90.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#87B055").s().p("Aj4AAIHxkeIAAI9g");
	this.shape_78.setTransform(32,115.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#87B055").s().p("ABAC/IAAi3QAAgsgHgUQgNghgoAAQgnAAgQAeQgNAWAAAqIAAC6IhyAAIAAl0IBuAAIAAAzIABAAQANgZAbgQQAdgTAnAAQBRAAAgAzQAZAoAABVIAADNg");
	this.shape_79.setTransform(479.125,100.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#87B055").s().p("AiKCmQgoggAAg2QAAhTBagdQA1gSBsAAQAAgdgVgTQgWgSgeAAQg2AAgmAsIg+g+QAfgeAsgPQArgPAtAAQBgAAAoAxQAiAsAABjIAAC8IhqAAIAAgvIgBAAQgSAdghAOQgdANglAAQg3AAgmgdgAhEBMQAAAUASALQAQAKAVAAQAjAAAYgRQAbgUAAghIAAgYIgcAAQhxAAAAA1g");
	this.shape_80.setTransform(439.15,101.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#87B055").s().p("Ag4EhIAApBIBxAAIAAJBg");
	this.shape_81.setTransform(412.675,90.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#87B055").s().p("AjJEWIAAoiIBqAAIAAAxIABAAQAPgXAdgQQAigTAjAAQBSAAAzA2QAzA1AABVQAABRguA4QgwA9hNAAQhRAAgkgyIgBAAIAADXgAhHiWQgYAaAAAqQAAArAYAZQAZAZArAAQApAAAZgZQAYgZAAgrQAAgqgZgaQgZgagoAAQgrAAgZAag");
	this.shape_82.setTransform(383.3,109.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900.1,177.5);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B3769").s().p("AgLAMQgFgEgBgIQABgIAFgDQAFgEAGAAQAHAAAFAEQAFADAAAIQAAAIgFAEQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(41.1,25.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B3769").s().p("AgXBDQgJgBgJgDIAAgbIARAFQAIACALAAQASAAAAgOIAAgCIABgMIgBAAQgEAGgFAEQgFAEgKAAQgOAAgKgMQgKgNABgXQgBgXAKgNQAKgMAPAAQAKAAAEADQAHAEADAGIABAAIADgMIAcAAIAABdQAAAUgNALQgMAKgZAAQgLAAgIgBgAgMgSQABAMADAFQADAFAHAAQAHAAADgEQADgFAAgKIAAgEQAAgLgDgGQgCgGgJAAQgNAAAAAYg");
	this.shape_1.setTransform(31.15,23.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B3769").s().p("AAOAwIAAgzQAAgJgDgFQgDgEgGAAQgIAAgDAHQgDAIAAANIAAApIghAAIAAhdIAZAAIAEAMIABAAQAFgGAHgEQAGgEAKAAQAOAAAKAIQAJAJAAASIAAA8g");
	this.shape_2.setTransform(19.85,21.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B3769").s().p("AgPBCIAAhdIAfAAIAABdgAgLgnQgFgDAAgJQAAgIAFgDQAFgDAGAAQAHAAAFADQAFADAAAIQAAAJgFADQgFADgHAAQgGAAgFgDg");
	this.shape_3.setTransform(10.875,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B3769").s().p("AgYBDQgJgBgIgDIAAgbIARAFQAHACALAAQATAAAAgOIAAgCIABgMIgBAAQgDAGgGAEQgFAEgJAAQgQAAgJgMQgJgNAAgXQAAgXAJgNQAKgMAPAAQAKAAAEADQAHAEADAGIABAAIADgMIAcAAIAABdQAAAUgNALQgMAKgZAAQgLAAgJgBgAgMgSQAAAMAEAFQAEAFAFAAQAJAAACgEQADgFABgKIAAgEQgBgLgDgGQgCgGgJAAQgNAAAAAYg");
	this.shape_4.setTransform(2.1,23.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B3769").s().p("AAOAwIAAgzQgBgJgCgFQgDgEgGAAQgIAAgDAHQgEAIABANIAAApIghAAIAAhdIAZAAIAEAMIACAAQAEgGAHgEQAGgEAKAAQAOAAAKAIQAJAJAAASIAAA8g");
	this.shape_5.setTransform(-9.2,21.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B3769").s().p("AgjApQgJgIABgOQAAgQAKgGQALgHATgCIAPAAIAAgBQAAgHgDgCQgDgDgFAAQgFAAgHACIgNAFIgKgVQAJgEAKgCQAKgCALgBQATAAAJAJQALAJAAAQIAAA9IgXAAIgGgMIgBAAIgIAIQgEADgFABQgFACgIgBQgMAAgIgHgAAFAFQgJABgDADQgEACAAAGQAAAEADACQADADAEAAQAFAAAEgEQAEgDAAgHIAAgHg");
	this.shape_6.setTransform(-20.6,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B3769").s().p("AAOBBIAAg0QAAgRgMAAQgIgBgDAHQgEAHABAOIAAAqIghAAIAAiBIAhAAIAAASIgBASIAAALIABAAQAFgHAGgDQAFgDAJAAQAJAAAIADQAHAEAFAIQAEAHAAAMIAAA9g");
	this.shape_7.setTransform(-31.7,20.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B3769").s().p("AgaAlQgNgLAAgZQAAgQAGgLQAHgMALgFQALgEANgBQAJABAIACQAIABAGADIgJAZIgLgFQgFgBgGAAQgHAAgEAGQgEAFAAAMQAAALAEAGQAEAFAIAAQAHAAAHgDQAHgBAGgFIAAAaQgGAFgHABQgHACgKAAQgVAAgMgLg");
	this.shape_8.setTransform(-41.975,21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B3769").s().p("AgUAwQgIgCgIgDIAAgaQAKAFAIACIAPABQAKAAgBgEIgBgFIgGgCIgLgGQgMgFgGgFQgGgHAAgLQAAgOALgGQALgIAQAAQAKAAAHACQAJADAIAEIgJAUIgNgFQgIgCgEAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAEAEIAMAEQAIAEAFAEQAGADACAFQADAFAAAIQAAAJgEAHQgEAHgIAEQgKADgMABIgTgBg");
	this.shape_9.setTransform(47.95,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B3769").s().p("AgPBCIAAhdIAfAAIAABdgAgLgnQgFgDAAgIQAAgJAFgDQAFgDAGAAQAHAAAFADQAFADAAAJQAAAIgFADQgFADgHAAQgGAAgFgDg");
	this.shape_10.setTransform(40.275,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B3769").s().p("AgVArQgLgEgGgLQgHgKABgSQAAgPAFgLQAHgLAKgFQAKgGANAAQAVAAALALQANAKAAAXIAAAMIg6AAQABAIAFAFQAFAFAJgBQAJABAHgCIAQgGIAAAYQgIAEgIABQgIABgMABQgNAAgMgGgAAQgLQAAgGgDgEQgEgEgHgBQgEAAgEAEQgEAEgBAHIAbAAIAAAAg");
	this.shape_11.setTransform(28,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B3769").s().p("AgaAlQgNgMAAgZQAAgQAGgLQAHgKALgFQALgGANAAQAJAAAIACQAIACAGAEIgJAXIgLgEQgFgBgGAAQgHAAgEAFQgEAHAAAKQAAAMAEAFQAEAGAIAAQAHAAAHgCQAHgCAGgEIAAAaQgGADgHADQgHACgKAAQgVAAgMgMg");
	this.shape_12.setTransform(17.675,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B3769").s().p("AANAwIAAgzQABgJgDgFQgDgEgGAAQgIAAgDAHQgDAIgBANIAAApIggAAIAAhdIAYAAIAFAMIABAAQAEgGAIgEQAGgEAKAAQAPAAAJAIQAJAJAAASIAAA8g");
	this.shape_13.setTransform(7.4,-0.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B3769").s().p("AgjApQgJgHAAgQQAAgPALgGQALgHAUgCIAOAAIAAgBQAAgGgDgDQgDgDgGAAQgEAAgGACIgPAFIgJgVQAIgFAKgCQALgCAMAAQARABALAIQAKAJgBARIAAA8IgWAAIgGgNIgBAAIgIAIQgEAEgEABQgGABgIABQgMAAgIgIgAAFAFQgJAAgDADQgEAEABAEQgBAFADADQADACAEAAQAFAAAEgEQAFgEgBgFIAAgIg");
	this.shape_14.setTransform(-4,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B3769").s().p("AghAwIAAhdIAZAAIAFAPIACAAQACgHAHgFQAIgFAIAAIAFAAIAFABIgEAfIgEgBIgHAAIgJABQgEABgEAEQgCAEAAAIIAAAug");
	this.shape_15.setTransform(-12.55,-0.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B3769").s().p("AgdAsQgHgDgEgIQgFgIAAgMIAAg8IAhAAIAAAzQAAAJACAFQADAEAGAAQAIAAADgHQADgIAAgNIAAgpIAhAAIAABdIgZAAIgEgLIgCAAQgEAHgIADQgGADgJAAQgJAAgIgEg");
	this.shape_16.setTransform(-23.075,-0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B3769").s().p("AgTAwQgJgCgIgDIAAgaQAJAFAJACIAPABQAKAAAAgEIgCgFIgGgCIgLgGQgMgFgGgFQgGgHAAgLQAAgOALgGQALgIAQAAQAKAAAHACQAJADAIAEIgJAUIgNgFQgIgCgEAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAEAEIAMAEQAIAEAFAEQAGADACAFQADAFAAAIQAAAJgEAHQgEAHgJAEQgIADgNABIgSgBg");
	this.shape_17.setTransform(-33.15,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B3769").s().p("AAOAwIAAgzQAAgJgDgFQgDgEgGAAQgIAAgDAHQgDAIAAANIAAApIghAAIAAhdIAZAAIAEAMIABAAQAFgGAHgEQAGgEAKAAQAOAAAKAIQAJAJAAASIAAA8g");
	this.shape_18.setTransform(-43.6,-0.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B3769").s().p("AgPBCIAAhdIAfAAIAABdgAgLgnQgFgDAAgIQAAgJAFgDQAFgDAGAAQAHAAAFADQAFADAAAJQAAAIgFADQgFADgHAAQgGAAgFgDg");
	this.shape_19.setTransform(-52.575,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B3769").s().p("AANBBIAAg0QAAgRgLAAQgHgBgEAHQgDAHgBAOIAAAqIggAAIAAiBIAgAAIAAASIAAASIAAALIABAAQAEgHAHgDQAFgDAJAAQAJAAAIADQAHAEAEAIQAFAHAAAMIAAA9g");
	this.shape_20.setTransform(23.85,-23.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B3769").s().p("AgHA3QgHgDgEgHQgEgHAAgNIAAgmIgLAAIAAgNIAOgKIAIgUIAVAAIAAATIAXAAIAAAYIgXAAIAAAkQAAAJAJAAIAHgBIAIgCIAAAXIgLAEQgGABgJAAQgIAAgHgCg");
	this.shape_21.setTransform(14.025,-22.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B3769").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_22.setTransform(6.825,-23.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B3769").s().p("AgjApQgJgIAAgPQAAgPALgGQAKgIAVAAIAOgBIAAgBQAAgHgDgCQgDgDgGAAQgEAAgGACIgPAFIgJgVQAJgEAJgCQALgCAMAAQARgBALAJQAKAJgBAQIAAA9IgWAAIgGgMIgBAAIgIAIQgEADgEABQgGABgIAAQgMABgIgIgAAFAGQgIAAgEADQgDACAAAGQgBAEADADQADACAEAAQAFAAAEgEQAFgDAAgHIAAgHg");
	this.shape_23.setTransform(-2.1,-22.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B3769").s().p("AgUAsQgLgGgHgKQgGgLAAgRQgBgPAHgLQAFgLALgGQALgEAMAAQAUgBANALQAMALgBAVIAAAOIg4AAQAAAHAFAFQAFAEAJABQAJgBAHgBIAPgGIAAAYQgHADgHACQgJABgMAAQgNAAgLgEgAAQgKQAAgHgEgFQgDgEgHAAQgFABgEADQgDADgBAJIAbAAIAAAAg");
	this.shape_24.setTransform(-12.65,-22.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B3769").s().p("AATA9IAAgyIglAAIAAAyIghAAIAAh5IAhAAIAAAtIAlAAIAAgtIAhAAIAAB5g");
	this.shape_25.setTransform(-24.45,-23.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-66.1,-32.5,132.3,65), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_142 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(142).call(this.frame_142).wait(2));

	// elipsis
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B3769").s().p("AgVAWQgKgHAAgPQAAgPAKgGQAJgHANAAQAMAAAJAHQAKAGAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape.setTransform(272.325,99.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B3769").s().p("AgVAWQgKgHAAgPQAAgPAKgGQAJgHANAAQAMAAAJAHQAKAGAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_1.setTransform(263.725,99.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B3769").s().p("AgVAWQgKgHAAgPQAAgPAKgGQAJgHANAAQAMAAAJAHQAKAGAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_2.setTransform(255.125,99.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},18).to({state:[]},125).wait(1));

	// Layer_1 copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B3769").s().p("AgrBOQgUgKgLgUQgLgUAAgcQAAgqAYgXQAWgXAoAAQAYAAATALQAUAKALATQALAUgBAcQAAArgXAXQgWAXgoAAQgYAAgTgLgAgTggQgFALAAAVQAAAWAFALQAHAMANAAQANAAAGgMQAFgLAAgWQAAgVgFgLQgGgMgOAAQgMAAgHAMg");
	this.shape_3.setTransform(-84.15,93.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B3769").s().p("AglBXQgPgCgOgGIAAgvQAQAHARADQARAEAJAAQATAAgBgJQAAgEgDgCIgJgHIgXgJQgWgJgKgKQgKgMAAgVQAAgZATgNQAUgNAeAAQARAAAPAEQAPAEAQAHIgQAmQgNgGgNgDQgNgEgHAAQgOAAAAAHQAAAEACACIAJAGIAXAIQAOAHAKAGQAKAHAEAJQAFAKABAPQAAAQgIANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_4.setTransform(-102.45,93.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B3769").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_5.setTransform(-64.95,93.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B3769").s().p("AgsBOQgSgKgLgUQgLgUAAgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKAKATQAMAUAAAcQAAArgYAXQgXAXgnAAQgYAAgUgLgAgTggQgFALgBAVQABAWAFALQAGAMANAAQAOAAAFgMQAHgLgBgWQABgVgHgLQgFgMgOAAQgNAAgGAMg");
	this.shape_6.setTransform(-45.75,93.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B3769").s().p("AgsBOQgTgKgKgUQgMgUAAgcQAAgqAXgXQAYgXAmAAQAZAAAUALQASAKALATQALAUAAAcQABArgXAXQgYAXgnAAQgYAAgUgLgAgSggQgHALAAAVQAAAWAHALQAFAMANAAQAOAAAFgMQAHgLAAgWQAAgVgHgLQgFgMgOAAQgNAAgFAMg");
	this.shape_7.setTransform(-26.15,93.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B3769").s().p("AgsBOQgTgKgKgUQgMgUAAgcQAAgqAXgXQAYgXAmAAQAZAAAUALQASAKALATQALAUAAAcQABArgXAXQgYAXgnAAQgYAAgUgLgAgSggQgHALAAAVQAAAWAHALQAFAMANAAQAOAAAFgMQAHgLAAgWQAAgVgHgLQgFgMgOAAQgNAAgFAMg");
	this.shape_8.setTransform(-26.15,93.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B3769").s().p("AgsBOQgSgKgMgUQgLgUABgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKALATQAKAUABAcQAAArgYAXQgWAXgoAAQgYAAgUgLgAgTggQgFALAAAVQAAAWAFALQAHAMAMAAQAOAAAGgMQAFgLAAgWQAAgVgFgLQgGgMgOAAQgMAAgHAMg");
	this.shape_9.setTransform(14.75,93.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B3769").s().p("AgsBOQgSgKgMgUQgLgUABgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKALATQAKAUABAcQAAArgYAXQgWAXgoAAQgYAAgUgLgAgTggQgFALAAAVQAAAWAFALQAHAMAMAAQAOAAAGgMQAFgLAAgWQAAgVgFgLQgGgMgOAAQgMAAgHAMg");
	this.shape_10.setTransform(14.75,93.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B3769").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_11.setTransform(-64.95,93.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B3769").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_12.setTransform(-64.95,93.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B3769").s().p("AgsBOQgSgKgMgUQgLgUABgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKALATQAKAUABAcQAAArgYAXQgWAXgoAAQgYAAgUgLgAgTggQgFALgBAVQABAWAFALQAHAMAMAAQAOAAAFgMQAHgLgBgWQABgVgHgLQgFgMgOAAQgMAAgHAMg");
	this.shape_13.setTransform(96.55,93.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B3769").s().p("AgrBOQgUgKgLgUQgKgUgBgcQAAgqAYgXQAWgXAoAAQAYAAAUALQASAKALATQAMAUgBAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALABAVQgBAWAHALQAGAMANAAQANAAAGgMQAFgLABgWQgBgVgFgLQgGgMgOAAQgNAAgFAMg");
	this.shape_14.setTransform(116.75,93.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B3769").s().p("AgsBOQgSgKgLgUQgLgUAAgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKAKATQAMAUAAAcQAAArgYAXQgXAXgnAAQgYAAgUgLgAgSggQgGALgBAVQABAWAGALQAFAMANAAQAOAAAFgMQAHgLAAgWQAAgVgHgLQgFgMgOAAQgNAAgFAMg");
	this.shape_15.setTransform(136.95,93.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B3769").s().p("AgrBOQgUgKgLgUQgKgUgBgcQAAgqAYgXQAWgXAoAAQAYAAAUALQASAKALATQAMAUgBAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALABAVQgBAWAHALQAGAMANAAQANAAAGgMQAFgLABgWQgBgVgFgLQgGgMgOAAQgNAAgFAMg");
	this.shape_16.setTransform(116.75,93.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B3769").s().p("AgrBOQgUgKgLgUQgKgUgBgcQAAgqAYgXQAWgXAoAAQAYAAAUALQASAKALATQAMAUgBAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALABAVQgBAWAHALQAGAMANAAQANAAAGgMQAFgLABgWQgBgVgFgLQgGgMgOAAQgNAAgFAMg");
	this.shape_17.setTransform(116.75,93.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B3769").s().p("AgrBOQgUgKgLgUQgKgUgBgcQAAgqAYgXQAWgXAoAAQAYAAAUALQASAKALATQAMAUgBAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALABAVQgBAWAHALQAGAMANAAQANAAAGgMQAFgLABgWQgBgVgFgLQgGgMgOAAQgNAAgFAMg");
	this.shape_18.setTransform(116.75,93.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B3769").s().p("AgrBOQgUgKgLgUQgKgUgBgcQAAgqAYgXQAWgXAoAAQAYAAAUALQASAKALATQAMAUgBAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALABAVQgBAWAHALQAGAMANAAQANAAAGgMQAFgLABgWQgBgVgFgLQgGgMgOAAQgNAAgFAMg");
	this.shape_19.setTransform(116.75,93.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B3769").s().p("AgsBOQgSgKgLgUQgLgUAAgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKAKATQAMAUAAAcQAAArgYAXQgXAXgnAAQgYAAgUgLgAgTggQgFALgBAVQABAWAFALQAGAMANAAQAOAAAFgMQAHgLgBgWQABgVgHgLQgFgMgOAAQgNAAgGAMg");
	this.shape_20.setTransform(-45.75,93.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5,p:{x:-64.95}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5,p:{x:-64.95}},{t:this.shape_6,p:{x:-45.75}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5,p:{x:-64.95}},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_7,p:{x:-26.15}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5,p:{x:-64.95}},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5,p:{x:-64.95}},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_9,p:{x:14.75}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5,p:{x:-64.95}},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_11,p:{x:-64.95}},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_5,p:{x:55.65}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_14,p:{x:116.75}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_14,p:{x:116.75}},{t:this.shape_15}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_16,p:{x:116.75}},{t:this.shape_15},{t:this.shape_14,p:{x:156.8}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_17,p:{x:116.75}},{t:this.shape_15},{t:this.shape_16,p:{x:156.8}},{t:this.shape_14,p:{x:177.5}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_18,p:{x:116.75}},{t:this.shape_15},{t:this.shape_17,p:{x:156.8}},{t:this.shape_16,p:{x:177.5}},{t:this.shape_14,p:{x:198.2}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_6,p:{x:-45.75}},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_19},{t:this.shape_15},{t:this.shape_18,p:{x:156.8}},{t:this.shape_17,p:{x:177.5}},{t:this.shape_16,p:{x:198.2}},{t:this.shape_14,p:{x:218.9}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_20},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_19},{t:this.shape_15},{t:this.shape_18,p:{x:156.8}},{t:this.shape_17,p:{x:177.5}},{t:this.shape_16,p:{x:198.2}},{t:this.shape_14,p:{x:218.9}},{t:this.shape_6,p:{x:239.1}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_20},{t:this.shape_8},{t:this.shape_7,p:{x:-5.45}},{t:this.shape_10},{t:this.shape_9,p:{x:35.45}},{t:this.shape_11,p:{x:55.65}},{t:this.shape_5,p:{x:76.35}},{t:this.shape_13},{t:this.shape_19},{t:this.shape_15},{t:this.shape_18,p:{x:156.8}},{t:this.shape_17,p:{x:177.5}},{t:this.shape_16,p:{x:198.2}},{t:this.shape_14,p:{x:218.9}},{t:this.shape_6,p:{x:239.1}}]},1).to({state:[]},126).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,0,391.2,111.1);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape.setTransform(393.825,17.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#642484").s().p("AgGBxQgKgGgHgIIgDAAIgKARIguAAIAAjqIA7AAIAAA1IAAARIgCAQIACAAQAHgLALgHQAKgHARAAQAbAAARAWQARAXAAAqQAAAsgSAXQgRAWgcAAQgSAAgIgGgAgRgCQgGAIAAASIAAAIQAAAUAGAKQAFAKANAAQAWAAAAgqQAAgpgXAAQgLAAgGAJg");
	this.shape_1.setTransform(374.225,14.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#642484").s().p("AAYBXIAAhcQAAgRgFgJQgFgJgKAAQgQAAgGAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAWIACAAQAIgMANgGQAMgHATAAQAaAAARAPQARAPAAAhIAABug");
	this.shape_2.setTransform(345.225,17.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#642484").s().p("AhBBLQgPgNAAgdQAAgbATgMQATgOAkgBIAcgBIAAgDQAAgLgGgFQgFgFgKAAQgJAAgNAEIgZAJIgRgnQAPgIATgEQATgEAWAAQAgAAATAQQASAQAAAeIAABwIgpAAIgLgXIgCAAQgHAJgIAGQgHAGgJACQgKADgOAAQgWAAgPgOgAAJAKQgQAAgGAGQgHAFAAAJQAAAJAFAEQAEAEAIAAQAKAAAIgHQAHgHAAgLIAAgNg");
	this.shape_3.setTransform(324.175,17.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#642484").s().p("AgxBEQgXgVAAguQAAgeAMgUQALgUAVgJQAUgKAZAAQAQAAAOAEQAOADAMAGIgRAsIgUgHQgJgDgKAAQgNAAgIAKQgIALAAAVQAAAWAIAJQAIAKANAAQANAAANgEQANgEALgHIAAAvQgLAHgNAEQgNAEgSAAQgmAAgXgVg");
	this.shape_4.setTransform(305.925,17.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_5.setTransform(273.775,17.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#642484").s().p("AgxBEQgXgVAAguQAAgeAMgUQALgUAVgJQAUgKAZAAQAQAAAOAEQAOADAMAGIgRAsIgUgHQgJgDgKAAQgNAAgIAKQgIALAAAVQAAAWAIAJQAIAKANAAQANAAANgEQANgEALgHIAAAvQgLAHgNAEQgNAEgSAAQgmAAgXgVg");
	this.shape_6.setTransform(255.175,17.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#642484").s().p("AAYBXIAAhcQAAgRgFgJQgFgJgKAAQgQAAgGAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAWIACAAQAIgMANgGQAMgHATAAQAaAAARAPQARAPAAAhIAABug");
	this.shape_7.setTransform(236.125,17.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#642484").s().p("AhBBLQgPgNAAgdQAAgbATgMQATgOAkgBIAcgBIAAgDQAAgLgGgFQgFgFgKAAQgJAAgNAEIgZAJIgRgnQAPgIATgEQATgEAWAAQAgAAATAQQASAQAAAeIAABwIgpAAIgLgXIgCAAQgHAJgIAGQgHAGgJACQgKADgOAAQgWAAgPgOgAAJAKQgQAAgGAGQgHAFAAAJQAAAJAFAEQAEAEAIAAQAKAAAIgHQAHgHAAgLIAAgNg");
	this.shape_8.setTransform(214.575,17.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#642484").s().p("Ag8BXIAAiqIAsAAIAJAbIADAAQAGgNANgIQANgJAPAAIAKAAIAIACIgGA3IgHgBIgNAAQgHAAgJACQgJACgGAHQgFAHAAAPIAABUg");
	this.shape_9.setTransform(199.525,17.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAGAJAKAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgHgVIgEAAQgIANgOAGQgMAFgQAAQgRAAgOgGg");
	this.shape_10.setTransform(180.9,17.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQARAHAQADQARAEAKAAQARAAABgJQAAgEgEgCIgKgHIgWgJQgWgJgKgKQgLgMAAgVQAAgZAUgNQATgNAfAAQASAAAOAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgHAAQgOAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAKAHAEAJQAGAKgBAPQAAAQgHANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_11.setTransform(162.45,17.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#642484").s().p("AAYBXIAAhcQAAgRgFgJQgFgJgKAAQgQAAgGAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAWIACAAQAIgMANgGQAMgHATAAQAaAAARAPQARAPAAAhIAABug");
	this.shape_12.setTransform(143.975,17.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#642484").s().p("AgdB4IAAiqIA6AAIAACqgAgVhIQgKgGAAgPQAAgQAKgFQAJgFAMAAQANAAAJAFQAJAFAAAQQAAAPgJAGQgJAFgNAAQgMAAgJgFg");
	this.shape_13.setTransform(128.1,13.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#642484").s().p("AAYB2IAAheQAAghgUAAQgQAAgGAMQgGAOAAAZIAABMIg7AAIAAjrIA7AAIAAAiIgBAgIgBATIADAAQAIgNAMgFQAKgGAQAAQARAAANAHQAOAGAIAOQAJAOAAAVIAABwg");
	this.shape_14.setTransform(100.375,14.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#642484").s().p("AgOBjQgMgFgIgNQgGgMgBgYIAAhGIgVAAIAAgYIAbgTIAPgkIAmAAIAAAjIAqAAIAAAsIgqAAIAABCQAAARAQAAIAOgCIAPgEIAAArIgVAHQgLADgQAAQgQgBgNgFg");
	this.shape_15.setTransform(82.75,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#642484").s().p("AgdB2IAAjrIA7AAIAADrg");
	this.shape_16.setTransform(70.2,14.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#642484").s().p("AhBBLQgPgNAAgdQAAgbATgMQATgOAkgBIAcgBIAAgDQAAgLgGgFQgFgFgKAAQgJAAgNAEIgZAJIgRgnQAPgIATgEQATgEAWAAQAgAAATAQQASAQAAAeIAABwIgpAAIgLgXIgCAAQgHAJgIAGQgHAGgJACQgKADgOAAQgWAAgPgOgAAJAKQgQAAgGAGQgHAFAAAJQAAAJAFAEQAEAEAIAAQAKAAAIgHQAHgHAAgLIAAgNg");
	this.shape_17.setTransform(54.575,17.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_18.setTransform(35.575,17.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#642484").s().p("AAjBvIAAhaIhFAAIAABaIg8AAIAAjdIA8AAIAABSIBFAAIAAhSIA8AAIAADdg");
	this.shape_19.setTransform(13.875,14.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(0,0,433.4,35), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CTALearnMore();
	this.instance.setTransform(-80,-15,0.3499,0.3499);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-80,-15,160.6,29.4), null);


(lib.CLINE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0RDnIAAnNIbMAAIAAHNg");
	var mask_graphics_1 = new cjs.Graphics().p("AyCDnIAAnNIbNAAIAAHNg");
	var mask_graphics_2 = new cjs.Graphics().p("AvyDnIAAnNIbNAAIAAHNg");
	var mask_graphics_3 = new cjs.Graphics().p("AtmDnIAAnNIbNAAIAAHNg");
	var mask_graphics_4 = new cjs.Graphics().p("AtmDnIAAnNIbNAAIAAHNg");
	var mask_graphics_5 = new cjs.Graphics().p("AtmDnIAAnNIbNAAIAAHNg");
	var mask_graphics_6 = new cjs.Graphics().p("AtmDnIAAnNIbNAAIAAHNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-129.8408,y:-23.037}).wait(1).to({graphics:mask_graphics_1,x:-115.4533,y:-23.037}).wait(1).to({graphics:mask_graphics_2,x:-101.0658,y:-23.037}).wait(1).to({graphics:mask_graphics_3,x:-86.2896,y:-23.037}).wait(1).to({graphics:mask_graphics_4,x:-57.5146,y:-23.037}).wait(1).to({graphics:mask_graphics_5,x:-28.7396,y:-23.037}).wait(1).to({graphics:mask_graphics_6,x:0.0354,y:-23.037}).wait(90).to({graphics:null,x:0,y:0}).wait(1));

	// CLINE alt
	this.instance = new lib.WAHBECLINE300x600();
	this.instance.setTransform(-93,-44,0.31,0.31);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

	// mask copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_7 = new cjs.Graphics().p("A0RDrIAAnMIbMAAIAAHMg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AyCDrIAAnMIbNAAIAAHMg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AvyDrIAAnMIbNAAIAAHMg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AtmDrIAAnMIbNAAIAAHMg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AtmDrIAAnMIbNAAIAAHMg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AtmDrIAAnMIbNAAIAAHMg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AtmDrIAAnMIbNAAIAAHMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_1_graphics_7,x:-129.8408,y:23.513}).wait(1).to({graphics:mask_1_graphics_8,x:-115.4533,y:23.513}).wait(1).to({graphics:mask_1_graphics_9,x:-101.0658,y:23.513}).wait(1).to({graphics:mask_1_graphics_10,x:-86.2896,y:23.513}).wait(1).to({graphics:mask_1_graphics_11,x:-57.5146,y:23.513}).wait(1).to({graphics:mask_1_graphics_12,x:-28.7396,y:23.513}).wait(1).to({graphics:mask_1_graphics_13,x:0.0354,y:23.513}).wait(83).to({graphics:null,x:0,y:0}).wait(1));

	// CLINE alt copy
	this.instance_1 = new lib.WAHBECLINE300x600();
	this.instance_1.setTransform(-93,-44,0.31,0.31);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-44,186,88.7);


(lib.Arrowslower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Arrows728x90lower();
	this.instance.setTransform(-37,-17,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrowslower, new cjs.Rectangle(-37,-17,74.3,31.5), null);


(lib.Arrows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Arrows300x600();
	this.instance.setTransform(-43,-15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrows, new cjs.Rectangle(-43,-15,86,30), null);


(lib._728x90bordersvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 728x90-border.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59C4F9").s().p("Eg43AHCIAAuDMBxvAAAIAAODgEg3fgFoQgdAdAAApIAAJFQAAAqAdAdQAeAdApAAMBsxAAAQApAAAdgdQAdgdAAgqIAApFQAAgpgdgdQgdgdgpAAMhsxAAAQgpAAgeAdg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.LOGOs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.LOGOlockupsvg("synched",0);
	this.instance.setTransform(0,0.05,0.25,0.25,0,0,0,450.1,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGOs, new cjs.Rectangle(-112.5,-22.1,225,44.3), null);


// stage content:
(lib.HCAsoconf728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [166];
	// timeline functions:
	this.frame_166 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(166).call(this.frame_166).wait(1));

	// border
	this.instance = new lib._728x90bordersvg("synched",0);
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167));

	// HEAD1a
	this.instance_1 = new lib.HEAD1a();
	this.instance_1.setTransform(107.5,60.35,0.7479,0.7479,0,0,0,110.1,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},85).wait(82));

	// HEAD1b
	this.instance_2 = new lib.HEAD1b();
	this.instance_2.setTransform(190.5,32.7,0.7479,0.7479,0,0,0,110.1,58.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({_off:true},62).wait(82));

	// SUBHEAD
	this.instance_3 = new lib.SUBHEAD();
	this.instance_3.setTransform(583.3,148.45,0.92,0.92,2.9996,0,0,0.3,111.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({_off:true},42).wait(82));

	// HEAD2
	this.instance_4 = new lib.HEAD2();
	this.instance_4.setTransform(198.05,103.1,1,1,0,0,0,110,58);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).wait(82));

	// C_LINE
	this.instance_5 = new lib.CLINE();
	this.instance_5.setTransform(228.6,45.15,0.83,0.83,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111).to({_off:false},0).wait(56));

	// arrows
	this.instance_6 = new lib.Arrows("synched",0);
	this.instance_6.setTransform(369.95,20.45,0.68,0.68);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144).to({_off:false},0).to({y:25.85},3).to({y:20.45},5,cjs.Ease.quadOut).to({y:25.85},3).to({y:20.45},5,cjs.Ease.quadOut).wait(7));

	// arrows lower
	this.instance_7 = new lib.Arrowslower("synched",0);
	this.instance_7.setTransform(369.95,71.9,0.68,0.68);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(144).to({_off:false},0).to({y:66.8},3).to({y:71.9},5,cjs.Ease.quadOut).to({y:66.8},3).to({y:71.9},5,cjs.Ease.quadOut).wait(7));

	// CTA
	this.instance_8 = new lib.CTA();
	this.instance_8.setTransform(365.4,44.95,0.73,0.73);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(144).to({_off:false},0).wait(23));

	// LOGOs
	this.instance_9 = new lib.LOGOs();
	this.instance_9.setTransform(585,47.1,1.07,1.07);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85).to({_off:false},0).wait(82));

	// puzz
	this.instance_10 = new lib.WAHBEpuzz300x600();
	this.instance_10.setTransform(329,-137,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},85).wait(82));

	// BKGD
	this.instance_11 = new lib._728x90paper();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(364,-92,364,255);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 728,
	height: 90,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/HCA_soconf_728x90_atlas_P_1.png", id:"HCA_soconf_728x90_atlas_P_1"},
		{src:"images/HCA_soconf_728x90_atlas_NP_1.jpg", id:"HCA_soconf_728x90_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;