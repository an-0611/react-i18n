(this["webpackJsonpreact-i18n"]=this["webpackJsonpreact-i18n"]||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n(0),l=n.n(o),r=n(11),c=n.n(r),i=(n(18),n(1)),u=n(2),s=n(4),m=n(3),d=n(5),E=(n(19),n(7)),h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.setLocale;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e("en")}},"\u82f1\u6587"),l.a.createElement("button",{onClick:function(){return e("zh-Hant")}},"\u4e2d\u6587"),l.a.createElement("button",{onClick:function(){return e("ja")}},"\u65e5\u6587")),l.a.createElement(E.b,{id:"home"}),l.a.createElement("br",null),l.a.createElement(E.a,{value:new Date,year:"numeric",month:"long",day:"numeric",weekday:"long"}),l.a.createElement("br",null),l.a.createElement(E.f,{value:new Date}),l.a.createElement("br",null),l.a.createElement(E.c,{value:1e6,style:"unit",unit:"kilobyte",unitDisplay:"long"}),l.a.createElement("br",null),l.a.createElement(E.e,{value:new Date-600}),l.a.createElement("br",null),l.a.createElement(E.d,{value:1,style:"ordinal",zero:"zero",one:"message",few:"few",many:"many",other:"messagessss"}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v={home:"Home",todos:"Todos",news:"News"},b={home:"\u9996\u9801",todos:"\u5f85\u8fa6\u4e8b\u9805",news:"\u65b0\u805e"},w={home:"\u30db\u30fc\u30e0\u30da\u30fc\u30b8",todos:"ToDo\u30ea\u30b9\u30c8",news:"\u30cb\u30e5\u30fc\u30b9"};c.a.render(l.a.createElement((function(){var e,t=Object(o.useState)(navigator.language),n=Object(a.a)(t,2),r=n[0],c=n[1];return e=r.includes("zh")?b:r.includes("ja")?w:v,l.a.createElement(E.g,{locale:r,key:r,defaultLocale:"en",messages:e},l.a.createElement("div",null,"\u521d\u59cb\u8a9e\u7cfb: ".concat(navigator.language)),l.a.createElement("div",null,"\u7576\u524d\u7db2\u7ad9\u4f7f\u7528\u8a9e\u7cfb: ".concat(r)),l.a.createElement(h,{setLocale:c}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.581fb123.chunk.js.map