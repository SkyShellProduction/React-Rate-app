(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{38:function(A,e,t){},40:function(A,e,t){},42:function(A,e,t){},51:function(A,e,t){},52:function(A,e,t){},53:function(A,e,t){},54:function(A,e,t){},55:function(A,e,t){},56:function(A,e,t){},57:function(A,e,t){},58:function(A,e,t){},59:function(A,e,t){},60:function(A,e,t){},79:function(A,e,t){},80:function(A,e,t){},81:function(A,e,t){},82:function(A,e,t){},83:function(A,e,t){},84:function(A,e,t){"use strict";t.r(e);var a,n,c=t(1),s=t.n(c),r=t(27),l=t.n(r),i=t(13),o=(t(38),t(9)),d=t.n(o),u=t(4),j=t(12),b=t(28),h=t(29),p=t(33),m=t(31),g=(t(40),t(0)),f=Object(c.createContext)(),C=(t(42),[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/"},{name:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",path:"/calc"},{name:"\u0412\u044b\u0431\u043e\u0440\u043a\u0438",path:"/sample"},{name:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",path:"/info"}]),x=function(){return Object(g.jsx)("nav",{className:"nav",children:Object(g.jsx)("ul",{className:"nav__list",children:C.map((function(A,e){return Object(g.jsx)("li",{children:Object(g.jsx)(i.b,{to:A.path,className:"nav__link",children:A.name},A)})}))})})},O=(t(51),function(){var A=Object(c.useContext)(f).modalShowHandler;return Object(g.jsx)("header",{className:"header",children:Object(g.jsxs)("div",{className:"header__wrap",children:[Object(g.jsx)("a",{href:"#/",className:"header__logo",children:"RateApp"}),Object(g.jsx)(x,{}),Object(g.jsx)("a",{href:"#/",className:"header__person icon",onClick:A,children:"\uf007"})]})})}),v=t(2),B=(t(52),function(){var A=Object(c.useContext)(f).state,e=Object(u.a)({},A.currency);return Object(g.jsx)("div",{className:"exchange",children:Object(g.jsx)("div",{className:"exchange__container",children:Object(g.jsxs)("div",{className:"exchange__content",children:[Object(g.jsx)("div",{className:"exchange__head",children:Object(g.jsxs)("p",{children:["\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0432\u0430\u043b\u044e\u0442\u0430: ",A.base," \xa0\u0414\u0430\u0442\u0430: ",A.date]})}),Object(g.jsx)("ul",{children:Object.keys(e).map((function(t,a){return Object(g.jsxs)("li",{children:[Object(g.jsxs)("span",{className:"exchange__sp1",children:[Object(g.jsx)("img",{src:e[t].flag,alt:""}),"\xa0",t]}),Object(g.jsx)("span",{className:"exchange__sp2",children:"1".concat(A.base," = ").concat(e[t].course," ").concat(t)})]},a)}))})]})})})}),Q=(t(53),function(){return Object(g.jsx)(B,{})}),I=(t(54),function(){var A=Object(c.useContext)(f).state;return Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsx)("div",{className:"sidebar__head",children:Object(g.jsx)("h3",{children:"\u0412\u0441\u0435 \u0432\u0430\u043b\u044e\u0442\u044b"})}),Object(g.jsx)("div",{className:"sidebar__content",children:Object(g.jsx)("ul",{children:Object.keys(A.currency).map((function(e,t){return Object(g.jsx)("li",{children:Object(g.jsxs)("p",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{src:A.currency[e].flag,alt:""}),"\xa0",e]}),"\xa0",A.currency[e].name]})},t)}))})})]})}),k=(t(55),t(56),t(57),function(A){return Object(g.jsx)("button",{className:"btn",onClick:function(){return A.click?A.click(A.arg||""):void 0},disabled:A.disabled,children:A.text})}),E=(t(58),function(){var A=Object(c.useContext)(f),e=A.state,t=A.inputValueHandler,a=A.currencyValueHandler,n=A.calculatorHadler;return Object(g.jsxs)("div",{className:"calc__head",children:[Object(g.jsx)("div",{children:Object(g.jsx)("h4",{children:"\u042f \u0445\u043e\u0447\u0443 \u043e\u0431\u043c\u0435\u043d\u044f\u0442\u044c:"})}),Object(g.jsxs)("div",{className:"operation",children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("input",{type:"number",value:e.inputValue,onChange:t}),"\xa0EUR"]}),Object(g.jsx)("select",{onChange:a,children:Object.keys(e.currency).map((function(A,e){return Object(g.jsx)("option",{children:A},e)}))}),Object(g.jsx)(k,{text:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c",click:n,arg:e.currencyValue})]})]})}),H=function(){var A=Object(c.useContext)(f).state;return Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)("h2",{children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(g.jsx)("div",{className:"calc",children:Object(g.jsxs)("div",{className:"calc__container",children:[Object(g.jsx)(E,{}),Object(g.jsxs)("div",{className:"calc__result",children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",A.result," ",A.currencyValue]})]})})]})},y=(t(59),function(){var A=Object(c.useContext)(f),e=A.state,t=A.baseHandler,a=A.base2Handler,n=A.sampleDateHandler,s=A.dataWrite,r=A.sampleRemove;return Object(g.jsx)("div",{className:"sample",children:Object(g.jsxs)("div",{className:"sample__container",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("h3",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0443\u0440\u0441: \xa0",Object(g.jsx)("select",{onChange:t,value:e.sample.base,children:Object.keys(e.currency).map((function(A,e){return Object(g.jsx)("option",{children:A},e)}))}),"\xa0\u043a\xa0",Object(g.jsx)("select",{onChange:a,value:e.sample.base2,children:Object.keys(e.currency).map((function(A,e){return Object(g.jsx)("option",{children:A},e)}))})]})}),Object(g.jsxs)("div",{className:"sample__head",children:[Object(g.jsxs)("span",{children:["\u0414\u0430\u0442\u0430: ",Object(g.jsx)("input",{type:"date",onChange:n})]}),Object(g.jsx)(k,{text:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0443\u0440\u0441",click:s,arg:e.sample})]}),Object(g.jsx)("div",{className:"sample__result",children:Object(g.jsx)("ul",{children:Object.keys(e.sampleList).map((function(A,t){return Object(g.jsxs)("li",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{src:e.currency[e.sampleList[A].base].flag,alt:A})," ",e.sampleList[A].base]}),Object(g.jsx)("span",{children:e.sampleList[A].date}),Object(g.jsx)("span",{children:"".concat(e.sampleList[A].course," ").concat(e.sampleList[A].base2)}),Object(g.jsx)("button",{onClick:function(){return r(A)},children:"x"})]},A)}))})})]})})}),w=(t(60),function(){return Object(g.jsxs)("div",{className:"info",children:[Object(g.jsx)("h3",{children:"Currency conversion application"}),Object(g.jsx)("p",{children:"Author: Vladimir"})]})}),S=(a=function(){var A=Object(c.useContext)(f).state;return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)("h1",{children:"RateApp"}),Object(g.jsx)(O,{}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("div",{className:"routes",children:A.auth?Object(g.jsxs)(v.c,{children:[Object(g.jsx)(v.a,{path:"/",exact:!0,component:Q}),Object(g.jsx)(v.a,{path:"/calc",render:function(){return Object(g.jsx)(H,{})}}),Object(g.jsx)(v.a,{path:"/sample",render:function(){return Object(g.jsx)(y,{})}}),Object(g.jsx)(v.a,{path:"/info",render:function(){return Object(g.jsx)(w,{})}})]}):Object(g.jsx)(v.a,{path:"/",component:Q})}),Object(g.jsx)(I,{})]})]})},n="layout",function(A){return Object(g.jsx)("div",{className:n,children:Object(g.jsx)(a,{})})}),N=t.p+"static/media/CNY.16052c5e.png",V=t.p+"static/media/EUR.f743010e.png",D=t.p+"static/media/GBP.cd2d9f0d.png",J=t.p+"static/media/JPY.4b2c41c9.png",_=t.p+"static/media/RUB.3b0c9832.png",q=t.p+"static/media/USD.cafdbbd0.png",P=t(11),F=t.n(P),X=(t(79),function(A){var e=["dark"];return A.showModal&&e.push("darkShow"),Object(g.jsx)("div",{className:e.join(" "),onClick:A.modalHideHandler})}),L=t(32),U=(t(80),function(){var A=Object(c.useContext)(f),e=A.state,t=A.renderInputs,a=A.loginHandler;return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)("div",{className:"modal__form",children:t()}),Object(g.jsx)("div",{className:"modal__btn",children:Object(g.jsx)(k,{text:"\u0432\u043e\u0439\u0442\u0438",disabled:!e.isFormValid,click:a})})]})}),R=(t(81),function(){var A=Object(c.useContext)(f),e=A.state,t=A.renderInputs,a=A.registerHandler;return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)("div",{className:"modal__form",children:t()}),Object(g.jsx)("div",{className:"modal__btn",children:Object(g.jsx)(k,{text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",disabled:!e.isFormValid,click:a})})]})}),M=(t(82),function(){var A=Object(c.useContext)(f),e=A.state,t=A.modalHideHandler,a=Object(c.useState)("login"),n=Object(L.a)(a,2),s=n[0],r=n[1],l=["modal"];return e.showModal&&l.push("modalShow"),Object(g.jsxs)("div",{className:l.join(" "),children:[Object(g.jsxs)("div",{className:"modal__head",children:[Object(g.jsx)("ul",{children:[{name:"\u0412\u0445\u043e\u0434",id:"login"},{name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",id:"register"}].map((function(A,e){return Object(g.jsx)("li",{style:{fontWeight:A.id===s?"bold":"normal",cursor:"pointer"},onClick:function(){return e=A.id,void r(e);var e},children:A.name},A+e)}))}),Object(g.jsx)("span",{onClick:t,children:"x"})]}),Object(g.jsx)("hr",{}),Object(g.jsx)("h2",{style:{color:"#f01f30",textAlign:"center"},children:e.error}),"register"===s?Object(g.jsx)(R,{}):Object(g.jsx)(U,{})]})});t(83);function Y(A){var e=A.valid,t=A.touched,a=A.shouldValidate;return!e&&t&&a}var W=function(A){var e=A.type||"text";return Object(g.jsx)("div",{className:["modal__input"].join(" "),children:Object(g.jsxs)("label",{children:[A.label,Y(A)?Object(g.jsx)("span",{children:A.errorMessage})||"\u0438\u043d\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":null,Object(g.jsx)("input",{type:e,value:A.value,onChange:A.onChange})]})})};var z=function(A){Object(p.a)(t,A);var e=Object(m.a)(t);function t(A){var a;return Object(b.a)(this,t),(a=e.call(this,A)).loginHandler=Object(j.a)(d.a.mark((function A(){var e,t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e={email:a.state.formControls.email.value,password:a.state.formControls.password.value,returnSecureToken:!0},A.prev=1,A.next=4,F.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=\n    AIzaSyAx34ShFv4Wvvzs9edm35HEYF1p7ccfqdw",e);case 4:A.sent.data.idToken&&((t=Object(u.a)({},a.state.formControls)).email.value="",t.password.value="",a.setState({auth:!0,showModal:!1,error:"",formControls:t})),A.next=12;break;case 8:A.prev=8,A.t0=A.catch(1),console.log(A.t0),a.setState({error:"\u041e\u0448\u0438\u0431\u043a\u0430"});case 12:case"end":return A.stop()}}),A,null,[[1,8]])}))),a.registerHandler=Object(j.a)(d.a.mark((function A(){var e,t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e={email:a.state.formControls.email.value,password:a.state.formControls.password.value,returnSecureToken:!0},A.prev=1,A.next=4,F.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=\n    AIzaSyAx34ShFv4Wvvzs9edm35HEYF1p7ccfqdw",e);case 4:A.sent.data.idToken&&((t=Object(u.a)({},a.state.formControls)).email.value="",t.password.value="",a.setState({auth:!0,showModal:!1,error:"",formControls:t})),A.next=12;break;case 8:A.prev=8,A.t0=A.catch(1),console.log(A.t0),a.setState({error:"\u041e\u0448\u0438\u0431\u043a\u0430"});case 12:case"end":return A.stop()}}),A,null,[[1,8]])}))),a.modalShowHandler=function(){a.setState({showModal:!0})},a.modalHideHandler=function(){a.setState({showModal:!1})},a.onChangeHandler=function(A,e){var t=Object(u.a)({},a.state.formControls),n=Object(u.a)({},t[e]);n.value=A.target.value,n.touched=!0,n.valid=a.validateControl(n.value,n.validation),t[e]=n;var c=!0;Object.keys(t).forEach((function(A){c=t[A].valid&&c})),a.setState({formControls:t,isFormValid:c})},a.renderInputs=function(){return Object.keys(a.state.formControls).map((function(A,e){var t=a.state.formControls[A];return Object(g.jsx)(W,{type:t.type,value:t.value,valid:t.valid,touched:t.touched,label:t.label,errorMessage:t.errorMessage,shouldValidate:!0,onChange:function(e){return a.onChangeHandler(e,A)}},A+e)}))},a.baseHandler=function(A){a.setState({sample:Object(u.a)(Object(u.a)({},a.state.sample),{},{base:A.target.value})})},a.base2Handler=function(A){a.setState({sample:Object(u.a)(Object(u.a)({},a.state.sample),{},{base2:A.target.value})})},a.sampleDateHandler=function(A){a.setState({sample:Object(u.a)(Object(u.a)({},a.state.sample),{},{date:A.target.value})})},a.inputValueHandler=function(A){a.setState({inputValue:A.target.value})},a.currencyValueHandler=function(A){a.setState({currencyValue:A.target.value})},a.dataWrite=Object(j.a)(d.a.mark((function A(){var e;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"e3e49a4a8bb639ed377be65e06936193",e="http://api.exchangeratesapi.io/v1/".concat(a.state.sample.date,"?access_key=").concat("e3e49a4a8bb639ed377be65e06936193"),A.next=4,fetch(e).then((function(A){return A.json()})).then((function(A){a.setState({sample:Object(u.a)(Object(u.a)({},a.state.sample),{},{course:A.rates[a.state.sample.base2]})})}));case 4:return A.next=6,F.a.post("https://rateapp-65320-default-rtdb.firebaseio.com/sample.json",a.state.sample).then((function(A){return""}));case 6:return A.next=8,F.a.get("https://rateapp-65320-default-rtdb.firebaseio.com/sample.json").then((function(A){a.setState({sampleList:A.data})}));case 8:case"end":return A.stop()}}),A)}))),a.sampleRemove=function(){var A=Object(j.a)(d.a.mark((function A(e){var t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return delete(t=Object(u.a)({},a.state.sampleList))[e],a.setState({sampleList:t}),A.next=5,F.a.delete("https://rateapp-65320-default-rtdb.firebaseio.com/sample/".concat(e,".json"));case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),a.calculatorHadler=Object(j.a)(d.a.mark((function A(){var e,t,n=arguments;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"USD",t="http://data.fixer.io/api/latest?access_key=".concat("526e20be87bcf023c185916267110ba6"),A.next=5,fetch(t).then((function(A){return A.json()})).then((function(A){a.setState({result:A.rates[e]*a.state.inputValue})}));case 5:case"end":return A.stop()}}),A)}))),a.state={auth:!1,error:"",formControls:{email:{value:"",type:"email",label:"email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"password",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}},base:"USD",rate:"",date:"21.10.2021",currency:{USD:{name:"\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410",flag:q,course:""},CHF:{name:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0424\u0440\u0430\u043d\u043a",flag:"data:image/png;base64,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",course:""},CNY:{name:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u042e\u0430\u043d\u044c",flag:N,course:""},RUB:{name:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0420\u0443\u0431\u043b\u044c",flag:_,course:""},JPY:{name:"\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0439\u0435\u043d\u0430",flag:J,course:""},GBP:{name:"\u0424\u0443\u043d\u0442 \u0421\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432",flag:D,course:""},EUR:{name:"\u0415\u0432\u0440\u043e",flag:V,course:""}},inputValue:100,currencyValue:"USD",result:0,sample:{base:"EUR",base2:"RUB",date:"",course:""},sampleList:"",showModal:!1,isFormValid:!1},a}return Object(h.a)(t,[{key:"validateControl",value:function(A,e){if(!e)return!0;var t=!0;return e.required&&(t=""!==A.trim()&&t),e.email&&(t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(A).toLowerCase())&&t),e.minLength&&(t=A.length>=e.minLength&&t),t}},{key:"componentDidMount",value:function(){var A=this,e="http://api.exchangeratesapi.io/v1/latest?access_key=".concat("e3e49a4a8bb639ed377be65e06936193");fetch(e).then((function(A){return A.json()})).then((function(e){for(var t=Object(u.a)({},A.state.currency),a=Object.keys(t),n=0;n<a.length;n++)t[a[n]].course=e.rates[a[n]];A.setState({base:e.base,data:e.date,currency:t})})),F.a.get("https://rateapp-65320-default-rtdb.firebaseio.com/sample.json").then((function(e){A.setState({sampleList:e.data})}))}},{key:"render",value:function(){return Object(g.jsx)(f.Provider,{value:{state:this.state,inputValueHandler:this.inputValueHandler,currencyValueHandler:this.currencyValueHandler,calculatorHadler:this.calculatorHadler,baseHandler:this.baseHandler,base2Handler:this.base2Handler,sampleDateHandler:this.sampleDateHandler,dataWrite:this.dataWrite,sampleRemove:this.sampleRemove,renderInputs:this.renderInputs,modalShowHandler:this.modalShowHandler,modalHideHandler:this.modalHideHandler,loginHandler:this.loginHandler,registerHandler:this.registerHandler},children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(X,{showModal:this.state.showModal,modalHideHandler:this.modalHideHandler}),Object(g.jsx)(M,{}),Object(g.jsx)(S,{})]})})}}]),t}(c.Component),T=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;t(A),a(A),n(A),c(A),s(A)}))};l.a.render(Object(g.jsx)(i.a,{children:Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(z,{})})}),document.getElementById("root")),T()}},[[84,1,2]]]);
//# sourceMappingURL=main.c19a8537.chunk.js.map