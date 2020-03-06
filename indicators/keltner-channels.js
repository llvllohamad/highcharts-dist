/*
 Highstock JS v8.0.3 (2020-03-05)

 Indicator series type for Highstock

 (c) 2010-2019 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/keltner-channels",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,b,d,h){a.hasOwnProperty(b)||(a[b]=h.apply(null,d))}a=a?a._modules:{};d(a,"mixins/multipe-lines.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,b){var d=
b.defined,h=b.error,p=b.merge,e=a.each,q=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(f){var a=[];e(this.pointArrayMap,function(c){c!==f&&a.push("plot"+c.charAt(0).toUpperCase()+c.slice(1))});return a},toYData:function(f){var a=[];e(this.pointArrayMap,function(c){a.push(f[c])});return a},translate:function(){var a=this,b=a.pointArrayMap,c=[],k;c=a.getTranslatedLinesNames();q.prototype.translate.apply(a,arguments);
e(a.points,function(f){e(b,function(b,d){k=f[b];null!==k&&(f[c[d]]=a.yAxis.toPixels(k,!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,c=a.points,k=c.length,u=a.options,y=a.graph,l={options:{gapSize:u.gapSize}},m=[],x=a.getTranslatedLinesNames(a.pointValKey),g;e(x,function(a,b){for(m[b]=[];k--;)g=c[k],m[b].push({x:g.x,plotX:g.plotX,plotY:g[a],isNull:!d(g[a])});k=c.length});e(b,function(b,c){m[c]?(a.points=m[c],u[b]?a.options=p(u[b].styles,l):h('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),
a.graph=a["graph"+b],q.prototype.drawGraph.call(a),a["graph"+b]=a.graph):h('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=c;a.options=u;a.graph=y;q.prototype.drawGraph.call(a)}}});d(a,"indicators/keltner-channels.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"],a["mixins/multipe-lines.js"]],function(a,b,d){var h=b.correctFloat,p=b.merge;b=b.seriesType;var e=a.seriesTypes.sma,q=a.seriesTypes.ema,f=a.seriesTypes.atr;
b("keltnerchannels","sma",{params:{period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1},p(d,{pointArrayMap:["top","middle",
"bottom"],pointValKey:"middle",nameBase:"Keltner Channels",nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],requiredIndicators:["ema","atr"],init:function(){e.prototype.init.apply(this,arguments);this.options=p({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)},getValues:function(a,b){var c=b.period,d=b.periodATR,e=b.multiplierATR,l=a.yData;l=l?l.length:0;var m=[];b=q.prototype.getValues(a,{period:c,index:b.index});
var p=f.prototype.getValues(a,{period:d}),g=[],v=[],r;if(!(l<c)){for(r=c;r<=l;r++){var n=b.values[r-c];var t=p.values[r-d];var w=n[0];a=h(n[1]+e*t[1]);t=h(n[1]-e*t[1]);n=n[1];m.push([w,a,n,t]);g.push(w);v.push([a,n,t])}return{values:m,xData:g,yData:v}}}}));""});d(a,"masters/indicators/keltner-channels.src.js",[],function(){})});
//# sourceMappingURL=keltner-channels.js.map