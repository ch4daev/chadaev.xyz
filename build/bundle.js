var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function i(){return f(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function g(t){d=t}const m=[],p=[],$=[],b=[],y=Promise.resolve();let _=!1;function x(t){$.push(t)}const v=new Set;let k=0;function w(){if(0!==k)return;const t=d;do{try{for(;k<m.length;){const t=m[k];k++,g(t),E(t.$$)}}catch(t){throw m.length=0,k=0,t}for(g(null),m.length=0,k=0;p.length;)p.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];v.has(e)||(v.add(e),e())}$.length=0}while(m.length);for(;b.length;)b.pop()();_=!1,v.clear(),g(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const A=new Set;function M(t,e){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(c,l,u,s,f,i,h,m=[-1]){const p=d;g(c);const $=c.$$={fragment:null,ctx:[],props:i,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:l.target||p.$$.root};h&&h($.root);let b=!1;if($.ctx=u?u(c,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&M(c,t)),e})):[],$.update(),b=!0,o($.before_update),$.fragment=!!s&&s($.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();l.intro&&((y=c.$$.fragment)&&y.i&&(A.delete(y),y.i(_))),function(t,n,c,l){const{fragment:u,after_update:a}=t.$$;u&&u.m(n,c),l||x((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(x)}(c,l.target,l.anchor,l.customElement),w()}var y,_;g(p)}class N{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function j(t,e,n){const o=t.slice();return o[5]=e[n].name,o[6]=e[n].url,o}function O(e){let n,o,r,c=e[5]+"";return{c(){n=s("a"),o=f(c),r=i(),h(n,"href",e[6]),h(n,"target","_blank"),h(n,"rel","noreferrer"),h(n,"class","textable link svelte-60moh1")},m(t,e){u(t,n,e),l(n,o),l(n,r)},p:t,d(t){t&&a(n)}}}function S(e){let n,o,r,c,d,g,m,p=e[1],$=[];for(let t=0;t<p.length;t+=1)$[t]=O(j(e,p,t));return{c(){n=s("main"),o=s("h2"),r=f(e[0]),c=i(),d=f(q),g=i(),m=s("p");for(let t=0;t<$.length;t+=1)$[t].c();h(o,"class","text svelte-60moh1"),h(n,"class","svelte-60moh1")},m(t,e){u(t,n,e),l(n,o),l(o,r),l(o,c),l(o,d),l(n,g),l(n,m);for(let t=0;t<$.length;t+=1)$[t].m(m,null)},p(t,[e]){if(1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0]),2&e){let n;for(p=t[1],n=0;n<p.length;n+=1){const o=j(t,p,n);$[n]?$[n].p(o,e):($[n]=O(o),$[n].c(),$[n].m(m,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=p.length}},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}($,t)}}}const T="1337.*#$&/$",q="<3";let B="Chadaev";function I(t,e,n){return t<e?e:t>n?n:t}function P(t,e,n){let o="",r=-1,c=0,l=!1;return setInterval((()=>{var t,e;c+=r,l&&c<2*B.length&&c>0?(n(0,o=B.substring(0,I(Math.floor(c/2),0,B.length))+T.charAt((t=0,e=T.length,Math.random()*Math.abs(e-t)+t))),l=!1):(n(0,o=B.substring(0,I(Math.floor(c/2),0,B.length))),l=!0),(c>=2*B.length+4||c<-4)&&(r*=-1)}),200),[o,[{name:"github",url:"https://github.com/ch4daev"},{name:"telegram",url:"https://t.me/ch4daev"},{name:"wakatime",url:"https://wakatime.com/@Chadaev"}]]}return new class extends N{constructor(t){super(),C(this,t,P,S,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
