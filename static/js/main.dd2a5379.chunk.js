(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(3),r=n.n(s),i=n(6),o=n(4),c=n(5),a=n(8),l=n(7),u=n(1),b=n.n(u),d=(n(13),n(0)),h=function(t){var e=t.goods;return Object(d.jsx)("ul",{className:"list-group col-4",children:e.map((function(t){return Object(d.jsx)("li",{className:"list-group-item",children:t},t)}))})},j=function(t){var e=t.method;return Object(d.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:e,children:"Start"})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={goods:p,isReversed:!1,sortBy:"id",isListVisible:!1},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.reset=function(){t.setState({sortBy:"id"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.renderedList=function(){t.setState((function(t){return{isListVisible:!t.isListVisible}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isReversed,s=t.sortBy,r=t.isListVisible,o=Object(i.a)(e);return o.sort((function(t,n){switch(s){case"id":return e.indexOf(t)-e.indexOf(n);case"length":return t.length-n.length;case"alphabet":return t.localeCompare(n);default:return 0}})),n&&o.reverse(),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Goods"}),!r&&Object(d.jsx)(j,{method:this.renderedList}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.sortAlphabetically,children:"Sort Alphabetically"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.reset,children:"Reset"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.sortByLength,children:"Sort by length"}),r&&Object(d.jsx)(h,{goods:o})]})})}}]),n}(b.a.Component);r.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dd2a5379.chunk.js.map