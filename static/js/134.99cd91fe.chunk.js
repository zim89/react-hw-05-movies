"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[134,805],{4126:function(n,e,t){var r=t(7689),a=t(1087),u=t(2634),c=t(184);e.Z=function(n){var e=n.movies,t=(0,r.TH)();return(0,c.jsx)(u.aV,{className:"list",children:e.map((function(n){var e=n.id,r=n.title,u=n.original_title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:r||u})},e)}))})}},1134:function(n,e,t){t.r(e);var r,a=t(5861),u=t(9439),c=t(168),i=t(7757),s=t.n(i),o=t(4573),p=t(2791),f=t(1087),l=t(4126),d=t(9126),h=t(2634),v=t(9805),x=t(6444),y=t(184),g="idle",m="pending",Z="resolved",j=x.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n\n  & input,\n  button {\n    padding: 4px 8px;\n  }\n  & button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));e.default=function(){var n=(0,p.useState)(null),e=(0,u.Z)(n,2),t=e[0],r=e[1],c=(0,p.useState)(g),i=(0,u.Z)(c,2),x=i[0],w=i[1],b=(0,f.lr)({}),k=(0,u.Z)(b,2),_=k[0],S=k[1];function U(){return(U=(0,a.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(m),n.next=4,(0,o.Wf)(e);case 4:t=n.sent,r(t),w(Z),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w(Z);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return(0,p.useEffect)((function(){var n=_.get("query");n&&function(n){U.apply(this,arguments)}(n)}),[_]),(0,y.jsxs)(h.$0,{children:[(0,y.jsxs)(j,{onSubmit:function(n){n.preventDefault();var e=n.target.query.value,t=e.trim()?{query:e}:{};S(t)},children:[(0,y.jsx)("input",{type:"text",name:"query",placeholder:"Search..."}),(0,y.jsx)("button",{type:"submit",children:(0,y.jsx)(d.dVI,{width:16})})]}),"resolved"===x&&(t.length?(0,y.jsx)(l.Z,{movies:t}):(0,y.jsx)("h2",{children:"Sorry we didn't find any movie"})),"rejected"===x&&(0,y.jsx)(v.default,{})]})}},9805:function(n,e,t){t.r(e);var r,a=t(168),u=t(1087),c=t(2634),i=t(6444),s=t(184),o=i.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n\n  & h1 {\n    font-size: 88px;\n    text-align: center;\n  }\n  & h1 {\n    text-align: center;\n  }\n"])));e.default=function(n){return(0,s.jsx)(c.$0,{children:(0,s.jsxs)(o,{children:[(0,s.jsx)("h1",{children:"404"}),(0,s.jsx)("h3",{children:"Page not found"}),(0,s.jsx)(u.rU,{to:"/",children:"return to Homepage"})]})})}},4573:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return h},Pg:function(){return l},Wf:function(){return p},tx:function(){return x}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="31f0c221a6a4c16d94ce50023b58333b";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=134.99cd91fe.chunk.js.map