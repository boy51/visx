(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{Qinw:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("ERkP"),a=n.n(r),i=n("Cf/J");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){var t=e.from,n=void 0===t?"#F02FC2":t,r=e.to,o=void 0===r?"#6094EA":r,u=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["from","to"]);return a.a.createElement(i.a,l({from:n,to:o},u))}},VWZE:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("ERkP"),a=n.n(r),i=n("Vo8A"),l=n("i9k6"),o=n("qXbg");n.d(t,"packageJson",(function(){return o}));var u=a.a.createElement,c={background:"#7f82e3"},s={color:"rgb(93,30,91)"},d={animate:!1,margin:{top:20,right:20,bottom:80,left:20}};function f(){return u(l.a,{title:"Pies & donuts",description:"<Shape.Pie />",exampleProps:d,exampleRenderer:i.a,exampleUrl:"/pies",tileStyles:c,detailsStyles:s})}},Vo8A:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var r=n("zjfJ"),a=n("zygG"),i=n("cxan"),l=n("ERkP"),o=n.n(l),u=n("c73+"),c=n.n(u),s=n("D+es"),d=n("JmwF"),f=n("Qinw"),p=n("ykvB"),m=n.n(p),y=n("eEjM"),g=n.n(y),b=n("1GyV"),h=o.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=m.a.slice(0,4),j=Object.keys(g.a[0]).filter((function(e){return"date"!==e})),w=j.map((function(e){return{label:e,usage:Number(g.a[0][e])}})),S=function(e){return e.usage},E=function(e){return e.frequency},P=Object(s.a)({domain:j,range:["rgba(255,255,255,0.7)","rgba(255,255,255,0.6)","rgba(255,255,255,0.5)","rgba(255,255,255,0.4)","rgba(255,255,255,0.3)","rgba(255,255,255,0.2)","rgba(255,255,255,0.1)"]}),k=Object(s.a)({domain:O.map((function(e){return e.letter})),range:["rgba(93,30,91,1)","rgba(93,30,91,0.8)","rgba(93,30,91,0.6)","rgba(93,30,91,0.4)"]}),A={top:20,right:20,bottom:20,left:20};function q(e){var t=e.width,n=e.height,r=e.margin,a=void 0===r?A:r,o=e.animate,u=void 0===o||o,s=Object(l.useState)(null),p=s[0],m=s[1],y=Object(l.useState)(null),g=y[0],b=y[1];if(t<10)return null;var v=t-a.left-a.right,x=n-a.top-a.bottom,j=Math.min(v,x)/2,q=x/2,R=v/2;return h("svg",{width:t,height:n},h(f.a,{id:"visx-pie-gradient"}),h("rect",{rx:14,width:t,height:n,fill:"url('#visx-pie-gradient')"}),h(d.a,{top:q+a.top,left:R+a.left},h(c.a,{data:p?w.filter((function(e){return e.label===p})):w,pieValue:S,outerRadius:j,innerRadius:j-50,cornerRadius:3,padAngle:.005},(function(e){return h(C,Object(i.a)({},e,{animate:u,getKey:function(e){return e.data.label},onClickDatum:function(e){var t=e.data.label;return u&&m(p&&p===t?null:t)},getColor:function(e){return P(e.data.label)}}))})),h(c.a,{data:g?O.filter((function(e){return e.letter===g})):O,pieValue:E,pieSortValues:function(){return-1},outerRadius:j-65},(function(e){return h(C,Object(i.a)({},e,{animate:u,getKey:function(e){return e.data.letter},onClickDatum:function(e){var t=e.data.letter;return u&&b(g&&g===t?null:t)},getColor:function(e){var t=e.data.letter;return k(t)}}))}))),u&&h("text",{textAnchor:"end",x:t-16,y:n-16,fill:"white",fontSize:11,fontWeight:300,pointerEvents:"none"},"Click segments to update"))}var R=function(e){var t=e.endAngle;return{startAngle:t>Math.PI?2*Math.PI:0,endAngle:t>Math.PI?2*Math.PI:0,opacity:0}},_=function(e){return{startAngle:e.startAngle,endAngle:e.endAngle,opacity:1}};function C(e){var t=e.animate,n=e.arcs,r=e.path,i=e.getKey,l=e.getColor,u=e.onClickDatum,c=Object(b.useTransition)(n,i,{from:t?R:_,enter:_,update:_,leave:t?R:_});return h(o.a.Fragment,null,c.map((function(e){var t=e.item,n=e.props,o=e.key,c=r.centroid(t),s=Object(a.a)(c,2),d=s[0],f=s[1],p=t.endAngle-t.startAngle>=.1;return h("g",{key:o},h(b.animated.path,{d:Object(b.interpolate)([n.startAngle,n.endAngle],(function(e,n){return r(x(x({},t),{},{startAngle:e,endAngle:n}))})),fill:l(t),onClick:function(){return u(t)},onTouchStart:function(){return u(t)}}),p&&h(b.animated.g,{style:{opacity:n.opacity}},h("text",{fill:"white",x:d,y:f,dy:".33em",fontSize:9,textAnchor:"middle",pointerEvents:"none"},i(t))))})))}try{q.displayName="Example",q.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-shape-pie/Example.tsx#Example"]={docgenInfo:q.__docgenInfo,name:"Example",path:"src/sandboxes/visx-shape-pie/Example.tsx#Example"})}catch(T){}},"c73+":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.className,n=e.top,o=e.left,c=e.data,s=void 0===c?[]:c,d=e.centroid,f=e.innerRadius,p=void 0===f?0:f,m=e.outerRadius,y=e.cornerRadius,g=e.startAngle,b=e.endAngle,h=e.padAngle,v=e.padRadius,x=e.pieSort,O=e.pieSortValues,j=e.pieValue,w=e.children,S=e.fill,E=void 0===S?"":S,P=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"]),k=(0,l.arc)({innerRadius:p,outerRadius:m,cornerRadius:y,padRadius:v}),A=(0,l.pie)({startAngle:g,endAngle:b,padAngle:h,value:j,sort:x,sortValues:O}),q=A(s);return w?r.default.createElement(r.default.Fragment,null,w({arcs:q,path:k,pie:A})):r.default.createElement(i.Group,{className:"visx-pie-arcs-group",top:n,left:o},q.map((function(e,n){return r.default.createElement("g",{key:"pie-arc-"+n},r.default.createElement("path",u({className:(0,a.default)("visx-pie-arc",t),d:k(e)||"",fill:null==E||"string"===typeof E?E:E(e)},P)),null==d?void 0:d(k.centroid(e),e))})))};var r=o(n("ERkP")),a=o(n("O94r")),i=n("U+Fi"),l=n("m2mA");function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=s;var r=u(n("aWzz")),a=u(n("RNvQ")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),l=u(n("LaGA"));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){var t=e.className,n=e.children,r=e.debounceTime,o=void 0===r?300:r,u=e.ignoreDimensions,s=void 0===u?[]:u,d=e.parentSizeStyles,f=void 0===d?{width:"100%",height:"100%"}:d,p=e.enableDebounceLeadingCall,m=void 0===p||p,y=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),g=(0,i.useRef)(null),b=(0,i.useRef)(0),h=(0,i.useState)({width:0,height:0,top:0,left:0}),v=h[0],x=h[1],O=(0,i.useMemo)((function(){var e=Array.isArray(s)?s:[s];return(0,a.default)((function(t){x((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),o,{leading:m})}),[o,m,s]);return(0,i.useEffect)((function(){var e=new l.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,a=t.width,i=t.height;b.current=window.requestAnimationFrame((function(){O({width:a,height:i,top:r,left:n})}))}))}));return g.current&&e.observe(g.current),function(){window.cancelAnimationFrame(b.current),e.disconnect(),O&&O.cancel&&O.cancel()}}),[O]),i.default.createElement("div",c({style:f,ref:g,className:t},y),n(c({},v,{ref:g.current,resize:O})))}s.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("zjfJ"),a=n("yFcC"),i=n.n(a),l=n("ERkP"),o=n.n(l),u=n("jvFD"),c=n.n(u),s=n("i6Tx"),d=n.n(s),f=o.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t,n,a=e.description,l=e.detailsHeight,u=void 0===l?76:l,s=e.detailsStyles,m=e.exampleProps,y=e.exampleRenderer,g=e.exampleUrl,b=e.tileStyles,h=e.title;return f(o.a.Fragment,null,(t=g,n=f("div",{style:b,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(d.a,null,(function(e){var t=e.width,n=e.height;return o.a.createElement(y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(h||a?u:0)},m))}))),(h||a)&&f("div",{style:s,className:"jsx-713312509 details"},h&&f("div",{className:"jsx-713312509 title"},h),a&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},a)))),t?f(c.a,{href:t},n):n),f(i.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(y){}},qXbg:function(e){e.exports=JSON.parse('{"name":"@visx/demo-shape-pie","description":"Standalone visx pie demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","react-spring":"^8.0.27","typescript":"^3"},"keywords":["visualization","d3","react","visx","pie","shape","donut"]}')},ykvB:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=[{letter:"A",frequency:.08167},{letter:"B",frequency:.01492},{letter:"C",frequency:.02782},{letter:"D",frequency:.04253},{letter:"E",frequency:.12702},{letter:"F",frequency:.02288},{letter:"G",frequency:.02015},{letter:"H",frequency:.06094},{letter:"I",frequency:.06966},{letter:"J",frequency:.00153},{letter:"K",frequency:.00772},{letter:"L",frequency:.04025},{letter:"M",frequency:.02406},{letter:"N",frequency:.06749},{letter:"O",frequency:.07507},{letter:"P",frequency:.01929},{letter:"Q",frequency:95e-5},{letter:"R",frequency:.05987},{letter:"S",frequency:.06327},{letter:"T",frequency:.09056},{letter:"U",frequency:.02758},{letter:"V",frequency:.00978},{letter:"W",frequency:.0236},{letter:"X",frequency:.0015},{letter:"Y",frequency:.01974},{letter:"Z",frequency:74e-5}];t.default=r},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("HO86");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);