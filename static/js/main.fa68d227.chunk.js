(this.webpackJsonpnalog=this.webpackJsonpnalog||[]).push([[0],{10:function(e,t,n){e.exports={el:"Contribution_el__LTA_8",text:"Contribution_text__txiWF"}},18:function(e,t,n){},2:function(e,t,n){e.exports={window:"Window_window__2JCJO",button:"Window_button__HVYYY",p:"Window_p__vZ_mw",wap:"Window_wap__1rXMd",active:"Window_active__1C7QD",add:"Window_add__3tB2j"}},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(4),o=n.n(i),r=(n(18),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))}),s=n(3),l=n(12),u=n(13),d={openOrClose:!1,DataTextChange:"",list:[],value:!1,check:!0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=Object(u.a)({},e);switch(t.type){case"OPEN_CLOSE":return n.openOrClose=!n.openOrClose,n;case"CHANGE_TEXT":return n.DataTextChange=t.text,n;case"ADD":if(""===n.DataTextChange)return n.check=!1,n;var c=[];try{for(var a=n.DataTextChange.match(/\d+/gi)[0],i=26e4,o=12*+a*.13,r=Math.floor(i/o),s=0,l=1;s<r;){var j={id:Math.floor(1e3*Math.random()),sum:o+" \u0440\u0443\u0431\u043b\u0435\u0439",years:"\u0432 ".concat(l," \u0433\u043e\u0434")};c.push(j),s++,l++}return n.list=[].concat(c),n.value=!0,n.check=!0,n}catch(b){return n.check=!1,n}default:return e}},b=Object(l.a)({window:j}),h=Object(l.b)(b),A=(n(23),n(11)),O=n(2),x=n.n(O),g=n(8),p=n.n(g),v=n(1),_=function(e){var t=e.add,n=e.change,c=e.value,a=e.check;return Object(v.jsxs)("div",{className:p.a.Data,children:[Object(v.jsx)("label",{htmlFor:"numbers",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446"}),!0===a?Object(v.jsx)("input",{type:"text",id:"numbers",onChange:function(e){return n(e.target.value)},value:c,required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}):Object(v.jsx)("input",{type:"text",style:{border:"solid 1px red"},id:"numbers",onChange:function(e){return n(e.target.value)},value:c,required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(v.jsx)("button",{onClick:t,className:p.a.button,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})},m=Object(s.b)((function(e){return{value:e.window.DataTextChange,one:e.window.one,check:e.window.check}}),(function(e){return{add:function(){e({type:"ADD"})},change:function(t){e({type:"CHANGE_TEXT",text:t})}}}))(_),w=n(9),f=n.n(w),C=n(10),D=n.n(C),N=function(e){var t=e.id,n=e.text,c=e.text2;return Object(v.jsxs)("li",{className:D.a.el,children:[Object(v.jsx)("input",{type:"checkbox",id:t}),Object(v.jsx)("label",{htmlFor:t}),Object(v.jsxs)("p",{className:D.a.text,children:[n," ",Object(v.jsx)("span",{children:c})]})]})},k=function(e){var t=e.list;return console.log(t),Object(v.jsxs)("div",{className:f.a.container,children:[Object(v.jsx)("p",{children:"\u0418 \u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),Object(v.jsx)("ul",{className:f.a.list,children:t.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(N,{id:e.id,text:e.sum,text2:e.years})},e.id)}))})]})},y=Object(s.b)((function(e){return{list:e.window.list}}),null)(k),B=function(e){var t=e.openClose,n=e.value,a=0,i=Object(c.useState)(x.a.active),o=Object(A.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(null),u=Object(A.a)(l,2),d=u[0],j=u[1],b=function(){a%2===0?(s(null),j(x.a.active)):(s(x.a.active),j(null)),a++};return Object(v.jsxs)("div",{className:x.a.window,children:[Object(v.jsx)("button",{onClick:t,className:x.a.button,children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgBlZS9DcIwEIXfmSnoUgYqRggjZAQ2YANgBCZgFLIBlJTukKDJAticI1uyg/94RXSyXz7fRc+hN9oDIPYaWn6g+yUeEhV6om0WoAuXHYGO9MJKe/sGti3BLOTKZWOXRsGPwfNMBmP8A8IiKbiDHbcka2AxiJ6mUD05g2ADBaeEY6YgynrIPy0FM0UOMg03bz0GcyOnID+gDAw5SBSUg6UgRgIJUeVaci+ek0DR0FIJ4jKWi0YAyuXE1KWcUQniBzIHoxqI33UKxrd/feNXNyVIATaImk58mT3jmV30Tmios8UMquJf5MO4vPNnHjXo9AWjmrvqvF5ZFAAAAABJRU5ErkJggg==",width:"18",height:"18",alt:"close"})}),Object(v.jsx)("h1",{children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(v.jsx)("p",{className:x.a.p,children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(v.jsx)(m,{}),!0===n?Object(v.jsx)(y,{}):null,Object(v.jsxs)("div",{className:x.a.wap,children:[Object(v.jsx)("label",{htmlFor:"1",children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?"}),Object(v.jsx)("button",{onClick:b,className:r,id:"1",children:"\u041f\u043b\u0430\u0442\u0451\u0436"}),Object(v.jsx)("button",{onClick:b,className:d,id:"1",children:"\u0421\u0440\u043e\u043a"})]}),Object(v.jsx)("button",{onClick:t,className:x.a.add,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var I=function(e){var t=e.openOrClose,n=e.value,c=e.valueList;return console.log(t),Object(v.jsx)(v.Fragment,{children:!0===n?Object(v.jsx)(B,{openClose:t,value:c}):Object(v.jsx)("button",{onClick:t,className:"button",children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"})})},T=Object(s.b)((function(e){return{value:e.window.openOrClose,valueList:e.window.value}}),(function(e){return{openOrClose:function(){e({type:"OPEN_CLOSE"})}}}))(I);o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(s.a,{store:h,children:Object(v.jsx)(T,{})})}),document.getElementById("root")),r()},8:function(e,t,n){e.exports={Data:"Data_Data__1GcjA",button:"Data_button__2ueXf"}},9:function(e,t,n){e.exports={container:"List_container___WQc8",list:"List_list__3BOca"}}},[[25,1,2]]]);
//# sourceMappingURL=main.fa68d227.chunk.js.map