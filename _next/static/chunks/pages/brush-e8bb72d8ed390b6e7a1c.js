_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"67po":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("uKU/"),a=e("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(t){return i(Object(r.a)(),t)}},"9Jhr":function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i),c=e("1Wmu"),s=e("dGDr");function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function h(t){var n=t.x,e=t.x0,r=t.x1,i=t.y,h=t.y1,l=t.y0,f=t.yScale,d=t.data,p=void 0===d?[]:d,g=t.defined,b=void 0===g?function(){return!0}:g,m=t.className,x=t.curve,y=t.innerRef,v=t.children,k=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["x","x0","x1","y","y1","y0","yScale","data","defined","className","curve","innerRef","children"]),M=Object(s.b)({x:n,x0:e,x1:r,defined:b,curve:x});return null==l?M.y0(f.range()[0]):Object(c.a)(M.y0,l),i&&!h&&Object(c.a)(M.y1,i),h&&!i&&Object(c.a)(M.y1,h),v?a.a.createElement(a.a.Fragment,null,v({path:M})):a.a.createElement("path",u({ref:y,className:o()("visx-area-closed",m),d:M(p)||""},k))}},"Cf/J":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(t){var n=t.children,e=t.id,r=t.from,a=t.to,i=t.x1,s=t.y1,u=t.x2,h=t.y2,l=t.fromOffset,f=void 0===l?"0%":l,d=t.fromOpacity,p=void 0===d?1:d,g=t.toOffset,b=void 0===g?"100%":g,m=t.toOpacity,x=void 0===m?1:m,y=t.rotate,v=t.transform,k=t.vertical,M=void 0===k||k,O=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),_=i,S=u,w=s,B=h;return!M||_||S||w||B||(_="0",S="0",w="0",B="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",c({id:e,x1:_,y1:w,x2:S,y2:B,gradientTransform:y?"rotate("+y+")":v},O),!!n&&n,!n&&o.a.createElement("stop",{offset:f,stopColor:r,stopOpacity:p}),!n&&o.a.createElement("stop",{offset:b,stopColor:a,stopOpacity:x})))}s.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},EbDF:function(t,n,e){"use strict";function r(t){return t<0?-1:1}function a(t,n,e){var a=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(a||i<0&&-0),c=(e-t._y1)/(i||a<0&&-0),s=(o*i+c*a)/(a+i);return(r(o)+r(c))*Math.min(Math.abs(o),Math.abs(c),.5*Math.abs(s))||0}function i(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function o(t,n,e){var r=t._x0,a=t._y0,i=t._x1,o=t._y1,c=(i-r)/3;t._context.bezierCurveTo(r+c,a+c*n,i-c,o-c*e,i,o)}function c(t){this._context=t}function s(t){this._context=new u(t)}function u(t){this._context=t}function h(t){return new c(t)}function l(t){return new s(t)}e.d(n,"a",(function(){return h})),e.d(n,"b",(function(){return l})),c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,i(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,o(this,i(this,e=a(this,t,n)),e);break;default:o(this,this._t0,e=a(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(s.prototype=Object.create(c.prototype)).point=function(t,n){c.prototype.point.call(this,n,t)},u.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,a,i){this._context.bezierCurveTo(n,t,r,e,i,a)}}},OfPM:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brush",function(){return e("pRTK")}])},"VB+g":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("rkTo"),a=e("ZQHj");function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var o={x:0,y:0};function c(t,n){if(!t||!n)return null;var e=function(t){if(!t)return i({},o);if(Object(a.g)(t))return t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:i({},o);if(Object(a.c)(t))return{x:t.clientX,y:t.clientY};var n=null==t?void 0:t.target,e=n&&"getBoundingClientRect"in n?n.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:i({},o)}(n),c=Object(a.d)(t)?t.ownerSVGElement:t,s=Object(a.e)(c)?c.getScreenCTM():null;if(Object(a.f)(c)&&s){var u=c.createSVGPoint();return u.x=e.x,u.y=e.y,u=u.matrixTransform(s.inverse()),new r.a({x:u.x,y:u.y})}var h=t.getBoundingClientRect();return new r.a({x:e.x-h.left-t.clientLeft,y:e.y-h.top-t.clientTop})}},VFFr:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i);function c(t){var n=t.id,e=t.width,r=t.height,a=t.children;return o.a.createElement("defs",null,o.a.createElement("pattern",{id:n,width:e,height:r,patternUnits:"userSpaceOnUse"},a))}c.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,children:a.a.node.isRequired}},ZQHj:function(t,n,e){"use strict";function r(t){return!!t&&t instanceof Element}function a(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function i(t){return!!t&&"createSVGPoint"in t}function o(t){return!!t&&"getScreenCTM"in t}function c(t){return!!t&&"changedTouches"in t}function s(t){return!!t&&"clientX"in t}function u(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return a})),e.d(n,"f",(function(){return i})),e.d(n,"e",(function(){return o})),e.d(n,"g",(function(){return c})),e.d(n,"c",(function(){return s})),e.d(n,"b",(function(){return u}))},Zbhd:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("PB0s"),a=e("XAd9"),i=e("Cyas"),o=e("VBI3");function c(t,n,e,c){var s,u=Object(r.c)(t,n,e);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var h=Math.max(Math.abs(t),Math.abs(n));return null!=c.precision||isNaN(s=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(t)))}(u,h))||(c.precision=s),Object(o.b)(c,h);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(s=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(i.a)(n)-Object(i.a)(t))+1}(u,Math.max(Math.abs(t),Math.abs(n))))||(c.precision=s-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(s=function(t){return Math.max(0,-Object(i.a)(Math.abs(t)))}(u))||(c.precision=s-2*("%"===c.type))}return Object(o.a)(c)}},a49c:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var r=e("aWzz"),a=e.n(r),i=e("ERkP"),o=e.n(i),c=e("O94r"),s=e.n(c),u=e("VFFr"),h="horizontal",l="vertical",f="diagonal",d="diagonalRightToLeft";function p(t){var n=t.height;switch(t.orientation){case h:return"M 0,"+n/2+" l "+n+",0";case f:return"M 0,"+n+" l "+n+","+-n+" M "+-n/4+","+n/4+" l "+n/2+","+-n/2+"\n             M "+3/4*n+","+5/4*n+" l "+n/2+","+-n/2;case d:return"M 0,0 l "+n+","+n+"\n        M "+-n/4+","+3/4*n+" l "+n/2+","+n/2+"\n        M "+3/4*n+","+-n/4+" l "+n/2+","+n/2;case l:default:return"M "+n/2+", 0 l 0, "+n}}function g(t){var n=t.id,e=t.width,r=t.height,a=t.stroke,i=t.strokeWidth,c=t.strokeDasharray,h=t.strokeLinecap,l=void 0===h?"square":h,f=t.shapeRendering,d=void 0===f?"auto":f,g=t.orientation,b=void 0===g?["vertical"]:g,m=t.background,x=t.className,y=Array.isArray(b)?b:[b];return o.a.createElement(u.a,{id:n,width:e,height:r},!!m&&o.a.createElement("rect",{className:s()("visx-pattern-line-background"),width:e,height:r,fill:m}),y.map((function(t,e){return o.a.createElement("path",{key:"visx-"+n+"-line-"+t+"-"+e,className:s()("visx-pattern-line",x),d:p({orientation:t,height:r}),stroke:a,strokeWidth:i,strokeDasharray:c,strokeLinecap:l,shapeRendering:d})})))}g.propTypes={id:a.a.string.isRequired,width:a.a.number.isRequired,height:a.a.number.isRequired,className:a.a.string,background:a.a.string,stroke:a.a.string,strokeWidth:a.a.oneOfType([a.a.number,a.a.string]),strokeDasharray:a.a.oneOfType([a.a.string,a.a.number]),strokeLinecap:a.a.oneOf(["square","butt","round","inherit"]),shapeRendering:a.a.oneOfType([a.a.string,a.a.number]),orientation:a.a.array}},g2fB:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i);function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(t){var n=t.className,e=t.innerRef,r=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,["className","innerRef"]);return a.a.createElement("rect",c({ref:e,className:o()("visx-bar",n)},r))}},jpI8:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("VB+g"),a=e("ZQHj");function i(t,n){if(Object(a.a)(t)&&n)return Object(r.a)(t,n);if(Object(a.b)(t)){var e=t,i=e.target;if(i)return Object(r.a)(i,e)}return null}},pRTK:function(t,n,e){"use strict";e.r(n);var r=e("ERkP"),a=e.n(r),i=e("6wy5"),o=e("Hn+V"),c=e("MrGM"),s=a.a.createElement;n.default=function(){return s(i.a,{component:o.c,title:"Brush",margin:{top:40,left:50,right:20,bottom:10},codeSandboxDirectoryName:"visx-brush",packageJson:c},"import React, { useRef, useState, useMemo } from 'react';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { Brush } from '@visx/brush';\nimport { Bounds } from '@visx/brush/lib/types';\nimport BaseBrush, { BaseBrushState, UpdateBrush } from '@visx/brush/lib/BaseBrush';\nimport { PatternLines } from '@visx/pattern';\nimport { LinearGradient } from '@visx/gradient';\nimport { max, extent } from 'd3-array';\n\nimport AreaChart from './AreaChart';\n\n// Initialize some variables\nconst stock = appleStock.slice(1000);\nconst brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };\nconst chartSeparation = 30;\nconst PATTERN_ID = 'brush_pattern';\nconst GRADIENT_ID = 'brush_gradient';\nexport const accentColor = '#f6acc8';\nexport const background = '#584153';\nexport const background2 = '#af8baf';\nconst selectedBrushStyle = {\n  fill: `url(#${PATTERN_ID})`,\n  stroke: 'white',\n};\n\n// accessors\nconst getDate = (d: AppleStock) => new Date(d.date);\nconst getStockValue = (d: AppleStock) => d.close;\n\nexport type BrushProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n  compact?: boolean;\n};\n\nfunction BrushChart({\n  compact = false,\n  width,\n  height,\n  margin = {\n    top: 20,\n    left: 50,\n    bottom: 20,\n    right: 20,\n  },\n}: BrushProps) {\n  const brushRef = useRef<BaseBrush | null>(null);\n  const [filteredStock, setFilteredStock] = useState(stock);\n\n  const onBrushChange = (domain: Bounds | null) => {\n    if (!domain) return;\n    const { x0, x1, y0, y1 } = domain;\n    const stockCopy = stock.filter(s => {\n      const x = getDate(s).getTime();\n      const y = getStockValue(s);\n      return x > x0 && x < x1 && y > y0 && y < y1;\n    });\n    setFilteredStock(stockCopy);\n  };\n\n  const innerHeight = height - margin.top - margin.bottom;\n  const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10;\n  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;\n  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;\n\n  // bounds\n  const xMax = Math.max(width - margin.left - margin.right, 0);\n  const yMax = Math.max(topChartHeight, 0);\n  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);\n  const yBrushMax = Math.max(bottomChartHeight - brushMargin.top - brushMargin.bottom, 0);\n\n  // scales\n  const dateScale = useMemo(\n    () =>\n      scaleTime<number>({\n        range: [0, xMax],\n        domain: extent(filteredStock, getDate) as [Date, Date],\n      }),\n    [xMax, filteredStock],\n  );\n  const stockScale = useMemo(\n    () =>\n      scaleLinear<number>({\n        range: [yMax, 0],\n        domain: [0, max(filteredStock, getStockValue) || 0],\n        nice: true,\n      }),\n    [yMax, filteredStock],\n  );\n  const brushDateScale = useMemo(\n    () =>\n      scaleTime<number>({\n        range: [0, xBrushMax],\n        domain: extent(stock, getDate) as [Date, Date],\n      }),\n    [xBrushMax],\n  );\n  const brushStockScale = useMemo(\n    () =>\n      scaleLinear({\n        range: [yBrushMax, 0],\n        domain: [0, max(stock, getStockValue) || 0],\n        nice: true,\n      }),\n    [yBrushMax],\n  );\n\n  const initialBrushPosition = useMemo(\n    () => ({\n      start: { x: brushDateScale(getDate(stock[50])) },\n      end: { x: brushDateScale(getDate(stock[100])) },\n    }),\n    [brushDateScale],\n  );\n\n  // event handlers\n  const handleClearClick = () => {\n    if (brushRef?.current) {\n      setFilteredStock(stock);\n      brushRef.current.reset();\n    }\n  };\n\n  const handleResetClick = () => {\n    if (brushRef?.current) {\n      const updater: UpdateBrush = prevBrush => {\n        const newExtent = brushRef.current!.getExtent(\n          initialBrushPosition.start,\n          initialBrushPosition.end,\n        );\n\n        const newState: BaseBrushState = {\n          ...prevBrush,\n          start: { y: newExtent.y0, x: newExtent.x0 },\n          end: { y: newExtent.y1, x: newExtent.x1 },\n          extent: newExtent,\n        };\n\n        return newState;\n      };\n      brushRef.current.updateBrush(updater);\n    }\n  };\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        <LinearGradient id={GRADIENT_ID} from={background} to={background2} rotate={45} />\n        <rect x={0} y={0} width={width} height={height} fill={`url(#${GRADIENT_ID})`} rx={14} />\n        <AreaChart\n          hideBottomAxis={compact}\n          data={filteredStock}\n          width={width}\n          margin={{ ...margin, bottom: topChartBottomMargin }}\n          yMax={yMax}\n          xScale={dateScale}\n          yScale={stockScale}\n          gradientColor={background2}\n        />\n        <AreaChart\n          hideBottomAxis\n          hideLeftAxis\n          data={stock}\n          width={width}\n          yMax={yBrushMax}\n          xScale={brushDateScale}\n          yScale={brushStockScale}\n          margin={brushMargin}\n          top={topChartHeight + topChartBottomMargin + margin.top}\n          gradientColor={background2}\n        >\n          <PatternLines\n            id={PATTERN_ID}\n            height={8}\n            width={8}\n            stroke={accentColor}\n            strokeWidth={1}\n            orientation={['diagonal']}\n          />\n          <Brush\n            xScale={brushDateScale}\n            yScale={brushStockScale}\n            width={xBrushMax}\n            height={yBrushMax}\n            margin={brushMargin}\n            handleSize={8}\n            innerRef={brushRef}\n            resizeTriggerAreas={['left', 'right']}\n            brushDirection=\"horizontal\"\n            initialBrushPosition={initialBrushPosition}\n            onChange={onBrushChange}\n            onClick={() => setFilteredStock(stock)}\n            selectedBoxStyle={selectedBrushStyle}\n          />\n        </AreaChart>\n      </svg>\n      <button onClick={handleClearClick}>Clear</button>&nbsp;\n      <button onClick={handleResetClick}>Reset</button>\n    </div>\n  );\n}\n\nexport default BrushChart;\n")}},"uKU/":function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return s}));var r=e("PB0s"),a=e("2+fR"),i=e("W1cA"),o=e("Zbhd");function c(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(r.a)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Object(o.a)(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var a,i,o=n(),c=0,s=o.length-1,u=o[c],h=o[s],l=10;for(h<u&&(i=u,u=h,h=i,i=c,c=s,s=i);l-- >0;){if((i=Object(r.b)(u,h,e))===a)return o[c]=u,o[s]=h,n(o);if(i>0)u=Math.floor(u/i)*i,h=Math.ceil(h/i)*i;else{if(!(i<0))break;u=Math.ceil(u*i)/i,h=Math.floor(h*i)/i}a=i}return t},t}function s(){var t=Object(a.b)();return t.copy=function(){return Object(a.a)(t,s())},i.b.apply(t,arguments),c(t)}},ue4z:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return h})),e.d(n,"e",(function(){return s})),e.d(n,"f",(function(){return l}));var r=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},a=function(t){var n;return 1===t.length&&(n=t,t=function(t,e){return r(n(t),e)}),{left:function(n,e,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){var i=r+a>>>1;t(n[i],e)<0?r=i+1:a=i}return r},right:function(n,e,r,a){for(null==r&&(r=0),null==a&&(a=n.length);r<a;){var i=r+a>>>1;t(n[i],e)>0?a=i:r=i+1}return r}}};var i=a(r);i.right,i.left;var o=function(t,n){var e,r,a,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=a=e;++o<i;)null!=(e=t[o])&&(r>e&&(r=e),a<e&&(a=e))}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=a=e;++o<i;)null!=(e=n(t[o],o,t))&&(r>e&&(r=e),a<e&&(a=e));return[r,a]},c=Array.prototype,s=(c.slice,c.map,function(t,n,e){t=+t,n=+n,e=(a=arguments.length)<2?(n=t,t=0,1):a<3?1:+e;for(var r=-1,a=0|Math.max(0,Math.ceil((n-t)/e)),i=new Array(a);++r<a;)i[r]=t+r*e;return i});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var u=function(t,n){var e,r,a=t.length,i=-1;if(null==n){for(;++i<a;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<a;)null!=(e=t[i])&&e>r&&(r=e)}else for(;++i<a;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<a;)null!=(e=n(t[i],i,t))&&e>r&&(r=e);return r},h=function(t){for(var n,e,r,a=t.length,i=-1,o=0;++i<a;)o+=t[i].length;for(e=new Array(o);--a>=0;)for(n=(r=t[a]).length;--n>=0;)e[--o]=r[n];return e},l=function(t){if(!(a=t.length))return[];for(var n=-1,e=function(t,n){var e,r,a=t.length,i=-1;if(null==n){for(;++i<a;)if(null!=(e=t[i])&&e>=e)for(r=e;++i<a;)null!=(e=t[i])&&r>e&&(r=e)}else for(;++i<a;)if(null!=(e=n(t[i],i,t))&&e>=e)for(r=e;++i<a;)null!=(e=n(t[i],i,t))&&r>e&&(r=e);return r}(t,f),r=new Array(e);++n<e;)for(var a,i=-1,o=r[n]=new Array(a);++i<a;)o[i]=t[i][n];return r};function f(t){return t.length}},zjfJ:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))}},[["OfPM",0,2,1,3,4,5,6,7,11,12,13,16,45]]]);