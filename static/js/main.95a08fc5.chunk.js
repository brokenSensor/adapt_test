(this.webpackJsonpadapt_test=this.webpackJsonpadapt_test||[]).push([[0],{13:function(t){t.exports=JSON.parse('{"a":[{"type":"flat","id":1,"attributes":{"title":"3-\u0445 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u041c\u0438\u043d\u0441\u043a\u043e\u0439","rooms":3,"address":{"city":"Tyumen","street":"\u041c\u0438\u043d\u0441\u043a\u0430\u044f","house":"3a","room":"123"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":2,"attributes":{"first_name":"\u0412\u0430\u0441\u0438\u043b\u0438\u0439","last_name":"\u0414\u0440\u043e\u0437\u0434\u043e\u0432","middle_name":"\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":2,"attributes":{"title":"1 \u043a\u043e\u043c\u043d\u0430\u0442\u043d\u0430\u044f \u043d\u0430 \u0411\u0430\u0440\u0430\u0431\u0430\u0438\u043d\u0441\u043a\u043e\u0439","rooms":2,"address":{"city":"Tyumen","street":"\u0411\u0430\u0440\u0430\u0431\u0438\u043d\u0441\u043a\u0430\u044f","house":"12","room":"45"},"area":34,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":10,"attributes":{"first_name":"\u041c\u0438\u0445\u0430\u0438\u043b","last_name":"\u0418\u0432\u0430\u043d\u043e\u0432","middle_name":"\u0414\u0435\u043c\u0438\u0434\u043e\u0432\u0438\u0447"}}},{"type":"flat","id":3,"attributes":{"title":"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u041b\u0435\u043d\u0438\u043d\u0430","rooms":4,"address":{"city":"Tyumen","street":"\u041b\u0435\u043d\u0438\u043d\u0430","house":"134","room":"24"},"area":134,"unit":"\u043a\u0432\u043c"},"relationships":{"type":"agent","id":44,"attributes":{"first_name":"\u0421\u0442\u0435\u043f\u0430\u043d","last_name":"\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432","middle_name":"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"}}}]}')},20:function(t,e,s){},27:function(t,e,s){"use strict";s.r(e);var a=s(0),r=s.n(a),i=s(8),n=s.n(i),c=(s(20),s(12)),d=s(5),u=Object(c.a)({reducerPath:"api",baseQuery:Object(d.d)({baseUrl:"http://localhost:5000/"}),endpoints:function(t){return{getData:t.query({query:function(){return"/response"}})}}}),l=u.useGetDataQuery,o=s(15),b=s(3),m=function(t){var e=t.item,s=Object(a.useState)(!1),r=Object(o.a)(s,2),i=r[0],n=r[1];return Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsxs)("div",{className:"attributes",children:[Object(b.jsx)("h4",{className:"title",children:e.attributes.title}),Object(b.jsxs)("div",{className:"rooms",children:["\u041a\u043e\u043c\u043d\u0430\u0442\u044b: ",e.attributes.rooms]}),Object(b.jsxs)("div",{className:"address",children:["\u0410\u0434\u0440\u0435\u0441: \u0433. ",e.attributes.address.city,", \u0443\u043b."," ",e.attributes.address.street,", \u0434\u043e\u043c ",e.attributes.address.house,", \u043a\u0432. ",e.attributes.address.room]}),Object(b.jsxs)("div",{className:"area",children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c: ",e.attributes.area," ",e.attributes.unit]})]}),Object(b.jsxs)("div",{className:"relationships",children:[Object(b.jsxs)("div",{children:["\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446: ",e.relationships.attributes.first_name," ",e.relationships.attributes.middle_name," ",e.relationships.attributes.last_name]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"like-button ".concat(i?"liked":""),onClick:function(){n(!i)},children:i?Object(b.jsx)("i",{className:"fas fa-heart"}):Object(b.jsx)("i",{className:"far fa-heart"})})})]})]})},j=s(13);var h=function(){var t=l().data;return t||(t=j.a),Object(b.jsx)("div",{className:"App",children:t&&t.map((function(t,e){return Object(b.jsx)(m,{item:t},e)}))})},p=s(4),O=s(14),f=s(1),x=Object(f.a)({reducer:Object(O.a)({},u.reducerPath,u.reducer),middleware:function(t){return t().concat(u.middleware)}});n.a.render(Object(b.jsx)(p.a,{store:x,children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.95a08fc5.chunk.js.map