(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(15),o=t.n(a),r=t(3),l=t(1),s=t(4),u=t.n(s),i=(t(40),"https://arcane-shelf-21967.herokuapp.com/api/persons"),d=function(){return console.log("getall"),u.a.get(i)},j=function(e){return u.a.post(i,e)},h=function(e,n){return u.a.put("".concat(i,"/").concat(e),n)},b=function(e){var n=e.person,t=e.delPerson;return Object(c.jsxs)("div",{children:[n.name," ",n.number,Object(c.jsx)("button",{id:n.id,onClick:t,children:"Delete"})]})},f=function(e){var n=e.addName,t=e.newName,a=e.newNumber,o=e.handleNameChange,r=e.handleNumberChange;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:o})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:a,onChange:r})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},g=function(e){var n=e.searchstring,t=e.handleSearchChange;return Object(c.jsx)("div",{children:Object(c.jsx)("form",{children:Object(c.jsxs)("div",{children:["search: ",Object(c.jsx)("input",{value:n,onChange:t})]})})})},m=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},O=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"info",children:n})},v=function(){var e=Object(l.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],o=Object(l.useState)([]),s=Object(r.a)(o,2),i=s[0],v=s[1],p=Object(l.useState)(""),x=Object(r.a)(p,2),w=x[0],N=x[1],C=Object(l.useState)(""),S=Object(r.a)(C,2),k=S[0],y=S[1],T=Object(l.useState)(""),D=Object(r.a)(T,2),P=D[0],E=D[1],I=Object(l.useState)(""),J=Object(r.a)(I,2),L=J[0],A=J[1],B=Object(l.useState)(""),R=Object(r.a)(B,2),q=R[0],z=R[1];Object(l.useEffect)((function(){console.log("effect"),d().then((function(e){a(e.data),v(e.data)}))}),[]),console.log("render",t.length,"persons");var F=function(e){console.log("delete",e.target.id,typeof e.target.id);var n=window.confirm("Delete?");if(console.log(n),n){var c="https://arcane-shelf-21967.herokuapp.com/api/persons/".concat(e.target.id),o=parseInt(e.target.id),r=t.find((function(e){return e.id===o}));console.log("del",r,o),u.a.delete(c).then((function(e){z("".concat(r.name," deleted")),setTimeout((function(){z(null)}),5e3),a(t.filter((function(e){return e.id!==o}))),v(i.filter((function(e){return e.id!==o}))),console.log("pl",t.length,i.length)}))}};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(m,{message:L}),Object(c.jsx)(O,{message:q}),Object(c.jsx)(g,{handleSearchChange:function(e){console.log("etv",e.target.value),E(e.target.value),v(t),console.log("len",e.target.value.length);var n=t;n=n.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})),console.log("re",n),console.log("pe",t),v(n)},searchstring:P}),Object(c.jsx)("h2",{children:"Add new"}),Object(c.jsx)(f,{addName:function(e){e.preventDefault(),console.log("add clicked",w);var n=t.map((function(e){return e.name})).indexOf(w),c=t.find((function(e){return e.name===w}));console.log(n,c);var o={name:w,number:k};if(n<0)j(o).then((function(e){v(t.concat(e.data)),a(t.concat(e.data)),N(""),y(""),z("".concat(w," added")),setTimeout((function(){z(null)}),5e3)}));else{var r=window.confirm("".concat(w," exists already. Replace number?"));console.log("replace",r),r&&h(c.id,o).then((function(e){N(""),y(""),z("".concat(w," updated")),setTimeout((function(){z(null)}),5e3)})).catch((function(e){console.log("error"),A("".concat(c.name," was already removed from server")),d().then((function(e){a(e.data),v(e.data)})),setTimeout((function(){A(null)}),5e3)}))}N(""),y("")},newName:w,newNumber:k,handleNumberChange:function(e){console.log(e.target.value),y(e.target.value)},handleNameChange:function(e){console.log(e.target.value),N(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),i.map((function(e){return Object(c.jsx)(b,{person:e,delPerson:F},e.id)}))]})};o.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bd7bbab9.chunk.js.map