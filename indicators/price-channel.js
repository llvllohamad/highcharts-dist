/*
 Highstock JS v8.1.2 (2020-08-10)

 Indicator series type for Highstock

 (c) 2010-2019 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/price-channel",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,b,t,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,t))}a=a?a._modules:{};c(a,"mixins/reduce-array.js",[],function(){return{minInArray:function(a,b){return a.reduce(function(a,
e){return Math.min(a,e[b])},Number.MAX_VALUE)},maxInArray:function(a,b){return a.reduce(function(a,e){return Math.max(a,e[b])},-Number.MAX_VALUE)},getArrayExtremes:function(a,b,c){return a.reduce(function(a,m){return[Math.min(a[0],m[b]),Math.max(a[1],m[c])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});c(a,"mixins/multipe-lines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,b){var c=b.defined,e=b.error,m=b.merge,k=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",
linesApiNames:["bottomLine"],getTranslatedLinesNames:function(a){var f=[];(this.pointArrayMap||[]).forEach(function(d){d!==a&&f.push("plot"+d.charAt(0).toUpperCase()+d.slice(1))});return f},toYData:function(a){var f=[];(this.pointArrayMap||[]).forEach(function(d){f.push(a[d])});return f},translate:function(){var a=this,b=a.pointArrayMap,d=[],c;d=a.getTranslatedLinesNames();k.prototype.translate.apply(a,arguments);a.points.forEach(function(f){b.forEach(function(b,e){c=f[b];null!==c&&(f[d[e]]=a.yAxis.toPixels(c,
!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,d=a.points,r=d.length,p=a.options,q=a.graph,h={options:{gapSize:p.gapSize}},l=[],g;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(l[b]=[];r--;)g=d[r],l[b].push({x:g.x,plotX:g.plotX,plotY:g[a],isNull:!c(g[a])});r=d.length});b.forEach(function(b,d){l[d]?(a.points=l[d],p[b]?a.options=m(p[b].styles,h):e('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),
a.graph=a["graph"+b],k.prototype.drawGraph.call(a),a["graph"+b]=a.graph):e('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=d;a.options=p;a.graph=q;k.prototype.drawGraph.call(a)}}});c(a,"Stock/Indicators/PCIndicator.js",[a["Core/Utilities.js"],a["mixins/reduce-array.js"],a["mixins/multipe-lines.js"]],function(a,b,c){var e=a.merge;a=a.seriesType;var m=b.getArrayExtremes;a("pc","sma",{params:{period:20},lineWidth:1,
topLine:{styles:{lineColor:"#90ed7d",lineWidth:1}},bottomLine:{styles:{lineColor:"#f45b5b",lineWidth:1}},dataGrouping:{approximation:"averages"}},e(c,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Price Channel",nameComponents:["period"],linesApiNames:["topLine","bottomLine"],getValues:function(a,b){b=b.period;var c=a.xData,d=(a=a.yData)?a.length:0,e=[],f=[],q=[],h;if(!(d<b)){for(h=b;h<=d;h++){var l=c[h-1];var g=a.slice(h-b,h);var n=m(g,2,1);g=n[1];var k=n[0];n=(g+k)/2;e.push([l,
g,n,k]);f.push(l);q.push([g,n,k])}return{values:e,xData:f,yData:q}}}}));""});c(a,"masters/indicators/price-channel.src.js",[],function(){})});
//# sourceMappingURL=price-channel.js.map