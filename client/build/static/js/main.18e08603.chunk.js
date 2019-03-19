(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(70)},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),c=a(9),i=a(6),s=a(29),u=a(10),m=a(11),d=a(13),p=a(12),h=a(14);a(37);var E=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var f=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},k=a(8),g=a.n(k),v={getBooks:function(){return g.a.get("/api/books")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},saveBook:function(e){return g.a.post("/api/books",e)},findBooks:function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key=AIzaSyDeVsDpithk85NHs2VG00TxrDQnM6PfMcg")}};function b(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(56);function B(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function S(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function j(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}a(57);var w=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("img",{id:e.id,alt:e.id,src:e.image}),l.a.createElement("div",{className:"bookText"},l.a.createElement("p",null,l.a.createElement("strong",null,"Title: "),l.a.createElement("span",{className:"title"},e.title)),l.a.createElement("p",null,l.a.createElement("strong",null,"Author: "),l.a.createElement("span",{className:"author"},e.author)),l.a.createElement("p",{className:"description"},l.a.createElement("strong",null,"Description: "),l.a.createElement("span",{className:"descript"},e.description)),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("a",{className:"link",href:e.link,target:"_blank"},"Preview Link")))),l.a.createElement("button",{className:"savebook",onClick:e.saveBook},"Save"))};a(58);var x=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("img",{alt:e.id,src:e.image}),l.a.createElement("div",{className:"bookText"},l.a.createElement("p",null,l.a.createElement("strong",null,"Title: "),l.a.createElement("span",{className:"title"},e.title)),l.a.createElement("p",null,l.a.createElement("strong",null,"Author: "),l.a.createElement("span",{className:"author"},e.author)),l.a.createElement("p",{className:"description"},l.a.createElement("strong",null,"Description: "),l.a.createElement("span",{className:"descript"},e.description)),l.a.createElement("p",null,l.a.createElement("strong",null,l.a.createElement("a",{className:"link",href:e.link,target:"_blank"},"Preview Link")))),l.a.createElement("button",{dataid:e.id,className:"savebook",onClick:e.deleteBook},"Delete"))};a(59).config();var O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],query:"",title:"",author:"",description:"",booksSearched:[]},a.loadBooks=function(){v.getBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){e.preventDefault();var t=e.target.getAttribute("dataid");v.deleteBook(t).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(s.a)({},n,l))},a.handleSave=function(e){e.preventDefault(),e.target.parentNode.querySelector(".title").textContent&&v.saveBook({bookid:e.target.parentNode.querySelector("img").id,title:e.target.parentNode.querySelector(".title").textContent,author:e.target.parentNode.querySelector(".author").textContent,description:e.target.parentNode.querySelector(".descript").textContent,link:e.target.parentNode.querySelector(".link").href,image:e.target.parentNode.querySelector("img").src}).then(function(e){a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),v.findBooks(a.state.query).then(function(e){var t=e.data.items.map(function(e){return{id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors[0],description:e.volumeInfo.description,link:e.volumeInfo.previewLink,image:e.volumeInfo.imageLinks&&"undefined"!==typeof e.volumeInfo.imageLinks.thumbnail?e.volumeInfo.imageLinks.thumbnail:"https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg"}});a.setState({booksSearched:t})})},a.getBooks=function(){},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(y,{size:"md-6"},l.a.createElement(f,null,l.a.createElement("h1",null,"What Books Do Are Looking For?")),l.a.createElement("form",null,l.a.createElement(S,{value:this.state.query,onChange:this.handleInputChange,name:"query",placeholder:"Book Title"}),l.a.createElement(j,{disabled:!this.state.query,onClick:this.handleFormSubmit},"Submit Book")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),this.state.booksSearched.map(function(t){return l.a.createElement(w,{id:t.id,image:t.image,title:t.title,author:t.author,description:t.description,link:t.link,key:t.id,saveBook:e.handleSave},l.a.createElement(E,null))})),l.a.createElement(y,{size:"md-6 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Saved Books")),this.state.books.length?l.a.createElement(B,null,this.state.books.map(function(t){return l.a.createElement(x,{id:t._id,image:t.image,title:t.title,author:t.author,description:t.description,link:t.link,key:t._id,deleteBook:e.deleteBook})})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(y,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(N,null,l.a.createElement(y,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,this.state.book.synopsis)))),l.a.createElement(N,null,l.a.createElement(y,{size:"md-2"},l.a.createElement(c.b,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var D=function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(N,null,l.a.createElement(y,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var C=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var I=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:O}),l.a.createElement(i.a,{exact:!0,path:"/books",component:O}),l.a.createElement(i.a,{exact:!0,path:"/books/:id",component:q}),l.a.createElement(i.a,{component:D}))))};o.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.18e08603.chunk.js.map