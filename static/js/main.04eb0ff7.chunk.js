(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{36:function(e,t,a){e.exports=a(73)},46:function(e,t,a){e.exports=a.p+"static/media/kevinLogo.16ce8907.png"},66:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},67:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},68:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},69:function(e,t,a){e.exports=a.p+"static/media/social-distancing.567b3b9b.svg"},70:function(e,t,a){e.exports=a.p+"static/media/kick.65759f53.gif"},71:function(e,t,a){e.exports=a.p+"static/media/people.c0c14ee9.svg"},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(33),l=a.n(n),s=a(7),o=a(11),c=a(4),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},d=a(15),u=a(2),v=a.n(u),p=a(27),b=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),l=n[0],s=n[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[l]),r.a.createElement(r.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var h=b,f=a(23),E=a(3),g=a.n(E),N=a(14),O=function(e){var t=e.className,a=e.src,n=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},o,{style:{maxHeight:"396px",objectFit:"contain"},ref:b,className:t,src:a,width:n,height:l,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,y=function(e){var t=e.className,i=Object(c.a)(e,["className"]),n=g()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:n}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(w,{src:a(46),alt:"Open",width:32,height:32}))))},j=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),n&&"button-".concat(n),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};j.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var D=j,x=function(e){var t=e.formatted;return e.completed?r.a.createElement(D,{tag:"a",color:"dark",wideMobile:!0,href:"https://vote.wusa.ca/ballots/210"},"Time to vote! \ud83c\udf89"):r.a.createElement(D,{color:"dark",wideMobile:!0,disabled:!0},"\ud83d\udd12 ",t.days,":",t.hours,":",t.minutes,":",t.seconds)},k=a(22),C=function(e){var t=e.className,a=(e.navPosition,e.hideNav),n=e.hideSignin,l=e.bottomOuterDivider,s=e.bottomDivider,o=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return v&&f(),document.addEventListener("keydown",N),document.addEventListener("click",O),function(){document.removeEventListener("keydown",N),document.addEventListener("click",O),E()}}));var f=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},E=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},N=function(e){v&&27===e.keyCode&&E()},O=function(e){b.current&&v&&!b.current.contains(e.target)&&e.target!==h.current&&E()},w=g()("site-header",l&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},o,{className:w}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},r.a.createElement(y,null),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:v?E:f},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:b,className:g()("header-nav",v&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://vote.wusa.ca/ballots/210",className:"button button-primary button-wide-mobile button-sm",onClick:E},r.a.createElement("span",{style:{marginRight:"4px"}},"Vote in: "),r.a.createElement(k.a,{date:16040304e5},r.a.createElement("span",null,"NOW!")))))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var L=C,S=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/kevin51jiang/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/kevin4vpa/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},A=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},n,{className:l}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(y,null),r.a.createElement(S,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement("div",{className:"footer-copyright"},"\xa9 Kevin Jiang. All right reserved")))))};A.defaultProps={topOuterDivider:!1,topDivider:!1};var P=A,B=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(P,null))},F=a(6),H={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},M={types:Object(F.a)({},H.types),defaults:Object(F.a)({},H.defaults)},T={types:Object(F.a)(Object(F.a)({},H.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(F.a)(Object(F.a)({},H.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},I={types:Object(F.a)(Object(F.a)({},H.types),{},{pushLeft:v.a.bool}),defaults:Object(F.a)(Object(F.a)({},H.defaults),{},{pushLeft:!1})},R=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},z=function(e){var t=e.className,a=e.children,n=e.handleClose,l=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},b=g()("modal",l&&"is-active",o&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:p},o?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:o})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))};z.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var q=a(20),V=a.n(q),_=a(35),W=a.n(_);V.a.initializeApp({apiKey:"AIzaSyD8iBHAhhTnaAh1l6OFt331r9XgyUdzPC0",authDomain:"kevin4vpa.firebaseapp.com",databaseURL:"https://kevin4vpa.firebaseio.com",projectId:"kevin4vpa",storageBucket:"kevin4vpa.appspot.com",messagingSenderId:"999774116642",appId:"1:999774116642:web:d2f824cd987b12cf32237b"}),V.a.analytics();var K=function(e){var t=Object(i.useState)(1234),a=Object(d.a)(t,2),n=a[0],l=a[1];Object(i.useEffect)((function(){V.a.database().ref("count").on("value",(function(e){e.val()&&l(e.val())}))}));return r.a.createElement("div",null,r.a.createElement("button",{className:"btn-juicy",onClick:function(){l(n+1),V.a.database().ref().transaction((function(e){return e&&(e.count||(e.count=0),e.count++),e}))}},"VOTE"),r.a.createElement(W.a,{play:!0,color:"#eceded",background:"#6163ff",width:80,height:80,numberStyle:{fontSize:"56px"},numbers:"".concat(n)}))},J=Object(F.a)({},M.defaults),U=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(i.useState)(!1),p=Object(d.a)(v,2),b=(p[0],p[1],g()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t)),h=g()("hero-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},u,{className:b}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:h},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Kevin Jiang for"," ",r.a.createElement("span",{className:"text-color-primary"},"VP Academic")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(R,null,r.a.createElement(D,{tag:"a",color:"primary",wideMobile:!0,href:"#feature-tiles"},"Get started"),r.a.createElement(k.a,{date:16040304e5,renderer:x}))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800",id:"big-button"},r.a.createElement("div",null,"Practice your skills for the big day with a live button."),r.a.createElement(K,null)))))};U.defaultProps=J;var G=U,Q=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=g()("section-header",t),o=n;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},l,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(o,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};Q.defaultProps={children:null,tag:"h2"};var X=Q,$=Object(F.a)({},I.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v,id:"feature-tiles"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(X,{data:{title:"Who am I?",paragraph:"Other than being a professional monkey, I am..."},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(66),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Student"),r.a.createElement("p",{className:"m-0 text-sm"},"2A Memegement Engineering. I've been helping to conduct surveys for the final class profile.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(67),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Academic Rep x2"),r.a.createElement("p",{className:"m-0 text-sm"},"Even though it was accidental (both times), I still represented and advocated to the best of my ability to ensure the best thing for everyone.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(68),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Music Lover"),r.a.createElement("p",{className:"m-0 text-sm"},"New playlists every month! Here's my"," ",r.a.createElement("a",{href:"https://open.spotify.com/user/jupjiaitclq6y7f98pc2opdjy?si=NuaNXESWQ5uiPytQ-LiKKg"},"Spotify Profile"),", where you see and silently judge my bad music taste."))))))))};Y.defaultProps=$;var Z=Y,ee=Object(F.a)({},T.defaults),te=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=g()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},b,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(X,{data:{title:"Here's what I'll do",paragraph:"It's better and more useful to everyone if you fix the big problems first \u2014 all done as transparently as possible."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Emergency meeting"),r.a.createElement("h3",{className:"mt-0 mb-12"},"COVID-19 Recovery"),r.a.createElement("p",{className:"m-0"},r.a.createElement("div",null,"If the term ends up being:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",null,"online"),", then helping to advocate with profs and departments to create better courses in conditions that treat students better."),r.a.createElement("li",null,r.a.createElement("i",null,"offline"),", then the transition to safe in person activities will require lots of attention."))),r.a.createElement("div",null),r.a.createElement("div",null,"I will make sure that in either situation the transition will be a smooth as possible, allowing you to focus on what you actually paid for \u2014 an education."))),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(69),alt:"Social distancing",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"The full adventure"),r.a.createElement("h3",{className:"mt-0 mb-12"},"First-year experience"),r.a.createElement("p",{className:"m-0"},"First years feel like they've just been dropped in the deep end without support and robbed of their first-year experience. While there's a certain amount of difficulty needed for Mansour to have his fun, we need to ensure that there are appropriate supports in place so they can actually survive and thrive during their later years.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(70),alt:"Mansour kicking chair",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Reviewing resumes and more"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Strengthen widely used programs"),r.a.createElement("p",{className:"m-0"},"Directing more resources and focus towards EngSoc's most widely used programs where the highest amount of people can benefit, like the resume critiques every term.")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{src:a(71),alt:"People",width:528,height:396})))))))};te.defaultProps=ee;var ae=te,ie=Object(F.a)({},I.defaults),re=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=g()("testimonial-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(X,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};re.defaultProps=ie;var ne=Object(F.a)(Object(F.a)({},M.defaults),{},{split:!1}),le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=g()("cta-inner section-inner",n&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Take me back up to click the button")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(D,{tag:"a",color:"dark",wideMobile:!0,href:"#big-button"},"Here we go again")))))};le.defaultProps=ne;var se=le,oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{className:"illustration-section-01"}),r.a.createElement(Z,null),r.a.createElement(ae,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(se,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ce=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),r.a.createElement(h,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(m,{exact:!0,path:"/",component:oe,layout:B}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);var me=Object(o.a)();l.a.render(r.a.createElement(s.b,{history:me},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.04eb0ff7.chunk.js.map