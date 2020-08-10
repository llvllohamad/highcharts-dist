/*
 Highcharts JS v8.1.2 (2020-08-10)

 Timeline series

 (c) 2010-2019 Highsoft AS
 Author: Daniel Studencki

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/timeline",["highcharts"],function(l){c(l);c.Highcharts=l;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function l(c,l,q,r){c.hasOwnProperty(l)||(c[l]=r.apply(null,q))}c=c?c._modules:{};l(c,"Series/TimelineSeries.js",[c["Core/Globals.js"],c["mixins/legend-symbol.js"],c["Core/Series/Point.js"],c["Core/Renderer/SVG/SVGElement.js"],
c["Core/Utilities.js"]],function(c,l,q,r,f){var p=f.addEvent,x=f.arrayMax,y=f.arrayMin,u=f.defined,z=f.isNumber,t=f.merge,A=f.objectEach,n=f.pick;f=f.seriesType;var m=c.Series,v=c.seriesTypes;f("timeline","line",{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,
allowOverlap:!0,alternate:!0,backgroundColor:"#ffffff",borderWidth:1,borderColor:"#999999",borderRadius:3,color:"#333333",connectorWidth:1,distance:100,formatter:function(){var a=this.series.chart.styledMode?"<span>\u25cf </span>":'<span style="color:'+this.point.color+'">\u25cf </span>';return a+='<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1,verticalAlign:"middle"},marker:{enabledThreshold:0,
symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x"},{trackerGroups:["markerGroup","dataLabelsGroup"],drawLegendSymbol:l.drawRectangle,drawTracker:c.TrackerMixin.drawTrackerPoint,init:function(){var a=this;m.prototype.init.apply(a,arguments);p(a,"afterTranslate",function(){var b,k=Number.MAX_VALUE;a.points.forEach(function(a){a.isInside=a.isInside&&a.visible;a.visible&&!a.isNull&&(u(b)&&(k=Math.min(k,Math.abs(a.plotX-b))),b=a.plotX)});a.closestPointRangePx=k});p(a,"drawDataLabels",
function(){a.distributeDL()});p(a,"afterDrawDataLabels",function(){var b;a.points.forEach(function(a){if(b=a.dataLabel)return b.animate=function(a){this.targetPosition&&(this.targetPosition=a);return r.prototype.animate.apply(this,arguments)},b.targetPosition||(b.targetPosition={}),a.drawConnector()})});p(a.chart,"afterHideOverlappingLabel",function(){a.points.forEach(function(a){a.connector&&a.dataLabel&&a.dataLabel.oldOpacity!==a.dataLabel.newOpacity&&a.alignConnector()})})},alignDataLabel:function(a,
b,k,c){var d=this.chart.inverted,g=this.visibilityMap.filter(function(a){return a}),e=this.visiblePointsCount,h=g.indexOf(a);g=this.options.dataLabels;var w=a.userDLOptions||{};h=g.alternate?h&&h!==e-1?2:1.5:1;e=Math.floor(this.xAxis.len/e);var f=b.padding;if(a.visible){var l=Math.abs(w.x||a.options.dataLabels.x);d?(d=2*(l-f)-a.itemHeight/2,d={width:d+"px",textOverflow:b.width/d*b.height/2>e*h?"ellipsis":"none"}):d={width:(w.width||g.width||e*h-2*f)+"px"};b.css(d);this.chart.styledMode||b.shadow(g.shadow)}m.prototype.alignDataLabel.apply(this,
arguments)},processData:function(){var a=0,b;this.visibilityMap=this.getVisibilityMap();this.visibilityMap.forEach(function(b){b&&a++});this.visiblePointsCount=a;for(b=0;b<this.xData.length;b++)this.yData[b]=1;m.prototype.processData.call(this,arguments)},getXExtremes:function(a){var b=this;a=a.filter(function(a,c){return b.points[c].isValid()&&b.points[c].visible});return{min:y(a),max:x(a)}},generatePoints:function(){var a=this;m.prototype.generatePoints.apply(a);a.points.forEach(function(b,k){b.applyOptions({x:a.xData[k]},
a.xData[k])})},getVisibilityMap:function(){return(this.data.length?this.data:this.userOptions.data).map(function(a){return a&&!1!==a.visible&&!a.isNull?a:!1})},distributeDL:function(){var a=this,b=a.options.dataLabels,k,c,d={},g=1,e=b.distance;a.points.forEach(function(h){h.visible&&!h.isNull&&(k=h.options,c=h.options.dataLabels,a.hasRendered||(h.userDLOptions=t({},c)),d[a.chart.inverted?"x":"y"]=b.alternate&&g%2?-e:e,k.dataLabels=t(d,h.userDLOptions),g++)})},markerAttribs:function(a,b){var k=this.options.marker,
c=a.marker||{},d=c.symbol||k.symbol,g=n(c.width,k.width,this.closestPointRangePx),e=n(c.height,k.height),h=0;if(this.xAxis.dateTime)return v.line.prototype.markerAttribs.call(this,a,b);b&&(k=k.states[b]||{},b=c.states&&c.states[b]||{},h=n(b.radius,k.radius,h+(k.radiusPlus||0)));a.hasImage=d&&0===d.indexOf("url");return{x:Math.floor(a.plotX)-g/2-h/2,y:a.plotY-e/2-h/2,width:g+h,height:e+h}},bindAxes:function(){var a=this;m.prototype.bindAxes.call(a);["xAxis","yAxis"].forEach(function(b){"xAxis"!==b||
a[b].userOptions.type||(a[b].categories=a[b].hasNames=!0)})}},{init:function(){var a=q.prototype.init.apply(this,arguments);a.name=n(a.name,"Event");a.y=1;return a},isValid:function(){return null!==this.options.y},setVisible:function(a,b){var c=this.series;b=n(b,c.options.ignoreHiddenPoint);v.pie.prototype.pointClass.prototype.setVisible.call(this,a,!1);c.processData();b&&c.chart.redraw()},setState:function(){var a=m.prototype.pointClass.prototype.setState;this.isNull||a.apply(this,arguments)},getConnectorPath:function(){var a=
this.series.chart,b=this.series.xAxis.len,c=a.inverted,f=c?"x2":"y2",d=this.dataLabel,g=d.targetPosition,e={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:z(g.y)?g.y:d.y},h=(d.alignAttr||d)[f[0]]<this.series.yAxis.len/2;c&&(e={x1:this.plotY,y1:b-this.plotX,x2:g.x||d.x,y2:b-this.plotX});h&&(e[f]+=d[c?"width":"height"]);A(e,function(a,b){e[b]-=(d.alignAttr||d)[b[0]]});return a.renderer.crispLine([["M",e.x1,e.y1],["L",e.x2,e.y2]],d.options.connectorWidth)},drawConnector:function(){var a=this.series;this.connector||
(this.connector=a.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel));this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()},alignConnector:function(){var a=this.series,b=this.connector,c=this.dataLabel,f=this.dataLabel.options=t(a.options.dataLabels,this.options.dataLabels),d=this.series.chart,g=b.getBBox(),e=g.x+c.translateX;g=g.y+c.translateY;d.inverted?g-=c.options.connectorWidth/2:e+=c.options.connectorWidth/2;d=d.isInsidePlot(e,
g);b[d?"animate":"attr"]({d:this.getConnectorPath()});a.chart.styledMode||b.attr({stroke:f.connectorColor||this.color,"stroke-width":f.connectorWidth,opacity:c[u(c.newOpacity)?"newOpacity":"opacity"]})}});""});l(c,"masters/modules/timeline.src.js",[],function(){})});
//# sourceMappingURL=timeline.js.map