(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"So_confusing_Display_SPA_300x250_atlas_P_1", frames: [[462,659,99,42],[0,659,460,182],[0,0,600,500],[0,502,600,155]]},
		{name:"So_confusing_Display_SPA_300x250_atlas_NP_1", frames: [[0,0,600,500],[0,502,600,500]]}
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



(lib.Arrows728x90lower = function() {
	this.initialize(ss["So_confusing_Display_SPA_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CTASPN = function() {
	this.initialize(ss["So_confusing_Display_SPA_300x250_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WAHBEbkgdopt300x250 = function() {
	this.initialize(ss["So_confusing_Display_SPA_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.WAHBEbkgdpuzzopt300x250 = function() {
	this.initialize(ss["So_confusing_Display_SPA_300x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WAHBECLINEoptSPN300x250 = function() {
	this.initialize(ss["So_confusing_Display_SPA_300x250_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.WAHBEconfusing300x600SPN = function() {
	this.initialize(ss["So_confusing_Display_SPA_300x250_atlas_P_1"]);
	this.gotoAndStop(3);
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
	this.instance = new lib.WAHBEconfusing300x600SPN();
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
	this.shape.graphics.f("#1B3769").s().p("AgLAMQgGgEAAgIQAAgIAGgDQAFgEAGAAQAHAAAFAEQAGADgBAIQABAIgGAEQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(47.95,21.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B3769").s().p("AgXArQgLgFgGgLQgGgLAAgQQAAgWANgNQANgMAUAAQAOgBAKAGQALAFAGAMQAGAKAAAPQAAAYgNAMQgMAMgWAAQgNABgKgGgAgKgRQgDAGAAALQAAAMADAGQADAHAHAAQAHAAAEgHQADgGAAgMQAAgLgDgGQgEgHgHAAQgHAAgDAHg");
	this.shape_1.setTransform(39.95,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B3769").s().p("AgjA1QgKgMABgYQAAgXAKgNQAJgMAPAAQAKAAAEAEQAGAEAEAGIAAAAIgBgKIAAgMIAAgZIAhAAIAACAIgZAAIgHgMIgBAAQgEAFgGAEQgFAEgJAAQgOAAgKgMgAgIAAQgDAFgBAMQABAMADAFQAEAGAFAAQAIAAADgFQAEgFgBgKIAAgDQAAgLgCgGQgDgFgJAAQgFAAgEAFg");
	this.shape_2.setTransform(29.35,16.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B3769").s().p("AAOAwIAAgzQgBgJgCgFQgDgEgGAAQgIAAgDAHQgDAIAAANIAAApIghAAIAAhdIAYAAIAFAMIACAAQAEgGAHgEQAGgEAKAAQAOAAAKAIQAJAJAAASIAAA8g");
	this.shape_3.setTransform(18.35,18.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B3769").s().p("AgjApQgJgIAAgOQAAgQALgGQALgIAUAAIAOgBIAAgBQAAgHgDgCQgDgDgGAAQgEAAgGACIgPAFIgJgVQAIgEAKgCQALgCAMAAQARgBALAJQAKAJgBAQIAAA9IgWAAIgGgMIgBAAIgIAIQgEADgEABQgGABgIAAQgMABgIgIgAAFAGQgJAAgDADQgEACABAGQgBAEADADQADACAEAAQAFAAAEgEQAFgDgBgHIAAgHg");
	this.shape_4.setTransform(7.25,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B3769").s().p("AgPBCIAAhdIAfAAIAABdgAgLgnQgFgDAAgJQAAgIAFgDQAFgDAGAAQAHAAAFADQAFADAAAIQAAAJgFADQgFADgHAAQgGAAgFgDg");
	this.shape_5.setTransform(-0.775,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B3769").s().p("AgDA+QgGgDgDgEIgCAAIgFAJIgaAAIAAiAIAhAAIAAAdIAAAJIgBAJIABAAQADgGAHgEQAEgEAKAAQAPAAAJAMQAJANAAAXQAAAYgJAMQgKAMgPAAQgJAAgFgDgAgJgBQgDAEAAAKIAAAFQAAALADAFQADAFAGAAQANAAAAgXQAAgVgNAAQgFAAgEAEg");
	this.shape_6.setTransform(-8.85,16.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B3769").s().p("AApAwIAAgyQAAgLgCgEQgDgEgGAAQgHAAgEAGQgCAHAAAMIAAAsIggAAIAAgyQAAgLgDgEQgCgEgGAAQgIAAgDAHQgEAIAAANIAAApIggAAIAAhdIAYAAIAGALIAAAAQAEgFAHgEQAHgEAKAAQALAAAFAEQAIADADAGIABAAQAFgGAHgEQAHgDAJAAQAQAAAIAIQAJAJAAASIAAA8g");
	this.shape_7.setTransform(-22.65,18.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B3769").s().p("AgjApQgJgIAAgOQAAgQALgGQALgIATAAIAPgBIAAgBQAAgHgDgCQgDgDgGAAQgEAAgHACIgNAFIgKgVQAJgEAKgCQAKgCALAAQASgBAKAJQAKAJAAAQIAAA9IgWAAIgGgMIgBAAIgIAIQgEADgFABQgFABgIAAQgMABgIgIgAAFAGQgIAAgEADQgDACgBAGQABAEACADQACACAFAAQAFAAAEgEQAEgDABgHIAAgHg");
	this.shape_8.setTransform(-36.55,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B3769").s().p("AgaAlQgNgLAAgaQAAgPAGgLQAHgMALgFQALgEANAAQAJAAAIACQAIABAGADIgJAYIgLgDQgFgCgGAAQgHAAgEAFQgEAGAAALQAAANAEAFQAEAFAIAAQAHAAAHgDQAHgCAGgDIAAAZQgGAFgHABQgHACgKAAQgVAAgMgLg");
	this.shape_9.setTransform(-46.375,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B3769").s().p("AAOAwIAAgzQAAgJgDgFQgDgEgGAAQgIAAgDAHQgEAIABANIAAApIghAAIAAhdIAZAAIAEAMIABAAQAFgGAHgEQAGgEAKAAQAOAAAKAIQAJAJAAASIAAA8g");
	this.shape_10.setTransform(112.65,1.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B3769").s().p("AgjA6QgJgHAAgPQAAgQALgHQAKgHAVgBIAOgBIAAgBQAAgFgDgDQgDgDgGAAQgEAAgGACIgPAFIgJgVQAJgEAJgCQALgCALAAQASAAAKAIQALAJgBAQIAAA9IgWAAIgGgMIgBAAIgIAIQgEADgFABQgFACgIAAQgMAAgIgIgAAFAXQgIAAgEADQgDADAAAFQAAAEACADQACACAFAAQAFAAAEgEQAFgDAAgGIAAgIgAgNgmIAAgCIAGgIIAHgJIAHgIIAkAAIAAACIgIAGIgKAHIgKAHIgIAFg");
	this.shape_11.setTransform(101.05,-0.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B3769").s().p("AgHA3QgHgDgEgHQgEgHAAgNIAAgmIgLAAIAAgNIAOgKIAIgUIAVAAIAAATIAXAAIAAAYIgXAAIAAAkQAAAJAJAAIAHgBIAIgCIAAAXIgLAEQgGABgJAAQgIAAgHgCg");
	this.shape_12.setTransform(92.175,0.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B3769").s().p("AgUAvQgHgBgJgCIAAgbQAKAFAIACIAPABQAJAAAAgFIgBgDIgGgDIgMgGQgMgEgFgGQgGgGAAgMQAAgOALgHQALgGAQAAQAJAAAJACQAHABAKAFIgJAUIgPgFQgGgCgFAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAFACIAMAFQAIADAFAFQAGADACAFQADAFAAAIQAAAJgEAHQgEAHgIAEQgKADgNAAIgSgBg");
	this.shape_13.setTransform(83.7,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B3769").s().p("AgVAsQgKgGgHgKQgGgLAAgRQAAgQAFgKQAHgLAKgGQALgEAMAAQAVAAAMAKQALALABAVIAAAOIg6AAQABAHAFAFQAFAEAJABQAJgBAHgBIAPgGIAAAYQgGADgIACQgIABgNAAQgNAAgMgEgAAQgKQAAgHgEgEQgDgFgHAAQgFABgEADQgDADgBAJIAbAAIAAAAg");
	this.shape_14.setTransform(74.1,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B3769").s().p("AgjA1QgKgMAAgYQABgXAJgNQAKgMAPAAQAJAAAGAEQAFAEAEAGIAAAAIAAgKIgBgMIAAgZIAgAAIAACAIgYAAIgHgMIgBAAQgEAFgFAEQgGAEgJAAQgPAAgJgMgAgIAAQgDAFAAAMQAAAMADAFQAEAGAFAAQAIAAADgFQADgFAAgKIAAgDQAAgLgCgGQgDgFgJAAQgFAAgEAFg");
	this.shape_15.setTransform(57.95,-0.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B3769").s().p("AgdAsQgHgDgEgIQgFgIAAgMIAAg8IAhAAIAAAzQAAAJACAFQADAEAGAAQAIAAADgHQADgIAAgNIAAgpIAhAAIAABdIgZAAIgEgLIgCAAQgEAHgIADQgGADgJAAQgJAAgIgEg");
	this.shape_16.setTransform(46.925,1.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B3769").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_17.setTransform(38.725,-0.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B3769").s().p("AgjApQgIgHgBgQQAAgPALgGQAKgHAVgBIAOgBIAAgBQAAgGgDgDQgDgDgGAAQgEAAgGACIgPAFIgJgVQAIgEAKgCQALgCAMAAQARgBALAJQAKAJAAAQIAAA9IgXAAIgGgMIgBAAIgIAIQgEADgEABQgGABgIAAQgMABgIgIgAAFAGQgJAAgDADQgEADABAFQAAAEACADQADACAEAAQAFAAAEgEQAFgDgBgHIAAgHg");
	this.shape_18.setTransform(30.1,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B3769").s().p("AgUAvQgIgBgHgCIAAgbQAIAFAKACIAOABQAKAAgBgFIgBgDIgFgDIgNgGQgMgEgFgGQgGgGAAgMQAAgOALgHQALgGAQAAQAJAAAJACQAHABAKAFIgJAUIgPgFQgGgCgFAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAFACIAMAFQAIADAGAFQAFADADAFQACAFAAAIQAAAJgEAHQgEAHgIAEQgKADgNAAIgSgBg");
	this.shape_19.setTransform(20.45,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B3769").s().p("AgVAsQgKgGgHgKQgGgLAAgRQAAgQAFgKQAHgLAKgGQALgEAMAAQAVAAAMAKQALALABAVIAAAOIg6AAQABAHAFAFQAFAEAJABQAJgBAHgBIAPgGIAAAYQgGADgIACQgIABgNAAQgNAAgMgEgAAQgKQAAgHgEgEQgDgFgHAAQgFABgDADQgEADgBAJIAbAAIAAAAg");
	this.shape_20.setTransform(6.15,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B3769").s().p("AgjA1QgKgMAAgYQAAgXAKgNQAKgMAPAAQAJAAAGAEQAFAEAEAGIABAAIgBgKIgBgMIAAgZIAgAAIAACAIgYAAIgHgMIgBAAQgDAFgGAEQgGAEgJAAQgPAAgJgMgAgIAAQgEAFABAMQgBAMAEAFQAEAGAFAAQAIAAADgFQADgFABgKIAAgDQAAgLgDgGQgEgFgIAAQgFAAgEAFg");
	this.shape_21.setTransform(-4.8,-0.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B3769").s().p("AgTAvQgIgBgJgCIAAgbQAJAFAJACIAPABQAKAAAAgFIgCgDIgFgDIgMgGQgMgEgGgGQgGgGAAgMQAAgOALgHQAKgGARAAQAJAAAIACQAIABAJAFIgJAUIgNgFQgIgCgEAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAEACIAMAFQAIADAFAFQAGADADAFQACAFAAAIQAAAJgEAHQgEAHgJAEQgIADgNAAIgSgBg");
	this.shape_22.setTransform(-18.85,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B3769").s().p("AgXArQgLgFgGgMQgGgLAAgPQAAgXANgMQAMgMAWAAQANgBAKAGQALAFAGALQAGALAAAPQAAAXgNANQgMAMgWAAQgMABgLgGgAgKgSQgDAHAAALQAAAMADAGQAEAGAGABQAIgBADgGQADgGAAgMQAAgLgDgHQgDgFgIgBQgGABgEAFg");
	this.shape_23.setTransform(-28.8,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B3769").s().p("AghAwIAAhdIAZAAIAFAPIACAAQACgHAIgFQAGgFAJAAIAFAAIAFABIgEAfIgDgBIgIAAIgJABQgEABgEAEQgCAEAAAIIAAAug");
	this.shape_24.setTransform(-37.4,1.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B3769").s().p("AgdAsQgHgDgEgIQgFgIAAgMIAAg8IAhAAIAAAzQAAAJACAFQADAEAGAAQAIAAADgHQADgIAAgNIAAgpIAhAAIAABdIgZAAIgEgLIgCAAQgEAHgIADQgGADgJAAQgJAAgIgEg");
	this.shape_25.setTransform(-47.625,1.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1B3769").s().p("AgYBDQgIgBgJgDIAAgbIARAFQAHACALAAQATAAAAgOIAAgCIABgMIgBAAQgEAGgFAEQgFAEgJAAQgPAAgKgMQgJgNAAgXQAAgXAJgNQAJgMAQAAQAKAAAEADQAHAEAEAGIAAAAIADgMIAbAAIAABdQAAAUgMALQgMAKgZAAQgLAAgJgBgAgLgSQAAAMADAFQAEAFAFAAQAJAAACgEQAEgFAAgKIAAgEQAAgLgEgGQgCgGgJAAQgMAAAAAYg");
	this.shape_26.setTransform(-59,3.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B3769").s().p("AgVAsQgKgGgHgKQgGgLAAgRQAAgQAFgKQAHgLAKgGQALgEAMAAQAVAAAMAKQALALABAVIAAAOIg6AAQABAHAFAFQAFAEAJABQAJgBAHgBIAPgGIAAAYQgGADgIACQgIABgNAAQgNAAgMgEgAAQgKQAAgHgEgEQgDgFgHAAQgFABgEADQgDADgBAJIAbAAIAAAAg");
	this.shape_27.setTransform(-69.45,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B3769").s().p("AgUAvQgHgBgJgCIAAgbQAKAFAIACIAPABQAJAAAAgFIgBgDIgGgDIgLgGQgMgEgGgGQgGgGAAgMQAAgOALgHQALgGAQAAQAKAAAIACQAIABAIAFIgJAUIgNgFQgIgCgEAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAEACIAMAFQAIADAFAFQAGADACAFQADAFAAAIQAAAJgEAHQgEAHgIAEQgKADgNAAIgSgBg");
	this.shape_28.setTransform(-79.3,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B3769").s().p("AgUAvQgIgBgHgCIAAgbQAIAFAKACIAOABQAKAAgBgFIgBgDIgFgDIgNgGQgMgEgFgGQgGgGAAgMQAAgOALgHQAKgGARAAQAJAAAJACQAHABAKAFIgJAUIgPgFQgGgCgFAAQgHAAAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAFACIAMAFQAIADAGAFQAFADADAFQACAFAAAIQAAAJgEAHQgEAHgJAEQgJADgNAAIgSgBg");
	this.shape_29.setTransform(-92.5,1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1B3769").s().p("AgYArQgKgFgGgMQgGgLAAgPQAAgXANgMQANgMAUAAQAOgBALAGQAKAFAGALQAGALAAAPQAAAXgNANQgMAMgWAAQgMABgMgGgAgKgSQgDAHAAALQAAAMADAGQADAGAHABQAHgBAEgGQADgGAAgMQAAgLgDgHQgEgFgHgBQgHABgDAFg");
	this.shape_30.setTransform(-102.45,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1B3769").s().p("AgnA9IAAh5IAhAAIAABeIAuAAIAAAbg");
	this.shape_31.setTransform(-112.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-142.9,-9,286,38), null);


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
	this.frame_140 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(140).call(this.frame_140).wait(2));

	// lines 1-3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#642484").s().p("Ag8BXIAAiqIAsAAIAJAbIADAAQAGgNANgIQANgJAPAAIAKAAIAIACIgGA3IgHgBIgNAAQgHAAgJACQgJACgGAHQgFAHAAAPIAABUg");
	this.shape.setTransform(169.625,89.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_1.setTransform(151.875,89.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#642484").s().p("AglBXQgPgCgOgGIAAgvQARAHAQADQARAEAJAAQATAAAAgJQgBgEgDgCIgKgHIgWgJQgWgJgKgKQgKgMAAgVQAAgZATgNQAUgNAeAAQARAAAPAEQAPAEAQAHIgQAmQgNgGgNgDQgNgEgHAAQgOAAAAAHQAAAEACACIAJAGIAXAIQAOAHAKAGQAKAHAEAJQAGAKAAAPQAAAQgIANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_2.setTransform(134.35,89.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#642484").s().p("AAYBXIAAhcQAAgRgFgJQgFgJgKAAQgQAAgGAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAWIACAAQAIgMANgGQAMgHATAAQAaAAARAPQARAPAAAhIAABug");
	this.shape_3.setTransform(109.925,89.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_4.setTransform(89.875,89.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#642484").s().p("AhBBhQgRgXAAgrQAAgrASgXQARgWAcAAQARAAAKAHQAKAHAHALIABAAIgCgSIAAgWIAAguIA7AAIAADqIgtAAIgMgVIgCAAQgHAKgKAHQgLAHgRAAQgbAAgRgWgAgPAAQgHAKAAAWQAAAVAHAKQAGAKALAAQAOAAAGgJQAGgKAAgSIAAgFQAAgUgFgLQgGgKgQAAQgKAAgGAKg");
	this.shape_5.setTransform(70.7,86.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_6.setTransform(51.475,89.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAFAJALAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgIgVIgDAAQgIANgOAGQgNAFgQAAQgQAAgOgGg");
	this.shape_7.setTransform(32.05,89.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#642484").s().p("AhSB8IAAj0IAwAAIAJAVIACAAQAHgKAKgHQAKgIASAAQAdAAAQAYQAQAWAAArQAAAdgIATQgJAUgOAKQgOAKgSAAQgSAAgJgHQgKgGgGgHIgBAAIABANIAAAQIAAA+gAgRhDQgFAIgBATIAAAEQAAAVAFALQAFAJANABQALAAAGgJQAGgKAAgXQAAgXgGgIQgGgKgLAAQgMAAgFAKg");
	this.shape_8.setTransform(12.325,92.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#642484").s().p("AhBBhQgRgXAAgrQAAgrARgXQASgWAcAAQARAAAKAHQAKAHAHALIABAAIgCgSIgBgWIAAguIA8AAIAADqIgtAAIgMgVIgDAAQgGAKgLAHQgJAHgTAAQgaAAgRgWgAgPAAQgHAKAAAWQAAAVAHAKQAHAKAKAAQAOAAAGgJQAGgKABgSIAAgFQAAgUgHgLQgFgKgPAAQgKAAgHAKg");
	this.shape_9.setTransform(124.85,50.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAGAJAKAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgIgVIgDAAQgIANgOAGQgNAFgQAAQgQAAgOgGg");
	this.shape_10.setTransform(105.4,53.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#642484").s().p("AgdB2IAAjrIA7AAIAADrg");
	this.shape_11.setTransform(90.2,50.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#642484").s().p("AhBBLQgPgNAAgdQAAgbATgMQATgOAkgBIAcgBIAAgDQAAgLgGgFQgFgFgKAAQgJAAgNAEIgZAJIgRgnQAPgIATgEQATgEAWAAQAgAAATAQQASAQAAAeIAABwIgpAAIgLgXIgCAAQgHAJgIAGQgHAGgJACQgKADgOAAQgWAAgPgOgAAJAKQgQAAgGAGQgHAFAAAJQAAAJAFAEQAEAEAIAAQAKAAAIgHQAHgHAAgLIAAgNg");
	this.shape_12.setTransform(74.725,53.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQARAHAQADQARAEAKAAQARAAABgJQAAgEgEgCIgKgHIgWgJQgWgJgKgKQgKgMgBgVQAAgZAUgNQATgNAfAAQASAAAOAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgHAAQgOAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAKAHAEAJQAGAKgBAPQAAAQgHANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_13.setTransform(58.05,53.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_14.setTransform(31.775,53.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#642484").s().p("AhBBhQgRgXAAgrQAAgrARgXQASgWAcAAQARAAAJAHQALAHAHALIABAAIgCgSIgBgWIAAguIA8AAIAADqIgsAAIgOgVIgCAAQgGAKgLAHQgKAHgRAAQgbAAgRgWgAgPAAQgHAKAAAWQAAAVAHAKQAHAKAKAAQAOAAAGgJQAGgKABgSIAAgFQgBgUgFgLQgGgKgPAAQgKAAgHAKg");
	this.shape_15.setTransform(11.6,50.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#642484").s().p("AglBXQgPgCgOgGIAAgvQARAHAQADQARAEAJAAQATAAAAgJQgBgEgDgCIgKgHIgWgJQgWgJgKgKQgKgMAAgVQAAgZATgNQAUgNAeAAQARAAAPAEQAPAEAQAHIgQAmQgNgGgNgDQgNgEgHAAQgOAAAAAHQAAAEACACIAJAGIAXAIQAOAHAKAGQAKAHAEAJQAGAKAAAPQAAAQgIANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_16.setTransform(181.15,17.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#642484").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_17.setTransform(162.75,17.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#642484").s().p("Ag8BXIAAiqIAsAAIAJAbIADAAQAGgNANgIQANgJAPAAIAKAAIAIACIgGA3IgHgBIgNAAQgHAAgJACQgJACgGAHQgFAHAAAPIAABUg");
	this.shape_18.setTransform(147.225,17.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAFAJALAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgIgVIgDAAQgIANgOAGQgNAFgPAAQgRAAgOgGg");
	this.shape_19.setTransform(129.25,17.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#642484").s().p("AgsB6QgQgCgOgFIAAgyQAPAGAOAEQAOADAUAAQAiAAABgZIAAgDIABgWIgBAAQgHAKgKAIQgKAHgRAAQgcAAgRgWQgRgXAAgrQAAgrARgWQARgYAcAAQASABAKAGQALAIAHAKIABAAIAFgVIAzAAIAACrQAAAjgXAUQgWASguAAQgUAAgQgCgAgWgiQAAAWAHALQAGAIAMAAQAOAAAGgIQAFgJABgSIAAgIQAAgUgGgKQgFgMgQAAQgYAAAAAsg");
	this.shape_20.setTransform(108.8,20.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_21.setTransform(89.075,17.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQARAHAQADQARAEAKAAQARAAABgJQAAgEgEgCIgKgHIgWgJQgWgJgKgKQgLgMAAgVQAAgZAUgNQATgNAfAAQASAAAOAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgHAAQgOAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAKAHAEAJQAGAKgBAPQAAAQgHANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_22.setTransform(71.55,17.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQAQAHARADQARAEAKAAQARAAAAgJQAAgEgCgCIgLgHIgWgJQgVgJgLgKQgLgMAAgVQAAgZAUgNQATgNAfAAQARAAAPAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgIAAQgNAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAJAHAGAJQAEAKAAAPQAAAQgHANQgHANgQAHQgQAHgZAAQgTAAgOgCg");
	this.shape_23.setTransform(47.45,17.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#642484").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_24.setTransform(29.55,17.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#642484").s().p("AhHBvIAAjdIA7AAIAACsIBUAAIAAAxg");
	this.shape_25.setTransform(11.65,14.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(142));

	// type out 4-5
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#642484").s().p("AhEB6IgKgCIAAguIAIABIALAAQAOABAHgJQAHgIAEgMIABgBIhEioIA/AAIAdBiIACAIIAAALIABAAIACgLIACgIIAdhiIA9AAIhEC1QgIAVgKAOQgKAOgPAIQgPAHgXAAg");
	this.shape_26.setTransform(64.025,129);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#642484").s().p("Ag1BRQgOgHgHgOQgJgOABgWIAAhuIA7AAIAABcQAAARAFAJQAEAJAMAAQAPAAAGgOQAFgNABgZIAAhLIA6AAIAACqIgsAAIgHgVIgEAAQgIANgOAGQgMAFgRAAQgQAAgOgGg");
	this.shape_27.setTransform(43.25,125.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#642484").s().p("ABMBXIAAhcQAAgUgGgHQgFgIgKAAQgOAAgGANQgFAMAAAWIAABQIg7AAIAAhcQAAgTgFgIQgFgIgKAAQgPAAgFAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAVIACAAQAHgLANgGQANgHATAAQASAAAMAGQAMAGAIAMIACAAQAIgMAMgGQANgGARAAQAdAAAPAPQAQAPAAAhIAABug");
	this.shape_28.setTransform(17.525,125.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#642484").s().p("AhSB9IAAj1IAwAAIAJAVIACAAQAHgKAKgHQAKgIASAAQAdAAAQAYQAQAWAAArQAAAdgIATQgJAUgOAKQgOAKgSAAQgSAAgJgHQgKgGgGgHIgBAAIABANIAAAQIAAA/gAgRhDQgFAIgBATIAAAEQAAAVAFALQAFAJANABQALAAAGgJQAGgKAAgXQAAgXgGgIQgGgKgLAAQgMAAgFAKg");
	this.shape_29.setTransform(91.925,128.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_30.setTransform(111.375,125.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#642484").s().p("Ag8BXIAAiqIAsAAIAJAbIADAAQAGgNANgIQANgJAPAAIAKAAIAIACIgGA3IgHgBIgNAAQgHAAgJACQgJACgGAHQgFAHAAAPIAABUg");
	this.shape_31.setTransform(129.125,125.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#642484").s().p("AgsBOQgSgKgMgUQgLgUABgcQAAgqAWgXQAXgXAnAAQAaAAASALQAUAKALATQAKAUABAcQAAArgYAXQgWAXgoAAQgYAAgUgLgAgTggQgFALgBAVQABAWAFALQAHAMAMAAQAOAAAFgMQAHgLgBgWQABgVgHgLQgFgMgOAAQgMAAgHAMg");
	this.shape_32.setTransform(145.15,125.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#642484").s().p("ABMBXIAAhcQAAgUgGgHQgFgIgKAAQgOAAgGANQgFAMAAAWIAABQIg7AAIAAhcQAAgTgFgIQgFgIgKAAQgPAAgFAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAVIACAAQAHgLANgGQANgHATAAQASAAAMAGQAMAGAIAMIACAAQAIgMAMgGQANgGARAAQAdAAAPAPQAQAPAAAhIAABug");
	this.shape_33.setTransform(17.525,125.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#642484").s().p("Ag1BRQgOgHgHgOQgIgOAAgWIAAhuIA7AAIAABcQAAARAFAJQAEAJAMAAQAPAAAGgOQAGgNAAgZIAAhLIA6AAIAACqIgsAAIgIgVIgDAAQgIANgOAGQgMAFgRAAQgQAAgOgGg");
	this.shape_34.setTransform(43.15,161.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#642484").s().p("AhEB6IgKgCIAAguIAIABIALAAQAOABAHgJQAHgIAEgMIABgBIhEioIA/AAIAdBiIACAIIAAALIABAAIACgLIACgIIAdhiIA9AAIhEC1QgIAVgKAOQgKAOgPAIQgPAHgXAAg");
	this.shape_35.setTransform(63.925,165);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#642484").s().p("AgVAWQgKgHAAgPQAAgPAKgHQAJgGANAAQAMAAAJAGQAKAHAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_36.setTransform(79.975,167.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#642484").s().p("AgVAWQgKgHAAgPQAAgPAKgHQAJgGANAAQAMAAAJAGQAKAHAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_37.setTransform(79.975,167.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#642484").s().p("AgVAWQgKgHAAgPQAAgPAKgHQAJgGANAAQAMAAAJAGQAKAHAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_38.setTransform(79.975,167.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26}]},4).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_29}]},1).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_29},{t:this.shape_30}]},1).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31}]},1).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32}]},1).to({state:[{t:this.shape_28,p:{y:125.125}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32}]},1).to({state:[{t:this.shape_33},{t:this.shape_27},{t:this.shape_26},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_28,p:{y:161.125}}]},1).to({state:[{t:this.shape_33},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_28,p:{y:161.125}},{t:this.shape_34},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_33},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_28,p:{y:161.125}},{t:this.shape_34},{t:this.shape_35},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_33},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_28,p:{y:161.125}},{t:this.shape_34},{t:this.shape_35},{t:this.shape_36,p:{x:79.975}},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_33},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_28,p:{y:161.125}},{t:this.shape_34},{t:this.shape_35},{t:this.shape_37,p:{x:79.975}},{t:this.shape_36,p:{x:93.075}},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_33},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_28,p:{y:161.125}},{t:this.shape_34},{t:this.shape_35},{t:this.shape_38},{t:this.shape_37,p:{x:93.075}},{t:this.shape_36,p:{x:106.175}},{t:this.shape_27},{t:this.shape_26}]},1).wait(127));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.1,179);


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
	this.shape.graphics.f("#642484").s().p("AgVAWQgKgHAAgPQAAgPAKgHQAJgGANAAQAMAAAJAGQAKAHAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape.setTransform(103.175,131.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#642484").s().p("AgVAWQgKgHAAgPQAAgPAKgHQAJgGANAAQAMAAAJAGQAKAHAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_1.setTransform(91.575,131.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#642484").s().p("AgVAWQgKgHAAgPQAAgPAKgHQAJgGANAAQAMAAAJAGQAKAHAAAPQAAAPgKAHQgJAHgMAAQgNAAgJgHg");
	this.shape_2.setTransform(79.975,131.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#642484").s().p("AhEB6IgKgCIAAguIAIABIALAAQAOABAHgJQAHgIAEgMIABgBIhEioIA/AAIAdBiIACAIIAAALIABAAIACgLIACgIIAdhiIA9AAIhEC1QgIAVgKAOQgKAOgPAIQgPAHgXAAg");
	this.shape_3.setTransform(63.925,129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#642484").s().p("Ag1BRQgOgHgHgOQgIgOAAgWIAAhuIA7AAIAABcQAAARAFAJQAEAJAMAAQAPAAAGgOQAGgNAAgZIAAhLIA6AAIAACqIgsAAIgIgVIgDAAQgIANgOAGQgMAFgRAAQgQAAgOgGg");
	this.shape_4.setTransform(43.15,125.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#642484").s().p("ABMBXIAAhcQAAgUgGgHQgFgIgKAAQgOAAgGANQgFAMAAAWIAABQIg7AAIAAhcQAAgTgFgIQgFgIgKAAQgPAAgFAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAVIACAAQAHgLANgGQANgHATAAQASAAAMAGQAMAGAIAMIACAAQAIgMAMgGQANgGARAAQAdAAAPAPQAQAPAAAhIAABug");
	this.shape_5.setTransform(17.525,125.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#642484").s().p("Ag8BXIAAiqIAsAAIAJAbIADAAQAGgNANgIQANgJAPAAIAKAAIAIACIgGA3IgHgBIgNAAQgHAAgJACQgJACgGAHQgFAHAAAPIAABUg");
	this.shape_6.setTransform(169.625,89.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_7.setTransform(151.875,89.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#642484").s().p("AglBXQgPgCgOgGIAAgvQARAHAQADQARAEAJAAQATAAAAgJQgBgEgDgCIgKgHIgWgJQgWgJgKgKQgKgMAAgVQAAgZATgNQAUgNAeAAQARAAAPAEQAPAEAQAHIgQAmQgNgGgNgDQgNgEgHAAQgOAAAAAHQAAAEACACIAJAGIAXAIQAOAHAKAGQAKAHAEAJQAGAKAAAPQAAAQgIANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_8.setTransform(134.35,89.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#642484").s().p("AAYBXIAAhcQAAgRgFgJQgFgJgKAAQgQAAgGAOQgGAOAAAYIAABLIg7AAIAAiqIAtAAIAIAWIACAAQAIgMANgGQAMgHATAAQAaAAARAPQARAPAAAhIAABug");
	this.shape_9.setTransform(109.925,89.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_10.setTransform(89.875,89.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#642484").s().p("AhBBhQgRgXAAgrQAAgrASgXQARgWAcAAQARAAAKAHQAKAHAHALIABAAIgCgSIAAgWIAAguIA7AAIAADqIgtAAIgMgVIgCAAQgHAKgKAHQgLAHgRAAQgbAAgRgWgAgPAAQgHAKAAAWQAAAVAHAKQAGAKALAAQAOAAAGgJQAGgKAAgSIAAgFQAAgUgFgLQgGgKgQAAQgKAAgGAKg");
	this.shape_11.setTransform(70.7,86.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_12.setTransform(51.475,89.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAFAJALAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgIgVIgDAAQgIANgOAGQgNAFgQAAQgQAAgOgGg");
	this.shape_13.setTransform(32.05,89.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#642484").s().p("AhSB8IAAj0IAwAAIAJAVIACAAQAHgKAKgHQAKgIASAAQAdAAAQAYQAQAWAAArQAAAdgIATQgJAUgOAKQgOAKgSAAQgSAAgJgHQgKgGgGgHIgBAAIABANIAAAQIAAA+gAgRhDQgFAIgBATIAAAEQAAAVAFALQAFAJANABQALAAAGgJQAGgKAAgXQAAgXgGgIQgGgKgLAAQgMAAgFAKg");
	this.shape_14.setTransform(12.325,92.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#642484").s().p("AhBBhQgRgXAAgrQAAgrARgXQASgWAcAAQARAAAKAHQAKAHAHALIABAAIgCgSIgBgWIAAguIA8AAIAADqIgtAAIgMgVIgDAAQgGAKgLAHQgJAHgTAAQgaAAgRgWgAgPAAQgHAKAAAWQAAAVAHAKQAHAKAKAAQAOAAAGgJQAGgKABgSIAAgFQAAgUgHgLQgFgKgPAAQgKAAgHAKg");
	this.shape_15.setTransform(124.85,50.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAGAJAKAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgIgVIgDAAQgIANgOAGQgNAFgQAAQgQAAgOgGg");
	this.shape_16.setTransform(105.4,53.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#642484").s().p("AgdB2IAAjrIA7AAIAADrg");
	this.shape_17.setTransform(90.2,50.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#642484").s().p("AhBBLQgPgNAAgdQAAgbATgMQATgOAkgBIAcgBIAAgDQAAgLgGgFQgFgFgKAAQgJAAgNAEIgZAJIgRgnQAPgIATgEQATgEAWAAQAgAAATAQQASAQAAAeIAABwIgpAAIgLgXIgCAAQgHAJgIAGQgHAGgJACQgKADgOAAQgWAAgPgOgAAJAKQgQAAgGAGQgHAFAAAJQAAAJAFAEQAEAEAIAAQAKAAAIgHQAHgHAAgLIAAgNg");
	this.shape_18.setTransform(74.725,53.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQARAHAQADQARAEAKAAQARAAABgJQAAgEgEgCIgKgHIgWgJQgWgJgKgKQgKgMgBgVQAAgZAUgNQATgNAfAAQASAAAOAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgHAAQgOAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAKAHAEAJQAGAKgBAPQAAAQgHANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_19.setTransform(58.05,53.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_20.setTransform(31.775,53.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#642484").s().p("AhBBhQgRgXAAgrQAAgrARgXQASgWAcAAQARAAAJAHQALAHAHALIABAAIgCgSIgBgWIAAguIA8AAIAADqIgsAAIgOgVIgCAAQgGAKgLAHQgKAHgRAAQgbAAgRgWgAgPAAQgHAKAAAWQAAAVAHAKQAHAKAKAAQAOAAAGgJQAGgKABgSIAAgFQgBgUgFgLQgGgKgPAAQgKAAgHAKg");
	this.shape_21.setTransform(11.6,50.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#642484").s().p("AglBXQgPgCgOgGIAAgvQARAHAQADQARAEAJAAQATAAAAgJQgBgEgDgCIgKgHIgWgJQgWgJgKgKQgKgMAAgVQAAgZATgNQAUgNAeAAQARAAAPAEQAPAEAQAHIgQAmQgNgGgNgDQgNgEgHAAQgOAAAAAHQAAAEACACIAJAGIAXAIQAOAHAKAGQAKAHAEAJQAGAKAAAPQAAAQgIANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_22.setTransform(181.15,17.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#642484").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_23.setTransform(162.75,17.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#642484").s().p("Ag8BXIAAiqIAsAAIAJAbIADAAQAGgNANgIQANgJAPAAIAKAAIAIACIgGA3IgHgBIgNAAQgHAAgJACQgJACgGAHQgFAHAAAPIAABUg");
	this.shape_24.setTransform(147.225,17.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#642484").s().p("Ag1BRQgNgHgJgOQgHgOgBgWIAAhuIA8AAIAABcQAAARAEAJQAFAJALAAQAQAAAGgOQAGgNgBgZIAAhLIA8AAIAACqIgtAAIgIgVIgDAAQgIANgOAGQgNAFgPAAQgRAAgOgGg");
	this.shape_25.setTransform(129.25,17.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#642484").s().p("AgsB6QgQgCgOgFIAAgyQAPAGAOAEQAOADAUAAQAiAAABgZIAAgDIABgWIgBAAQgHAKgKAIQgKAHgRAAQgcAAgRgWQgRgXAAgrQAAgrARgWQARgYAcAAQASABAKAGQALAIAHAKIABAAIAFgVIAzAAIAACrQAAAjgXAUQgWASguAAQgUAAgQgCgAgWgiQAAAWAHALQAGAIAMAAQAOAAAGgIQAFgJABgSIAAgIQAAgUgGgKQgFgMgQAAQgYAAAAAsg");
	this.shape_26.setTransform(108.8,20.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#642484").s().p("AgmBQQgUgJgMgUQgMgTAAgfQAAgeALgUQALgUATgJQATgKAYAAQAlAAAWAUQAWATAAAoIAAAZIhpAAQABANAJAJQAKAJARAAQAQAAANgDQANgEAPgGIAAAqQgNAHgOADQgPADgXAAQgZAAgUgJgAAdgUQAAgMgHgIQgGgIgMAAQgJAAgHAHQgHAHgCAOIAyAAIAAAAg");
	this.shape_27.setTransform(89.075,17.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQARAHAQADQARAEAKAAQARAAABgJQAAgEgEgCIgKgHIgWgJQgWgJgKgKQgLgMAAgVQAAgZAUgNQATgNAfAAQASAAAOAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgHAAQgOAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAKAHAEAJQAGAKgBAPQAAAQgHANQgHANgQAHQgQAHgZAAQgSAAgPgCg");
	this.shape_28.setTransform(71.55,17.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#642484").s().p("AglBXQgOgCgPgGIAAgvQAQAHARADQARAEAKAAQARAAAAgJQAAgEgCgCIgLgHIgWgJQgVgJgLgKQgLgMAAgVQAAgZAUgNQATgNAfAAQARAAAPAEQAPAEAQAHIgQAmQgMgGgOgDQgNgEgIAAQgNAAAAAHQAAAEADACIAJAGIAVAIQAPAHAKAGQAJAHAGAJQAEAKAAAPQAAAQgHANQgHANgQAHQgQAHgZAAQgTAAgOgCg");
	this.shape_29.setTransform(47.45,17.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#642484").s().p("AgrBOQgUgKgKgUQgMgUAAgcQAAgqAYgXQAXgXAnAAQAYAAAUALQASAKALATQALAUAAAcQAAArgWAXQgXAXgoAAQgYAAgTgLgAgSggQgHALAAAVQAAAWAHALQAFAMAOAAQANAAAFgMQAGgLABgWQgBgVgGgLQgFgMgOAAQgNAAgFAMg");
	this.shape_30.setTransform(29.55,17.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#642484").s().p("AhHBvIAAjdIA7AAIAACsIBUAAIAAAxg");
	this.shape_31.setTransform(11.65,14.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(0,0,252.1,143), null);


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

	// Layer_3
	this.instance = new lib.CTASPN();
	this.instance.setTransform(-82,-47,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-82,-47,161,63.7), null);


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
	var mask_graphics_0 = new cjs.Graphics().p("EghAACGIAAnmMAsOAAAIAAHmg");
	var mask_graphics_1 = new cjs.Graphics().p("A9XCGIAAnmMAsPAAAIAAHmg");
	var mask_graphics_2 = new cjs.Graphics().p("A5tCGIAAnmMAsOAAAIAAHmg");
	var mask_graphics_3 = new cjs.Graphics().p("A2HCGIAAnmMAsPAAAIAAHmg");
	var mask_graphics_4 = new cjs.Graphics().p("A2HCGIAAnmMAsPAAAIAAHmg");
	var mask_graphics_5 = new cjs.Graphics().p("A2HCGIAAnmMAsPAAAIAAHmg");
	var mask_graphics_6 = new cjs.Graphics().p("A2HCGIAAnmMAsPAAAIAAHmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-211.2974,y:-35.3497}).wait(1).to({graphics:mask_graphics_1,x:-187.9599,y:-35.3497}).wait(1).to({graphics:mask_graphics_2,x:-164.6224,y:-35.3497}).wait(1).to({graphics:mask_graphics_3,x:-140.9987,y:-35.3497}).wait(1).to({graphics:mask_graphics_4,x:-94.3237,y:-35.3497}).wait(1).to({graphics:mask_graphics_5,x:-47.6487,y:-35.3497}).wait(1).to({graphics:mask_graphics_6,x:-0.9737,y:-35.3497}).wait(90).to({graphics:null,x:0,y:0}).wait(1));

	// CLINE alt
	this.instance = new lib.WAHBECLINEoptSPN300x250();
	this.instance.setTransform(-150,-125,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


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


(lib._300x250bordersvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x250-border.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59C4F9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgA2DyIQgdAdAAApMAAAAiFQAAApAdAdQAeAeApAAMAp4AAAQAqAAAdgeQAdgdAAgpMAAAgiFQAAgpgdgdQgdgdgqAAMgp4AAAQgpAAgeAdg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
(lib.Soconfusing_Display_SPA_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [232];
	// timeline functions:
	this.frame_232 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(232).call(this.frame_232).wait(1));

	// border
	this.instance = new lib._300x250bordersvg("synched",0);
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233));

	// HEAD1a
	this.instance_1 = new lib.HEAD1a();
	this.instance_1.setTransform(103.5,73.4,0.7479,0.7479,0,0,0,110.1,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},48).wait(185));

	// HEAD1b
	this.instance_2 = new lib.HEAD1b();
	this.instance_2.setTransform(103.5,73.4,0.7479,0.7479,0,0,0,110.1,58.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({_off:true},86).wait(99));

	// SUBHEAD
	this.instance_3 = new lib.SUBHEAD();
	this.instance_3.setTransform(87.15,253.55,0.58,0.58,0,0,0,0.1,111.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({_off:true},42).wait(99));

	// HEAD2
	this.instance_4 = new lib.HEAD2();
	this.instance_4.setTransform(260,84,1,1,0,0,0,110,58);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(134).to({_off:false},0).wait(99));

	// C_LINE
	this.instance_5 = new lib.CLINE();
	this.instance_5.setTransform(149.95,127.1,1,1,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).wait(73));

	// arrows lower copy
	this.instance_6 = new lib.Arrowslower("synched",0);
	this.instance_6.setTransform(42.85,142.3,0.6804,0.6804,90.0116);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(193).to({_off:false},0).to({x:47.95},6).to({x:42.85},10,cjs.Ease.quadOut).to({x:47.95},6).to({x:42.85},10,cjs.Ease.quadOut).wait(8));

	// arrows lower
	this.instance_7 = new lib.Arrowslower("synched",0);
	this.instance_7.setTransform(251.65,142.5,0.6804,0.6804,-89.9987);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(193).to({_off:false},0).to({x:246.55},6).to({x:251.65},10,cjs.Ease.quadOut).to({x:246.55},6).to({x:251.65},10,cjs.Ease.quadOut).wait(8));

	// CTA
	this.instance_8 = new lib.CTA();
	this.instance_8.setTransform(150,158.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(193).to({_off:false},0).wait(40));

	// LOGOs
	this.instance_9 = new lib.LOGOs();
	this.instance_9.setTransform(150,209.15);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(134).to({_off:false},0).wait(99));

	// puzz
	this.instance_10 = new lib.WAHBEbkgdpuzzopt300x250();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},134).wait(99));

	// BKGD
	this.instance_11 = new lib.WAHBEbkgdopt300x250();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(233));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,125,422.7,127);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/So_confusing_Display_SPA_300x250_atlas_P_1.png", id:"So_confusing_Display_SPA_300x250_atlas_P_1"},
		{src:"images/So_confusing_Display_SPA_300x250_atlas_NP_1.jpg", id:"So_confusing_Display_SPA_300x250_atlas_NP_1"}
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