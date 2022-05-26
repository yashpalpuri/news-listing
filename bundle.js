(()=>{"use strict";var e={964:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,'h1,h2,h3,h4,h5,h4{font-family:"Times New Roman",Times,serif;font-weight:400}a{text-decoration:none;text-transform:none}p,span{font-family:"Helvetica Neue",HelveticaNeue,Helvetica,Arial,sans-serif;font-weight:400}h2{font-size:31px;color:#000;margin:-5px 0}p{font-size:19px;color:#606669}.category{font-size:18px;color:#0059bf;margin-top:0}.grid-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;flex-direction:row;-webkit-flex-direction:row;-webkit-flex-wrap:wrap;-webkit-justify-content:space-around;margin-bottom:30px;padding-bottom:30px;border-bottom:1px #606669 solid}.grid-flex:first-child{margin-top:20px}.grid-flex:last-child{border-bottom:none}.grid-flex .col-left{padding-right:20px;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:3}.grid-flex .col-right{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}@media (max-width: 640px){.grid-flex{display:-webkit-flex;-webkit-flex-direction:column;flex-direction:column}.col{order:vertical}.col-left{-webkit-box-ordinal-group:0;-webkit-order:0;-ms-flex-order:0;order:0}.h2{font-size:24px}p{font-size:16px;color:#606669}.category{font-size:14px;color:#0059bf;margin-top:0}}\n',""]);const l=a},299:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"",""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,f="".concat(c," ").concat(d);i[c]=d+1;var p=n(f),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var m=o(u,r);r.byIndex=l,t.splice(l,0,{identifier:f,updater:m,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var s=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),l=n(565),s=n.n(l),c=n(216),d=n.n(c),f=n(589),p=n.n(f),u=n(299),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var x=n(964),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals,fetch("./code-test.json",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{let t="";console.log("data",e.articles),e.articles.map((e=>{t+=`\n            <div class="grid-flex">\n                <div class="col col-left col-text">\n                <div class="col col-right Aligner-item">\n                    <p class="category">${e.primarySectionRouteName}</p>\n                    <a href="${e.link}"><h2>${e.headline}</h2></a>\n                    <p>${e.standfirst}</p>\n                </div>\n                </div>\n                <div class="col-right">\n                    <a href="${e.link}">\n                        <img \n                            src="${e.thumbnail.src}" \n                            alt="${e.thumbnail.title}"\n                            title="${e.thumbnail.title}"\n                        />\n                    </a>\n                </div>\n            </div>`})),document.getElementById("articles").innerHTML=t})).catch((e=>{console.log("Error Reading data "+e)}))})()})();