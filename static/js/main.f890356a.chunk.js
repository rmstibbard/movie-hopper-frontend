(this["webpackJsonpmovie-hopper-frontend"]=this["webpackJsonpmovie-hopper-frontend"]||[]).push([[0],{53:function(e,t,a){e.exports=a(82)},58:function(e,t,a){},59:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(58),a(59),a(84)),l=function(){return r.a.createElement(c.a,{className:"header"},r.a.createElement("h1",{className:"moviegoers-title display-4"},"Movie Hopper"),r.a.createElement("p",{className:"lead text-center"},"Select a person to see their favourite movies. Select multiple to see which favourite films they have in common."))},s=a(10),u=a(37),m=a(38),v=a(50),d=a(48),p=a(85),E=a(51),f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.handleMount()}},{key:"render",value:function(){var e=this.props,t=e.movieGoersList,a=e.handleSelect,o=e.selectedIds;return t.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"moviegoers-list-title"},"Movie Goers"),r.a.createElement(p.a,{className:"p-0 moviegoers-list"},t.map((function(e,t){return r.a.createElement(E.a,{className:"moviegoer-card",active:-1!==o.indexOf(e.id),key:t,onClick:function(){return a(e.id)},"aria-label":e.name},e.name)})))):r.a.createElement("h2",{className:"moviegoers-list-title","aria-label":"No movie-goers found"},"No movie-goers found!")}}]),a}(n.Component),h=a(42),b=a.n(h).a.create({baseURL:"https://hopper.developme.space/api/",headers:{Accept:"application/json"}}),O=function(e){return{type:"SET_MOVIES",movies:e}},g=Object(s.b)((function(e){var t=e.selectedMovieGoer.length>0?e.selectedMovieGoer.map((function(e){return e.id})):"";return{movieGoersList:e.movieGoersList,selectedIds:t}}),(function(e){return{handleMount:function(){return e((function(e){b.get("/people").then((function(t){var a=t.data;e(function(e){return{type:"SET_PEOPLE",data:e}}(a.data))}))}))},handleSelect:function(t){return e(function(e){return function(t,a){var n=[],r=a().selectedMovieGoer;0===r.length?n[0]=e:(n=r.map((function(e){return e.id}))).push(e),1===n.length?b.get("/people/".concat(e)).then((function(e){var a=e.data;t(O(a.data.movies))})):b.get("/people/match?people=".concat(n.join(","))).then((function(e){var a=e.data;t(O([a.data]))})),t(function(e){return{type:"SELECT_MOVIEGOER",id:e}}(e))}}(t))}}}))(f),M=function(){return r.a.createElement("p",{className:"footer","aria-label":"Copyright"},"Copyright \xa9 2020 Nik Osvalds, Kieran Cott, Henry Macfarlane, Richard Stibbard")},j=a(14),y=a(43),S=a(46),L=function(e){var t=e.movies;return t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"movies-title","aria-label":"Movies"},"Movies"),r.a.createElement(y.a,{className:"movies-list","aria-label":"Movies List"},t.map((function(e,t){return r.a.createElement(j.a,{key:t,className:"movie-card"},r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,{"aria-label":e.name},e.name)),r.a.createElement(j.a.Footer,{"aria-label":e.year},e.year))})))):r.a.createElement(S.a,{variant:"primary",className:"instructions","aria-label":"Select a person to see their favourite movies!"},"Select a person to see their favourite movies!")},N=Object(s.b)((function(e){return{movies:e.movies}}))(L),G=function(e){var t=e.handleReset;return r.a.createElement("div",{className:"search-button-container"},r.a.createElement("button",{className:"search-button btn btn-warning",onClick:t,"aria-label":"Click to clear selection"},"Clear Selection"))},_=Object(s.b)("",(function(e){return{handleReset:function(){return e({type:"CLEAR_ALL"})}}}))(G);var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(g,null),r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(M,null))},k=a(11),R={selectedMovieGoer:[],movieGoersList:[],movies:[]},T=a(47),I=a(8),w=function(e,t){switch(t.type){case"SET_PEOPLE":return function(e,t){return Object(I.a)(Object(I.a)({},e),{},{movieGoersList:t.data})}(e,t);case"SELECT_MOVIEGOER":return function(e,t){return Object(I.a)(Object(I.a)({},e),{},{selectedMovieGoer:Object(T.a)(e.selectedMovieGoer).concat(e.movieGoersList.filter((function(e){return e.id===t.id})))})}(e,t);case"SET_MOVIES":return function(e,t){return Object(I.a)(Object(I.a)({},e),{},{movies:t.movies})}(e,t);case"CLEAR_ALL":return Object(I.a)(Object(I.a)({},e),{},{selectedMovieGoer:[],movies:[]});default:return e}},A=a(45),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c,V=Object(k.d)(w,R,P(Object(k.a)(A.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:V},r.a.createElement(C,null))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.f890356a.chunk.js.map