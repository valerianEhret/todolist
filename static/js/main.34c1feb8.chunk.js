(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a,i,c=n(3),o=n(0),r=n.n(o),s=n(10),l=n.n(s),d=(n(106),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),u=(n(107),n(175)),j=n(176),b=n(177),O=n(168),f=n(133),h=n(171),T=n(179),m=n(180),g=n(178),p=n(17),v=n(8),x=n(60),k=n(82),I=n.n(k).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"39c88548-6df5-43ab-a1ae-8869e921e539"}}),S=function(){return I.get("todo-lists")},C=function(t){return I.post("todo-lists",{title:t})},E=function(t){return I.delete("todo-lists/".concat(t))},y=function(t,e){return I.put("todo-lists/".concat(t),{title:e})},A=function(t){return I.get("todo-lists/".concat(t,"/tasks"))},L=function(t,e){return I.delete("todo-lists/".concat(t,"/tasks/").concat(e))},D=function(t,e){return I.post("todo-lists/".concat(t,"/tasks"),{title:e})},w=function(t,e,n){return I.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},P=function(t){return I.post("auth/login",t)},N=function(){return I.get("auth/me")},F=function(){return I.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var R=function(t,e){t.messages.length?e(H(t.messages[0])):e(H("Some error occurred")),e(z("failed"))},M=function(t,e){e(H(t.message?t.message:"Some error occurred")),e(z("failed"))},G={isLoggedIn:!1},K=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},U={status:"idle",error:null,isInitialized:!1},H=function(t){return{type:"APP/SET-ERROR",error:t}},z=function(t){return{type:"APP/SET-STATUS",status:t}},V=[],Z=n(36),q={},B=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(v.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);w(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else R(i.data,a)})).catch((function(t){M(t,a)}))}else console.warn("task not found in the state")}},Y=n(172),J=n(132),_=n(44),$=n(181),Q=n(169),W=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(o.useState)(""),r=Object(_.a)(i,2),s=r[0],l=r[1],d=Object(o.useState)(null),u=Object(_.a)(d,2),j=u[0],b=u[1],f=function(){""!==s.trim()?(e(s),l("")):b("Title is required")};return Object(c.jsxs)("div",{children:[Object(c.jsx)($.a,{variant:"outlined",disabled:a,error:!!j,value:s,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==j&&b(null),13===t.charCode&&f()},label:"Title",helperText:j}),Object(c.jsx)(O.a,{color:"primary",onClick:f,disabled:a,children:Object(c.jsx)(Q.a,{})})]})})),X=n(90),tt=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(_.a)(e,2),a=n[0],i=n[1],r=Object(o.useState)(t.value),s=Object(_.a)(r,2),l=s[0],d=s[1];return a?Object(c.jsx)($.a,{value:l,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(l)}}):Object(c.jsx)("span",{onDoubleClick:function(){i(!0),d(t.value)},children:t.value})})),et=n(170),nt=n(183),at=r.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(c.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(c.jsx)(nt.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(c.jsx)(tt,{value:t.task.title,onChange:i}),Object(c.jsx)(O.a,{onClick:e,children:Object(c.jsx)(et.a,{})})]},t.task.id)})),it=r.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(X.a)(t,["demo"]);console.log("Todolist called");var r=Object(p.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(z("loading")),A(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(z("succeeded"))}))});r(e)}}),[]);var s=Object(o.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),l=Object(o.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(o.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(o.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(o.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[Object(c.jsx)(tt,{value:i.todolist.title,onChange:l}),Object(c.jsx)(O.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(c.jsx)(et.a,{})})]}),Object(c.jsx)(W,{addItem:s,disabled:"loading"===i.todolist.entityStatus}),Object(c.jsx)("div",{children:b.map((function(t){return Object(c.jsx)(at,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(c.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(c.jsx)(h.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"default",children:"All"}),Object(c.jsx)(h.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(c.jsx)(h.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),ct=n(14),ot=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(p.c)((function(t){return t.auth.isLoggedIn})),i=Object(p.c)((function(t){return t.todolists})),r=Object(p.c)((function(t){return t.tasks})),s=Object(p.b)();Object(o.useEffect)((function(){if(!n&&a){var t=function(t){t(z("loading")),S().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(z("succeeded"))}))};s(t)}}),[]);var l=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){L(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);s(n)}),[]),d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(z("loading")),D(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(z("succeeded"))}else R(t.data,n)})).catch((function(t){M(t,n)}))}}(t,e);s(n)}),[]),u=Object(o.useCallback)((function(t,e,n){var a=B(t,{status:e},n);s(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=B(t,{title:e},n);s(a)}),[]),b=Object(o.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};s(n)}),[]),O=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(z("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),E(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(z("succeeded"))}))});s(n)}),[]),f=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){y(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);s(n)}),[]),h=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(z("loading")),C(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(z("succeeded"))}))}}(t);s(e)}),[s]);return a?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Y.a,{container:!0,style:{padding:"20px"},children:Object(c.jsx)(W,{addItem:h})}),Object(c.jsx)(Y.a,{container:!0,spacing:3,children:i.map((function(t){var e=r[t.id];return Object(c.jsx)(Y.a,{item:!0,children:Object(c.jsx)(J.a,{style:{padding:"10px"},children:Object(c.jsx)(it,{todolist:t,tasks:e,removeTask:l,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(c.jsx)(ct.a,{to:"/login"})},rt=n(185),st=n(182);function lt(t){return Object(c.jsx)(st.a,Object(v.a)({elevation:6,variant:"filled"},t))}function dt(){var t=Object(p.c)((function(t){return t.app.error})),e=Object(p.b)(),n=function(t,n){"clickaway"!==n&&e(H(null))},a=null!==t;return Object(c.jsx)(rt.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(c.jsx)(lt,{onClose:n,severity:"error",children:t})})}var ut=n(186),jt=n(167),bt=n(173),Ot=n(174),ft=n(89),ht=function(){var t=Object(p.b)(),e=Object(p.c)((function(t){return t.auth.isLoggedIn})),n=Object(ft.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 2 characters or more"):e.password="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(z("loading")),P(a).then((function(e){0===e.data.resultCode?(t(K(!0)),t(z("succeeded"))):R(e.data,t)})).catch((function(e){M(e,t)}))})),n.resetForm()}});return e?Object(c.jsx)(ct.a,{to:"/"}):Object(c.jsx)(Y.a,{container:!0,justify:"center",children:Object(c.jsx)(Y.a,{item:!0,xs:4,children:Object(c.jsx)("form",{onSubmit:n.handleSubmit,children:Object(c.jsxs)(ut.a,{children:[Object(c.jsxs)(jt.a,{children:[Object(c.jsxs)("p",{children:["To log in get registered",Object(c.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(c.jsx)("p",{children:"or use common test account credentials:"}),Object(c.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(c.jsx)("p",{children:"Password: free"})]}),Object(c.jsxs)(bt.a,{children:[Object(c.jsx)($.a,Object(v.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(c.jsx)($.a,Object(v.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(c.jsx)(Ot.a,{label:"Remember me",control:Object(c.jsx)(nt.a,{onChange:n.handleChange,checked:n.values.rememberMe,name:"rememberMe"})}),Object(c.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var Tt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(p.c)((function(t){return t.auth.isLoggedIn})),i=Object(p.c)((function(t){return t.app.isInitialized})),r=Object(p.c)((function(t){return t.app.status})),s=Object(p.b)();return Object(o.useEffect)((function(){s((function(t){N().then((function(e){0===e.data.resultCode&&t(K(!0))})).catch((function(){})).finally((function(){t({type:"APP/SET-INITIALIZATION",isInitialized:!0})}))}))}),[]),i?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(dt,{}),Object(c.jsxs)(j.a,{position:"static",children:[Object(c.jsxs)(b.a,{children:[Object(c.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(c.jsx)(g.a,{})}),Object(c.jsx)(f.a,{variant:"h6",children:"News"}),a&&Object(c.jsx)(h.a,{onClick:function(){s((function(t){t(z("loading")),F().then((function(e){0===e.data.resultCode?(t(K(!1)),t(z("succeeded"))):R(e.data,t)})).catch((function(e){M(e,t)}))}))},color:"inherit",children:"Logout"})]}),"loading"===r&&Object(c.jsx)(T.a,{})]}),Object(c.jsx)(m.a,{fixed:!0,children:Object(c.jsxs)(ct.d,{children:[Object(c.jsx)(ct.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(ot,{demo:n})}}),Object(c.jsx)(ct.b,{path:"/login",render:function(){return Object(c.jsx)(ht,{})}}),Object(c.jsx)(ct.b,{path:"/404",render:function(){return Object(c.jsx)("div",{style:{fontSize:"60px"},children:"404: PAGE NOT FOUND"})}}),Object(c.jsx)(ct.a,{from:"*",to:"/404"})]})})]}):Object(c.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(c.jsx)(u.a,{})})},mt=n(41),gt=n(88),pt=Object(mt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.task.todoListId,[e.task].concat(Object(x.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(v.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(v.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(v.a)(Object(v.a)({},t),{},Object(Z.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(x.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZATION":return Object(v.a)(Object(v.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(v.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),vt=Object(mt.d)(pt,Object(mt.a)(gt.a));window.store=vt;var xt=n(46);l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p.a,{store:vt,children:Object(c.jsx)(xt.a,{children:Object(c.jsx)(Tt,{})})})}),document.getElementById("root")),d()}},[[131,1,2]]]);
//# sourceMappingURL=main.34c1feb8.chunk.js.map