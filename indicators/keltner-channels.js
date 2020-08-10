/*
 Highstock JS v8.1.2 (2020-08-10)

 Indicator series type for Highstock

 (c) 2010-2019 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/keltner-channels",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,b,d,k){a.hasOwnProperty(b)||(a[b]=k.apply(null,d))}a=a?a._modules:{};d(a,"mixins/multipe-lines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,b){var d=
b.defined,k=b.error,l=b.merge,m=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(g){var a=[];(this.pointArrayMap||[]).forEach(function(c){c!==g&&a.push("plot"+c.charAt(0).toUpperCase()+c.slice(1))});return a},toYData:function(g){var a=[];(this.pointArrayMap||[]).forEach(function(c){a.push(g[c])});return a},translate:function(){var a=this,b=a.pointArrayMap,c=[],e;c=a.getTranslatedLinesNames();m.prototype.translate.apply(a,
arguments);a.points.forEach(function(g){b.forEach(function(b,d){e=g[b];null!==e&&(g[c[d]]=a.yAxis.toPixels(e,!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,c=a.points,e=c.length,r=a.options,w=a.graph,x={options:{gapSize:r.gapSize}},f=[],h;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(f[b]=[];e--;)h=c[e],f[b].push({x:h.x,plotX:h.plotX,plotY:h[a],isNull:!d(h[a])});e=c.length});b.forEach(function(b,c){f[c]?(a.points=f[c],r[b]?a.options=l(r[b].styles,x):k('Error: "There is no '+
b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],m.prototype.drawGraph.call(a),a["graph"+b]=a.graph):k('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=c;a.options=r;a.graph=w;m.prototype.drawGraph.call(a)}}});d(a,"Stock/Indicators/KeltnerChannelsIndicator.js",[a["Core/Globals.js"],a["Core/Utilities.js"],a["mixins/multipe-lines.js"]],
function(a,b,d){var k=b.correctFloat,l=b.merge;b=b.seriesType;var m=a.seriesTypes.sma,g=a.seriesTypes.ema,v=a.seriesTypes.atr;b("keltnerchannels","sma",{params:{period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},
marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1},l(d,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Keltner Channels",nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],requiredIndicators:["ema","atr"],init:function(){m.prototype.init.apply(this,arguments);this.options=l({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.period,
d=b.periodATR,e=b.multiplierATR,f=a.yData;f=f?f.length:0;var h=[];b=g.prototype.getValues(a,{period:c,index:b.index});var m=v.prototype.getValues(a,{period:d}),l=[],t=[],p;if(!(f<c)){for(p=c;p<=f;p++){var n=b.values[p-c];var q=m.values[p-d];var u=n[0];a=k(n[1]+e*q[1]);q=k(n[1]-e*q[1]);n=n[1];h.push([u,a,n,q]);l.push(u);t.push([a,n,q])}return{values:h,xData:l,yData:t}}}}));""});d(a,"masters/indicators/keltner-channels.src.js",[],function(){})});
//# sourceMappingURL=keltner-channels.js.map