(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a,c,i=n(3),o=n(0),r=n.n(o),s=n(10),d=n.n(s),l=(n(106),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),u=(n(107),n(175)),j=n(176),b=n(177),O=n(168),f=n(133),h=n(171),T=n(179),m=n(180),p=n(178),g=n(17),v=n(8),x=n(60),k=n(82),I=n.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"39c88548-6df5-43ab-a1ae-8869e921e539"}}),S=function(){return I.get("todo-lists")},C=function(t){return I.post("todo-lists",{title:t})},E=function(t){return I.delete("todo-lists/".concat(t))},y=function(t,e){return I.put("todo-lists/".concat(t),{title:e})},A=function(t){return I.get("todo-lists/".concat(t,"/tasks"))},L=function(t,e){return I.delete("todo-lists/".concat(t,"/tasks/").concat(e))},D=function(t,e){return I.post("todo-lists/".concat(t,"/tasks"),{title:e})},w=function(t,e,n){return I.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},P=function(t){return I.post("auth/login",t)},N=function(){return I.get("auth/me")},F=function(){return I.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var R=function(t,e){t.messages.length?e(H(t.messages[0])):e(H("Some error occurred")),e(z("failed"))},M=function(t,e){e(H(t.message?t.message:"Some error occurred")),e(z("failed"))},G={isLoggedIn:!1},K=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},U={status:"idle",error:null,isInitialized:!1},H=function(t){return{type:"APP/SET-ERROR",error:t}},z=function(t){return{type:"APP/SET-STATUS",status:t}},V=[],Z=n(36),q={},B=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var o=Object(v.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);w(n,t,o).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else R(c.data,a)})).catch((function(t){M(t,a)}))}else console.warn("task not found in the state")}},Y=n(172),J=n(132),_=n(44),$=n(181),Q=n(169),W=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var c=Object(o.useState)(""),r=Object(_.a)(c,2),s=r[0],d=r[1],l=Object(o.useState)(null),u=Object(_.a)(l,2),j=u[0],b=u[1],f=function(){""!==s.trim()?(e(s),d("")):b("Title is required")};return Object(i.jsxs)("div",{children:[Object(i.jsx)($.a,{variant:"outlined",disabled:a,error:!!j,value:s,onChange:function(t){d(t.currentTarget.value)},onKeyPress:function(t){null!==j&&b(null),13===t.charCode&&f()},label:"Title",helperText:j}),Object(i.jsx)(O.a,{color:"primary",onClick:f,disabled:a,children:Object(i.jsx)(Q.a,{})})]})})),X=n(90),tt=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(_.a)(e,2),a=n[0],c=n[1],r=Object(o.useState)(t.value),s=Object(_.a)(r,2),d=s[0],l=s[1];return a?Object(i.jsx)($.a,{value:d,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(d)}}):Object(i.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),et=n(170),nt=n(183),at=r.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(i.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(i.jsx)(nt.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(i.jsx)(tt,{value:t.task.title,onChange:c}),Object(i.jsx)(O.a,{onClick:e,children:Object(i.jsx)(et.a,{})})]},t.task.id)})),ct=r.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,c=Object(X.a)(t,["demo"]);console.log("Todolist called");var r=Object(g.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=c.todolist.id,function(e){e(z("loading")),A(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(z("succeeded"))}))});r(e)}}),[]);var s=Object(o.useCallback)((function(t){c.addTask(t,c.todolist.id)}),[c.addTask,c.todolist.id]),d=Object(o.useCallback)((function(t){c.changeTodolistTitle(c.todolist.id,t)}),[c.todolist.id,c.changeTodolistTitle]),l=Object(o.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),u=Object(o.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),j=Object(o.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),b=c.tasks;return"active"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.New}))),"completed"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.Completed}))),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)(tt,{value:c.todolist.title,onChange:d}),Object(i.jsx)(O.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus,children:Object(i.jsx)(et.a,{})})]}),Object(i.jsx)(W,{addItem:s,disabled:"loading"===c.todolist.entityStatus}),Object(i.jsx)("div",{children:b.map((function(t){return Object(i.jsx)(at,{task:t,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus},t.id)}))}),Object(i.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(i.jsx)(h.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:l,color:"default",children:"All"}),Object(i.jsx)(h.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(i.jsx)(h.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),it=n(14),ot=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(g.c)((function(t){return t.auth.isLoggedIn})),c=Object(g.c)((function(t){return t.todolists})),r=Object(g.c)((function(t){return t.tasks})),s=Object(g.b)();Object(o.useEffect)((function(){if(!n&&a){var t=function(t){t(z("loading")),S().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(z("succeeded"))}))};s(t)}}),[]);var d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){L(e,t).then((function(a){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(c)}))}}(t,e);s(n)}),[]),l=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(z("loading")),D(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(z("succeeded"))}else R(t.data,n)})).catch((function(t){M(t,n)}))}}(t,e);s(n)}),[]),u=Object(o.useCallback)((function(t,e,n){var a=B(t,{status:e},n);s(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=B(t,{title:e},n);s(a)}),[]),b=Object(o.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};s(n)}),[]),O=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(z("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),E(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(z("succeeded"))}))});s(n)}),[]),f=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){y(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);s(n)}),[]),h=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(z("loading")),C(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(z("succeeded"))}))}}(t);s(e)}),[s]);return a?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Y.a,{container:!0,style:{padding:"20px"},children:Object(i.jsx)(W,{addItem:h})}),Object(i.jsx)(Y.a,{container:!0,spacing:3,children:c.map((function(t){var e=r[t.id];return Object(i.jsx)(Y.a,{item:!0,children:Object(i.jsx)(J.a,{style:{padding:"10px"},children:Object(i.jsx)(ct,{todolist:t,tasks:e,removeTask:d,changeFilter:b,addTask:l,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(i.jsx)(it.a,{to:"/login"})},rt=n(185),st=n(182);function dt(t){return Object(i.jsx)(st.a,Object(v.a)({elevation:6,variant:"filled"},t))}function lt(){var t=Object(g.c)((function(t){return t.app.error})),e=Object(g.b)(),n=function(t,n){"clickaway"!==n&&e(H(null))},a=null!==t;return Object(i.jsx)(rt.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(i.jsx)(dt,{onClose:n,severity:"error",children:t})})}var ut=n(186),jt=n(167),bt=n(173),Ot=n(174),ft=n(89),ht=function(){var t=Object(g.b)(),e=Object(g.c)((function(t){return t.auth.isLoggedIn})),n=Object(ft.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 2 characters or more"):e.password="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(z("loading")),P(a).then((function(e){0===e.data.resultCode?(t(K(!0)),t(z("succeeded"))):R(e.data,t)})).catch((function(e){M(e,t)}))})),n.resetForm()}});return e?Object(i.jsx)(it.a,{to:"/"}):Object(i.jsx)(Y.a,{container:!0,justify:"center",children:Object(i.jsx)(Y.a,{item:!0,xs:4,children:Object(i.jsx)("form",{onSubmit:n.handleSubmit,children:Object(i.jsxs)(ut.a,{children:[Object(i.jsxs)(jt.a,{children:[Object(i.jsxs)("p",{children:["To log in get registered",Object(i.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(i.jsx)("p",{children:"or use common test account credentials:"}),Object(i.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(i.jsx)("p",{children:"Password: free"})]}),Object(i.jsxs)(bt.a,{children:[Object(i.jsx)($.a,Object(v.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(i.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(i.jsx)($.a,Object(v.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(i.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(i.jsx)(Ot.a,{label:"Remember me",control:Object(i.jsx)(nt.a,{onChange:n.handleChange,checked:n.values.rememberMe,name:"rememberMe"})}),Object(i.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var Tt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(g.c)((function(t){return t.auth.isLoggedIn})),c=Object(g.c)((function(t){return t.app.isInitialized})),r=Object(g.c)((function(t){return t.app.status})),s=Object(g.b)();return Object(o.useEffect)((function(){s((function(t){N().then((function(e){0===e.data.resultCode&&t(K(!0))})).catch((function(){})).finally((function(){t({type:"APP/SET-INITIALIZATION",isInitialized:!0})}))}))}),[]),c?Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(lt,{}),Object(i.jsxs)(j.a,{position:"static",children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(i.jsx)(p.a,{})}),Object(i.jsx)(f.a,{variant:"h6",children:"News"}),a&&Object(i.jsx)(h.a,{onClick:function(){s((function(t){t(z("loading")),F().then((function(e){0===e.data.resultCode?(t(K(!1)),t(z("succeeded"))):R(e.data,t)})).catch((function(e){M(e,t)}))}))},color:"inherit",children:"Logout"})]}),"loading"===r&&Object(i.jsx)(T.a,{})]}),Object(i.jsx)(m.a,{fixed:!0,children:Object(i.jsxs)(it.d,{children:[Object(i.jsx)(it.b,{exact:!0,path:"/",render:function(){return Object(i.jsx)(ot,{demo:n})}}),Object(i.jsx)(it.b,{path:"/todolist",render:function(){return Object(i.jsx)(ot,{demo:n})}}),Object(i.jsx)(it.b,{path:"/login",render:function(){return Object(i.jsx)(ht,{})}}),Object(i.jsx)(it.b,{path:"/404",render:function(){return Object(i.jsx)("div",{style:{fontSize:"60px"},children:"404: PAGE NOT FOUND"})}}),Object(i.jsx)(it.a,{from:"*",to:"/404"})]})})]}):Object(i.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(i.jsx)(u.a,{})})},mt=n(41),pt=n(88),gt=Object(mt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.task.todoListId,[e.task].concat(Object(x.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(v.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(v.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(x.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZATION":return Object(v.a)(Object(v.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(v.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),vt=Object(mt.d)(gt,Object(mt.a)(pt.a));window.store=vt;var xt=n(46);d.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(g.a,{store:vt,children:Object(i.jsx)(xt.a,{children:Object(i.jsx)(Tt,{})})})}),document.getElementById("root")),l()}},[[131,1,2]]]);
//# sourceMappingURL=main.740ff99d.chunk.js.map