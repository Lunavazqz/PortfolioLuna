(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(t,e,n){var content=n(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("2065e928",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";n(204)},209:function(t,e,n){var r=n(55)(!1);r.push([t.i,'.container{flex-direction:column;background-color:#1e2a36}.container,.container2{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.container2{background:#1e2a36}.title{font-size:100px;letter-spacing:1px}.apartados,.title{font-family:"1,617";display:flex;font-weight:300;color:#f5f5f5}.apartados{flex-direction:row;justify-content:space-around;font-style:none;text-decoration:none;font-size:20px}.apartados .especialidad{text-decoration:none;-webkit-text-decoration-color:unset;text-decoration-color:unset;color:#bbb2b2}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=r},215:function(t,e,n){"use strict";n.r(e);var r={mounted:function(){var t=new this.$scrollmagic.Controller({vertical:!1}),e=(new TimelineMax).add([TweenMax.fromTo("#parallaxText .layer1",1,{scale:3,autoAlpha:.05,left:300},{left:-350,ease:Linear.easeNone}),TweenMax.fromTo("#parallaxText .layer2",1,{scale:2,autoAlpha:.3,left:150},{left:-175,ease:Linear.easeNone})]);new ScrollMagic.Scene({triggerElement:"#trigger2",duration:$(window).width()}).setTween(e).addIndicators().addTo(t)}},o=(n(208),n(34)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("h1",{staticClass:"title",attrs:{id:"supertitu"}},[t._v("\n         PORTFOLIO\n        ")]),t._v(" "),n("div",{attrs:{id:"parallaxText"}},[n("h1",{staticClass:"layer1",staticStyle:{"z-index":"0",left:"300px",visibility:"inherit",opacity:"0.050000000000000044",transform:"matrix(3, 0, 0, 3, 0, 0)"}},[t._v("PORTFOLIO")]),t._v(" "),n("h1",{staticClass:"layer2",staticStyle:{"z-index":"0",left:"150px",visibility:"inherit",opacity:"0.30000000000000004",transform:"matrix(2, 0, 0, 2, 0, 0)"}},[t._v("PORTFOLIO")]),t._v(" "),n("h1",{staticClass:"layer3"},[t._v("\n\t\t  PORTFOLIO\n\t\t  "),n("a",{staticClass:"viewsource",attrs:{href:"#"}},[t._v("view source")])])]),t._v(" "),n("h2",{staticClass:"apartados"},[n("a",{staticClass:"especialidad",attrs:{href:"page1"}},[t._v("Portadas ")]),t._v(" "),n("a",{staticClass:"especialidad",attrs:{href:"page2"}},[t._v(" - Identidad")]),t._v(" "),n("a",{staticClass:"especialidad",attrs:{href:"page3"}},[t._v("Ilustraciones - ")]),t._v(" "),n("a",{staticClass:"especialidad",attrs:{href:"page4"}},[t._v("Video")])])])])}],!1,null,null,null);e.default=component.exports}}]);