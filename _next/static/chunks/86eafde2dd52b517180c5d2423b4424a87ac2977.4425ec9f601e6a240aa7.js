(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{Ifh9:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),o=n.n(i),l=n("O94r"),c=n.n(l),s=n("hsl+"),u=n.n(s),f=n("JmwF"),m=n("rkTo"),d=n("nNND"),p=n("HlJr"),y=n("tZ4l");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,i=e.scale,l=e.width,s=e.stroke,h=void 0===s?"#eaf0f6":s,k=e.strokeWidth,x=void 0===k?1:k,b=e.strokeDasharray,O=e.className,g=e.children,j=e.numTicks,w=void 0===j?10:j,T=e.lineStyle,E=e.offset,S=e.tickValues,N=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"]),C=null!=S?S:Object(d.a)(i,w),V=(null!=E?E:0)+Object(y.a)(i)/2,F=C.map((function(e){var t,n=(null!=(t=Object(p.a)(i(e)))?t:0)+V;return{from:new m.a({x:0,y:n}),to:new m.a({x:l,y:n})}}));return o.a.createElement(f.a,{className:c()("visx-rows",O),top:n,left:r},g?g({lines:F}):F.map((function(e,t){var n=e.from,a=e.to;return o.a.createElement(u.a,v({key:"row-line-"+t,from:n,to:a,stroke:h,strokeWidth:x,strokeDasharray:b,style:T},N))})))}h.propTypes={tickValues:r.a.array,width:r.a.number.isRequired}},"Soe+":function(e){e.exports=JSON.parse('{"name":"@visx/demo-axis","description":"Standalone axis demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/d3-time-format":"2.1.1","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/curve":"latest","@visx/gradient":"latest","@visx/grid":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/react-spring":"latest","@visx/responsive":"latest","@visx/shape":"latest","@visx/scale":"latest","d3-time-format":"^2.2.3","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","react-spring":"8.0.27","typescript":"^3"},"keywords":["axis","scales","visualization","d3","react","visx"]}')},eMuC:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("aWzz"),r=n.n(a),i=n("ERkP"),o=n.n(i),l=n("O94r"),c=n.n(l),s=n("hsl+"),u=n.n(s),f=n("JmwF"),m=n("rkTo"),d=n("nNND"),p=n("HlJr"),y=n("tZ4l");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e){var t=e.top,n=void 0===t?0:t,a=e.left,r=void 0===a?0:a,i=e.scale,l=e.height,s=e.stroke,h=void 0===s?"#eaf0f6":s,k=e.strokeWidth,x=void 0===k?1:k,b=e.strokeDasharray,O=e.className,g=e.numTicks,j=void 0===g?10:g,w=e.lineStyle,T=e.offset,E=e.tickValues,S=e.children,N=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["top","left","scale","height","stroke","strokeWidth","strokeDasharray","className","numTicks","lineStyle","offset","tickValues","children"]),C=null!=E?E:Object(d.a)(i,j),V=(null!=T?T:0)+Object(y.a)(i)/2,F=C.map((function(e){var t,n=(null!=(t=Object(p.a)(i(e)))?t:0)+V;return{from:new m.a({x:n,y:0}),to:new m.a({x:n,y:l})}}));return o.a.createElement(f.a,{className:c()("visx-columns",O),top:n,left:r},S?S({lines:F}):F.map((function(e,t){var n=e.from,a=e.to;return o.a.createElement(u.a,v({key:"column-line-"+t,from:n,to:a,stroke:h,strokeWidth:x,strokeDasharray:b,style:w},N))})))}h.propTypes={tickValues:r.a.array,height:r.a.number.isRequired}},ewQP:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.x,n=e.x0,l=e.x1,s=e.y,u=e.y1,f=e.y0,m=e.yScale,d=e.data,p=void 0===d?[]:d,y=e.defined,v=void 0===y?function(){return!0}:y,h=e.className,k=e.curve,x=e.innerRef,b=e.children,O=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),g=(0,o.area)({x:t,x0:n,x1:l,defined:v,curve:k});null==f?g.y0(m.range()[0]):(0,i.default)(g.y0,f);s&&!u&&(0,i.default)(g.y1,s);u&&!s&&(0,i.default)(g.y1,u);return b?a.default.createElement(a.default.Fragment,null,b({path:g})):a.default.createElement("path",c({ref:x,className:(0,r.default)("visx-area-closed",h),d:g(p)||""},O))};var a=l(n("ERkP")),r=l(n("O94r")),i=l(n("Fo22")),o=n("m2mA");function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},gnM9:function(e,t,n){"use strict";n.d(t,"a",(function(){return B})),n.d(t,"c",(function(){return G})),n.d(t,"b",(function(){return re}));var a=n("fGyu"),r=n("ERkP"),i=n.n(r),o=n("ewQP"),l=n.n(o),c=n("EbDF"),s=n("HlJr"),u=n("67po"),f=n("cc+0"),m=n("o/Mo"),d=n("i2hO"),p=n("5Nbk"),y=n("pn27"),v=n("Ifh9"),h=n("eMuC"),k=n("aWzz"),x=n.n(k),b=n("XDdH"),O=n.n(b),g=n("1GyV"),j=n("O94r"),w=n.n(j),T=n("uJnh"),E=n.n(T),S=n("O3m4");function N(e,t,n,a,r){var i;switch(e){case"center":return r;case"min":return null!=n?n:0;case"max":return null!=a?a:0;case"outside":default:return null!=(i=(null!=t?t:0)<r?n:a)?i:0}}function C(e){var t=e.from,n=e.to;return{fromX:t.x,toX:n.x,fromY:t.y,toY:n.y,opacity:1}}function V(e){var t=e.scale,n=e.animateXOrY,a=e.animationTrajectory,i=void 0===a?"outside":a,o="x"===n;return Object(r.useMemo)((function(){var e=t.range().map(s.a),n=e[0],a=e[1],r=null!=a&&null!=n&&a<n?[a,n]:[n,a],l=r[0],c=r[1],u=null!=a&&null!=n?Math.abs(a-n):0,f=(null!=l?l:0)+u/2,m=i;o||"min"!==i||(m="max"),o||"max"!==i||(m="min");var d=function(e){var t=e.from,n=e.to;return{fromX:o?N(m,t.x,l,c,f):t.x,toX:o?N(m,t.x,l,c,f):n.x,fromY:o?t.y:N(m,t.y,l,c,f),toY:o?n.y:N(m,t.y,l,c,f),opacity:0}};return{unique:!0,from:d,leave:d,enter:C,update:C}}),[t,o,i])}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e){var t=e.hideTicks,n=e.horizontal,a=e.orientation,r=e.scale,o=e.tickClassName,l=e.tickComponent,c=e.tickLabelProps,s=e.tickStroke,u=void 0===s?"#222":s,f=e.tickTransform,m=e.ticks,d=e.animationTrajectory,p=Object(g.useTransition)(m,(function(e){return""+e.value}),V({scale:r,animateXOrY:n?"x":"y",animationTrajectory:d}));return i.a.createElement(i.a.Fragment,null,p.map((function(e,n){var r,s,m=e.item,d=e.key,p=e.props,y=p.fromX,v=p.toX,h=p.fromY,k=p.toY,x=p.opacity,b=null!=(r=null!=(s=c[n])?s:c[0])?r:{};return null==m||null==d?null:i.a.createElement(g.animated.g,{key:d,className:w()("visx-axis-tick",o),transform:f},!t&&i.a.createElement(g.animated.line,{x1:y,x2:v,y1:h,y2:k,stroke:u,strokeLinecap:"square",strokeOpacity:x}),i.a.createElement(g.animated.g,{key:n,transform:Object(g.interpolate)([v,k],(function(e,t){var n;return"translate("+e+","+(t+(a===E.a.bottom&&"number"===typeof b.fontSize?null!=(n=b.fontSize)?n:10:0))+")"})),opacity:x},l?l(F({},b,{x:v,y:k,formattedValue:null==m?void 0:m.formattedValue})):i.a.createElement(S.a,b,null==m?void 0:m.formattedValue)))})))}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Y(e){var t=e.animationTrajectory,n=e.tickComponent,a=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["animationTrajectory","tickComponent"]),o=Object(r.useMemo)((function(){return function(e){return i.a.createElement(P,X({},e,{tickComponent:n,animationTrajectory:t}))}}),[t,n]);return i.a.createElement(O.a,X({},a,{ticksComponent:o}))}var _=n("0XzA"),M=n.n(_);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e){var t=e.scale,n=e.lines,a=e.animationTrajectory,r=e.animateXOrY,o=e.lineKey,l=e.lineStyle,c=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scale","lines","animationTrajectory","animateXOrY","lineKey","lineStyle"]),s=Object(g.useTransition)(n,o,V({scale:t,animateXOrY:r,animationTrajectory:a}));return i.a.createElement(i.a.Fragment,null,s.map((function(e){var t=e.key,n=e.props,a=n.fromX,r=n.toX,o=n.fromY,s=n.toY,u=n.opacity;return i.a.createElement(g.animated.line,z({key:t,x1:a,x2:r,y1:o,y2:s,strokeOpacity:u,style:l},c))})))}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e){var t=e.scale,n=e.width,a=e.numTicks,r=e.tickValues,o=(e.offset,e.className),l=e.animationTrajectory,c=e.top,s=e.left,u=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scale","width","numTicks","tickValues","offset","className","animationTrajectory","top","left"]);return i.a.createElement(M.a,{scale:t,width:n,numTicks:a,tickValues:r,className:o,top:c,left:s},(function(e){var n=e.lines;return i.a.createElement(D,R({scale:t,lines:n,animationTrajectory:l,animateXOrY:"y",lineKey:function(e){var t,n;return String(null!=(t=null==e||null==(n=e.from)?void 0:n.y)?t:"")}},u))}))}D.propTypes={lineKey:x.a.func.isRequired};var W=n("mv6+"),q=n.n(W);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e){var t=e.scale,n=e.height,a=e.numTicks,r=e.tickValues,o=(e.offset,e.className),l=e.animationTrajectory,c=e.top,s=e.left,u=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scale","height","numTicks","tickValues","offset","className","animationTrajectory","top","left"]);return i.a.createElement(q.a,{scale:t,height:n,numTicks:a,tickValues:r,className:o,top:c,left:s},(function(e){var n=e.lines;return i.a.createElement(D,A({scale:t,lines:n,animationTrajectory:l,animateXOrY:"x",lineKey:function(e){var t,n;return String(null!=(t=null==e||null==(n=e.from)?void 0:n.x)?t:"")}},u))}))}var I=n("201w"),H=n("Cf/J"),L=n("mHfT"),Z=i.a.createElement,B="#da7cff",G="#340098",Q=Object(I.a)(.5),U=40,$=150,ee=20,te=50,ne=function(){return{fill:"#fff",fontSize:12,fontFamily:"sans-serif",textAnchor:"middle"}},ae=function(e){var t=e.map(s.a);return[Math.min.apply(Math,Object(a.a)(t)),Math.max.apply(Math,Object(a.a)(t))]};function re(e){var t=e.width,n=void 0===t?800:t,a=e.height,o=void 0===a?800:a,s=e.showControls,k=void 0===s||s,x=window.matchMedia("(prefers-reduced-motion: reduce)"),b=!x||!!x.matches,O=Object(r.useState)(!b),g=O[0],j=O[1],w=n-te-$,T=o-U-ee,E=Object(r.useState)(!0),S=E[0],N=E[1],C=Object(r.useState)("center"),V=C[0],F=C[1],P=g?Y:p.a,X=g?J:v.a,_=g?K:h.a,M=Object(r.useMemo)((function(){var e=S?[0,2,4,6,8,10]:[6,8,10,12],t=S?["a","b","c","d"]:["d","c","b","a"],n=S?[new Date("2020-01-01"),new Date("2020-02-01")]:[new Date("2020-02-01"),new Date("2020-03-01")],a=S?[1,10,100,1e3,1e4]:[1e-4,.001,.1,1,10,100];return[{scale:Object(u.a)({domain:ae(e),range:[0,w]}),values:e,tickFormat:function(e,t,n){return 0===t?"first":t===n[n.length-1].index?"last":"".concat(e)},label:"linear"},{scale:Object(f.a)({domain:t,range:[0,w],paddingOuter:0,paddingInner:1}),values:t,tickFormat:function(e){return e},label:"categories"},{scale:Object(m.a)({domain:ae(n),range:[0,w]}),values:n,tickFormat:function(e,t){return 3===t?"\ud83c\udf89":w>400||t%2===0?Object(L.a)("%b %d")(e):""},label:"time"},{scale:Object(d.a)({domain:ae(a),range:[0,w]}),values:a,tickFormat:function(e){var t="".concat(e);return t.match(/^[.01?[\]]*$/)?t:""},label:"log"}]}),[S,w]);if(w<10)return null;var z=T/M.length-40,D=Object(u.a)({domain:[100,0],range:[z,0]});return Z(i.a.Fragment,null,Z("svg",{width:n,height:o},Z(H.a,{id:"visx-axis-gradient",from:B,to:B,toOpacity:.5}),Z("rect",{x:0,y:0,width:n,height:o,fill:"url(#visx-axis-gradient)",rx:14}),Z("g",{transform:"translate(".concat(te,",").concat(U,")")},M.map((function(e,t){var n=e.scale,a=e.values,r=e.label,i=e.tickFormat;return Z("g",{key:"scale-".concat(t),transform:"translate(0, ".concat(t*(z+40),")")},Z(X,{key:"gridrows-".concat(V),scale:D,stroke:"#6e0fca",width:w,numTicks:S?1:3,animationTrajectory:V}),Z(_,{key:"gridcolumns-".concat(V),scale:n,stroke:"#6e0fca",height:z,numTicks:S?5:2,animationTrajectory:V}),Z(l.a,{data:a.map((function(e){var t;return[(null!==(t=n(e))&&void 0!==t?t:0)+("bandwidth"in n&&"undefined"!==typeof n.bandwidth?n.bandwidth()/2:0),D(10+90*Q())]})),yScale:D,curve:c.a,fill:"#6e0fca",fillOpacity:.2}),Z(P,{key:"axis-".concat(V),orientation:y.a.bottom,top:z,scale:n,tickFormat:i,stroke:"#fff",tickStroke:"#fff",tickLabelProps:ne,tickValues:"log"===r||"time"===r?void 0:a,numTicks:"time"===r?6:void 0,label:r,labelProps:{x:w+30,y:-10,fill:G,fontSize:18,strokeWidth:0,stroke:"#fff",paintOrder:"stroke",fontFamily:"sans-serif",textAnchor:"start"},animationTrajectory:V}))})))),k&&Z(i.a.Fragment,null,Z("div",{style:{fontSize:12}},Z("label",null,Z("input",{type:"checkbox",onChange:function(){return j(!g)},checked:g})," ","enable animation"),"\xa0\xa0\xa0",g&&Z(i.a.Fragment,null,Z("strong",null,"animation trajectory"),Z("label",null,Z("input",{type:"radio",onChange:function(){return F("outside")},checked:"outside"===V})," ","outside"),Z("label",null,Z("input",{type:"radio",onChange:function(){return F("center")},checked:"center"===V})," ","center"),Z("label",null,Z("input",{type:"radio",onChange:function(){return F("min")},checked:"min"===V})," ","min"),Z("label",null,Z("input",{type:"radio",onChange:function(){return F("max")},checked:"max"===V})," ","max"))),g&&Z("button",{onClick:function(){return N(!S)}},"Update scales")))}try{re.displayName="Example",re.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-axis/Example.tsx#Example"]={docgenInfo:re.__docgenInfo,name:"Example",path:"src/sandboxes/visx-axis/Example.tsx#Example"})}catch(ie){}},tZ4l:function(e,t,n){"use strict";function a(e){return"bandwidth"in e?e.bandwidth():0}n.d(t,"a",(function(){return a}))}}]);