(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{50:function(e,t,o){},51:function(e,t,o){},60:function(e,t,o){"use strict";o.r(t);var n=o(10),a=o(2),c=o.n(a),i=o(17),d=o.n(i),s=(o(50),o(34)),r=(o(51),o(79)),l=o(81),p=o(80),u=o(78),j=o(76),b=o(77),f=o(82),m=o(31),h=m.a.initializeApp({apiKey:"AIzaSyBKsvPqBJw6DH4LuTRppkL44WyBLdu6eso",authDomain:"todo-app-913a8.firebaseapp.com",projectId:"todo-app-913a8",storageBucket:"todo-app-913a8.appspot.com",messagingSenderId:"595703763627",appId:"1:595703763627:web:e799484b9b88c518f8ddee",measurementId:"G-7T2LGVDE6P"}).firestore();var O=function(e){return Object(n.jsx)("div",{className:"todo__list",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(f.a,{primary:e.todo.todo,secondary:"Deadline of 1 day"})}),Object(n.jsx)(u.a,{onClick:function(t){return h.collection("todos").doc(e.todo.id).delete()},children:"Delete Me"})]})})};var x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),o=t[0],c=t[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){h.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().task}})))}))}),[j]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Hello Sid fans!"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)(r.a,{children:[Object(n.jsx)(l.a,{children:"Write a Todo"}),Object(n.jsx)(p.a,{value:j,onChange:function(e){return b(e.target.value)}})]}),Object(n.jsx)(u.a,{disabled:!j,type:"submit",onClick:function(e){e.preventDefault(),h.collection("todos").add({task:j,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),b("")},variant:"contained",color:"primary",children:"Add Todo"})]}),Object(n.jsx)("ul",{children:o.map((function(e){return Object(n.jsx)(O,{todo:e})}))})]})},v=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,83)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;o(e),n(e),a(e),c(e),i(e)}))};d.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()}},[[60,1,2]]]);
//# sourceMappingURL=main.969f75f6.chunk.js.map