/*
 Highcharts JS v8.1.2 (2020-08-10)

 Marker clusters module for Highcharts

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(t){"object"===typeof module&&module.exports?(t["default"]=t,module.exports=t):"function"===typeof define&&define.amd?define("highcharts/modules/marker-clusters",["highcharts"],function(y){t(y);t.Highcharts=y;return t}):t("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(t){function y(t,F,C,y){t.hasOwnProperty(F)||(t[F]=y.apply(null,C))}t=t?t._modules:{};y(t,"Extensions/MarkerClusters.js",[t["Core/Chart/Chart.js"],t["Core/Globals.js"],t["Core/Options.js"],t["Core/Series/Point.js"],
t["Core/Renderer/SVG/SVGRenderer.js"],t["Core/Utilities.js"]],function(t,y,C,P,Z,v){function I(a){var b=a.length,e=0,f=0,c;for(c=0;c<b;c++)e+=a[c].x,f+=a[c].y;return{x:e/b,y:f/b}}function F(a,b){var e=[];e.length=b;a.clusters.forEach(function(a){a.data.forEach(function(a){e[a.dataIndex]=a})});a.noise.forEach(function(a){e[a.data[0].dataIndex]=a.data[0]});return e}function Q(a,b,e,f,c){a.point&&(f&&a.point.graphic&&(a.point.graphic.show(),a.point.graphic.attr({opacity:b}).animate({opacity:1},e)),c&&
a.point.dataLabel&&(a.point.dataLabel.show(),a.point.dataLabel.attr({opacity:b}).animate({opacity:1},e)))}function R(a,b,e){a.point&&(b&&a.point.graphic&&a.point.graphic.hide(),e&&a.point.dataLabel&&a.point.dataLabel.hide())}function aa(a){a&&S(a,function(a){a.point&&a.point.destroy&&a.point.destroy()})}function L(a,b,e,f){Q(a,f,e,!0,!0);b.forEach(function(a){a.point&&a.point.destroy&&a.point.destroy()})}C=C.defaultOptions;var B=v.addEvent,T=v.animObject,D=v.defined,U=v.error,V=v.isArray,M=v.isFunction,
N=v.isObject,G=v.isNumber,O=v.merge,S=v.objectEach,W=v.relativeLength,J=v.syncTimeout;"";v=y.Series;var w=y.seriesTypes.scatter,X=v.prototype.generatePoints,Y=0,K=[],E={enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},
inside:!0}};(C.plotOptions||{}).series=O((C.plotOptions||{}).series,{cluster:E,tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}});Z.prototype.symbols.cluster=function(a,b,e,f){e/=2;f/=2;var c=this.arc(a+e,b+f,e-4,f-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1});var k=this.arc(a+e,b+f,e-3,f-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:e-2,open:!1});return this.arc(a+e,b+f,e-1,f-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:e,open:!1}).concat(k,c)};w.prototype.animateClusterPoint=
function(a){var b=this.xAxis,e=this.yAxis,f=this.chart,c=T((this.options.cluster||{}).animation),k=c.duration||500,h=(this.markerClusterInfo||{}).pointsState,m=(h||{}).newState,r=(h||{}).oldState,g=[],l=h=0,p=0,q=!1,u=!1;if(r&&m){var d=m[a.stateId];l=b.toPixels(d.x)-f.plotLeft;p=e.toPixels(d.y)-f.plotTop;if(1===d.parentsId.length){a=(m||{})[a.stateId].parentsId[0];var n=r[a];d.point&&d.point.graphic&&n&&n.point&&n.point.plotX&&n.point.plotY&&n.point.plotX!==d.point.plotX&&n.point.plotY!==d.point.plotY&&
(a=d.point.graphic.getBBox(),h=a.width/2,d.point.graphic.attr({x:n.point.plotX-h,y:n.point.plotY-h}),d.point.graphic.animate({x:l-(d.point.graphic.radius||0),y:p-(d.point.graphic.radius||0)},c,function(){u=!0;n.point&&n.point.destroy&&n.point.destroy()}),d.point.dataLabel&&d.point.dataLabel.alignAttr&&n.point.dataLabel&&n.point.dataLabel.alignAttr&&(d.point.dataLabel.attr({x:n.point.dataLabel.alignAttr.x,y:n.point.dataLabel.alignAttr.y}),d.point.dataLabel.animate({x:d.point.dataLabel.alignAttr.x,
y:d.point.dataLabel.alignAttr.y},c)))}else 0===d.parentsId.length?(R(d,!0,!0),J(function(){Q(d,.1,c,!0,!0)},k/2)):(R(d,!0,!0),d.parentsId.forEach(function(a){r&&r[a]&&(n=r[a],g.push(n),n.point&&n.point.graphic&&(q=!0,n.point.graphic.show(),n.point.graphic.animate({x:l-(n.point.graphic.radius||0),y:p-(n.point.graphic.radius||0),opacity:.4},c,function(){u=!0;L(d,g,c,.7)}),n.point.dataLabel&&-9999!==n.point.dataLabel.y&&d.point&&d.point.dataLabel&&d.point.dataLabel.alignAttr&&(n.point.dataLabel.show(),
n.point.dataLabel.animate({x:d.point.dataLabel.alignAttr.x,y:d.point.dataLabel.alignAttr.y,opacity:.4},c))))}),J(function(){u||L(d,g,c,.85)},k),q||J(function(){L(d,g,c,.1)},k/2))}};w.prototype.getGridOffset=function(){var a=this.chart,b=this.xAxis,e=this.yAxis;b=this.dataMinX&&this.dataMaxX?b.reversed?b.toPixels(this.dataMaxX):b.toPixels(this.dataMinX):a.plotLeft;a=this.dataMinY&&this.dataMaxY?e.reversed?e.toPixels(this.dataMinY):e.toPixels(this.dataMaxY):a.plotTop;return{plotLeft:b,plotTop:a}};w.prototype.getScaledGridSize=
function(a){var b=this.xAxis,e=!0,f=1,c=1;a=a.processedGridSize||E.layoutAlgorithm.gridSize;this.gridValueSize||(this.gridValueSize=Math.abs(b.toValue(a)-b.toValue(0)));b=b.toPixels(this.gridValueSize)-b.toPixels(0);for(b=+(a/b).toFixed(14);e&&1!==b;){var k=Math.pow(2,f);.75<b&&1.25>b?e=!1:b>=1/k&&b<1/k*2?(e=!1,c=k):b<=k&&b>k/2&&(e=!1,c=1/k);f++}return a/c/b};w.prototype.getRealExtremes=function(){var a=this.chart,b=this.xAxis,e=this.yAxis;var f=b?b.toValue(a.plotLeft):0;b=b?b.toValue(a.plotLeft+
a.plotWidth):0;var c=e?e.toValue(a.plotTop):0;a=e?e.toValue(a.plotTop+a.plotHeight):0;f>b&&(f=[f,b],b=f[0],f=f[1]);c>a&&(c=[c,a],a=c[0],c=c[1]);return{minX:f,maxX:b,minY:c,maxY:a}};w.prototype.onDrillToCluster=function(a){(a.point||a.target).firePointEvent("drillToCluster",a,function(a){var b=a.point||a.target,f=b.series.xAxis,c=b.series.yAxis,k=b.series.chart;if((b.series.options.cluster||{}).drillToCluster&&b.clusteredData){var h=b.clusteredData.map(function(a){return a.x}).sort(function(a,b){return a-
b});var m=b.clusteredData.map(function(a){return a.y}).sort(function(a,b){return a-b});b=h[0];var r=h[h.length-1];h=m[0];var g=m[m.length-1];m=Math.abs(.1*(r-b));var l=Math.abs(.1*(g-h));k.pointer.zoomX=!0;k.pointer.zoomY=!0;b>r&&(r=[r,b],b=r[0],r=r[1]);h>g&&(g=[g,h],h=g[0],g=g[1]);k.zoom({originalEvent:a,xAxis:[{axis:f,min:b-m,max:r+m}],yAxis:[{axis:c,min:h-l,max:g+l}]})}})};w.prototype.getClusterDistancesFromPoint=function(a,b,e){var f=this.xAxis,c=this.yAxis,k=[],h;for(h=0;h<a.length;h++){var m=
Math.sqrt(Math.pow(f.toPixels(b)-f.toPixels(a[h].posX),2)+Math.pow(c.toPixels(e)-c.toPixels(a[h].posY),2));k.push({clusterIndex:h,distance:m})}return k.sort(function(a,b){return a.distance-b.distance})};w.prototype.getPointsState=function(a,b,e){b=b?F(b,e):[];e=F(a,e);var f={},c;K=[];a.clusters.forEach(function(a){f[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}});a.noise.forEach(function(a){f[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}});for(c=0;c<e.length;c++){a=
e[c];var k=b[c];a&&k&&a.parentStateId&&k.parentStateId&&f[a.parentStateId]&&-1===f[a.parentStateId].parentsId.indexOf(k.parentStateId)&&(f[a.parentStateId].parentsId.push(k.parentStateId),-1===K.indexOf(k.parentStateId)&&K.push(k.parentStateId))}return f};w.prototype.markerClusterAlgorithms={grid:function(a,b,e,f){var c=this.xAxis,k=this.yAxis,h={},m=this.getGridOffset(),r;f=this.getScaledGridSize(f);for(r=0;r<a.length;r++){var g=c.toPixels(a[r])-m.plotLeft;var l=k.toPixels(b[r])-m.plotTop;g=Math.floor(g/
f);l=Math.floor(l/f);l=l+"-"+g;h[l]||(h[l]=[]);h[l].push({dataIndex:e[r],x:a[r],y:b[r]})}return h},kmeans:function(a,b,e,f){var c=[],k=[],h={},m=f.processedDistance||E.layoutAlgorithm.distance,r=f.iterations,g=0,l=!0,p=0,q=0;var u=[];var d;f.processedGridSize=f.processedDistance;p=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,a,b,e,f):{};for(d in p)1<p[d].length&&(u=I(p[d]),c.push({posX:u.x,posY:u.y,oldX:0,oldY:0,startPointsLen:p[d].length,points:[]}));for(;l;){c.map(function(a){a.points.length=
0;return a});for(l=k.length=0;l<a.length;l++)p=a[l],q=b[l],u=this.getClusterDistancesFromPoint(c,p,q),u.length&&u[0].distance<m?c[u[0].clusterIndex].points.push({x:p,y:q,dataIndex:e[l]}):k.push({x:p,y:q,dataIndex:e[l]});for(d=0;d<c.length;d++)1===c[d].points.length&&(u=this.getClusterDistancesFromPoint(c,c[d].points[0].x,c[d].points[0].y),u[1].distance<m&&(c[u[1].clusterIndex].points.push(c[d].points[0]),c[u[0].clusterIndex].points.length=0));l=!1;for(d=0;d<c.length;d++)if(u=I(c[d].points),c[d].oldX=
c[d].posX,c[d].oldY=c[d].posY,c[d].posX=u.x,c[d].posY=u.y,c[d].posX>c[d].oldX+1||c[d].posX<c[d].oldX-1||c[d].posY>c[d].oldY+1||c[d].posY<c[d].oldY-1)l=!0;r&&(l=g<r-1);g++}c.forEach(function(a,b){h["cluster"+b]=a.points});k.forEach(function(a,b){h["noise"+b]=[a]});return h},optimizedKmeans:function(a,b,e,f){var c=this.xAxis,k=this.yAxis,h=f.processedDistance||E.layoutAlgorithm.gridSize,m={},r=this.getRealExtremes(),g=(this.options.cluster||{}).marker,l,p,q;!this.markerClusterInfo||this.initMaxX&&this.initMaxX<
r.maxX||this.initMinX&&this.initMinX>r.minX||this.initMaxY&&this.initMaxY<r.maxY||this.initMinY&&this.initMinY>r.minY?(this.initMaxX=r.maxX,this.initMinX=r.minX,this.initMaxY=r.maxY,this.initMinY=r.minY,m=this.markerClusterAlgorithms?this.markerClusterAlgorithms.kmeans.call(this,a,b,e,f):{},this.baseClusters=null):(this.baseClusters||(this.baseClusters={clusters:this.markerClusterInfo.clusters,noise:this.markerClusterInfo.noise}),this.baseClusters.clusters.forEach(function(a){a.pointsOutside=[];a.pointsInside=
[];a.data.forEach(function(b){p=Math.sqrt(Math.pow(c.toPixels(b.x)-c.toPixels(a.x),2)+Math.pow(k.toPixels(b.y)-k.toPixels(a.y),2));q=a.clusterZone&&a.clusterZone.marker&&a.clusterZone.marker.radius?a.clusterZone.marker.radius:g&&g.radius?g.radius:E.marker.radius;l=0<=h-q?h-q:q;p>q+l&&D(a.pointsOutside)?a.pointsOutside.push(b):D(a.pointsInside)&&a.pointsInside.push(b)});a.pointsInside.length&&(m[a.id]=a.pointsInside);a.pointsOutside.forEach(function(b,f){m[a.id+"_noise"+f]=[b]})}),this.baseClusters.noise.forEach(function(a){m[a.id]=
a.data}));return m}};w.prototype.preventClusterCollisions=function(a){var b=this.xAxis,e=this.yAxis,f=a.key.split("-").map(parseFloat),c=f[0],k=f[1],h=a.gridSize,m=a.groupedData,r=a.defaultRadius,g=a.clusterRadius,l=k*h,p=c*h,q=b.toPixels(a.x),u=e.toPixels(a.y);f=[];var d=0,n=0,t=(this.options.cluster||{}).marker,x=(this.options.cluster||{}).zones,v=this.getGridOffset(),w,y,A,B,C,F,G;q-=v.plotLeft;u-=v.plotTop;for(A=1;5>A;A++){var H=A%2?-1:1;var z=3>A?-1:1;H=Math.floor((q+H*g)/h);z=Math.floor((u+
z*g)/h);H=[z+"-"+H,z+"-"+k,c+"-"+H];for(z=0;z<H.length;z++)-1===f.indexOf(H[z])&&H[z]!==a.key&&f.push(H[z])}f.forEach(function(a){if(m[a]){m[a].posX||(F=I(m[a]),m[a].posX=F.x,m[a].posY=F.y);w=b.toPixels(m[a].posX||0)-v.plotLeft;y=e.toPixels(m[a].posY||0)-v.plotTop;var f=a.split("-").map(parseFloat);C=f[0];B=f[1];if(x)for(d=m[a].length,A=0;A<x.length;A++)d>=x[A].from&&d<=x[A].to&&(n=D((x[A].marker||{}).radius)?x[A].marker.radius||0:t&&t.radius?t.radius:E.marker.radius);1<m[a].length&&0===n&&t&&t.radius?
n=t.radius:1===m[a].length&&(n=r);G=g+n;n=0;B!==k&&Math.abs(q-w)<G&&(q=0>B-k?l+g:l+h-g);C!==c&&Math.abs(u-y)<G&&(u=0>C-c?p+g:p+h-g)}});f=b.toValue(q+v.plotLeft);z=e.toValue(u+v.plotTop);m[a.key].posX=f;m[a.key].posY=z;return{x:f,y:z}};w.prototype.isValidGroupedDataObject=function(a){var b=!1,e;if(!N(a))return!1;S(a,function(a){b=!0;if(V(a)&&a.length)for(e=0;e<a.length;e++){if(!N(a[e])||!a[e].x||!a[e].y){b=!1;break}}else b=!1});return b};w.prototype.getClusteredData=function(a,b){var e=[],f=[],c=[],
k=[],h=[],m=0,r=Math.max(2,b.minimumClusterSize||2),g,l;if(M(b.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(a))return U("Highcharts marker-clusters module: The custom algorithm result is not valid!",!1,this.chart),!1;for(l in a)if(a[l].length>=r){var p=a[l];var q=Math.random().toString(36).substring(2,7)+"-"+Y++;var u=p.length;if(b.zones)for(g=0;g<b.zones.length;g++)if(u>=b.zones[g].from&&u<=b.zones[g].to){var d=b.zones[g];d.zoneIndex=g;var n=b.zones[g].marker;var t=b.zones[g].className}var x=
I(p);"grid"!==b.layoutAlgorithm.type||b.allowOverlap?x={x:x.x,y:x.y}:(g=this.options.marker||{},x=this.preventClusterCollisions({x:x.x,y:x.y,key:l,groupedData:a,gridSize:this.getScaledGridSize(b.layoutAlgorithm),defaultRadius:g.radius||3+(g.lineWidth||0),clusterRadius:n&&n.radius?n.radius:(b.marker||{}).radius||E.marker.radius}));for(g=0;g<u;g++)p[g].parentStateId=q;c.push({x:x.x,y:x.y,id:l,stateId:q,index:m,data:p,clusterZone:d,clusterZoneClassName:t});e.push(x.x);f.push(x.y);h.push({options:{formatPrefix:"cluster",
dataLabels:b.dataLabels,marker:O(b.marker,{states:b.states},n||{})}});if(this.options.data&&this.options.data.length)for(g=0;g<u;g++)N(this.options.data[p[g].dataIndex])&&(p[g].options=this.options.data[p[g].dataIndex]);m++;n=null}else for(g=0;g<a[l].length;g++)p=a[l][g],q=Math.random().toString(36).substring(2,7)+"-"+Y++,u=((this.options||{}).data||[])[p.dataIndex],e.push(p.x),f.push(p.y),p.parentStateId=q,k.push({x:p.x,y:p.y,id:l,stateId:q,index:m,data:a[l]}),q=u&&"object"===typeof u&&!V(u)?O(u,
{x:p.x,y:p.y}):{userOptions:u,x:p.x,y:p.y},h.push({options:q}),m++;return{clusters:c,noise:k,groupedXData:e,groupedYData:f,groupMap:h}};w.prototype.destroyClusteredData=function(){(this.markerClusterSeriesData||[]).forEach(function(a){a&&a.destroy&&a.destroy()});this.markerClusterSeriesData=null};w.prototype.hideClusteredData=function(){var a=this.markerClusterSeriesData,b=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},e=K.map(function(a){return(b[a].point||{}).id||""});(a||[]).forEach(function(a){a&&
-1!==e.indexOf(a.id)?(a.graphic&&a.graphic.hide(),a.dataLabel&&a.dataLabel.hide()):a&&a.destroy&&a.destroy()})};w.prototype.generatePoints=function(){var a=this,b=a.chart,e=a.xAxis,f=a.yAxis,c=a.options.cluster,k=a.getRealExtremes(),h=[],m=[],r=[],g,l,p,q;if(c&&c.enabled&&a.xData&&a.yData&&!b.polar){var u=c.layoutAlgorithm.type;var d=c.layoutAlgorithm;d.processedGridSize=W(d.gridSize||E.layoutAlgorithm.gridSize,b.plotWidth);d.processedDistance=W(d.distance||E.layoutAlgorithm.distance,b.plotWidth);
b=d.kmeansThreshold||E.layoutAlgorithm.kmeansThreshold;e=Math.abs(e.toValue(d.processedGridSize/2)-e.toValue(0));f=Math.abs(f.toValue(d.processedGridSize/2)-f.toValue(0));for(q=0;q<a.xData.length;q++){if(!a.dataMaxX)if(D(n)&&D(g)&&D(t)&&D(l))G(a.yData[q])&&G(t)&&G(l)&&(n=Math.max(a.xData[q],n),g=Math.min(a.xData[q],g),t=Math.max(a.yData[q]||t,t),l=Math.min(a.yData[q]||l,l));else{var n=g=a.xData[q];var t=l=a.yData[q]}a.xData[q]>=k.minX-e&&a.xData[q]<=k.maxX+e&&(a.yData[q]||k.minY)>=k.minY-f&&(a.yData[q]||
k.maxY)<=k.maxY+f&&(h.push(a.xData[q]),m.push(a.yData[q]),r.push(q))}D(n)&&D(g)&&G(t)&&G(l)&&(a.dataMaxX=n,a.dataMinX=g,a.dataMaxY=t,a.dataMinY=l);k=M(u)?u:a.markerClusterAlgorithms?u&&a.markerClusterAlgorithms[u]?a.markerClusterAlgorithms[u]:h.length<b?a.markerClusterAlgorithms.kmeans:a.markerClusterAlgorithms.grid:function(){return!1};d=(h=k.call(this,h,m,r,d))?a.getClusteredData(h,c):h;c.animation&&a.markerClusterInfo&&a.markerClusterInfo.pointsState&&a.markerClusterInfo.pointsState.oldState?(aa(a.markerClusterInfo.pointsState.oldState),
h=a.markerClusterInfo.pointsState.newState):h={};m=a.xData.length;r=a.markerClusterInfo;d&&(a.processedXData=d.groupedXData,a.processedYData=d.groupedYData,a.hasGroupedData=!0,a.markerClusterInfo=d,a.groupMap=d.groupMap);X.apply(this);d&&a.markerClusterInfo&&((a.markerClusterInfo.clusters||[]).forEach(function(b){p=a.points[b.index];p.isCluster=!0;p.clusteredData=b.data;p.clusterPointsAmount=b.data.length;b.point=p;B(p,"click",a.onDrillToCluster)}),(a.markerClusterInfo.noise||[]).forEach(function(b){b.point=
a.points[b.index]}),c.animation&&a.markerClusterInfo&&(a.markerClusterInfo.pointsState={oldState:h,newState:a.getPointsState(d,r,m)}),c.animation?this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else X.apply(this)};B(t,"render",function(){(this.series||[]).forEach(function(a){if(a.markerClusterInfo){var b=((a.markerClusterInfo||{}).pointsState||{}).oldState;(a.options.cluster||{}).animation&&a.markerClusterInfo&&0===a.chart.pointer.pinchDown.length&&
"pan"!==(a.xAxis.eventArgs||{}).trigger&&b&&Object.keys(b).length&&(a.markerClusterInfo.clusters.forEach(function(b){a.animateClusterPoint(b)}),a.markerClusterInfo.noise.forEach(function(b){a.animateClusterPoint(b)}))}})});B(P,"update",function(){if(this.dataGroup)return U("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1});B(v,"destroy",w.prototype.destroyClusteredData);B(v,"afterRender",function(){var a=
(this.options.cluster||{}).drillToCluster;this.markerClusterInfo&&this.markerClusterInfo.clusters&&this.markerClusterInfo.clusters.forEach(function(b){b.point&&b.point.graphic&&(b.point.graphic.addClass("highcharts-cluster-point"),a&&b.point&&(b.point.graphic.css({cursor:"pointer"}),b.point.dataLabel&&b.point.dataLabel.css({cursor:"pointer"})),D(b.clusterZone)&&b.point.graphic.addClass(b.clusterZoneClassName||"highcharts-cluster-zone-"+b.clusterZone.zoneIndex))})});B(P,"drillToCluster",function(a){var b=
(((a.point||a.target).series.options.cluster||{}).events||{}).drillToCluster;M(b)&&b.call(this,a)});B(y.Axis,"setExtremes",function(){var a=this.chart,b=0,e;a.series.forEach(function(a){a.markerClusterInfo&&(e=T((a.options.cluster||{}).animation),b=e.duration||0)});J(function(){a.tooltip&&a.tooltip.destroy()},b)})});y(t,"masters/modules/marker-clusters.src.js",[],function(){})});
//# sourceMappingURL=marker-clusters.js.map