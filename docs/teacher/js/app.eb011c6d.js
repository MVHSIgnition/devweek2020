(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/devweek2020/teacher/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},2:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{collapse:!1,"collapse-on-scroll":!1,absolute:"",color:"green lighten-1",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Intellecture Teacher Portal")]),a("v-spacer"),a("v-btn",{on:{click:function(e){return t.$router.push({path:"/new"})}}},[t._v("Start Lecture")])],1),a("div",{staticStyle:{height:"64px"}}),a("v-content",[a("router-view")],1)],1)},s=[],i={name:"App"},o=i,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),h=a("40dc"),p=a("5bc1"),v=a("8336"),g=a("a75b"),f=a("2fa4"),m=a("2a7f"),b=Object(l["a"])(o,r,s,!1,null,null,null),x=b.exports;d()(b,{VApp:u["a"],VAppBar:h["a"],VAppBarNavIcon:p["a"],VBtn:v["a"],VContent:g["a"],VSpacer:f["a"],VToolbarTitle:m["a"]});var y=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",[a("div",{staticStyle:{height:"10px"}}),a("span",{staticClass:"display-1 font-weight-bold"},[t._v("Hi David")]),a("div",{staticStyle:{height:"60px"}}),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticStyle:{margin:"12px 20px"},attrs:{md12:"",sm12:"",lg4:""}},[a("v-card",{attrs:{"max-width":"400"}},[a("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"cyan",elevation:"12","max-width":"calc(100% - 32px)"}},[a("v-sparkline",{attrs:{labels:t.lastLecture.labels,value:t.lastLecture.value,color:"white","line-width":"2",padding:"16"}})],1),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title font-weight-light mb-2"},[t._v("Avg. Student Understanding")]),a("div",{staticClass:"subheading font-weight-light grey--text"},[t._v("Higher is Better")]),a("v-divider",{staticClass:"my-2"}),a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-clock ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("last lecture 32 minutes ago")])],1)],1)],1),a("v-flex",{staticStyle:{margin:"12px 20px"},attrs:{md12:"",sm12:"",lg4:""}},[a("v-card",{attrs:{"max-width":"400"}},[a("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"light-green darken-2",elevation:"12","max-width":"calc(100% - 32px)"}},[a("v-sparkline",{attrs:{labels:t.lastLecture.labels,value:t.lastLecture.valueRange,color:"white","line-width":"2",padding:"16"}})],1),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title font-weight-light mb-2"},[t._v("Range of Student Understanding")]),a("div",{staticClass:"subheading font-weight-light grey--text"},[t._v("Lower is Better")]),a("v-divider",{staticClass:"my-2"}),a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-clock ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("last lecture 32 minutes ago")])],1)],1)],1)],1),a("br"),a("br"),a("v-layout",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.bestStudents.headers,items:t.bestStudents.items,"items-per-page":4}})],1)],1)],1)},C=[],_={data(){return{lastLecture:{labels:["0 min","5 min","10 min","15 min","20 min","25 min","30 min","35 min"],value:[8,6,8,3,3.5,2,7,9],valueRange:[3,1,3,7,7,2,3,1]},bestStudents:{headers:[{text:"Name",value:"n"},{text:"Avg. Understanding",value:"au"},{text:"Avg. Concept Grasp Time",value:"acg"},{text:"Est. Test Performance",value:"tp"},{text:"Left App",value:"la"},{text:"Updated Ticker",value:"ut"}],items:[{n:"Dante Olivar",au:"9.3 (Complete Understand)",acg:"3 min",tp:"A",la:0,ut:42},{n:"Nazia Riley",au:"6.3 (Somewhat Understand)",acg:"8 min",tp:"B",la:2,ut:14},{n:"Peggy Freeman",au:"4.3 (Confused)",acg:"12 min",tp:"C",la:19,ut:4},{n:"Ari Alfaro",au:"1.3 (Lost)",acg:"5 min",tp:"B",la:2,ut:49}]}}}},S=_,V=(a("fec1"),a("b0af")),k=a("99d9"),j=a("a523"),L=a("8fea"),P=a("ce7e"),O=a("0e8f"),T=a("132d"),A=a("a722"),U=a("8dd9"),B=a("7f2e"),M=Object(l["a"])(S,w,C,!1,null,"2e2ef3bf",null),E=M.exports;d()(M,{VCard:V["a"],VCardText:k["a"],VContainer:j["a"],VContent:g["a"],VDataTable:L["a"],VDivider:P["a"],VFlex:O["a"],VIcon:T["a"],VLayout:A["a"],VSheet:U["a"],VSparkline:B["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6",sm:"8",md:"8"}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Create A Lecture")])],1),a("v-card-text",[a("br"),a("br"),a("v-form",[a("h2",{staticStyle:{color:"black","text-align":"center"}},[t._v("Which class?")]),a("br"),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-select",{staticStyle:{"max-width":"400px"},attrs:{items:t.classes,label:"Classname",outlined:""}})],1),a("br"),a("h2",{staticStyle:{color:"black","text-align":"center"}},[t._v("Enter a name for your lecture")]),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Lecture name",outlined:""},model:{value:t.lectureName,callback:function(e){t.lectureName=e},expression:"lectureName"}})],1)],1)],1),a("br"),a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{rounded:"",color:"primary","x-large":""},on:{click:t.create}},[t._v("Create")])],1),a("br")],1)],1)],1)],1)],1)],1)},$=[],q={data(){return{lectureName:"",classes:["AP Calculus BC","AP Chemistry","AP Physics C: E & M","AP Physics C: Mechanics","Multivariable Calculus"]}},methods:{create(){let t=this.makeId(5);this.$router.push({path:"/live-lecture?id="+t+"&name="+this.lectureName})},makeId(t){let e="",a="abcdefghijklmnopqrstuvwxyz",n=a.length;for(let r=0;r<t;r++)e+=a.charAt(Math.floor(Math.random()*n));return e}}},F=q,N=a("62ad"),R=a("4bd4"),D=a("0fd9"),I=a("b974"),J=a("8654"),Q=a("71d9"),G=Object(l["a"])(F,z,$,!1,null,null,null),H=G.exports;d()(G,{VBtn:v["a"],VCard:V["a"],VCardText:k["a"],VCol:N["a"],VContainer:j["a"],VContent:g["a"],VForm:R["a"],VRow:D["a"],VSelect:I["a"],VTextField:J["a"],VToolbar:Q["a"],VToolbarTitle:m["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("h1",[t._v("Lecture: "+t._s(t.lectureName))]),a("br"),a("br"),a("br"),a("br"),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-card",{attrs:{width:"500",height:"400"}},[a("v-card-text",[a("span",{staticClass:"text--primary title"},[a("span",{staticClass:"blink",staticStyle:{background:"red",padding:"2px 5px",color:"white","border-radius":"3px",animation:"animation: blink 1s step-start 0s infinite"}},[t._v("LIVE")]),t._v(" Understanding Score")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("span",{staticClass:"text--primary font-weight-black",staticStyle:{margin:"0 auto","text-align":"center","font-size":"150px",background:"#ddd","border-radius":"7px",padding:"4px 10px"}},[t._v(t._s(t.understandingScore)+"%")]),a("br"),a("br"),a("br"),a("br"),a("span",{staticClass:"text--primary title"},[t._v("Average Understanding: ")]),a("span",{staticClass:"text--primary font-weight-black",staticStyle:{"font-size":"20px",background:"#ddd",padding:"2px 4px","border-radius":"3px"}},[t._v(t._s(t.averageUnderstanding))]),a("br"),a("span",{staticClass:"text--primary title"},[t._v("Understanding Range: ")]),a("span",{staticClass:"text--primary font-weight-black",staticStyle:{"font-size":"20px",background:"#ddd",padding:"2px 4px","border-radius":"3px"}},[t._v(t._s(t.range))]),a("br")])],1),a("div",{staticStyle:{height:"300px",width:"700px"},attrs:{id:"chart-container"}})],1),a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",tile:""}},t._l(3,(function(e){return a("v-list-item",{key:e},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e+": "+t.keywords[e-1].word))])],1)],1)})),1),a("v-row")],1),a("v-footer",{staticClass:"font-weight-medium",attrs:{fixed:"",color:"green lighten-3"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8"}},[a("span",{staticStyle:{"font-size":"28px"}},[t._v("Give your students the join code: "),a("span",{staticClass:"text--primary font-weight-black",staticStyle:{background:"#ddd","border-radius":"7px",padding:"4px 10px"}},[t._v(t._s(t.id))])])])],1)],1)},W=[],Z=(a("9490"),{data(){return{id:this.$route.query.id,lectureName:this.$route.query.name,understandingScore:"--",averageUnderstanding:"--",range:"--",client:null,channel:null,people:{},understandingByPerson:{},log:[],averageLog:[],start:Date.now(),questions:[],keywords:[{word:"gaussian surface",count:4},{word:"electric flux",count:3},{word:"capacitor",count:1}]}},methods:{setup(){console.log("keywords",this.keywords),this.channel=this.client.createChannel(this.id),this.channel.on("ChannelMessage",({text:t},e)=>{let a=JSON.parse(t);if(console.log(t),"login"===a.type)this.people[e]=t,this.saveForEmail(e,5);else if("update"===a.type)this.saveForEmail(e,a.value);else if("question"===a.type)return this.questions.push(a.question),this.analyzeQuestion(a.question),void console.log("Questions: ",this.questions);this.averageUnderstanding=this.computeAverage(),this.range=this.calculateStandardDeviation(this.averageUnderstanding),this.understandingScore=this.compositeScore(this.averageUnderstanding,this.range),this.averageLog.push({x:(Date.now()-this.start)/1e3,y:this.understandingScore}),this.chart.render();while(this.averageLog[this.averageLog.length-1].x-this.averageLog[0].x>30)this.averageLog.shift()}),this.channel.join().then(()=>{console.log("You joined channel successfully")}).catch(t=>{console.log("Failure to join channel")})},async analyzeQuestion(t){let e=new FormData;e.append("extractors","entities,phrases"),e.append("text",t),console.log("analyze question",t),await fetch("https://api.textrazor.com/",{mode:"cors",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","x-textrazor-key":"58ac6a6d3c599102da02a774d80ebd58de757aac78a10f99071178c0"},body:e}).then(t=>t.json()).then((function(t){console.log("data: ",t)})).catch(t=>console.log(t))},saveForEmail(t,e){this.log.push({email:t,value:e,time:Date.now()}),this.understandingByPerson[t]=e},computeAverage(){let t=Object.values(this.understandingByPerson),e=0;for(let a of t)e+=a;return e/t.length},calculateStandardDeviation(t){let e=Object.values(this.understandingByPerson),a=0;for(let n of e)a+=(t-n)**2;return Math.sqrt(a/e.length)},calculateRange(){let t=Object.values(this.understandingByPerson),e=t[0],a=t[0];for(let n of t)e>n&&(e=n),a<n&&(a=n);return console.log(a-e),a-e},compositeScore(t,e){return Math.round(10*(t-.1*t*e))},initChart(){this.chart=new CanvasJS.Chart("chart-container",{exportEnabled:!0,title:{text:"Understanding",fontFamily:"Roboto"},axisY:{includeZero:!0,maximum:100},data:[{type:"spline",markerSize:0,lineThinkness:6,dataPoints:this.averageLog}]}),this.chart.render()}},mounted(){this.client=this.$client.createInstance("4b7e608f84004ea2acd537eda95f6bf8"),this.client.on("ConnectionStateChange",(t,e)=>{console.log("on connection state changed to "+t+" reason: "+e)}),this.client.login({token:null,uid:"teacher"}).then(()=>{this.setup(),console.log("AgoraRTM client login success")}).catch(t=>{console.log("AgoraRTM client login failure",t)}),this.initChart()}}),K=Z,X=(a("ae24"),a("553a")),tt=a("da13"),et=a("5d23"),at=Object(l["a"])(K,Y,W,!1,null,null,null),nt=at.exports;d()(at,{VCard:V["a"],VCardText:k["a"],VCol:N["a"],VContainer:j["a"],VContent:g["a"],VFooter:X["a"],VListItem:tt["a"],VListItemContent:et["a"],VListItemTitle:et["b"],VRow:D["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container")],1)},st=[],it={data(){return{}}},ot=it,lt=Object(l["a"])(ot,rt,st,!1,null,"189873ce",null),ct=lt.exports;d()(lt,{VContainer:j["a"],VContent:g["a"]}),n["a"].use(y["a"]);const dt=[{path:"/",redirect:"/login"},{path:"/dashboard",component:E},{path:"/new",component:H},{path:"/live-lecture",component:nt},{path:"/login",component:ct}],ut=new y["a"]({mode:"history",base:"/devweek2020/teacher/",routes:dt});var ht=ut,pt=a("f309");n["a"].use(pt["a"]);var vt=new pt["a"]({}),gt=a("6f91"),ft=a.n(gt);Object.defineProperty(n["a"].prototype,"$client",{value:ft.a}),n["a"].config.productionTip=!1,new n["a"]({router:ht,vuetify:vt,render:function(t){return t(x)}}).$mount("#app")},ae24:function(t,e,a){"use strict";var n=a("d2b7"),r=a.n(n);r.a},be18:function(t,e,a){},d2b7:function(t,e,a){},fec1:function(t,e,a){"use strict";var n=a("be18"),r=a.n(n);r.a}});
//# sourceMappingURL=app.eb011c6d.js.map