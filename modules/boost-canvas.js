/*
 Highcharts JS v8.1.2 (2020-08-10)

 Boost module

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(f){"object"===typeof module&&module.exports?(f["default"]=f,module.exports=f):"function"===typeof define&&define.amd?define("highcharts/modules/boost-canvas",["highcharts"],function(q){f(q);f.Highcharts=q;return f}):f("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(f){function q(f,r,q,m){f.hasOwnProperty(r)||(f[r]=m.apply(null,q))}f=f?f._modules:{};q(f,"Extensions/BoostCanvas.js",[f["Core/Chart/Chart.js"],f["Core/Globals.js"],f["Core/Color.js"],f["Core/Utilities.js"]],function(f,
r,q,m){var ba=q.parse,z=m.addEvent,x=m.extend,ca=m.fireEvent,da=m.isNumber,ea=m.merge,fa=m.pick,w=m.wrap,A=r.win.document,ha=function(){},B=r.Series,n=r.seriesTypes,L;r.initCanvasBoost=function(){r.seriesTypes.heatmap&&w(r.seriesTypes.heatmap.prototype,"drawPoints",function(){var a=this.chart,b=this.getContext(),e=this.chart.inverted,f=this.xAxis,c=this.yAxis;b?(this.points.forEach(function(d){var g=d.plotY;"undefined"===typeof g||isNaN(g)||null===d.y||(g=d.shapeArgs,d=a.styledMode?d.series.colorAttribs(d):
d.series.pointAttribs(d),b.fillStyle=d.fill,e?b.fillRect(c.len-g.y+f.left,f.len-g.x+c.top,-g.height,-g.width):b.fillRect(g.x+f.left,g.y+c.top,g.width,g.height))}),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, <br>please use a modern browser")});x(B.prototype,{getContext:function(){var a=this.chart,b=a.chartWidth,e=a.chartHeight,d=a.seriesGroup||this.group,c=this,f=function(a,c,e,b,f,d,g){a.call(this,e,c,b,f,d,g)};a.isChartSeriesBoosting()&&(c=a,d=a.seriesGroup);
var g=c.ctx;c.canvas||(c.canvas=A.createElement("canvas"),c.renderTarget=a.renderer.image("",0,0,b,e).addClass("highcharts-boost-canvas").add(d),c.ctx=g=c.canvas.getContext("2d"),a.inverted&&["moveTo","lineTo","rect","arc"].forEach(function(a){w(g,a,f)}),c.boostCopy=function(){c.renderTarget.attr({href:c.canvas.toDataURL("image/png")})},c.boostClear=function(){g.clearRect(0,0,c.canvas.width,c.canvas.height);c===this&&c.renderTarget.attr({href:""})},c.boostClipRect=a.renderer.clipRect(),c.renderTarget.clip(c.boostClipRect));
c.canvas.width!==b&&(c.canvas.width=b);c.canvas.height!==e&&(c.canvas.height=e);c.renderTarget.attr({x:0,y:0,width:b,height:e,style:"pointer-events: none",href:""});c.boostClipRect.attr(a.getBoostClipRect(c));return g},canvasToSVG:function(){this.chart.isChartSeriesBoosting()?this.boostClear&&this.boostClear():(this.boostCopy||this.chart.boostCopy)&&(this.boostCopy||this.chart.boostCopy)()},cvsLineTo:function(a,b,e){a.lineTo(b,e)},renderCanvas:function(){var a=this,b=a.options,e=a.chart,f=this.xAxis,
c=this.yAxis,n=(e.options.boost||{}).timeRendering||!1,g=0,w=a.processedXData,A=a.processedYData,M=b.data,k=f.getExtremes(),C=k.min,D=k.max;k=c.getExtremes();var B=k.min,ia=k.max,N={},E,ja=!!a.sampling,F=b.marker&&b.marker.radius,O=this.cvsDrawPoint,G=b.lineWidth?this.cvsLineTo:void 0,P=F&&1>=F?this.cvsMarkerSquare:this.cvsMarkerCircle,ka=this.cvsStrokeBatch||1E3,la=!1!==b.enableMouseTracking,Q;k=b.threshold;var u=c.getThreshold(k),R=da(k),S=u,ma=this.fill,T=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),
U=!!b.stacking,V=a.cropStart||0;k=e.options.loading;var na=a.requireSorting,W,oa=b.connectNulls,X=!w,H,I,v,y,J,t=U?a.data:w||M,pa=a.fillOpacity?(new q(a.color)).setOpacity(fa(b.fillOpacity,.75)).get():a.color,Y=function(){ma?(l.fillStyle=pa,l.fill()):(l.strokeStyle=a.color,l.lineWidth=b.lineWidth,l.stroke())},Z=function(c,b,f,d){0===g&&(l.beginPath(),G&&(l.lineJoin="round"));e.scroller&&"highcharts-navigator-series"===a.options.className?(b+=e.scroller.top,f&&(f+=e.scroller.top)):b+=e.plotTop;c+=
e.plotLeft;W?l.moveTo(c,b):O?O(l,c,b,f,Q):G?G(l,c,b):P&&P.call(a,l,c,b,F,d);g+=1;g===ka&&(Y(),g=0);Q={clientX:c,plotY:b,yBottom:f}},qa="x"===b.findNearestPointBy,aa=this.xData||this.options.xData||this.processedXData||!1,K=function(a,b,d){J=qa?a:a+","+b;la&&!N[J]&&(N[J]=!0,e.inverted&&(a=f.len-a,b=c.len-b),ra.push({x:aa?aa[V+d]:!1,clientX:a,plotX:a,plotY:b,i:V+d}))};this.renderTarget&&this.renderTarget.attr({href:""});(this.points||this.graph)&&this.destroyGraphics();a.plotGroup("group","series",
a.visible?"visible":"hidden",b.zIndex,e.seriesGroup);a.markerGroup=a.group;z(a,"destroy",function(){a.markerGroup=null});var ra=this.points=[];var l=this.getContext();a.buildKDTree=ha;this.boostClear&&this.boostClear();this.visible&&(99999<M.length&&(e.options.loading=ea(k,{labelStyle:{backgroundColor:ba("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),m.clearTimeout(L),e.showLoading("Drawing..."),e.options.loading=k),n&&console.time("canvas rendering"),
r.eachAsync(t,function(b,d){var g=!1,n=!1,k=!1,l=!1,q="undefined"===typeof e.index,r=!0;if(!q){if(X){var p=b[0];var h=b[1];t[d+1]&&(k=t[d+1][0]);t[d-1]&&(l=t[d-1][0])}else p=b,h=A[d],t[d+1]&&(k=t[d+1]),t[d-1]&&(l=t[d-1]);k&&k>=C&&k<=D&&(g=!0);l&&l>=C&&l<=D&&(n=!0);if(T){X&&(h=b.slice(1,3));var m=h[0];h=h[1]}else U&&(p=b.x,h=b.stackY,m=h-b.y);b=null===h;na||(r=h>=B&&h<=ia);if(!b&&(p>=C&&p<=D&&r||g||n))if(p=Math.round(f.toPixels(p,!0)),ja){if("undefined"===typeof v||p===E){T||(m=h);if("undefined"===
typeof y||h>I)I=h,y=d;if("undefined"===typeof v||m<H)H=m,v=d}p!==E&&("undefined"!==typeof v&&(h=c.toPixels(I,!0),u=c.toPixels(H,!0),Z(p,R?Math.min(h,S):h,R?Math.max(u,S):u,d),K(p,h,y),u!==h&&K(p,u,v)),v=y=void 0,E=p)}else h=Math.round(c.toPixels(h,!0)),Z(p,h,u,d),K(p,h,d);W=b&&!oa;0===d%5E4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!q},function(){var b=e.loadingDiv,c=e.loadingShown;Y();a.canvasToSVG();n&&console.timeEnd("canvas rendering");ca(a,"renderedCanvas");
c&&(x(b.style,{transition:"opacity 250ms",opacity:0}),e.loadingShown=!1,L=setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b);e.loadingDiv=e.loadingSpan=null},250));delete a.buildKDTree;a.buildKDTree()},e.renderer.forExport?Number.MAX_VALUE:void 0))}});n.scatter.prototype.cvsMarkerCircle=function(a,b,e,d){a.moveTo(b,e);a.arc(b,e,d,0,2*Math.PI,!1)};n.scatter.prototype.cvsMarkerSquare=function(a,b,e,d){a.rect(b-d,e-d,2*d,2*d)};n.scatter.prototype.fill=!0;n.bubble&&(n.bubble.prototype.cvsMarkerCircle=
function(a,b,e,d,c){a.moveTo(b,e);a.arc(b,e,this.radii&&this.radii[c],0,2*Math.PI,!1)},n.bubble.prototype.cvsStrokeBatch=1);x(n.area.prototype,{cvsDrawPoint:function(a,b,e,d,c){c&&b!==c.clientX&&(a.moveTo(c.clientX,c.yBottom),a.lineTo(c.clientX,c.plotY),a.lineTo(b,e),a.lineTo(b,d))},fill:!0,fillOpacity:!0,sampling:!0});x(n.column.prototype,{cvsDrawPoint:function(a,b,e,d){a.rect(b-1,e,1,d-e)},fill:!0,sampling:!0});f.prototype.callbacks.push(function(a){z(a,"predraw",function(){a.renderTarget&&a.renderTarget.attr({href:""});
a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)});z(a,"render",function(){a.boostCopy&&a.boostCopy()})})}});q(f,"masters/modules/boost-canvas.src.js",[],function(){})});
//# sourceMappingURL=boost-canvas.js.map