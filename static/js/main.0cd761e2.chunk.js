(this.webpackJsonpbabelhara=this.webpackJsonpbabelhara||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},72:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c(38),j=c.n(n);c(51),c(52),c(11);function i(){return Object(s.jsx)("div",{children:"\u0647\u0646\u0627 \u0627\u0644\u062e\u0635\u0648\u0645\u0627\u062a"})}var l=c(39),r=c(40),b=c(45),d=c(44),h=c.p+"static/media/pizza.27d6a0c1.mp4",O=(c(53),c(22)),x=c(23),o=c(16),m=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(s.jsx)(O.a,{className:"Container",children:Object(s.jsxs)(x.a,{className:"Row",children:[Object(s.jsx)("div",{className:"overlay"}),Object(s.jsx)(o.a,{className:"Col",children:Object(s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,style:{position:"absoulite",width:"100%",top:0,height:"100%",objectFit:"cover"},children:Object(s.jsx)("source",{src:h,type:"video/mp4"})})}),Object(s.jsx)("div",{className:"mainimage",children:" "})]})})}}]),c}(a.Component),u=c(3),f=c(5),N=c.n(f),v=c(20),p=c(21);function g(){var e=Object(v.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nheight: 100%;\nwidth: 100%;\nbackground: black;\nopacity: .7;\nz-index: 1;\n"]);return g=function(){return e},e}function y(){var e=Object(v.a)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -100%);\ncolor: #FFF;\nfont-weight: bold;\nfont-family: sans-serif;\nfont-size: 4rem;\nwidth: 78%;\ntext-align: center;\nz-index: 99999!important;\nbackground: #f78916;\npadding-bottom: 10px;\n\n\n"]);return y=function(){return e},e}function w(){var e=Object(v.a)(["\nwidth: 100%;\nheight:100%;\n"]);return w=function(){return e},e}function k(){var e=Object(v.a)(["\nwidth: 70%;\nfloat: left;\nfont-size: 0;\nposition: relative;\nmargin: 0 auto;\nheight: 100%;\n\n"]);return k=function(){return e},e}var E=p.a.div(k()),S=p.a.img(w()),z=p.a.h2(y()),T=p.a.div(g()),C=(c(72),c(13));c(12);var I=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],j=function(){window.pageYOffset>300?n(!0):n(!1)};return Object(a.useEffect)((function(){window.addEventListener("scroll",j)}),[]),Object(s.jsx)("div",{children:c&&Object(s.jsx)("div",{className:"scroll-to-top",onClick:function(){window.scrollTo({top:0,behavior:"smooth",transition:"2s"})},children:Object(s.jsx)("i",{className:"fas fa-arrow-up"})})})},F=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.mmenue)}))}),[]);var j=c.map((function(e){return Object(s.jsx)("div",{className:"parent",children:Object(s.jsx)(E,{className:"wrapper",children:Object(s.jsxs)(C.b,{to:e.link,children:[Object(s.jsx)(T,{}),Object(s.jsx)(S,{src:e.img,alt:""}),Object(s.jsx)(z,{className:"H2",children:e.title})]})},e.id)})}));return Object(s.jsxs)("div",{className:"test",children:[j,Object(s.jsx)(I,{})]})},L=(c(77),c.p+"static/media/a.c963e1de.jpg"),M=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.ssandawich)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(L,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0631\u0643\u0646 \u0627\u0644\u0633\u0627\u0646\u062f\u0648\u062a\u0634 "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:"\u0627\u0644\u0633\u0639\u0631 "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{})]})},P=c.p+"static/media/n.7ff1e94d.jpg",A=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.mmanaesh)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"thtable",children:e.desc}),Object(s.jsx)("th",{className:"thtable",children:e.price})]})})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(P,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0631\u0643\u0646 \u0627\u0644\u0645\u0646\u0627\u0642\u064a\u0634 "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:"\u0627\u0644\u0633\u0639\u0631 "})]})})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{transition:"3s"})]})},B=c.p+"static/media/c.fbcecad1.jpg",J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.ppizza)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(B,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0631\u0643\u0646 \u0627\u0644\u0628\u064a\u062a\u0632\u0627 "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:"L - M - S "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})})]})},D=c.p+"static/media/s.4a36b46d.jpg",H=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.sshwerma)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(D,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0631\u0643\u0646 \u0627\u0644\u0634\u0627\u0648\u0631\u0645\u0627 "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:"M - L "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{})]})},R=c.p+"static/media/d.1bee786d.jpg",Y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.ccheken)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(R,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0631\u0643\u0646 \u062f\u062c\u0627\u062c \u0627\u0644\u0634\u0648\u0627\u064a\u0629 "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:"\u0627\u0644\u0633\u0639\u0631 "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{})]})},q=c.p+"static/media/b.8340f901.jpg",G=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.Arabian)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(q,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0627\u0644\u0631\u0643\u0646 \u0627\u0644\u0639\u0631\u0628\u064a "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:" L - M "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),Object(s.jsx)(I,{})]})},K=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.ssalat)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(q,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:"  \u0627\u0644\u0633\u0644\u0637\u0627\u062a \u0648 \u0627\u0644\u0627\u0636\u0627\u0641\u0627\u062a  "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:" \u0627\u0644\u0633\u0639\u0631 "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{})]})},Q=c.p+"static/media/mm.eec9f6a0.jpg",U=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.mmeals)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(Q,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:" \u0631\u0643\u0646 \u0627\u0644\u0648\u062c\u0628\u0627\u062a  "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:" \u0627\u0644\u0633\u0639\u0631 "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{})]})},V=c.p+"static/media/l.5a1b1d7b.jpg",W=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){N.a.get("bb/data/data.json").then((function(e){n(e.data.mmshawy)}))}),[]);var j=c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"table-title",children:e.title}),Object(s.jsx)("table",{className:"scoundtable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"thtable",children:e.desc}),Object(s.jsx)("td",{className:"thtable",children:e.price})]})})]},e.id)}));return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"main-section",style:{backgroundImage:"url(".concat(V,")")},children:[Object(s.jsx)("div",{className:"overlay-section"}),Object(s.jsx)("h1",{children:"  \u0631\u0643\u0646 \u0645\u0634\u0648\u064a\u0627\u062a \u0627\u0644\u0641\u062d\u0645   "})]}),Object(s.jsx)("table",{className:"manaeshTable",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u0627\u0644\u0635\u0646\u0641"}),Object(s.jsx)("th",{children:" \u0627\u0644\u0633\u0639\u0631 "})]})}),j,Object(s.jsx)("a",{href:"tel:01024131582",children:Object(s.jsxs)("div",{className:"Order",children:["  ",Object(s.jsx)("i",{className:"fas fa-phone-alt"})," "]})}),"      ",Object(s.jsx)(I,{})]})},X=c(4);function Z(){return Object(s.jsx)(C.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{className:"Links",children:Object(s.jsxs)(x.a,{children:[Object(s.jsxs)(o.a,{className:"Col",children:["  ",Object(s.jsx)(C.b,{to:"/home",className:"Active",children:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})," "]}),Object(s.jsxs)(o.a,{className:"Col",children:["  ",Object(s.jsx)(C.b,{to:"/menue",children:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645"}),"  "]}),Object(s.jsxs)(o.a,{className:"Col",children:["  ",Object(s.jsx)(C.b,{to:"/disc",children:"\u0627\u0644\u0639\u0631\u0648\u0636"}),"  "]})]})}),Object(s.jsxs)(X.c,{children:[Object(s.jsx)(X.a,{exact:!0,path:"/home",children:Object(s.jsx)(m,{})}),Object(s.jsxs)(X.a,{path:"/menue",children:[" ",Object(s.jsx)(F,{})]}),Object(s.jsx)(X.a,{path:"/disc",children:Object(s.jsx)(i,{})}),Object(s.jsx)(X.a,{path:"/sandawitch",children:Object(s.jsx)(M,{})}),Object(s.jsx)(X.a,{path:"/meals",children:Object(s.jsx)(U,{})}),Object(s.jsx)(X.a,{path:"/manaesh",children:Object(s.jsx)(A,{})}),Object(s.jsx)(X.a,{path:"/pizza",children:Object(s.jsx)(J,{})}),Object(s.jsx)(X.a,{path:"/shwrma",children:Object(s.jsx)(H,{})}),Object(s.jsx)(X.a,{path:"/checken",children:Object(s.jsx)(Y,{})}),Object(s.jsx)(X.a,{path:"/arabianCorner",children:Object(s.jsx)(G,{})}),Object(s.jsx)(X.a,{path:"/salat",children:Object(s.jsx)(K,{})}),Object(s.jsx)(X.a,{path:"/mshawy",children:Object(s.jsx)(W,{})})]})]})})}var $=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(Z,{}),Object(s.jsx)("div",{className:"animation",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[" ",Object(s.jsx)("i",{className:"fas fa-cheese",children:" "})," "]}),Object(s.jsxs)("li",{children:[" ",Object(s.jsx)("i",{className:"fas fa-hotdog"})," "]}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"fas fa-drumstick-bite"})}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-pepper-hot"})," "]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-stroopwafel"})," "]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-bread-slice"})," "]}),Object(s.jsxs)("li",{children:[" ",Object(s.jsx)("i",{className:"fas fa-pizza-slice"})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fas fa-utensils"})," "]})]})})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,j=t.getTTFB;c(e),s(e),a(e),n(e),j(e)}))};j.a.render(Object(s.jsx)(C.a,{children:Object(s.jsx)($,{})}),document.getElementById("root")),_()}},[[78,1,2]]]);
//# sourceMappingURL=main.0cd761e2.chunk.js.map