(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(3),i=n.n(s),o=n(6),r=n(4),c=n(5),l=n(8),a=n(7),u=n(1),b=n.n(u),d=(n(13),n(0)),h=function(t){var e=t.goods;return console.log("List of goods"),Object(d.jsx)("ul",{className:"list-group",children:e.map((function(t){return Object(d.jsx)("li",{className:"list-group-item",children:t},t)}))})},g=b.a.memo(h),j=function(t){var e=t.method;return console.log("Start Button"),Object(d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-block col-12",onClick:e,children:"Start"})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(l.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={goods:p,isReversed:!1,sortBy:"",isListVisible:!1,limitedLength:1},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.reset=function(){t.setState({sortBy:"",isReversed:!1,goods:p,isListVisible:!0})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.renderedList=function(){t.setState((function(t){return{isListVisible:!t.isListVisible}}))},t.viewLimitedList=function(){t.setState((function(t){return{limitedLength:t.limitedLength}}))},t.changeHandler=function(e){var n=e.target.value;console.log(n),t.setState({limitedLength:+n})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isReversed,s=t.sortBy,i=t.isListVisible,r=t.limitedLength;console.log("App");var c=Object(o.a)(e).filter((function(t){return t.length>=r}));return c.sort((function(t,e){switch(s){case"length":return t.length-e.length;case"alphabet":return t.localeCompare(e);default:return 0}})),n&&c.reverse(),Object(d.jsx)("div",{className:"App d-flex justify-content-center align-items-center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Goods"}),!i&&Object(d.jsx)(j,{method:this.renderedList}),i&&Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.sortAlphabetically,children:"Sort Alphabetically"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:this.reset,children:"Reset"})]}),i&&Object(d.jsx)(g,{goods:c}),i&&Object(d.jsx)("select",{name:"goodsLength",className:"btn btn-outline-secondary btn-block col-12",onChange:this.changeHandler,children:e.map((function(t){return Object(d.jsx)("option",{value:e.indexOf(t)+1,children:e.indexOf(t)+1},t)}))})]})})}}]),n}(b.a.PureComponent);i.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e32b1132.chunk.js.map