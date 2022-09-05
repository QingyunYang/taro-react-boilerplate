"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4336],{"8988":function(e,t,r){r.d(t,{"zx":function(){return x},"Ee":function(){return g},"C3":function(){return b},"xv":function(){return y},"G7":function(){return h}});var o=r(5830),n=r(3368),a=r(2694),c=r(6905),i=r(9979),s=r(287),u=r(8508),l=r(2171),p=r(5466),f=r(6432);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=(0,p.Z)(e);if(t){var n=(0,p.Z)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.Z)(this,r)}}o.createElement;var d="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||m.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,o,n){var a=e.ref.current,c=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),t===d){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),u=c;return t===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),a.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(o)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,o,n):c}var v=function reactifyWebComponent(e){var t=function(t){(0,u.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,i.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,o.createRef)(),t}return(0,s.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,a.Z)(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,a={"ref":this.ref};return n&&(a.dangerouslySetInnerHTML=n),(0,o.createElement)(e,a,r)}}]),Index}(o.Component);return o.forwardRef((function(e,r){return o.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},h=(v("taro-cover-image-core"),v("taro-cover-view-core"),v("taro-match-media-core"),v("taro-movable-area-core"),v("taro-movable-view-core"),v("taro-page-container-core"),v("taro-root-portal-core"),v("taro-scroll-view-core"),v("taro-share-element-core"),v("taro-swiper-core"),v("taro-swiper-item-core"),v("taro-view-core")),y=(v("taro-icon-core"),v("taro-progress-core"),v("taro-rich-text-core"),v("taro-text-core")),x=v("taro-button-core"),b=(v("taro-checkbox-core"),v("taro-checkbox-group-core"),v("taro-editor-core"),v("taro-form-core"),v("taro-keyboard-accessory-core"),v("taro-label-core"),v("taro-picker-core"),v("taro-picker-view-core"),v("taro-picker-view-column-core"),v("taro-radio-core"),v("taro-radio-group-core"),v("taro-slider-core"),v("taro-switch-core"),v("taro-textarea-core"),v("taro-functional-page-navigator-core"),v("taro-navigator-core")),g=(v("taro-audio-core"),v("taro-camera-core"),v("taro-image-core"));v("taro-live-player-core"),v("taro-video-core"),v("taro-voip-room-core"),v("taro-map-core"),v("taro-canvas-core"),v("taro-web-view-core"),v("taro-ad-core"),v("taro-ad-custom-core"),v("taro-official-account-core"),v("taro-open-data-core"),v("taro-navigation-bar-core"),v("taro-page-meta-core"),v("taro-custom-wrapper-core")},"1784":function(e,t,r){r.d(t,{"X":function(){return n}});var o=r(4138),n=function PageLayout(e){var t=e.children;return(0,o.jsx)(o.Fragment,{"children":t})}},"4336":function(e,t,r){r.r(t),r.d(t,{"default":function(){return f}});var o=r(1784),n=r(8988),a=r(4138),c=function SectionItem(e){var t=e.links,r=e.title,o=e.description;return(0,a.jsx)(n.G7,{"className":"mb-2 flex flex-col rounded-xl bg-white shadow","children":(0,a.jsxs)(n.G7,{"className":"p-4 md:p-5","children":[(0,a.jsx)(n.G7,{"className":"text-lg font-bold text-gray-800","children":(0,a.jsx)(n.xv,{"children":r})}),o?(0,a.jsx)(n.G7,{"className":"mt-2 text-gray-800","children":(0,a.jsx)(n.xv,{"children":o})}):null,(0,a.jsx)(n.G7,{"className":"mt-3","children":t.map((function(e){return(0,a.jsx)(n.C3,{"url":e.url,"className":"gap-2 text-sm font-medium text-blue-500","children":(0,a.jsx)(n.G7,{"className":"p-1","children":(0,a.jsx)(n.xv,{"children":e.title})})},"".concat(e.title).concat(e.url))}))})]})})},i=[{"url":"/sub-packages/taro-components/@antmjs+vantui/index","title":"@antmjs/vantui"},{"url":"/sub-packages/taro-components/taroify/index","title":"taroify"},{"url":"/sub-packages/taro-components/ossaui/index","title":"ossaui"}],s=[{"url":"/sub-packages/state-management/redux/index","title":"redux"},{"url":"/sub-packages/state-management/zustand/index","title":"zustand"},{"url":"/sub-packages/state-management/recoil/index","title":"recoil"},{"url":"/sub-packages/state-management/jotai/index","title":"jotai"}],u=[{"url":"/sub-packages/data-fetching/react-query/index","title":"react-query"}],l=[{"url":"/sub-packages/use-hooks/ahooks/index","title":"ahooks"}],p=function App(){return(0,a.jsxs)(n.G7,{"className":"h-screen bg-gray-100 pr-3 pl-3 pt-2 pb-2","children":[(0,a.jsx)(c,{"links":i,"title":"Taro Components","description":"基于 Taro 的跨端组件库"}),(0,a.jsx)(c,{"links":s,"title":"State Management","description":"流行的状态管理库"}),(0,a.jsx)(c,{"links":u,"title":"Data Fetching","description":"数据请求库"}),(0,a.jsx)(c,{"links":l,"title":"Use Hooks","description":"可用的 react hook 库"}),(0,a.jsx)(c,{"links":[],"title":"Drag And Drop","description":"拖拽能力"}),(0,a.jsx)(c,{"links":[],"title":"Animation","description":"动画效果"}),(0,a.jsx)(c,{"links":[],"title":"Game Engine","description":"游戏引擎"})]})},f=function Page(){return(0,a.jsx)(o.X,{"children":(0,a.jsx)(p,{})})}}}]);