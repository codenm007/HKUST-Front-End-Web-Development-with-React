(this.webpackJsonpwebx=this.webpackJsonpwebx||[]).push([[0],{100:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),s=a.n(l),c=(a(96),a(97),a(98),a(99),a(15)),o=a(16),m=a(18),i=a(19),u=(a(100),a(2)),d=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading ..."))},E="http://localhost:3001/",h=a(23);function f(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(d,null):n?r.a.createElement("h4",null,n):r.a.createElement(h.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:E+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),t.designation?r.a.createElement(u.i,null,t.designation):null,r.a.createElement(u.j,null,t.description))))}var p=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(f,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(f,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(f,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersFailed}))))},g=a(14),b=a(5),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(g.a)(n)),n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleLogin=n.handleLogin.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username : "+this.username.value+"Passsword: "+this.password.value+"Remember: "+this.remember.checked),e.prevntDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.A,{onClick:this.toggleNav}),r.a.createElement(u.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.w,{navbar:!0},r.a.createElement(u.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(u.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About us")),r.a.createElement(u.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(u.x,null,r.a.createElement(b.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(u.w,{className:"ml-auto",navbar:!0},r.a.createElement(u.x,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"},"Login"))))))),r.a.createElement(u.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Login"),r.a.createElement(u.u,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"\xfcsername"},"Username"),r.a.createElement(u.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"password"},"Password"),r.a.createElement(u.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.r,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(u.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var v=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/aboutus"},"About us")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/contactus"},"Contact Us ")," "))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function w(e){var t=e.dish;return r.a.createElement(u.d,null,r.a.createElement(b.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{width:"100%",src:E+t.image,alt:t.name}),r.a.createElement(u.h,null,r.a.createElement(u.k,null,t.name))))}var y=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(w,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},O=function(e){return{type:"ADD_COMMENT",payload:e}},M=function(){return{type:"DISHES_LOADING"}},L=function(e){return{type:"DISHES_FAILED",payload:e}},k=function(e){return{type:"ADD_DISHES",payload:e}},S=function(e){return{type:"COMMENTS_FAILED",payload:e}},j=function(e){return{type:"ADD_COMMENTS",payload:e}},C=function(){return{type:"PROMOS_LOADING"}},F=function(e){return{type:"PROMOS_FAILED",payload:e}},D=function(e){return{type:"ADD_PROMOS",payload:e}},x=function(){return{type:"LEADERS_LOADING"}},A=function(e){return{type:"LEADERS_FAILED",payload:e}},I=function(e){return{type:"ADD_LEADERS",payload:e}},T=a(4),R=function(e){return e&&e.length},q=function(e){return function(t){return!t||t.length<=e}},_=function(e){return function(t){return t&&t.length>=e}},P=function(e){return!isNaN(Number(e))},B=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},H=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedbackform(this.props.dishId,e.firstname,e.lastname,e.email,e.agree,e.contactType,e.message),alert("See the values of your feedback: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send US Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(T.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(u.l,{md:10},r.a.createElement(T.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:R,minLength:_(3),maxLength:q(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(u.l,{md:10},r.a.createElement(T.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:R,minLength:_(3),maxLength:q(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(u.l,{md:10},r.a.createElement(T.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:R,minLength:_(3),maxLength:q(15),isNumber:P}}),r.a.createElement(T.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(T.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:R,validEmail:B}}),r.a.createElement(T.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:" form-check"},r.a.createElement(u.r,{check:!0},r.a.createElement(T.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you ?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(T.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(T.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component);function G(e){var t=e.leader;return r.a.createElement(h.Fade,{in:!0},r.a.createElement("div",{className:"col-12 mt-2"},r.a.createElement(u.s,{tag:"li"},r.a.createElement(u.s,{left:!0,middle:!0},r.a.createElement(u.s,{object:!0,src:E+t.image,alt:t.name})),r.a.createElement(u.s,{body:!0,className:"ml-4"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description)))))}var W=function(e){var t=e.leaders.leaders.map((function(e){return r.a.createElement(G,{leader:e,key:e.id})}));return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.leaders.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(b.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(h.Stagger,{in:!0},r.a.createElement(u.s,{list:!0},t)))))},Y=a(29),U=a(21);function K(e){var t=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(h.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{top:!0,src:E+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),r.a.createElement(u.j,null,t.description)))))}var z=function(e){return e&&e.length},J=function(e){return function(t){return t&&t.length>=e}},Z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleComment=n.handleComment.bind(Object(g.a)(n)),n}return Object(o.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleComment",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil fa-lg"})," Submit comment"),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Submit comment"),r.a.createElement(u.u,null,r.a.createElement(T.LocalForm,{onSubmit:this.handleComment,className:"container"},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"rating"},"Rating"),r.a.createElement(T.Control.select,{model:".rating",className:"form-control",id:"rating",name:"rating",validators:{required:z}},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement(T.Errors,{className:"text-danger",model:".rating",show:"touched",messages:{required:"Required "}})),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"author"},"Name"),r.a.createElement(T.Control.text,{model:".author",className:"form-control",id:"author",name:"author",placeholder:"Your name",validators:{required:z,minLength:J(3),maxLength:(e=15,function(t){return!t||t.length<=e})}}),r.a.createElement(T.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}})),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"comment"},"Comment"),r.a.createElement(T.Control.textarea,{rows:6,model:".comment",className:"form-control",id:"comment",name:"comment",placeholder:"Your comment",validators:{required:z,minLength:J(3)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters "}})),r.a.createElement(u.B,null,r.a.createElement(u.c,{type:"submit",className:"bg-primary"},"Submit"))))));var e}}]),a}(n.Component);function $(e){var t=e.comments,a=e.postComment,n=e.dishId;return null!=t?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(h.Stagger,{in:!0},t.map((function(e){return r.a.createElement(h.Fade,{in:!0},r.a.createElement("li",null,r.a.createElement("p",null,'"',e.comment,'"'),r.a.createElement("p",null,"~ ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),r.a.createElement(Z,{dishId:n,postComment:a})):r.a.createElement("div",null)}var Q=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.errorMsg?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(b.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(K,{dish:e.dish}),r.a.createElement($,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},V=a(52),X=a(83),ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(V.a,null,r.a.createElement(X.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/home",component:function(){return r.a.createElement(p,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersFailed:e.props.leaders.errMess})}}),r.a.createElement(Y.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(Y.b,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(Q,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(Y.b,{path:"/contactus",component:function(){return r.a.createElement(H,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedbackform:e.props.postFeedbackform})}}),r.a.createElement(Y.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(W,{leaders:e.props.leaders})}}),r.a.createElement(Y.a,{to:"/home"})))),r.a.createElement(v,null))}}]),a}(n.Component),te=Object(Y.g)(Object(U.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(E+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error is code: ".concat(e.status," with message ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(O(e))})).catch((function(e){console.log("Post comment error message : ".concat(e.message)),alert("Post comment error message : ".concat(e.message))}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(M(!0)),fetch(E+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error is code: ".concat(e.status," with message ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(k(t))})).catch((function(t){return e(L(t.message))}))}))},resetFeedbackForm:function(){e(T.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(E+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error is code: ".concat(e.status," with message ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(j(t))})).catch((function(t){return e(S(t.message))}))}))},fetchPromos:function(){return e((function(e){return e(C()),fetch(E+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error is code: ".concat(e.status," with message ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(D(t))})).catch((function(t){return e(F(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(x()),fetch(E+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error is code: ".concat(e.status," with message ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(I(t))})).catch((function(t){return e(A(t.message))}))}))},postFeedbackform:function(t,a,n,r,l,s,c){return e(function(e,t,a,n,r,l,s){return function(c){var o={firstname:e,lastname:t,phone:a,email:n,agree:r,contactType:l,message:s};return o.date=(new Date).toISOString(),fetch(E+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error is code: ".concat(e.status," with message ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return c(O(e))})).catch((function(e){console.log("Post feedback ",e.message),alert("Sorry feedback post error ".concat(e.message))}))}}(t,a,n,r,l,s,c))}}}))(ee)),ae=a(7),ne=a(22),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(ae.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(ae.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ae.a)({},e,{isLoading:!1,errMess:t.payload,dishes:[]});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(ae.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(ae.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(ae.a)({},e,{comments:e.comments.concat(a)});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(ae.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(ae.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ae.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(ae.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(ae.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(ae.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},oe=a(88),me=a(89),ie=a.n(me),ue={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"",message:""},de=Object(ne.createStore)(Object(ne.combineReducers)(Object(ae.a)({dishes:re,comments:le,promotions:se,leaders:ce},Object(T.createForms)({feedback:ue}))),Object(ne.applyMiddleware)(oe.a,ie.a)),Ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(U.Provider,{store:de},r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(te,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(146)},99:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.fc67723e.chunk.js.map