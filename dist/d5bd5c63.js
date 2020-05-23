const t=typeof window!=="undefined"&&window.customElements!=null&&void 0!==window.customElements.polyfillWrapFlushCallback; const e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}}; const s=`{{lit-${String(Math.random()).slice(2)}}}`; const i=`\x3c!--${s}--\x3e`; const n=new RegExp(`${s}|${i}`);class r{constructor(t,e){this.parts=[],this.element=e;const i=[]; const r=[]; const a=document.createTreeWalker(e.content,133,null,!1);let d=0; let c=-1; let p=0;const{strings:u,values:{length:_}}=t;for(;p<_;){const t=a.nextNode();if(t!==null){if(c++,t.nodeType===1){if(t.hasAttributes()){const e=t.attributes; const {length:s}=e;let i=0;for(let t=0;t<s;t++)o(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=u[p]; const s=h.exec(e)[2]; const i=`${s.toLowerCase()}$lit$`; const r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(n);this.parts.push({type:"attribute",index:c,name:s,strings:o}),p+=o.length-1}}t.tagName==="TEMPLATE"&&(r.push(t),a.currentNode=t.content)}else if(t.nodeType===3){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode; const r=e.split(n); const a=r.length-1;for(let e=0;e<a;e++){let i; let n=r[e];if(n==="")i=l();else{const t=h.exec(n);t!==null&&o(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++c})}r[a]===""?(s.insertBefore(l(),t),i.push(t)):t.data=r[a],p+=a}}else if(t.nodeType===8)if(t.data===s){const e=t.parentNode;t.previousSibling!==null&&c!==d||(c++,e.insertBefore(l(),t)),d=c,this.parts.push({type:"node",index:c}),t.nextSibling===null?t.data="":(i.push(t),c--),p++}else{let e=-1;for(;(e=t.data.indexOf(s,e+1))!==-1;)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e}; const a=t=>t.index!==-1; const l=()=>document.createComment(""); const h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:s},parts:i}=t; const n=document.createTreeWalker(s,133,null,!1);let r=p(i); let o=i[r]; let a=-1; let l=0;const h=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(h.push(t),d===null&&(d=t)),d!==null&&l++;void 0!==o&&o.index===a;)o.index=d!==null?-1:o.index-l,r=p(i,r),o=i[r]}h.forEach(t=>t.parentNode.removeChild(t))}const c=t=>{let e=t.nodeType===11?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e}; const p=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(a(e))return s}return-1};const u=new WeakMap; const _=t=>typeof t==="function"&&u.has(t); const m={}; const f={};class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}

update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}

_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0); const s=[]; const i=this.template.parts; const n=document.createTreeWalker(e,133,null,!1);let r; let o=0; let l=0; let h=n.nextNode();for(;o<i.length;)if(r=i[o],a(r)){for(;l<r.index;)l++,h.nodeName==="TEMPLATE"&&(s.push(h),n.currentNode=h.content),(h=n.nextNode())===null&&(n.currentNode=s.pop(),h=n.nextNode());if(r.type==="node"){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}const g=` ${s} `;class S{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}

getHTML(){const t=this.strings.length-1;let e=""; let n=!1;for(let r=0;r<t;r++){const t=this.strings[r]; const o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&t.indexOf("--\x3e",o+1)===-1;const a=h.exec(t);e+=a===null?t+(n?g:i):`${t.substr(0,a.index)+a[1]+a[2]}$lit$${a[3]}${s}`}return e+=this.strings[t],e}

getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const v=t=>t===null||!(typeof t==="object"||typeof t==="function"); const w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}

_createPart(){return new x(this)}

_getValue(){const t=this.strings; const e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(v(t)||!w(t))s+=typeof t==="string"?t:String(t);else for(const e of t)s+=typeof e==="string"?e:String(e)}}return s+=t[e],s}

commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}

setValue(t){t===m||v(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}

commit(){for(;_(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}

appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}

insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}

appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}

insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}

setValue(t){this.__pendingValue=t}

commit(){if(this.startNode.parentNode===null)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(v(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===f?(this.value=f,this.clear()):this.__commitText(t))}

__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}

__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}

__commitText(t){const e=this.startNode.nextSibling; const s=typeof(t=t==null?"":t)==="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}

__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options); const i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}

__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s; let i=0;for(const n of t)s=e[i],void 0===s&&(s=new P(this.options),e.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}

clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}

setValue(t){this.__pendingValue=t}

commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class C extends b{constructor(t,e,s){super(t,e,s),this.single=s.length===2&&s[0]===""&&s[1]===""}

_createPart(){return new A(this)}

_getValue(){return this.single?this.parts[0].value:super._getValue()}

commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends x{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}

setValue(t){this.__pendingValue=t}

commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue; const e=this.value; const s=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive); const i=t!=null&&(e==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}

handleEvent(t){typeof this.value==="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function U(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const O=new Map; const k=new WeakMap;const M=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];if(n==="."){return new C(t,e.slice(1),s).parts}return n==="@"?[new E(t,e.slice(1),i.eventContext)]:n==="?"?[new N(t,e.slice(1),s)]:new b(t,e,s).parts}

handleTextExpression(t){return new P(t)}};typeof window!=="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const R=(t,...e)=>new S(t,e,"html",M); const $=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const j=t=>e=>{const i=$(e.type,t);let n=O.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(s);if(o=n.keyString.get(a),void 0===o){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),o=new r(e,s),n.keyString.set(a,o)}return n.stringsArray.set(e.strings,o),o}; const F=["html","svg"]; const L=new Set; const z=(t,e,s)=>{L.add(t);const i=s?s.element:document.createElement("template"); const n=e.querySelectorAll("style"); const {length:r}=n;if(r===0)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{F.forEach(e=>{const s=O.get($(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t; const s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),d(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(s==null)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=p(n); let a=0; let l=-1;for(;r.nextNode();){for(l++,r.currentNode===s&&(a=c(e),s.parentNode.insertBefore(e,s));o!==-1&&n[o].index===l;){if(a>0){for(;o!==-1;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),d(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return t!==null;case Number:return t===null?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}}; const B=(t,e)=>e!==t&&(e==e||t==t); const H={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:B};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}

static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}

static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}

static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s=typeof t==="symbol"?Symbol():`__${t}`; const i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}

static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}

static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}

static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties; const e=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols==="function"?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}

static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:typeof s==="string"?s:typeof t==="string"?t.toLowerCase():void 0}

static _valueHasChanged(t,e,s=B){return s(t,e)}

static _propertyValueFromAttribute(t,e){const s=e.type; const i=e.converter||I; const n=typeof i==="function"?i:i.fromAttribute;return n?n(t,s):t}

static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type; const i=e.converter;return(i&&i.toAttribute||I.toAttribute)(t,s)}

initialize(){this._saveInstanceProperties(),this._requestUpdate()}

_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}

_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}

connectedCallback(){this.enableUpdating()}

enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}

disconnectedCallback(){}

attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}

_propertyToAttribute(t,e,s=H){const i=this.constructor; const n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,t==null?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}

_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor; const i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}

_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor; const n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}

requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}

async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}

get _hasRequestedUpdate(){return 4&this._updateState}

get hasUpdated(){return 1&this._updateState}

performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}

_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}

get updateComplete(){return this._getUpdateComplete()}

_getUpdateComplete(){return this._updatePromise}

shouldUpdate(t){return!0}

update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}

updated(t){}

firstUpdated(t){}}W.finalized=!0;const D="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype; const J=Symbol();class G{constructor(t,e){if(e!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}

get styleSheet(){return void 0===this._styleSheet&&(D?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}

toString(){return this.cssText}}const K=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof G)return t.cssText;if(typeof t==="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new G(s,J)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Q={};class X extends W{static getStyles(){return this.styles}

static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s); const s=e(t,new Set); const i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}

initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}

createRenderRoot(){return this.attachShadow({mode:"open"})}

adoptStyles(){const t=this.constructor._styles;t.length!==0&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?D?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}

connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}

update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}

render(){return Q}}X.finalized=!0,X.render=(t,s,i)=>{if(!i||typeof i!=="object"||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName; const r=k.has(s); const o=q&&s.nodeType===11&&!!s.host; const a=o&&!L.has(n); const l=a?document.createDocumentFragment():s;if(((t,s,i)=>{let n=k.get(s);void 0===n&&(e(s,s.firstChild),k.set(s,n=new P({templateFactory:U,...i})),n.appendInto(s)),n.setValue(t),n.commit()})(t,l,{templateFactory:j(n),...i}),a){const t=k.get(l);k.delete(l);const i=t.value instanceof y?t.value.template:void 0;z(n,l,i),e(s,s.firstChild),s.appendChild(l),k.set(s,t)}!r&&o&&window.ShadyCSS.styleElement(s.host)};export{X as L,K as c,R as h};
