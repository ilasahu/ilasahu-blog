(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI")),o=a("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery;return a||r&&(void 0!==o&&o)}t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(o.AmpStateContext))}},"8Kt/":function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI")),o=n(a("Xuae")),c=a("lwAK"),l=a("FYa8"),i=a("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var m=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var l=0,i=m.length;l<i;l++){var s=m[l];if(r.props.hasOwnProperty(s))if("charSet"===s)a.has(s)?o=!1:a.add(s);else{var u=r.props[s],f=n[s]||new Set;f.has(u)?o=!1:(f.add(u),n[s]=f)}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}var d=o.default();function p(e){var t=e.children;return r.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(a){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:a,inAmpMode:i.isInAmpMode(e)},t)}))}))}p.rewind=d.rewind,t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},RIqP:function(e,t,a){var n=a("Ijbi"),r=a("EbDI"),o=a("Bnag");e.exports=function(e){return n(e)||r(e)||o()}},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var n=a("q1tI"),r=a.n(n),o=a("8Kt/"),c=a.n(o),l=a("Tred"),i=a.n(l),s=(a("YFqc"),a("7O5W")),u=a("17x9"),m=a.n(u);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var v=!1;try{v=!0}catch(T){}function b(e){return null===e?null:"object"===f(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function N(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}function w(e){var t=e.forwardedRef,a=y(e,["forwardedRef"]),n=a.icon,r=a.mask,o=a.symbol,c=a.className,l=a.title,i=b(n),u=N("classes",[].concat(_(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,o=e.inverse,c=e.border,l=e.listItem,i=e.flip,s=e.size,u=e.rotation,m=e.pull,f=(d(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":o,"fa-border":c,"fa-li":l,"fa-flip-horizontal":"horizontal"===i||"both"===i,"fa-flip-vertical":"vertical"===i||"both"===i},"fa-".concat(s),"undefined"!==typeof s&&null!==s),d(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),d(t,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(a)),_(c.split(" ")))),m=N("transform","string"===typeof a.transform?s.b.transform(a.transform):a.transform),f=N("mask",b(r)),p=Object(s.a)(i,h({},u,{},m,{},f,{symbol:o,title:l}));if(!p)return function(){var e;!v&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",i),null;var g=p.abstract,k={ref:t};return Object.keys(a).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(k[e]=a[e])})),x(g[0],k)}w.displayName="FontAwesomeIcon",w.propTypes={border:m.a.bool,className:m.a.string,mask:m.a.oneOfType([m.a.object,m.a.array,m.a.string]),fixedWidth:m.a.bool,inverse:m.a.bool,flip:m.a.oneOf(["horizontal","vertical","both"]),icon:m.a.oneOfType([m.a.object,m.a.array,m.a.string]),listItem:m.a.bool,pull:m.a.oneOf(["right","left"]),pulse:m.a.bool,rotation:m.a.oneOf([0,90,180,270]),size:m.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:m.a.bool,symbol:m.a.oneOfType([m.a.bool,m.a.string]),title:m.a.string,transform:m.a.oneOfType([m.a.string,m.a.object]),swapOpacity:m.a.bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=g(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[g(t)]=n}return e}),{attrs:{}}),c=n.style,l=void 0===c?{}:c,i=y(n,["style"]);return o.attrs.style=h({},o.attrs.style,{},l),t.apply(void 0,[a.tag,h({},o.attrs,{},i)].concat(_(r)))}.bind(null,r.a.createElement),k=a("wHSu"),I=r.a.createElement,O="Ila Sahu",A="Next.js Sample Website";function S(e){var t=e.children;e.home;return I("div",null,I(c.a,null,I("link",{rel:"icon",href:"/favicon.ico"}),I("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),I("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(A),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),I("meta",{name:"og:title",content:A}),I("meta",{name:"twitter:card",content:"summary_large_image"})),I("header",{className:"".concat(i.a.header," ").concat(i.a.row," ")},I(r.a.Fragment,null,I("div",{className:"".concat(i.a.row)},I("div",{className:"  ".concat(i.a.pl3,"  ")},I("img",{src:"/images/avatar.png",className:i.a.headerAvatarImage,alt:O})),I("div",{className:" ".concat(i.a.pl1)},I("p",{className:i.a.headerName},O))),I("nav",{className:"".concat(i.a.row," ").concat(i.a.marginLeftAuto," ").concat(i.a.webNav)},I("a",{href:"#",className:i.a.removeAStyle},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Home"))),I("a",{href:"#about",className:i.a.removeAStyle},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"About"))),I("a",{href:"#work",className:i.a.removeAStyle},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Work"))),I("a",{href:"#gallery",className:i.a.removeAStyle},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Gallery"))),I("a",{href:"#contact",className:i.a.removeAStyle},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Contact")))),I("div",{className:" ".concat(i.a.mobileNav," ").concat(i.a.marginLeftAuto)},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},I("a",{href:"#",onClick:C,className:"".concat(i.a.colorBlack)},I(w,{icon:k.a})))),I("nav",{id:"mobileNav",style:{display:"none"}},I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Home")),I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"About")),I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Work")),I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Gallery")),I("div",{className:" ".concat(i.a.px2)},I("p",{className:i.a.headerMenu},"Contact")))))),I("main",null,t))}function C(){var e=document.getElementById("mobileNav").style.display;document.getElementById("mobileNav").style.display="none"==e?"block":"none"}var j=a("Z4Yb"),M=a.n(j),F=a("8tEE"),R=r.a.createElement,E="Ila Sahu";function P(){return R(S,{home:!0},R(c.a,null,R("title",null,A)),R("section",{className:M.a.headingMd},R("div",{className:i.a.firstFold,id:"home"},R(r.a.Fragment,null,R("div",{className:"".concat(i.a.row," ").concat(i.a.container," ").concat(i.a.alignItemCenter)},R("div",{className:" ".concat(i.a.margintn7," ")},R("h1",{className:" ".concat(i.a.marginUnset," ")},"Hey, I am Ila!"),R("p",{className:" ".concat(i.a.marginUnset," ")},"Software \u2022 Baking \u2022 Fitness \u2022 Meditation")),R("div",{className:"  ".concat(i.a.marginLeftAuto,"  ").concat(i.a.margint7)},R("img",{src:"/images/ila.png",className:"".concat(i.a.headerHomeImage,"  ").concat(M.a.borderCircle),alt:E}))))),R("div",{className:"".concat(i.a.margint7,"  ").concat(i.a.secondFold),id:"about"},R(r.a.Fragment,null,R("div",{className:"".concat(i.a.container)},R("h2",null,"About"),R("p",{className:" ".concat(i.a.lineHeight1," ").concat(i.a.desc)},"I'm a Bangalore based software developer specialized in backend technologies. I've immense love for Fitness, lifting weights, yoga and swimming. I love baking cakes and cookies. Pets are my best friend."),R("img",{src:"/images/about.png",className:"".concat(i.a.aboutHomeImage,"  "),alt:E})))),R("div",null),R("div",{className:" ".concat(i.a.thirdFold),id:"work"},R(r.a.Fragment,null,R("div",{className:"".concat(i.a.container," ").concat(i.a.padt2)},R("h2",{className:i.a.textCenter},"My Creations"),R("div",{className:"".concat(i.a.row," ").concat(i.a.BItemCenter," ").concat(i.a.pt2," ")},R("div",{className:"".concat(i.a.width50," ")},R("a",{href:"http://builderx.io/",target:"_blank"},R("img",{src:"/images/builderx.png",className:"".concat(i.a.creationImage,"  ").concat(i.a.center," ").concat(i.a.imgShadow),alt:E}))),R("div",{className:"".concat(i.a.width50)},R("h4",{className:"".concat(i.a.textCenter," ").concat(i.a.marginUnset)},R("a",{href:"http://builderx.io/",target:"_blank",className:i.a.removeAStyle},"BuilderX")),R("div",null,R("p",{className:i.a.textCenter},"BuilderX is a browser based design tool that codes React Native & React for you")),R("div",{className:i.a.textCenter},R("a",{className:i.a.tag},"Next.js"),R("a",{className:i.a.tag},"Laravel"),R("a",{className:i.a.tag},"MySQL")))),R("div",{className:"".concat(i.a.row," ").concat(i.a.alignItemCenter," ").concat(i.a.pt3r)},R("div",{className:"".concat(i.a.width50)},R("h4",{className:"".concat(i.a.textCenter," ").concat(i.a.marginUnset)},R("a",{href:"http://market.nativebase.io/",target:"_blank",className:i.a.removeAStyle},"Nativebase Market")),R("div",null,R("p",{className:i.a.textCenter},"NativeBase Market is a e-commerce website for Themes & Templates")),R("div",{className:i.a.textCenter},R("a",{className:i.a.tag},"Php"),R("a",{className:i.a.tag},"Laravel"),R("a",{className:i.a.tag},"Jquery"),R("a",{className:i.a.tag},"MySQL"))),R("div",{className:"".concat(i.a.width50," ")},R("a",{href:"https://market.nativebase.io/",target:"_blank"},R("img",{src:"/images/nativebase-market.png",className:"".concat(i.a.creationImage,"  ").concat(i.a.center," ").concat(i.a.imgShadow," "),alt:E})))),R("div",{className:"".concat(i.a.row," ").concat(i.a.alignItemCenter," ").concat(i.a.pt3r)},R("div",{className:"".concat(i.a.width50," ")},R("a",{href:"http://fluttermarket.com/",target:"_blank"},R("img",{src:"/images/flutter-market.png",className:"".concat(i.a.creationImage,"  ").concat(i.a.center,"  ").concat(i.a.imgShadow),alt:E}))),R("div",{className:"".concat(i.a.width50)},R("h4",{className:"".concat(i.a.textCenter," ").concat(i.a.marginUnset)},R("a",{href:"http://fluttermarket.com/",target:"_blank",className:i.a.removeAStyle},"Flutter Market")),R("div",null,R("p",{className:i.a.textCenter},"Collection of responsive Flutter Templates & Starter Kits for iOS & Android.")),R("div",{className:i.a.textCenter},R("a",{className:i.a.tag},"Php"),R("a",{className:i.a.tag},"Laravel"),R("a",{className:i.a.tag},"Jquery"),R("a",{className:i.a.tag},"MySQL"))))))),R("div",{className:" ".concat(i.a.forthFold),id:"gallery"},R(r.a.Fragment,null,R("div",{className:"".concat(i.a.container," ").concat(i.a.padt2)},R("h2",{className:i.a.textCenter},"Gallery"),R("div",{className:"".concat(i.a.row," ")},R("div",{className:i.a.width25},R("img",{src:"/images/ila1.jpg",className:"".concat(i.a.galleryImage,"  "),alt:E})),R("div",{className:i.a.width25},R("img",{src:"/images/ila2.jpg",className:"".concat(i.a.galleryImage,"  "),alt:E})),R("div",{className:i.a.width25},R("img",{src:"/images/ila3.jpg",className:"".concat(i.a.galleryImage,"  "),alt:E})),R("div",{className:i.a.width25},R("img",{src:"/images/ila4.jpg",className:"".concat(i.a.galleryImage,"  "),alt:E})))))),R("div",{className:i.a.fifthFold,id:"contact"},R(r.a.Fragment,null,R("div",{className:"".concat(i.a.container," ").concat(i.a.padt2)},R("h2",{className:"".concat(i.a.textCenter," ")},"Contact"),R("div",{className:"".concat(i.a.row,"  ").concat(i.a.width100)},R("div",{className:"  ".concat(i.a.marginLeftAuto," ").concat(i.a.contactWidth)},R("p",null,R(w,{icon:F.d}),R("a",{className:i.a.removeAStyle,target:"_blank",href:"https://twitter.com/ilasahu94"},R("span",{className:i.a.pl1},"Twitter"))),R("p",null,R(w,{icon:F.b}),R("a",{className:i.a.removeAStyle,href:"https://www.instagram.com/ilasahu",target:"_blank"},R("span",{className:i.a.pl1},"Instagram")))),R("div",{className:"    ".concat(i.a.marginRightAuto,"  ")},R("p",null,R(w,{icon:F.a}),R("a",{className:i.a.removeAStyle,href:"https://github.com/ilasahu",target:"_blank"},R("span",{className:i.a.pl1},"Github"))),R("p",null,R(w,{icon:F.c}),R("a",{className:i.a.removeAStyle,href:"https://www.linkedin.com/in/ila-sahu-0575b9149/",target:"_blank"},R("span",{className:i.a.pl1},"LinkedIn"))))))))))}},Tred:function(e,t,a){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",row:"layout_row__1IqDb",firstFold:"layout_firstFold__3MIjT",thirdFold:"layout_thirdFold__3GAsR",fifthFold:"layout_fifthFold__BgbKC",secondFold:"layout_secondFold__1z63w",forthFold:"layout_forthFold__1Fhnm",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",aboutHomeImage:"layout_aboutHomeImage__3j5_M",creationImage:"layout_creationImage__2x07R",galleryImage:"layout_galleryImage__H3v1q",headerName:"layout_headerName__2ibv0",headerMenu:"layout_headerMenu__VKJRE",headerAvatarImage:"layout_headerAvatarImage__1MYcb",backToHome:"layout_backToHome__1vZsp",pl3:"layout_pl3__16t2x",pl2:"layout_pl2__1_KeO",pl1:"layout_pl1__3D_ft",pr15:"layout_pr15__3HBps",pt3:"layout_pt3__JRyNX",pt4:"layout_pt4__1WgN1",pt2:"layout_pt2__2FYn4",pt3r:"layout_pt3r__2A-h8",padt2:"layout_padt2__2OaZx",px2:"layout_px2__1BX0n",floatRight:"layout_floatRight__354RQ",positionAbsolute:"layout_positionAbsolute__pssgn",width30:"layout_width30__1GWqv",width70:"layout_width70__vW1My",width40:"layout_width40__uQo-O",width60:"layout_width60__S-62g",width20:"layout_width20__1XyBX",width25:"layout_width25__1jKjs",width50:"layout_width50__2Ve7k",width100:"layout_width100__31bz5",textCenter:"layout_textCenter__3ao4V",textRight:"layout_textRight__dfGtz",textLeft:"layout_textLeft__33R0v",lineHeight0:"layout_lineHeight0__21FQK",desc:"layout_desc__11cAT",col:"layout_col__3L5Kq",marginLeftAuto:"layout_marginLeftAuto__1ya4V",marginRightAuto:"layout_marginRightAuto__8Guvh",alignItemCenter:"layout_alignItemCenter__3CnQl",marginUnset:"layout_marginUnset__1EciC",margint7:"layout_margint7__1JcaH",margintn7:"layout_margintn7__2BZRq",collapsible:"layout_collapsible__2Tvz3",displayNone:"layout_displayNone__39anj",mobileNav:"layout_mobileNav__1SKsu",webNav:"layout_webNav__3JdTy",colorBlack:"layout_colorBlack__24q71",center:"layout_center__3zEdu",contactWidth:"layout_contactWidth__MTxXU",tag:"layout_tag__3Hmrl",imgShadow:"layout_imgShadow__20dgN",removeAStyle:"layout_removeAStyle__76Tlx"}},Xuae:function(e,t,a){"use strict";var n=a("lwsE"),r=a("PJYZ"),o=a("W8MJ"),c=a("7W2i"),l=a("a1gu"),i=a("Nsbk"),s=a("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=i(e);if(t){var r=i(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return l(this,a)}}Object.defineProperty(t,"__esModule",{value:!0});var m=a("q1tI"),f=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(s(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return function(l){c(s,l);var i=u(s);function s(e){var o;return n(this,s),o=i.call(this,e),f&&(t.add(r(o)),a(r(o))),o}return o(s,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),o(s,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),s}(m.Component)}},YFqc:function(e,t,a){e.exports=a("cTJO")},Z4Yb:function(e,t,a){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},cTJO:function(e,t,a){"use strict";var n=a("lwsE"),r=a("W8MJ"),o=a("7W2i"),c=a("a1gu"),l=a("Nsbk");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return c(this,a)}}var s=a("TqRt"),u=a("284h");t.__esModule=!0,t.default=void 0;var m,f=u(a("q1tI")),d=a("QmWs"),p=a("g/15"),h=s(a("nOHt")),y=a("elyg");function _(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var g=new Map,v=window.IntersectionObserver,b={};function N(){return m||(v?m=new v((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){o(a,e);var t=i(a);function a(e){var r;return n(this,a),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,a=null,n=null;return function(r,o){if(n&&r===t&&o===a)return n;var c=e(r,o);return t=r,a=o,n=c,c}}((function(e,t){return{href:(0,y.addBasePath)(_(e)),as:t?(0,y.addBasePath)(_(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,n=t.target;if("A"!==a||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),c=o.href,l=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),a=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(c)){var i=window.location.pathname;c=(0,d.resolve)(i,c),l=l?(0,d.resolve)(i,l):c,e.preventDefault();var s=r.props.scroll;null==s&&(s=l.indexOf("#")<0),h.default[r.props.replace?"replace":"push"](c,l,{shallow:r.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),a=t.href,n=t.as,r=(0,d.resolve)(e,a);return[r,n?(0,d.resolve)(e,n):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var a=N();return a?(a.observe(e),g.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),c={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(c.href=r||n),f.default.cloneElement(o,c)}}]),a}(f.Component);t.default=w},lwAK:function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI"));t.AmpStateContext=r.createContext({})},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,2,4,5,0,3]]]);