(this.webpackJsonpcarbon=this.webpackJsonpcarbon||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},21:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),o=(a(21),a(22),a(3)),s=a(1),m=l.a.createContext([{},function(){}]),i=function(e){var t=Object(n.useState)({movies:[],show:[],filter:[],search:""}),a=Object(s.a)(t,2),c=a[0],r=a[1];return l.a.createElement(m.Provider,{value:[c,r]},e.children)};function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var p=function(){var e=Object(n.useContext)(m),t=Object(s.a)(e,2),a=t[0],l=t[1];return{setData:function(e,t){l((function(a){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,Object(o.a)({},t,e))}))},getData:function(e){return a[e]}}},d=a(4),f=a.n(d);var E=function(){var e=p(),t=(e.setData,e.getData,"https://bokiotestbankapi.azurewebsites.net/api/apple/Transactions/");return{postCall:function(e,a){var n={method:"post",url:a=t+a,data:e};return console.log(n),new Promise((function(e,t){f()(n).then((function(t){e(t.data)}))}))},getCall:function(){var e=t;return new Promise((function(t,a){f.a.get(e).then((function(e){t(e.data)}))}))}}};var b=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 669 198"},l.a.createElement("g",{fill:"#28cdaa"},l.a.createElement("path",{d:"M527.699 47.477h22.932V149.07h-22.932zM284.515 94.673c7.866-4.666 11.732-11.066 11.732-19.198 0-5.333-1.066-9.866-3.333-13.6-2.133-3.6-5.2-6.666-9.2-8.932-3.866-2.267-8.532-3.867-13.998-4.8-5.467-.933-11.333-1.333-17.866-1.333-4.8 0-10 .267-15.599.667-5.6.4-10.666 1.066-15.332 2v98.526c6 1.334 11.732 2.133 17.199 2.4 5.466.4 11.066.533 16.665.533 15.333 0 26.932-2.666 34.665-8 7.733-5.332 11.599-13.332 11.599-23.998 0-5.332-1.2-9.999-3.466-14.265-2.134-4.267-6.533-7.6-13.066-10zm-41.198-28.931a338.24 338.24 0 0 1 6-.4c2.267 0 4.4-.133 6.266-.133 6 0 10.666.8 13.733 2.533 3.066 1.6 4.666 4.533 4.666 8.666 0 4-1.466 6.933-4.533 8.666-3.066 1.867-8 2.667-15.066 2.667h-11.199V65.742zm28.532 63.462c-4.266 2-9.733 2.934-16.532 2.934-2.4 0-4.533 0-6.4-.134-2-.133-3.733-.266-5.466-.4V105.34h14.399c6.533 0 11.6 1.067 15.066 3.067 3.466 2 5.332 5.333 5.332 10-.133 5.332-2.266 8.932-6.4 10.798zM399.44 59.21c-4.532-4.534-9.999-7.867-16.132-10.134-6.133-2.266-12.666-3.333-19.598-3.333-6.8 0-13.2 1.067-19.333 3.333-6.132 2.267-11.465 5.6-16.132 10.133-4.666 4.533-8.4 10-11.066 16.666-2.8 6.533-4.133 14.265-4.133 22.931 0 8.667 1.333 16.4 4 22.932 2.666 6.533 6.266 12.133 10.8 16.533 4.532 4.4 9.999 7.732 16.132 9.999 6.132 2.266 12.665 3.333 19.598 3.333 7.066 0 13.866-1.067 19.999-3.333 6.266-2.267 11.6-5.6 15.999-10 4.533-4.4 8-9.999 10.666-16.532 2.533-6.533 3.866-14.265 3.866-22.932 0-8.666-1.333-16.398-4-22.931-2.533-6.667-6.132-12.266-10.665-16.666zm-10.665 53.062c-1.2 4-2.934 7.466-5.333 10.4-2.267 2.933-5.2 5.066-8.533 6.666-3.333 1.6-7.2 2.4-11.333 2.4-4.266 0-8.133-.8-11.466-2.4-3.333-1.6-6.133-3.733-8.4-6.666-2.266-2.934-3.999-6.267-5.332-10.4-1.2-4-1.867-8.533-1.867-13.466s.667-9.332 1.867-13.465c1.2-4 2.933-7.466 5.333-10.4 2.266-2.933 5.066-5.066 8.4-6.8 3.332-1.732 7.066-2.399 11.465-2.399 4.267 0 8 .8 11.333 2.4 3.333 1.6 6.266 3.733 8.533 6.666 2.266 2.933 4 6.4 5.333 10.4 1.2 4 1.866 8.532 1.866 13.598 0 5.067-.666 9.467-1.866 13.466zM665.29 75.741c-2.667-6.533-6.266-12.132-10.8-16.665-4.532-4.533-9.999-7.866-16.132-10.133-6.133-2.266-12.666-3.333-19.598-3.333-6.8 0-13.2 1.067-19.333 3.333-6.132 2.267-11.465 5.6-16.132 10.133-4.666 4.533-8.4 10-11.066 16.665-2.8 6.533-4.133 14.266-4.133 22.932 0 8.666 1.333 16.4 4 22.932 2.666 6.533 6.266 12.133 10.8 16.532 4.532 4.4 9.999 7.733 16.132 10 6.132 2.266 12.665 3.333 19.598 3.333 7.066 0 13.866-1.067 19.999-3.333 6.266-2.267 11.6-5.6 15.999-10 4.533-4.4 8-10 10.666-16.532 2.533-6.533 3.866-14.266 3.866-22.932.134-8.666-1.2-16.265-3.866-22.932zm-21.465 36.531c-1.2 4-2.934 7.466-5.333 10.4-2.267 2.933-5.2 5.066-8.533 6.666-3.333 1.6-7.2 2.4-11.333 2.4-4.266 0-8.133-.8-11.466-2.4-3.333-1.6-6.133-3.733-8.4-6.666-2.266-2.934-3.999-6.267-5.332-10.4-1.2-4-1.867-8.533-1.867-13.466s.667-9.332 1.867-13.465c1.2-4 2.933-7.466 5.333-10.4 2.266-2.933 5.066-5.066 8.4-6.8 3.332-1.6 7.066-2.399 11.465-2.399 4.267 0 8 .8 11.333 2.4 3.333 1.6 6.266 3.733 8.533 6.666 2.266 2.933 4 6.4 5.333 10.4 1.2 4 1.866 8.532 1.866 13.598 0 5.067-.666 9.467-1.866 13.466zM471.836 94.807a874.583 874.583 0 0 0 22.132-22.932c6.933-7.6 13.999-15.466 20.932-23.732H487.7c-5.2 5.733-10.799 12-16.798 18.799-6.133 6.8-12 13.199-17.866 19.332v-38.13h-22.932v101.592h22.932v-43.063c3.467 2.8 7.066 5.866 10.533 9.466 3.466 3.6 6.933 7.333 10.132 11.199 3.2 3.866 6.267 7.733 9.066 11.6 2.8 3.866 5.2 7.465 7.333 10.665H517.3a313.35 313.35 0 0 0-21.732-30.798c-7.733-9.2-15.6-17.199-23.732-23.998z"})),l.a.createElement("g",{fill:"#48baa2"},l.a.createElement("path",{d:"M99.327 98.673l99.46-99.327H0z"}),l.a.createElement("path",{d:"M99.327 98.673L0-.654V198z"})),l.a.createElement("path",{fill:"#75dfc9",d:"M99.327 98.673l99.46-99.327H0z"}),l.a.createElement("path",{fill:"#48baa2",d:"M99.327 98.673L0-.654V198z"}),l.a.createElement("g",null,l.a.createElement("path",{fill:"#368b7a",d:"M99.327 98.673L0 198h40.53z"}),l.a.createElement("path",{fill:"#3ea18c",d:"M198.787 198l-99.46-99.327L40.53 198z"})))},h=1,v=2,g=3;var O=function(){var e=p(),t=e.setData,a=(e.getData,E().getCall);return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"icon"},l.a.createElement("button",{className:"btn-no-css",onClick:function(){window.location.reload(!1)}},l.a.createElement(b,null))),l.a.createElement("li",{className:"select-comp"},l.a.createElement("select",{className:"select-opt",onChange:function(e){a("").then((function(e){t(e,"mainData"),t(g,"appStatus")}))}},l.a.createElement("option",{value:"null"},"None"),l.a.createElement("option",{value:"apple"},"Apple"))))))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(){var e=p(),t=e.setData,a=(e.getData,Object(n.useState)("")),c=Object(s.a)(a,2),r=c[0],o=c[1],m=E().postCall;return l.a.createElement("section",{className:"main-form-copmponent"},l.a.createElement("div",{className:"start-form"},l.a.createElement("div",{className:"title-icon"},l.a.createElement(b,null)),l.a.createElement("div",{className:"detail-text"},"Copy and paste your transaction from bank account, and let the magic begin!"),l.a.createElement("div",{className:"form-elems"},l.a.createElement("div",{className:"company-name"},l.a.createElement("label",{className:"block-display"},"Company"),l.a.createElement("input",{disabled:!0,type:"text",value:"apple",onChange:function(e){o(N({},r,{company:e.target.value}))},placeholder:"Your beautiful company name."})),l.a.createElement("div",{className:"textarea"},l.a.createElement("label",{className:"block-display"},"CSV Transaction text"),l.a.createElement("textarea",{onChange:function(e){o(N({},r,{csv:e.target.value}))},rows:"10",placeholder:"CSV text"})),l.a.createElement("div",{className:"button-submit"},l.a.createElement("button",{type:"submit",onClick:function(){var e={text:r.csv};m(e,"Parse").then((function(e){t(e,"parseData"),t(h,"appStatus")}))},className:"submit-btn"},"Submit")))))};var j=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"12pt",viewBox:"0 0 512 512",width:"12pt"},l.a.createElement("path",{d:"m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0-.378906.011719-.769531.011719-1.160156.011719-68.371094 0-132.660156-26.621094-181.011719-74.980469-48.359375-48.347656-74.988281-112.640625-74.988281-181.019531s26.628906-132.660156 74.988281-181.019531c48.351563-48.351563 112.640625-74.980469 181.011719-74.980469.390625 0 .769531 0 1.160156.0117188.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0",fill:"#ff771a"}),l.a.createElement("path",{d:"m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0v-511.9765622c.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0",fill:"#ff4a05"}),l.a.createElement("path",{d:"m257.265625 107.804688c.417969-.007813-.363281 0 0 0zm0 0"}),l.a.createElement("path",{d:"m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375c-10.988281-.320313-22.332031-4.757813-30.058594-12.488282-8.050781-8.058593-12.492187-18.769531-12.492187-30.171874v-114.4375c0-23.261719 19.3125-41.992188 42.550781-42.660157h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0",fill:"#fff"}),l.a.createElement("path",{d:"m257.265625 307.5625c-.363281 0 .363281.007812 0 0zm0 0"}),l.a.createElement("path",{d:"m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563c-22.210937-.050781-40.269531-18.140625-40.269531-40.378906 0-22.230469 18.058594-40.320313 40.269531-40.371094h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0",fill:"#fff"}),l.a.createElement("g",{fill:"#ddebf0"},l.a.createElement("path",{d:"m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563v-80.75h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0"}),l.a.createElement("path",{d:"m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375v-199.757813h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0"})))};function D(e){return parseFloat(e.split(",").join(".").split(" ").join(""))}var P=a(5),z=a.n(P);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(){var e=this,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),m=Object(s.a)(o,2),i=m[0],u=m[1],d=p(),f=d.setData,b=d.getData,h=Object(n.useState)({}),g=Object(s.a)(h,2),O=g[0],y=g[1],N=E().postCall,w=function(){r(!1)},P=function(){u(!1)},C=function(e,t){var a={fromDate:e.cells[0].cleanedValue,toDate:e.cells[1].cleanedValue,details:e.cells[2].cleanedValue,balance:e.cells[3].cleanedValue,amount:e.cells[4].cleanedValue,id:e.index,key:t};f(a,"selectedRow"),y(a);var n={transactions:[{id:a.id,date:a.fromDate,text:a.details,amount:parseFloat(D(a.amount))}]};N(n,"Preview").then((function(e){e[0].ignore?u(!0):r(!0)}))},x=b("parseData");return l.a.createElement("section",{className:"table-copmponent"},l.a.createElement(z.a,{show:c,onClose:w,transitionSpeed:500},l.a.createElement("section",{className:"modal-body"},l.a.createElement("div",{className:"modal-title"},"Review"),l.a.createElement("div",{className:"modal-form-elems"},l.a.createElement("div",{className:"company-name"},l.a.createElement("input",{onChange:function(e){y(k({},O,{fromDate:e.target.value}))},defaultValue:O.fromDate,type:"text",placeholder:"date"}),l.a.createElement("input",{onChange:function(e){y(k({},O,{details:e.target.value}))},defaultValue:O.details,type:"text",placeholder:"descriprion"}),l.a.createElement("input",{onChange:function(e){y(k({},O,{amount:e.target.value}))},defaultValue:O.amount,type:"text",placeholder:"amount"}),l.a.createElement("div",{className:"button-submit"},l.a.createElement("button",{type:"submit",onClick:function(){console.log("",O);var e=[{id:O.id,date:O.fromDate,text:O.details,amount:parseFloat(D(O.amount))}];N(e,"").then((function(e){f(e,"mainData"),f(v,"appStatus"),w();var t=b("parseData");t.rows=t.rows.filter((function(e,t){return t!=O.key})),f(t,"parseData")}))},className:"submit-btn"},"Submit")))))),l.a.createElement(z.a,{show:i,onClose:P,transitionSpeed:500},l.a.createElement("section",{className:"modal-body"},l.a.createElement("div",{className:"modal-title"},"Data Already Existing"),l.a.createElement("p",null,"Are you sure you want to continue?"),l.a.createElement("div",{className:"modal-form-elems"},l.a.createElement("div",{className:"company-name"},l.a.createElement("div",{className:"button-submit"},l.a.createElement("button",{type:"submit",onClick:function(){r(!0),P()},className:"submit-btn"},"Yes"),l.a.createElement("button",{type:"submit",onClick:P,className:"close-btn"},"Close")))))),l.a.createElement("div",{className:"process-page-left"},l.a.createElement("p",{className:"title"},"Suggestions"),l.a.createElement("div",{className:"processed-tbl"},l.a.createElement("table",{border:"1",className:"tbl tbl-standard"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Balance Date"),l.a.createElement("th",null,"Transaction Date"),l.a.createElement("th",null,"Details"),l.a.createElement("th",null,"Balance"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,x.rows.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.index),l.a.createElement("td",{className:"text-small"},t.cells[0].cleanedValue||"NA"),l.a.createElement("td",{className:"text-small"},t.cells[1].cleanedValue||"NA"),l.a.createElement("td",null,t.cells[2].cleanedValue||"NA"),l.a.createElement("td",null,t.cells[3].cleanedValue.replace(/ /g,"")||"NA"),l.a.createElement("td",null,t.cells[4].cleanedValue.replace(/ /g,"")||"NA"),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-no-css",onClick:function(){return C.apply(e,[t,a])}},"  ",l.a.createElement(j,null))))})))))))};var S=function(){var e=p(),t=(e.setData,(0,e.getData)("mainData"));return l.a.createElement("section",{className:"table-copmponent"},l.a.createElement("div",{className:"process-page-left"},l.a.createElement("p",{className:"title"},"Final Data [Apple]"),l.a.createElement("div",{className:"processed-tbl"},l.a.createElement("table",{border:"1",className:"tbl tbl-standard"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Amount"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.text),l.a.createElement("td",null,e.amount))})))))))};var V=function(){return l.a.createElement("section",{className:"defaultimg-copmponent"},l.a.createElement("img",{className:"left-img",src:"https://png2.cleanpng.com/sh/59b7cbbe1a4cd8efd56650679e778ad6/L0KzQYm3VsA2N5h4hJH0aYP2gLBuTfZqdpJze9tqbD3kc7T2lf51cZ9sRdNsY3B4fsXojwQubJZ4g59qY3Pog8T2kvlme146eqMCMUW0RIS4g8A5QV89SaQBOUe3RoK8UsgzO2o4UKI7MEO7PsH1h5==/kisspng-financial-accounting-accountant-desk-accessories-5b17151431c089.8126974615282393802038.png"}))};var A=function(){var e=(0,p().getData)("appStatus");return l.a.createElement("section",{className:"home-page"},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"outer"},l.a.createElement("div",{className:"half"},e===h||e===v?l.a.createElement(x,null):l.a.createElement(V,null)),l.a.createElement("div",{className:"half"},e===v||e===g?l.a.createElement(S,null):l.a.createElement(w,null)))))};var M=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,null,l.a.createElement(O,null),l.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.70bb4c8b.chunk.js.map