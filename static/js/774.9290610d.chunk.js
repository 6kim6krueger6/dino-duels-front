"use strict";(self.webpackChunkprivy_create_react_app=self.webpackChunkprivy_create_react_app||[]).push([[774],{7171:function(e,t,n){n.d(t,{t0:function(){return L},zv:function(){return W},uA:function(){return k},uc:function(){return te},jb:function(){return re},zb:function(){return x},AV:function(){return O},Ic:function(){return le},Vs:function(){return de}});var r=n(3433),o=n(7762),a=n(4165),i=n(5861),s=n(9439),c=(Symbol(),Symbol()),u=Object.getPrototypeOf,l=new WeakMap,f=function(e){return e&&(l.has(e)?l.get(e):u(e)===Object.prototype||u(e)===Array.prototype)},d=function(e){return f(e)&&e[c]||null},p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.set(e,t)},v=function(e){return"object"===typeof e&&null!==e},h=new WeakMap,b=new WeakSet,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return v(e)&&!b.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=a.get(e);if((null==r?void 0:r[0])===t)return r[1];var c=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return p(c,!0),a.set(e,[t,c]),Reflect.ownKeys(e).forEach((function(t){if(!Object.getOwnPropertyDescriptor(c,t)){var r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(b.has(r))p(r,!1);else if(r instanceof Promise)delete o.value,o.get=function(){return n(r)};else if(h.has(r)){var a=h.get(r),u=(0,s.Z)(a,2),l=u[0],f=u[1];o.value=i(l,f(),n)}Object.defineProperty(c,t,o)}})),Object.preventExtensions(c)},c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(o){if(!v(o))throw new Error("object required");var a=c.get(o);if(a)return a;var f=u[0],p=new Set,m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++u[0];f!==t&&(f=t,p.forEach((function(n){return n(e,t)})))},g=u[1],y=function(e){return function(t,n){var o=(0,r.Z)(t);o[1]=[e].concat((0,r.Z)(o[1])),m(o,n)}},w=new Map,I=function(e){var t,n=w.get(e);n&&(w.delete(e),null==(t=n[1])||t.call(n))},C=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),O={deleteProperty:function(e,t){var n=Reflect.get(e,t);I(t);var r=Reflect.deleteProperty(e,t);return r&&m(["delete",[t],n]),r},set:function(t,r,o,a){var i=Reflect.has(t,r),s=Reflect.get(t,r,a);if(i&&(e(s,o)||c.has(o)&&e(s,c.get(o))))return!0;I(r),v(o)&&(o=d(o)||o);var u=o;if(o instanceof Promise)o.then((function(e){o.status="fulfilled",o.value=e,m(["resolve",[r],e])})).catch((function(e){o.status="rejected",o.reason=e,m(["reject",[r],e])}));else{!h.has(o)&&n(o)&&(u=l(o));var f=!b.has(u)&&h.get(u);f&&function(e,t){if(w.has(e))throw new Error("prop listener already exists");if(p.size){var n=t[3](y(e));w.set(e,[t,n])}else w.set(e,[t])}(r,f)}return Reflect.set(t,r,u,a),m(["set",[r],o,s]),!0}},W=t(C,O);c.set(o,W);var E=[C,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++u[1];return g===e||p.size||(g=e,w.forEach((function(t){var n=(0,s.Z)(t,1)[0][1](e);n>f&&(f=n)}))),f},i,function(e){p.add(e),1===p.size&&w.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var o=r[3](y(t));w.set(t,[r,o])}));return function(){p.delete(e),0===p.size&&w.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0],o=n[1];o&&(o(),w.set(t,[r]))}))}}];return h.set(W,E),Reflect.ownKeys(o).forEach((function(e){var t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(W[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(C,e,t)})),W};return[l,h,b,e,t,n,o,a,i,c,u]},g=m(),y=(0,s.Z)(g,1)[0];function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y(e)}function I(e,t,n){var r,o=h.get(e);o||console.warn("Please use proxy object");var a=[],i=o[3],s=!1,c=i((function(e){a.push(e),n?t(a.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(a.splice(0))})))}));return s=!0,function(){s=!1,c()}}var C=w({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),O={state:C,subscribe:function(e){return I(C,(function(){return e(C)}))},push:function(e,t){e!==C.view&&(C.view=e,t&&(C.data=t),C.history.push(e))},reset:function(e){C.view=e,C.history=[e]},replace:function(e){C.history.length>1&&(C.history[C.history.length-1]=e,C.view=e)},goBack:function(){if(C.history.length>1){C.history.pop();var e=C.history.slice(-1),t=(0,s.Z)(e,1)[0];C.view=t}},setData:function(e){C.data=e}},W={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return W.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return W.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(W.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!W.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},wait:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){try{localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(n){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink:function(e){try{var t=e.split("?"),n=(0,s.Z)(t,1)[0];localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))}catch(r){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink:function(){try{localStorage.removeItem(W.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage:function(){try{typeof localStorage<"u"&&localStorage.setItem(W.WCM_VERSION,"2.6.2")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData:function(){var e,t=null==(e=O.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},E=w({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),k={state:E,subscribe:function(e){return I(E.events,(function(){return e(function(e,t){var n=h.get(e);n||console.warn("Please use proxy object");var r=(0,s.Z)(n,3),o=r[0],a=r[1];return(0,r[2])(o,a(),t)}(E.events[E.events.length-1]))}))},initialize:function(){E.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(E.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){E.connectedWalletId=e},click:function(e){if(E.enabled){var t={type:"CLICK",name:e.name,userSessionId:E.userSessionId,timestamp:Date.now(),data:e};E.events.push(t)}},track:function(e){if(E.enabled){var t={type:"TRACK",name:e.name,userSessionId:E.userSessionId,timestamp:Date.now(),data:e};E.events.push(t)}},view:function(e){if(E.enabled){var t={type:"VIEW",name:e.name,userSessionId:E.userSessionId,timestamp:Date.now(),data:e};E.events.push(t)}}},j=w({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),x={state:j,subscribe:function(e){return I(j,(function(){return e(j)}))},setChains:function(e){j.chains=e},setWalletConnectUri:function(e){j.walletConnectUri=e},setIsCustomDesktop:function(e){j.isCustomDesktop=e},setIsCustomMobile:function(e){j.isCustomMobile=e},setIsDataLoaded:function(e){j.isDataLoaded=e},setIsUiLoaded:function(e){j.isUiLoaded=e},setIsAuth:function(e){j.isAuth=e}},A=w({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),L={state:A,subscribe:function(e){return I(A,(function(){return e(A)}))},setConfig:function(e){var t,n;k.initialize(),x.setChains(e.chains),x.setIsAuth(Boolean(e.enableAuthMode)),x.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),x.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),W.setModalVersionInStorage(),Object.assign(A,e)}},Z=Object.defineProperty,M=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,D=function(e,t,n){return t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},S=function(e,t){for(var n in t||(t={}))U.call(t,n)&&D(e,n,t[n]);if(M){var r,a=(0,o.Z)(M(t));try{for(a.s();!(r=a.n()).done;){n=r.value;P.call(t,n)&&D(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},N="https://explorer-api.walletconnect.com",T="wcm",_="js-2.6.2";function R(e,t){return V.apply(this,arguments)}function V(){return V=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=S({sdkType:T,sdkVersion:_},n),(o=new URL(t,N)).searchParams.append("projectId",L.state.projectId),Object.entries(r).forEach((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];r&&o.searchParams.append(n,String(r))})),e.next=5,fetch(o);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}var z=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},B=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},H=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",R("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},K=function(e){return"".concat(N,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(L.state.projectId,"&sdkType=").concat(T,"&sdkVersion=").concat(_)},J=function(e){return"".concat(N,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(L.state.projectId,"&sdkType=").concat(T,"&sdkVersion=").concat(_)},q=Object.defineProperty,F=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=function(e,t,n){return t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Y=function(e,t){for(var n in t||(t={}))G.call(t,n)&&X(e,n,t[n]);if(F){var r,a=(0,o.Z)(F(t));try{for(a.s();!(r=a.n()).done;){n=r.value;Q.call(t,n)&&X(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},$=W.isMobile(),ee=w({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),te={state:ee,getRecomendedWallets:function(){return(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,o,i,s,c,u,l,f,d,p,v,h,b;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=L.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",ee.recomendedWallets);case 3:if(!W.isArray(n)){e.next=13;break}return o={recommendedIds:n.join(",")},e.next=7,H(o);case 7:i=e.sent,s=i.listings,(c=Object.values(s)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),ee.recomendedWallets=c,e.next=31;break;case 13:if(u=x.state,l=u.chains,f=u.isAuth,d=null===l||void 0===l?void 0:l.join(","),p=W.isArray(r),v={page:1,sdks:f?"auth_v1":void 0,entries:W.RECOMMENDED_WALLET_AMOUNT,chains:d,version:2,excludedIds:p?r.join(","):void 0},!$){e.next=25;break}return e.next=22,B(v);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,z(v);case 27:e.t0=e.sent;case 28:h=e.t0,b=h.listings,ee.recomendedWallets=Object.values(b);case 31:return e.abrupt("return",ee.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){var n,o,i,s,c,u,l,f,d,p,v,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Y({},e),o=L.state,i=o.explorerRecommendedWalletIds,s=o.explorerExcludedWalletIds,c=ee.recomendedWallets,"ALL"!==s){t.next=3;break}return t.abrupt("return",ee.wallets);case 3:if(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):W.isArray(i)&&(n.excludedIds=i.join(",")),W.isArray(s)&&(n.excludedIds=[n.excludedIds,s].filter(Boolean).join(",")),x.state.isAuth&&(n.sdks="auth_v1"),u=e.page,l=e.search,!$){t.next=12;break}return t.next=9,B(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,z(n);case 14:t.t0=t.sent;case 15:return f=t.t0,d=f.listings,p=f.total,v=Object.values(d),h=l?"search":"wallets",t.abrupt("return",(ee[h]={listings:[].concat((0,r.Z)(ee[h].listings),v),total:p,page:null!==u&&void 0!==u?u:1},{listings:v,total:p}));case 21:case"end":return t.stop()}}),t)})))()},getWalletImageUrl:function(e){return K(e)},getAssetImageUrl:function(e){return J(e)},resetSearch:function(){ee.search={listings:[],total:0,page:1}}},ne=w({open:!1}),re={state:ne,subscribe:function(e){return I(ne,(function(){return e(ne)}))},open:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=x.state,r=n.isUiLoaded,o=n.isDataLoaded;if(W.removeWalletConnectDeepLink(),x.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),x.setChains(null===e||void 0===e?void 0:e.chains),O.reset("ConnectWallet"),r&&o)ne.open=!0,t();else var a=setInterval((function(){var e=x.state;e.isUiLoaded&&e.isDataLoaded&&(clearInterval(a),ne.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){ne.open=!1}},oe=Object.defineProperty,ae=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ce=function(e,t,n){return t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var ue=w({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),le={state:ue,subscribe:function(e){return I(ue,(function(){return e(ue)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(ue.themeMode=t),n&&(ue.themeVariables=function(e,t){for(var n in t||(t={}))ie.call(t,n)&&ce(e,n,t[n]);if(ae){var r,a=(0,o.Z)(ae(t));try{for(a.s();!(r=a.n()).done;)n=r.value,se.call(t,n)&&ce(e,n,t[n])}catch(i){a.e(i)}finally{a.f()}}return e}({},n))}},fe=w({open:!1,message:"",variant:"success"}),de={state:fe,subscribe:function(e){return I(fe,(function(){return e(fe)}))},openToast:function(e,t){fe.open=!0,fe.message=e,fe.variant=t},closeToast:function(){fe.open=!1}}},774:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return c}});var r=n(4165),o=n(5861),a=n(5671),i=n(3144),s=n(7171),c=function(){function e(t){(0,a.Z)(this,e),this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.Ic.setThemeConfig,s.Ic.setThemeConfig(t),s.t0.setConfig(t),this.initUi()}return(0,i.Z)(e,[{key:"initUi",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,n.e(854).then(n.bind(n,1854));case 3:t=document.createElement("wcm-modal"),document.body.insertAdjacentElement("beforeend",t),s.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=774.9290610d.chunk.js.map