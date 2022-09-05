"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6276],{"8988":function(t,r,o){o.d(r,{"zx":function(){return S},"Ee":function(){return x},"C3":function(){return E},"xv":function(){return A},"G7":function(){return b}});var i=o(5830),a=o(3368),c=o(2694),u=o(6905),l=o(9979),d=o(287),v=o(8508),p=o(2171),m=o(5466),h=o(6432);function ownKeys(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(o),!0).forEach((function(r){(0,a.Z)(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var o,i=(0,m.Z)(t);if(r){var a=(0,m.Z)(this).constructor;o=Reflect.construct(i,arguments,a)}else o=i.apply(this,arguments);return(0,p.Z)(this,o)}}i.createElement;var y="taro-scroll-view-core",w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(t,r,o){/^--/.test(r)?t.style.setProperty(r,o):"number"!=typeof o||w.test(r)?t.style[r]=o:t.style[r]=o+"px"}function updateProp(t,r,o,i,a){var c=t.ref.current,u=a[o],l=i?i[o]:void 0;if("children"!==o)if("classname"!==o.toLowerCase()){if("style"!==o){if(/^data-.+/.test(o)&&c.setAttribute(o,u),r===y){if("scrollTop"===o)return void(c.mpScrollTop=u);if("scrollLeft"===o)return void(c.mpScrollLeft=u);if("scrollIntoView"===o)return void(c.mpScrollIntoView=u)}if("function"==typeof u&&o.match(/^on[A-Z]/)){var d=o.substr(2).toLowerCase(),v=u;return r===y&&"scroll"===d&&(v=function fn(t){t instanceof CustomEvent&&u.apply(null,Array.from(arguments))}),t.eventHandlers.push([d,v]),c.addEventListener(d,v)}return"string"==typeof u||"number"==typeof u?(c.setAttribute(o,u),void(c[o]=u)):"boolean"==typeof u?u?(c[o]=!0,c.setAttribute(o,u)):(c[o]=!1,c.removeAttribute(o)):void(c[o]=u)}if("string"==typeof u)return void c.setAttribute(o,u);if(!u)return void c.removeAttribute(o);if(i)if("string"==typeof l)c.style.cssText="";else for(var p in l)updateStyle(c,p,"");for(var m in u)updateStyle(c,m,u[m])}else c.className=i?function getClassName(t,r,o){var i=Array.from(t.classList),a=(r.className||r.class||"").split(" "),c=(o.className||o.class||"").split(" "),u=[];return i.forEach((function(t){c.indexOf(t)>-1?(u.push(t),c=c.filter((function(r){return r!==t}))):-1===a.indexOf(t)&&u.push(t)})),(u=[].concat((0,h.Z)(u),(0,h.Z)(c))).join(" ")}(c,i,a):u}var g=function reactifyWebComponent(t){var r=function(r){(0,v.Z)(Index,r);var o=_createSuper(Index);function Index(t){var r;return(0,l.Z)(this,Index),(r=o.call(this,t)).eventHandlers=[],r.ref=(0,i.createRef)(),r}return(0,d.Z)(Index,[{"key":"update","value":function update(r){var o=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(i){"children"===i||"key"===i||i in o.props||updateProp(o,t,i,r,o.props)})),Object.keys(this.props).forEach((function(i){updateProp(o,t,i,r,o.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(t){this.update(t)}},{"key":"componentDidMount","value":function componentDidMount(){var t=this.props.forwardRef;"function"==typeof t?t(this.ref.current):t&&"object"===(0,u.Z)(t)&&t.hasOwnProperty("current")?t.current=this.ref.current:"string"==typeof t&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var t=this;this.eventHandlers.forEach((function(r){var o=(0,c.Z)(r,2),i=o[0],a=o[1];t.ref.current&&t.ref.current.removeEventListener(i,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,o=r.children,a=r.dangerouslySetInnerHTML,c={"ref":this.ref};return a&&(c.dangerouslySetInnerHTML=a),(0,i.createElement)(t,c,o)}}]),Index}(i.Component);return i.forwardRef((function(t,o){return i.createElement(r,_objectSpread(_objectSpread({},t),{},{"forwardRef":o}))}))},b=(g("taro-cover-image-core"),g("taro-cover-view-core"),g("taro-match-media-core"),g("taro-movable-area-core"),g("taro-movable-view-core"),g("taro-page-container-core"),g("taro-root-portal-core"),g("taro-scroll-view-core"),g("taro-share-element-core"),g("taro-swiper-core"),g("taro-swiper-item-core"),g("taro-view-core")),A=(g("taro-icon-core"),g("taro-progress-core"),g("taro-rich-text-core"),g("taro-text-core")),S=g("taro-button-core"),E=(g("taro-checkbox-core"),g("taro-checkbox-group-core"),g("taro-editor-core"),g("taro-form-core"),g("taro-keyboard-accessory-core"),g("taro-label-core"),g("taro-picker-core"),g("taro-picker-view-core"),g("taro-picker-view-column-core"),g("taro-radio-core"),g("taro-radio-group-core"),g("taro-slider-core"),g("taro-switch-core"),g("taro-textarea-core"),g("taro-functional-page-navigator-core"),g("taro-navigator-core")),x=(g("taro-audio-core"),g("taro-camera-core"),g("taro-image-core"));g("taro-live-player-core"),g("taro-video-core"),g("taro-voip-room-core"),g("taro-map-core"),g("taro-canvas-core"),g("taro-web-view-core"),g("taro-ad-core"),g("taro-ad-custom-core"),g("taro-official-account-core"),g("taro-open-data-core"),g("taro-navigation-bar-core"),g("taro-page-meta-core"),g("taro-custom-wrapper-core")},"1784":function(t,r,o){o.d(r,{"X":function(){return a}});var i=o(4138),a=function PageLayout(t){var r=t.children;return(0,i.jsx)(i.Fragment,{"children":r})}},"3554":function(t,r,o){o.r(r),o.d(r,{"default":function(){return z}});var i=o(1784),a=o(2694),c=o(3368),u=o(3336),l=o(4697),d=o(5830),v=Symbol(),p=function isSuspensePromise(t){return!!t[v]},m=function cancelSuspensePromise(t){var r,o=t[v],i=o.b,a=o.c;a&&(a(),null==(r=w.get(i))||r())},h=function isEqualSuspensePromise(t,r){var o=t[v].o,i=r[v].o;return o===i||t===i||p(o)&&isEqualSuspensePromise(o,r)},y=function createSuspensePromise(t,r){var o={"b":t,"o":r,"c":null},i=new Promise((function(t){o.c=function(){o.c=null,t()},r.finally(o.c)}));return i[v]=o,i},w=new WeakMap,g=function hasInitialValue(t){return"init"in t},b="r",A="w",S="c",E="s",x=function createStore(t){var r,o,i=new WeakMap,d=new WeakMap,w=new Map;if(r=new Set,o=new Set,t){var x,Z=(0,l.Z)(t);try{for(Z.s();!(x=Z.n()).done;){var P=(0,a.Z)(x.value,2),j=P[0],k={"v":P[1],"r":0,"y":!0,"d":new Map};Object.freeze(k),g(j)||console.warn("Found initial value for derived atom which can cause unexpected behavior",j),i.set(j,k)}}catch(t){Z.e(t)}finally{Z.f()}}var O,C=new WeakMap,M=new WeakMap,I=function getVersionedAtomStateMap(t){var r=M.get(t);return r||(r=new Map,M.set(t,r)),r},z=function getAtomState(t,r){if(t){var o=I(t),a=o.get(r);return a||(a=getAtomState(t.p,r))&&o.set(r,a),a}return i.get(r)},R=function setAtomState(t,r,o){if(Object.freeze(o),t){I(t).set(r,o)}else{var a=i.get(r);i.set(r,o),w.has(r)||w.set(r,a)}},D=function createReadDependencies(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map,o=arguments.length>2?arguments[2]:void 0;if(!o)return r;var i=new Map,a=!1;return o.forEach((function(o){var c,u=(null==(c=z(t,o))?void 0:c.r)||0;i.set(o,u),r.get(o)!==u&&(a=!0)})),r.size!==i.size||a?i:r},H=function setAtomValue(t,r,o,i,a){var c=z(t,r);if(c){if(a&&(!("p"in c)||!h(c.p,a)))return c;"p"in c&&m(c.p)}var u={"v":o,"r":(null==c?void 0:c.r)||0,"y":!0,"d":D(t,null==c?void 0:c.d,i)},l=!(null==c?void 0:c.y);return c&&"v"in c&&Object.is(c.v,o)?u.d===c.d||u.d.size===c.d.size&&Array.from(u.d.keys()).every((function(t){return c.d.has(t)}))||(l=!0,Promise.resolve().then((function(){X(t)}))):(l=!0,++u.r,u.d.has(r)&&(u.d=new Map(u.d).set(r,u.r))),c&&!l?c:(R(t,r,u),u)},_=function setAtomReadError(t,r,o,i,a){var c=z(t,r);if(c){if(a&&(!("p"in c)||!h(c.p,a)))return c;"p"in c&&m(c.p)}var u={"e":o,"r":((null==c?void 0:c.r)||0)+1,"y":!0,"d":D(t,null==c?void 0:c.d,i)};return R(t,r,u),u},L=function setAtomSuspensePromise(t,r,o,i){var a=z(t,r);if(a&&"p"in a){if(h(a.p,o))return a.y?a:(0,u.Z)((0,u.Z)({},a),{},{"y":!0});m(a.p)}!function addSuspensePromiseToCache(t,r,o){var i=C.get(r);i||(i=new Map,C.set(r,i)),o.then((function(){i.get(t)===o&&(i.delete(t),i.size||C.delete(r))})),i.set(t,o)}(t,r,o);var c={"p":o,"r":((null==a?void 0:a.r)||0)+1,"y":!0,"d":D(t,null==a?void 0:a.d,i)};return R(t,r,c),c},N=function setAtomPromiseOrValue(t,r,o,i){if(o instanceof Promise){var a=y(o,o.then((function(o){H(t,r,o,i,a)})).catch((function(o){if(o instanceof Promise)return p(o)?o.then((function(){V(t,r,!0)})):o;_(t,r,o,i,a)})));return L(t,r,a,i)}return H(t,r,o,i)},V=function readAtomState(t,r,o){if(!o){var i=z(t,r);if(i){if(i.y&&"p"in i&&!function isSuspensePromiseAlreadyCancelled(t){return!t[v].c}(i.p))return i;if(i.d.forEach((function(o,i){if(i!==r)if(d.has(i)){var a=z(t,i);a&&!a.y&&readAtomState(t,i)}else readAtomState(t,i)})),Array.from(i.d).every((function(r){var o=(0,a.Z)(r,2),i=o[0],c=o[1],u=z(t,i);return u&&!("p"in u)&&u.r===c})))return i.y?i:(0,u.Z)((0,u.Z)({},i),{},{"y":!0})}}var c=new Set;try{var l=r.read((function(o){c.add(o);var i=o===r?z(t,o):readAtomState(t,o);if(i){if("e"in i)throw i.e;if("p"in i)throw i.p;return i.v}if(g(o))return o.init;throw new Error("no atom init")}));return N(t,r,l,c)}catch(o){if(o instanceof Promise){var p=y(o,o);return L(t,r,p,c)}return _(t,r,o,c)}},T=function readAtom(t,r){return V(r,t)},W=function canUnmountAtom(t,r){return!r.l.size&&(!r.t.size||1===r.t.size&&r.t.has(t))},B=function invalidateDependents(t,r){var o=d.get(r);null==o||o.t.forEach((function(o){o!==r&&(!function setAtomInvalidated(t,r){var o=z(t,r);if(o){var i=(0,u.Z)((0,u.Z)({},o),{},{"y":!1});R(t,r,i)}else console.warn("[Bug] could not invalidate non existing atom",r)}(t,o),invalidateDependents(t,o))}))},U=function writeAtomState(t,r,o){var i=!0,a=r.write((function writeGetter(r,o){var i=V(t,r);if("e"in i)throw i.e;if("p"in i){if(null==o?void 0:o.unstable_promise)return i.p.then((function(){return writeGetter(r,o)}));throw console.info("Reading pending atom state in write operation. We throw a promise for now.",r),i.p}if("v"in i)return i.v;throw console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",r),new Error("no value found")}),(function setter(o,a){var c;if(o===r){if(!g(o))throw new Error("atom not writable");var u=function cancelAllSuspensePromiseInCache(t){var r=new Set,o=C.get(t);return o&&(C.delete(t),o.forEach((function(t,o){m(t),r.add(o)}))),r}(o);u.forEach((function(r){r!==t&&N(r,o,a)})),z(t,o)!==N(t,o,a)&&B(t,o)}else c=writeAtomState(t,o,a);return i||X(t),c}),o);return i=!1,a},G=function writeAtom(t,r,o){var i=U(o,t,r);return X(o),i},K=function mountAtom(t,r,i){var a={"t":new Set(i&&[i]),"l":new Set};if(d.set(r,a),o.add(r),V(void 0,r).d.forEach((function(o,i){var a=d.get(i);a?a.t.add(r):i!==r&&mountAtom(t,i,r)})),function isActuallyWritableAtom(t){return!!t.write}(r)&&r.onMount){var c=r.onMount((function setAtom(o){return G(r,o,t)}));t=void 0,c&&(a.u=c)}return a},q=function unmountAtom(t,r){var i,a=null==(i=d.get(r))?void 0:i.u;a&&a(),d.delete(r),o.delete(r);var c=z(t,r);c?("p"in c&&m(c.p),c.d.forEach((function(o,i){if(i!==r){var a=d.get(i);a&&(a.t.delete(r),W(i,a)&&unmountAtom(t,i))}}))):console.warn("[Bug] could not find atom state to unmount",r)},J=function mountDependencies(t,r,o,i){var a=new Set(o.d.keys());null==i||i.forEach((function(o,i){if(a.has(i))a.delete(i);else{var c=d.get(i);c&&(c.t.delete(r),W(i,c)&&q(t,i))}})),a.forEach((function(o){var i=d.get(o);i?i.t.add(r):d.has(r)&&K(t,o,r)}))},X=function flushPending(t){if(t){I(t).forEach((function(r,o){if(r!==i.get(o)){var a=d.get(o);null==a||a.l.forEach((function(r){return r(t)}))}}))}else{for(;w.size;){var o=Array.from(w);w.clear(),o.forEach((function(t){var r=(0,a.Z)(t,2),o=r[0],i=r[1],c=z(void 0,o);if(c&&c.d!==(null==i?void 0:i.d)&&J(void 0,o,c,null==i?void 0:i.d),!i||i.y||!(null==c?void 0:c.y)){var u=d.get(o);null==u||u.l.forEach((function(t){return t()}))}}))}r.forEach((function(t){return t()}))}},$=function commitAtom(t,r){r&&function commitVersionedAtomStateMap(t){I(t).forEach((function(r,o){var a=i.get(o);(!a||r.r>a.r||r.y!==a.y||r.r===a.r&&r.d!==a.d)&&(i.set(o,r),r.d!==(null==a?void 0:a.d)&&J(t,o,r,null==a?void 0:a.d))}))}(r),X(void 0)},Q=function subscribeAtom(t,r,o){var i=function addAtom(t,r){var o=d.get(r);return o||(o=K(t,r)),o}(o,t),a=i.l;return a.add(r),function(){a.delete(r),function delAtom(t,r){var o=d.get(r);o&&W(r,o)&&q(t,r)}(o,t)}},Y=function restoreAtoms(t,r){var o,i=(0,l.Z)(t);try{for(i.s();!(o=i.n()).done;){var c=(0,a.Z)(o.value,2),u=c[0],d=c[1];g(u)&&(N(r,u,d),B(r,u))}}catch(t){i.e(t)}finally{i.f()}X(r)};return O={},(0,c.Z)(O,b,T),(0,c.Z)(O,A,G),(0,c.Z)(O,S,$),(0,c.Z)(O,E,Q),(0,c.Z)(O,"h",Y),(0,c.Z)(O,"n",(function(t){return r.add(t),function(){r.delete(t)}})),(0,c.Z)(O,"l",(function(){return o.values()})),(0,c.Z)(O,"a",(function(t){return i.get(t)})),(0,c.Z)(O,"m",(function(t){return d.get(t)})),O},Z=function createScopeContainer(t,r){return{"s":r?r(t).SECRET_INTERNAL_store:x(t)}},P=new Map,j=function getScopeContext(t){return P.has(t)||P.set(t,(0,d.createContext)(Z())),P.get(t)},k=0;function useAtomValue(t,r){var o=j(r),i=(0,d.useContext)(o),c=i.s,u=i.v,l=function getAtomValue(r){var o=c.r(t,r);if(!o.y)throw new Error("should not be invalidated");if("e"in o)throw o.e;if("p"in o)throw o.p;if("v"in o)return o.v;throw new Error("no atom value")},v=(0,d.useReducer)((function(r,o){var i=l(o);return Object.is(r[1],i)&&r[2]===t?r:[o,i,t]}),u,(function(r){return[r,l(r),t]})),p=(0,a.Z)(v,2),m=(0,a.Z)(p[0],3),h=m[0],y=m[1],w=m[2],g=p[1],b=y;return w!==t&&(g(h),b=l(h)),(0,d.useEffect)((function(){var r=i.v;r&&c.c(t,r);var o=c.s(t,g,r);return g(r),o}),[c,t,i]),(0,d.useEffect)((function(){c.c(t,h)})),(0,d.useDebugValue)(b),b}function useSetAtom(t,r){var o=j(r),i=(0,d.useContext)(o),a=i.s,c=i.w;return(0,d.useCallback)((function(r){if(!("write"in t))throw new Error("not writable atom");var o=function write(o){return a.w(t,r,o)};return c?c(o):o()}),[a,c,t])}var O=o(8988),C=o(4138),M=function atom(t,r){var o="atom".concat(++k),i={"toString":function toString(){return o}};return"function"==typeof t?i.read=t:(i.init=t,i.read=function(t){return t(i)},i.write=function(t,r,o){return r(i,"function"==typeof o?o(t(i)):o)}),r&&(i.write=r),i}(0),I=function App(){var t=function useAtom(t,r){return"scope"in t&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),r=t.scope),[useAtomValue(t,r),useSetAtom(t,r)]}(M),r=(0,a.Z)(t,2),o=r[0],i=r[1];return(0,C.jsxs)(O.G7,{"className":"flex h-screen flex-col items-center justify-center","children":[(0,C.jsx)(O.xv,{"children":o}),(0,C.jsx)(O.zx,{"className":"mt-2","onClick":function onClick(){return i((function(t){return t+1}))},"children":"+"}),(0,C.jsx)(O.zx,{"className":"mt-2","onClick":function onClick(){return i((function(t){return t-1}))},"children":"1"}),(0,C.jsx)(O.zx,{"className":"mt-2","onClick":function onClick(){return i((function(t){return t+3}))},"children":"+3"})]})},z=function Page(){return(0,C.jsx)(i.X,{"children":(0,C.jsx)(I,{})})}},"4697":function(t,r,o){o.d(r,{"Z":function(){return _createForOfIteratorHelper}});var i=o(5478);function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=(0,i.Z)(t))||r&&t&&"number"==typeof t.length){o&&(t=o);var a=0,c=function F(){};return{"s":c,"n":function n(){return a>=t.length?{"done":!0}:{"done":!1,"value":t[a++]}},"e":function e(t){throw t},"f":c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,d=!1;return{"s":function s(){o=o.call(t)},"n":function n(){var t=o.next();return l=t.done,t},"e":function e(t){d=!0,u=t},"f":function f(){try{l||null==o.return||o.return()}finally{if(d)throw u}}}}}}]);