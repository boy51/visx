(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"+AA7":function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var r,a=(r=n("ViZ6"))&&r.__esModule?r:{default:r};var o=(0,a.default)((function(t,e){try{var n=document.getElementById("__react_svg_text_measurement_id");if(!n){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(n=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),r.appendChild(n),document.body.appendChild(r)}return Object.assign(n.style,e),n.textContent=t,n.getComputedTextLength()}catch(a){return null}}),(function(t,e){return t+"_"+JSON.stringify(e)}));e.default=o},"+B5C":function(t,e,n){"use strict";e.__esModule=!0,e.default=u;var r=i(n("aWzz")),a=i(n("ERkP")),o=i(n("O94r"));function i(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t){var e=t.top,n=void 0===e?0:e,r=t.left,i=void 0===r?0:r,u=t.transform,c=t.className,s=t.children,d=t.innerRef,f=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["top","left","transform","className","children","innerRef"]);return a.default.createElement("g",l({ref:d,className:(0,o.default)("visx-group",c),transform:u||"translate("+i+", "+n+")"},f),s)}u.propTypes={top:r.default.number,left:r.default.number,transform:r.default.string,className:r.default.string,children:r.default.node,innerRef:r.default.oneOfType([r.default.string,r.default.func,r.default.object])}},"/GET":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("O94r"),u=n.n(l),c=n("zdwK");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t){var e,n,r,a,l=t.className,d=t.x,f=t.y,v=t.dx,h=t.dy,g=t.type,y=void 0===g?"elbow":g,p=t.stroke,b=void 0===p?"#222":p,x=t.pathProps,m=Object(o.useContext)(c.a),w=null==d?null!=(e=m.x)?e:0:d,O=null==f?null!=(n=m.y)?n:0:f,M=null==v?null!=(r=m.dx)?r:0:v,j=null==h?null!=(a=m.dy)?a:0:h,E=w,k=O,P=w+M,_=O+j;"elbow"===y&&(Math.abs(M)<=Math.abs(j)?(E=P,k=O+(j>0?1:-1)*Math.abs(E-w)):(k=_,E=w+(M>0?1:-1)*Math.abs(k-O)));return i.a.createElement("path",s({className:u()("visx-annotation-connector",l),strokeWidth:1,stroke:b,fill:"transparent",pointerEvents:"none",d:"M"+w+","+O+("elbow"===y?"L"+E+","+k:"")+"L"+P+","+_},x))}d.propTypes={className:a.a.string,type:a.a.oneOf(["line","elbow"]),stroke:a.a.string}},"5srZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("zdwK");function u(t){var e=t.x,n=t.y,r=t.dx,a=t.dy,o=t.children;return i.a.createElement(l.a.Provider,{value:{x:e,y:n,dx:r,dy:a}},o)}u.propTypes={children:a.a.node.isRequired}},LpNs:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=void 0===t?{}:t,n=e.resetOnStart,r=void 0!==n&&n,u=e.onDragEnd,c=e.onDragMove,s=e.onDragStart,d=e.x,f=e.y,v=e.dx,h=e.dy,g=(0,a.useRef)({x:d,y:f,dx:v,dy:h}),y=(0,i.default)({x:d,y:f,dx:null!=v?v:0,dy:null!=h?h:0,isDragging:!1}),p=y[0],b=y[1];(0,a.useEffect)((function(){g.current.x===d&&g.current.y===f&&g.current.dx===v&&g.current.dy===h||(g.current={x:d,y:f,dx:v,dy:h},b((function(t){return l({},t,{x:d,y:f,dx:null!=v?v:0,dy:null!=h?h:0})})))}));var x=(0,a.useCallback)((function(t){t.persist(),b((function(e){var n=(0,o.localPoint)(t)||{x:0,y:0};return{isDragging:!0,dx:r?0:e.dx,dy:r?0:e.dy,x:r?n.x:n.x-e.dx,y:r?n.y:n.y-e.dy}}),s&&function(e){s(l({},e,{event:t}))})}),[s,r,b]),m=(0,a.useCallback)((function(t){t.persist(),b((function(e){var n=(0,o.localPoint)(t)||{x:0,y:0};return e.isDragging?l({},e,{isDragging:!0,dx:n.x-(e.x||0),dy:n.y-(e.y||0)}):e}),c&&function(e){e.isDragging&&c(l({},e,{event:t}))})}),[c,b]),w=(0,a.useCallback)((function(t){t.persist(),b((function(t){return l({},t,{isDragging:!1})}),u&&function(e){u(l({},e,{event:t}))})}),[u,b]);return l({},p,{dragEnd:w,dragMove:m,dragStart:x})};var r,a=n("ERkP"),o=n("MiVw"),i=(r=n("NzS/"))&&r.__esModule?r:{default:r};function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}},MiVw:function(t,e,n){"use strict";n.r(e);var r=n("jpI8");n.d(e,"localPoint",(function(){return r.a}));var a=n("VB+g");n.d(e,"touchPoint",(function(){return a.a}))},"NzS/":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=(0,r.useState)(t),n=e[0],a=e[1],o=(0,r.useRef)(null),i=(0,r.useCallback)((function(t,e){o.current=e||null,a(t)}),[a]);return(0,r.useLayoutEffect)((function(){o.current&&(o.current(n),o.current=null)}),[n]),[n,i]};var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("ERkP"));function a(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}},OTXj:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=t.dx,n=void 0===e?0:e,o=t.dy,i=void 0===o?0:o,c=t.textAnchor,s=void 0===c?"start":c,d=t.innerRef,f=t.innerTextRef,v=(t.verticalAnchor,t.angle,t.lineHeight),h=void 0===v?"1em":v,g=(t.scaleToFit,t.capHeight,t.width,function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["dx","dy","textAnchor","innerRef","innerTextRef","verticalAnchor","angle","lineHeight","scaleToFit","capHeight","width"])),y=g.x,p=void 0===y?0:y,b=g.fontSize,x=(0,a.default)(t),m=x.wordsByLines,w=x.startDy,O=x.transform;return r.default.createElement("svg",{ref:d,x:n,y:i,fontSize:b,style:u},m.length>0?r.default.createElement("text",l({ref:f,transform:O},g,{textAnchor:s}),m.map((function(t,e){return r.default.createElement("tspan",{key:e,x:p,dy:0===e?w:h},t.words.join(" "))}))):null)};var r=i(n("ERkP")),a=i(n("oWlo")),o=n("T8x2");function i(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.TextProps=o.TextProps;var u={overflow:"visible"}},T8x2:function(t,e,n){},Xr0V:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("O94r"),u=n.n(l),c=n("+B5C"),s=n.n(c),d=n("OTXj"),f=n.n(d),v=n("j1R1"),h=n("x7Vb"),g=n("zdwK");function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var p={top:12,right:12,bottom:12,left:12};function b(t){var e,n,r,a=t.anchorLineStroke,l=void 0===a?"#222":a,c=t.backgroundFill,d=void 0===c?"#eaeaea":c,b=t.backgroundPadding,x=t.backgroundProps,m=t.className,w=t.fontColor,O=void 0===w?"#222":w,M=t.horizontalAnchor,j=t.resizeObserverPolyfill,E=t.showAnchorLine,k=void 0===E||E,P=t.showBackground,_=void 0===P||P,D=t.subtitle,z=t.subtitleDy,S=void 0===z?4:z,W=t.subtitleFontSize,R=void 0===W?12:W,N=t.subtitleFontWeight,T=void 0===N?200:N,A=t.subtitleProps,C=t.title,F=t.titleFontSize,H=void 0===F?16:F,L=t.titleFontWeight,B=void 0===L?600:L,q=t.titleProps,K=t.verticalAnchor,V=t.width,U=t.maxWidth,I=void 0===U?125:U,J=t.x,X=t.y,Z=Object(h.a)({polyfill:j}),G=Z[0],Q=Z[1],Y=Object(h.a)({polyfill:j}),$=Y[0],tt=Y[1],et=Object(o.useMemo)((function(){return function(t){return"undefined"===typeof t?p:"number"===typeof t?{top:t,right:t,bottom:t,left:t}:y({},p,t)}(b)}),[b]),nt=Object(o.useContext)(g.a),rt=nt.x,at=void 0===rt?0:rt,ot=nt.y,it=void 0===ot?0:ot,lt=nt.dx,ut=void 0===lt?0:lt,ct=nt.dy,st=void 0===ct?0:ct,dt=Math.floor(et.top+et.bottom+(null!=(e=Q.height)?e:0)+(null!=(n=tt.height)?n:0)),ft=Object(v.a)(y({children:C,verticalAnchor:"start",capHeight:H,fontSize:H,fontWeight:B,fontFamily:null==q?void 0:q.fontFamily,width:I},q)).wordsByLines,vt=Object(v.a)(y({children:D,verticalAnchor:"start",capHeight:R,fontSize:R,fontWeight:T,fontFamily:null==A?void 0:A.fontFamily,width:I},A)).wordsByLines,ht=ft.reduce((function(t,e){var n;return Math.max(t,null!=(n=e.width)?n:0)}),0),gt=vt.reduce((function(t,e){var n;return Math.max(t,null!=(n=e.width)?n:0)}),0),yt=Math.floor(Math.min(I,Math.max(ht,gt))),pt=et.right+et.left+yt,bt=null!=V?V:pt,xt=bt-et.left-et.right,mt=M||(Math.abs(ut)<Math.abs(st)?"middle":ut>0?"start":"end"),wt=K||(Math.abs(ut)>Math.abs(st)?"middle":st>0?"start":"end"),Ot=Object(o.useMemo)((function(){var t=null==J?at+ut:J,e=null==X?it+st:X;return"middle"===mt&&(t-=bt/2),"end"===mt&&(t-=bt),"middle"===wt&&(e-=dt/2),"end"===wt&&(e-=dt),{x:t,y:e}}),[J,at,ut,X,it,st,mt,wt,bt,dt]),Mt=null==q?void 0:q.fontFamily,jt=Object(o.useMemo)((function(){return{fontSize:H,fontWeight:B,fontFamily:Mt}}),[H,B,Mt]),Et=null==A?void 0:A.fontFamily,kt=Object(o.useMemo)((function(){return{fontSize:R,fontWeight:T,fontFamily:Et}}),[R,T,Et]),Pt=Math.abs(ut)>Math.abs(st)?"vertical":"horizontal",_t=k?{stroke:l,strokeWidth:2}:null;return C||D?i.a.createElement(s.a,{top:Ot.y,left:Ot.x,pointerEvents:"none",className:u()("visx-annotationlabel",m),opacity:0===Q.height&&0===tt.height?0:1},_&&i.a.createElement("rect",y({className:"visx-annotationlabel-background",fill:d,x:0,y:0,width:bt,height:dt},x)),k&&i.a.createElement(i.a.Fragment,null,"horizontal"===Pt&&"start"===wt&&i.a.createElement("line",y({},_t,{x1:0,x2:bt,y1:0,y2:0})),"horizontal"===Pt&&"end"===wt&&i.a.createElement("line",y({},_t,{x1:0,x2:bt,y1:dt,y2:dt})),"vertical"===Pt&&"start"===mt&&i.a.createElement("line",y({},_t,{x1:0,x2:0,y1:0,y2:dt})),"vertical"===Pt&&"end"===mt&&i.a.createElement("line",y({},_t,{x1:bt,x2:bt,y1:0,y2:dt}))),C&&i.a.createElement(f.a,y({innerTextRef:G,fill:O,verticalAnchor:"start",x:et.left+("middle"===(null==q?void 0:q.textAnchor)?xt/2:0),y:et.top,width:xt,capHeight:H,style:jt},q),C),D&&i.a.createElement(f.a,y({innerTextRef:$,fill:O,verticalAnchor:"start",x:et.left+("middle"===(null==A?void 0:A.textAnchor)?xt/2:0),y:et.top+(null!=(r=Q.height)?r:0),dy:C?S:0,width:xt,capHeight:R,style:kt},A),D)):null}b.propTypes={anchorLineStroke:a.a.string,backgroundFill:a.a.string,backgroundPadding:a.a.oneOfType([a.a.number,a.a.shape({top:a.a.number,right:a.a.number,bottom:a.a.number,left:a.a.number})]),className:a.a.string,fontColor:a.a.string,showAnchorLine:a.a.bool,showBackground:a.a.bool,subtitle:a.a.string,subtitleDy:a.a.number,title:a.a.string,width:a.a.number,maxWidth:a.a.number,x:a.a.number,y:a.a.number}},amCE:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("O94r"),u=n.n(l),c=n("zdwK");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t){var e=t.className,n=t.x,r=t.y,a=t.stroke,l=void 0===a?"#222":a,d=t.radius,f=void 0===d?16:d,v=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["className","x","y","stroke","radius"]),h=Object(o.useContext)(c.a);return i.a.createElement("circle",s({className:u()("visx-annotation-subject","visx-annotation-subject-circle",e),cx:n||h.x,cy:r||h.y,r:f,fill:"transparent",pointerEvents:"none",stroke:l},v))}d.propTypes={className:a.a.string,stroke:a.a.string,radius:a.a.number}},oWlo:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){var e=t.verticalAnchor,n=void 0===e?"end":e,i=t.scaleToFit,l=void 0!==i&&i,s=t.angle,d=t.width,f=t.lineHeight,v=void 0===f?"1em":f,h=t.capHeight,g=void 0===h?"0.71em":h,y=t.children,p=t.style,b=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"]),x=b.x,m=void 0===x?0:x,w=b.y,O=void 0===w?0:w,M=!c(m)||!c(O),j=(0,r.useMemo)((function(){return{wordsWithWidth:(null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(t){return{word:t,wordWidth:(0,o.default)(t,p)||0}})),spaceWidth:(0,o.default)("\xa0",p)||0}}),[y,p]),E=j.wordsWithWidth,k=j.spaceWidth,P=(0,r.useMemo)((function(){return M?[]:d||l?E.reduce((function(t,e){var n=e.word,r=e.wordWidth,a=t[t.length-1];if(a&&(null==d||l||(a.width||0)+r+k<d))a.words.push(n),a.width=a.width||0,a.width+=r+k;else{var o={words:[n],width:r};t.push(o)}return t}),[]):[{words:null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[M,d,l,y,E,k]),_=(0,r.useMemo)((function(){return M?"":"start"===n?(0,a.default)("calc("+g+")"):"middle"===n?(0,a.default)("calc("+(P.length-1)/2+" * -"+v+" + ("+g+" / 2))"):(0,a.default)("calc("+(P.length-1)+" * -"+v+")")}),[M,n,g,P.length,v]),D=(0,r.useMemo)((function(){var t=[];if(M)return"";if(u(m)&&u(O)&&u(d)&&l&&P.length>0){var e=P[0].width||1,n=d/e,r=n,a=m-n*m,o=O-r*O;t.push("matrix("+n+", 0, 0, "+r+", "+a+", "+o+")")}return s&&t.push("rotate("+s+", "+m+", "+O+")"),t.length>0?t.join(" "):""}),[M,m,O,d,l,P,s]);return{wordsByLines:P,startDy:_,transform:D}};var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("ERkP")),a=i(n("leIH")),o=i(n("+AA7"));function i(t){return t&&t.__esModule?t:{default:t}}function l(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function u(t){return"number"===typeof t}function c(t){return"number"===typeof t&&Number.isFinite(t)||"string"===typeof t}},tNN4:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("O94r"),u=n.n(l),c=n("zdwK");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t){var e=t.className,n=t.x,r=t.y,a=t.orientation,l=void 0===a?"vertical":a,d=t.min,f=t.max,v=t.stroke,h=void 0===v?"#222":v,g=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["className","x","y","orientation","min","max","stroke"]),y=Object(o.useContext)(c.a),p="vertical"===l;return i.a.createElement("line",s({className:u()("visx-annotation-subject","visx-annotation-subject-line",e),x1:p?n||y.x:d,x2:p?n||y.x:f,y1:p?d:r||y.y,y2:p?f:r||y.y,fill:"transparent",pointerEvents:"none",stroke:h},g))}d.propTypes={className:a.a.string,stroke:a.a.string,strokeWidth:a.a.number,orientation:a.a.oneOf(["vertical","horizontal"]),x:a.a.number,y:a.a.number,min:a.a.number.isRequired,max:a.a.number.isRequired}},xH1m:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("LpNs"),u=n.n(l),c=n("5srZ");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var d={r:10,fill:"transparent",stroke:"#777",strokeDasharray:"4,2",strokeWidth:2};function f(t){var e=t.canEditLabel,n=void 0===e||e,r=t.canEditSubject,a=void 0===r||r,l=t.children,f=t.dx,v=void 0===f?0:f,h=t.dy,g=void 0===h?0:h,y=t.height,p=t.labelDragHandleProps,b=t.onDragEnd,x=t.onDragMove,m=t.onDragStart,w=t.subjectDragHandleProps,O=t.width,M=t.x,j=void 0===M?0:M,E=t.y,k=void 0===E?0:E,P=Object(o.useRef)(),_=Object(o.useRef)(),D=Object(o.useCallback)((function(t){var e,n,r,a,o,i,l,u,c=t.event;m&&m({event:c,x:j+(null!=(e=null==(n=P.current)?void 0:n.dx)?e:0),y:k+(null!=(r=null==(a=P.current)?void 0:a.dy)?r:0),dx:v+(null!=(o=null==(i=_.current)?void 0:i.dx)?o:0),dy:g+(null!=(l=null==(u=_.current)?void 0:u.dy)?l:0)})}),[v,g,m,j,k]),z=Object(o.useCallback)((function(t){var e,n,r,a,o,i,l,u,c=t.event;x&&x({event:c,x:j+(null!=(e=null==(n=P.current)?void 0:n.dx)?e:0),y:k+(null!=(r=null==(a=P.current)?void 0:a.dy)?r:0),dx:v+(null!=(o=null==(i=_.current)?void 0:i.dx)?o:0),dy:g+(null!=(l=null==(u=_.current)?void 0:u.dy)?l:0)})}),[v,g,x,j,k]),S=Object(o.useCallback)((function(t){var e,n,r,a,o,i,l,u,c=t.event;b&&b({event:c,x:j+(null!=(e=null==(n=P.current)?void 0:n.dx)?e:0),y:k+(null!=(r=null==(a=P.current)?void 0:a.dy)?r:0),dx:v+(null!=(o=null==(i=_.current)?void 0:i.dx)?o:0),dy:g+(null!=(l=null==(u=_.current)?void 0:u.dy)?l:0)})}),[v,g,b,j,k]),W=u()({onDragStart:D,onDragMove:z,onDragEnd:S,x:j,y:k}),R=u()({onDragStart:D,onDragMove:z,onDragEnd:S,x:v,y:g});return P.current=W,_.current=R,i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{x:j+W.dx,y:k+W.dy,dx:v+R.dx,dy:g+R.dy},l),W.isDragging&&i.a.createElement("rect",{width:O,height:y,onMouseMove:W.dragMove,onMouseUp:W.dragEnd,fill:"transparent"}),a&&i.a.createElement("circle",s({cx:j,cy:k,transform:"translate("+W.dx+","+W.dy+")",onMouseMove:W.dragMove,onMouseUp:W.dragEnd,onMouseDown:W.dragStart,onTouchStart:W.dragStart,onTouchMove:W.dragMove,onTouchEnd:W.dragEnd,cursor:W.isDragging?"grabbing":"grab"},d,w)),R.isDragging&&i.a.createElement("rect",{width:O,height:y,onMouseMove:R.dragMove,onMouseUp:R.dragEnd,fill:"transparent"}),n&&i.a.createElement("circle",s({cx:j+W.dx+v,cy:k+W.dy+g,transform:"translate("+R.dx+","+R.dy+")",onMouseMove:R.dragMove,onMouseUp:R.dragEnd,onMouseDown:R.dragStart,onTouchStart:R.dragStart,onTouchMove:R.dragMove,onTouchEnd:R.dragEnd,cursor:R.isDragging?"grabbing":"grab"},d,p)))}f.propTypes={width:a.a.number.isRequired,height:a.a.number.isRequired,children:a.a.node.isRequired,canEditLabel:a.a.bool,canEditSubject:a.a.bool,onDragStart:a.a.func,onDragMove:a.a.func,onDragEnd:a.a.func}},zdwK:function(t,e,n){"use strict";var r=n("ERkP"),a=Object(r.createContext)({});e.a=a}}]);