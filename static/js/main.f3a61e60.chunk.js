(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{70:function(e,t,s){},71:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(24),r=s.n(c),i=(s(70),s(6)),o=(s(71),s(30)),l=s(7),j=s(88),d=s(82),u=s(90),b=s(0),h=function(e){var t=e.email,s=e.logout,a=e.setUserPageState;return Object(b.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(j.a.Brand,{as:o.b,to:"/",children:"AdVideoMaker"}),Object(b.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(u.a,{className:"me-auto",children:[Object(b.jsx)(u.a.Link,{as:o.b,to:"/",children:"Home"}),Object(b.jsx)(u.a.Link,{as:o.b,to:"/createFeed",children:"Create Feed"})]}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.a.Link,{onClick:function(){a("")},as:o.b,to:"/user",children:t}),Object(b.jsx)(u.a.Link,{onClick:s,children:"Log Out"})]})]})]})})},x=s(83),m=s(63),O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{className:"justify-content-md-center",children:Object(b.jsx)(m.a,{lg:"8",children:Object(b.jsxs)("div",{className:"mt-2 fs-4",children:[Object(b.jsx)("strong",{children:"Main Page"})," ",Object(b.jsx)("span",{})]})})})})})},p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Create Videos"})})},f=s(92),g=s(87),v=s(9),y=s.n(v),k=s(10),w=s(89),S=s(84),_=function(e){var t=e.setCreateFeedState,s=e.setAlertState,n=e.setData,c=(e.token,Object(a.useState)("")),r=Object(i.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)("https://docs.google.com/spreadsheets/d/e/2PACX-1vQvm265NJfQjH0GtMLNRD7rJIA5vapYsz1BbIEsmdOYJGuvWlfARCYwy3SS9BmVGGOJ4-MGhcoO7h8w/pub?gid=0&single=true&output=csv"),d=Object(i.a)(j,2),u=d[0],h=d[1],x=function(){var e=Object(k.a)(y.a.mark((function e(){var a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),s({show:!1,text:""}),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/check_feed?"+new URLSearchParams({feedURL:u}),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,a.ok?(c.feed_name=o,n(c),t("arrangeFeed")):(t("checkURL"),s({show:!0,text:c.detail}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(w.a,{onSubmit:function(e){x(),e.preventDefault()},children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Feed Name"}),Object(b.jsx)(w.a.Control,{required:!0,type:"text",placeholder:"Enter a name for your feed.",value:o,onInput:function(e){return l(e.target.value)}})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",children:[Object(b.jsx)(w.a.Label,{children:"Feed URL"}),Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Enter feed URL.",value:u,onInput:function(e){return h(e.target.value)}})]}),Object(b.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})},N=s(85),C=s(91),T=function(e){var t=e.show,s=e.title,a=e.text,n=e.buttonText,c=e.handleClose,r=e.handleConfirm;return Object(b.jsxs)(C.a,{show:t,onHide:c,children:[Object(b.jsx)(C.a.Header,{closeButton:!0,children:Object(b.jsx)(C.a.Title,{children:s})}),Object(b.jsx)(C.a.Body,{children:a}),Object(b.jsxs)(C.a.Footer,{children:[Object(b.jsx)(S.a,{variant:"secondary",onClick:c,children:"Close"}),Object(b.jsx)(S.a,{variant:"primary",onClick:function(){r(),c()},children:n})]})]})},P=function(e){var t=e.setCreateFeedState,s=e.setAlertState,c=e.feedData,r=e.setData,o=(e.token,Object(a.useState)(!1)),l=Object(i.a)(o,2),j=l[0],d=l[1],u=Object(a.useState)(!1),h=Object(i.a)(u,2),O=h[0],p=h[1],f=Object(a.useState)(!1),g=Object(i.a)(f,2),v=g[0],_=g[1],C=Object(a.useState)(!1),P=Object(i.a)(C,2),D=P[0],U=P[1],I=[{col:"Image URL",set:d,get:j},{col:"Title",set:p,get:O},{col:"Body",set:_,get:v},{col:"Website URL",set:U,get:D}],G=Object(a.useState)(!1),F=Object(i.a)(G,2),L=F[0],V=F[1],A=function(){var e=Object(k.a)(y.a.mark((function e(){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),s({show:!1,text:""}),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/create_feed",{method:"POST",body:JSON.stringify({user_id:1,feed_name:c.feed_name,feed_url:c.feed_url,img_url_col:j,title_col:O,site_url_col:D,body_col:v}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,a.ok?(c.title_col=n.title_col,c.site_url_col=n.site_url_col,c.img_url_col=n.img_url_col,c.body_col=n.body_col,c.feed_id=n.feed_id,r(c),t("arrangeVisuals")):(t("checkURL"),s({show:!0,text:n.detail}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsxs)(w.a,{onSubmit:function(e){j&&O&&v&&D?V(!0):s({show:!0,text:"Please fill all of the fields first."}),e.preventDefault()},children:[Object(b.jsx)(x.a,{children:I.map((function(e,t){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)(w.a.Group,{as:x.a,className:"mb-3",children:[Object(b.jsx)(w.a.Label,{column:!0,sm:4,className:"text-end fw-bold",children:e.col}),Object(b.jsx)(m.a,{sm:8,children:Object(b.jsxs)(w.a.Select,{"aria-label":"Default select example",value:e.get,onChange:function(t){e.set(t.target.value)},children:[Object(b.jsx)("option",{disabled:!0,value:!1,children:"Select.."}),c.col_names.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))]})})]})}),t%2===1&&Object(b.jsx)("div",{className:"w-100"})]},t)}))}),Object(b.jsx)(S.a,{variant:"primary",type:"submit",children:"Save"})]}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),c.col_names.map((function(e,t){return Object(b.jsx)("th",{children:e},t)}))]})}),Object(b.jsx)("tbody",{children:c.feed_data.data.map((function(e,t){return Object(b.jsx)("tr",{children:Object.values(e).map((function(e,t){return Object(b.jsx)("td",{children:e.toString().length<50?e:e.toString().substring(0,50)+"..."},t)}))},t)}))})]})}),Object(b.jsx)(T,{show:L,title:"Save Feed",text:"Are you sure to create a new feed?",buttonText:"Yes",handleClose:function(){return V(!1)},handleConfirm:A})]})},D=s(86),U=function(e){var t=e.height,s=void 0===t?100:t,a=e.width,n=void 0===a?200:a;return Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:s+"px",width:n+"px"},children:Object(b.jsx)(D.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},I=function(e){var t=e.setCreateFeedState,s=(e.setAlertState,e.feedData),n=(e.setData,e.token,Object(a.useState)(!1)),c=Object(i.a)(n,2),r=c[0],o=c[1],l=function(){var e=Object(k.a)(y.a.mark((function e(){var a,n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/save_video_props_feed",{method:"POST",body:JSON.stringify({feed_id:s.feed_id}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,!a.ok){e.next=21;break}return e.next=10,fetch("https://shoevideo.azurewebsites.net/api/generate_video_feed",{method:"POST",body:JSON.stringify({video_ids:n.video_ids}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 10:return c=e.sent,e.next=13,c.json();case 13:if(e.sent,!c.ok){e.next=19;break}return t("success"),e.abrupt("return");case 19:e.next=21;break;case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("video",{width:"320",height:"240",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:s.previewVideoUrl,type:"video/mp4"})}),Object(b.jsx)("div",{}),Object(b.jsx)(S.a,{variant:"primary",onClick:function(e){o(!0)},children:"Start Generating Videos"}),Object(b.jsx)(T,{show:r,title:"Save Feed",text:"Are you sure to start generating videos from this feed?",buttonText:"Yes",handleClose:function(){return o(!1)},handleConfirm:l})]})},G=function(){var e=Object(k.a)(y.a.mark((function e(t,s){var a,n,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shoevideo.azurewebsites.net/api/save_video_props",{method:"POST",body:JSON.stringify({user_id:1,feed_id:t.feed_id,img_url:t.feed_data.data[0][t.img_url_col],title:t.feed_data.data[0][t.title_col],body:t.feed_data.data[0][t.body_col],site_url:t.feed_data.data[0][t.site_url_col]}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,!a.ok){e.next=19;break}return e.next=9,fetch("https://shoevideo.azurewebsites.net/api/generate_video",{method:"POST",body:JSON.stringify({video_id:n.video_id}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(r=e.sent,!c.ok){e.next=17;break}return e.abrupt("return",{stat:!0,url:r.result_url});case 17:e.next=20;break;case 19:return e.abrupt("return",{stat:!1,detail:"Invalid values in first row of the feed. Check again"});case 20:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),F=function(e){var t=e.setCreateFeedState,s=e.setAlertState,a=e.feedData,n=e.setData,c=e.token,r=function(){var e=Object(k.a)(y.a.mark((function e(r){var i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("loading"),e.next=3,G(a,c);case 3:(i=e.sent).stat?(a.previewVideoUrl=i.url,n(a),t("preview")):(t("arrangeFeed"),s({show:!0,text:i.detail}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:" Pick a theme "}),Object(b.jsx)("p",{children:" Pick a color etc..."}),Object(b.jsx)(S.a,{variant:"primary",onClick:r,children:"Continue"})]})},L=function(e){var t=e.token,s=Object(a.useState)("checkURL"),n=Object(i.a)(s,2),c=n[0],r=n[1],o=Object(a.useState)({show:!1,text:""}),l=Object(i.a)(o,2),j=l[0],u=l[1],h=Object(a.useState)({}),O=Object(i.a)(h,2),p=O[0],v=O[1],y=Object(a.useState)({percent:10,label:"1/5"}),k=Object(i.a)(y,2),w=k[0],S=k[1];Object(a.useEffect)((function(){switch(c){case"checkURL":S({percent:10,label:"1/5"});break;case"arrangeFeed":S({percent:35,label:"2/5"});break;case"arrangeVisuals":S({percent:60,label:"3/5"});break;case"preview":S({percent:85,label:"4/5"});break;case"success":S({percent:100,label:"5/5"});break;case"loading":break;default:return""}return function(){}}),[c]);return Object(b.jsx)("div",{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{className:"justify-content-md-center",children:Object(b.jsxs)(m.a,{lg:"8",children:[Object(b.jsxs)("div",{className:"mt-2 fs-4",children:[Object(b.jsx)("strong",{children:"Create a new feed:"})," ",Object(b.jsx)("span",{children:function(e){switch(e){case"checkURL":return"Provide a URL";case"arrangeFeed":return p.feed_name+" - Match the columns";case"arrangeVisuals":return p.feed_name+" - Arrange Visuals";case"preview":return p.feed_name+" - Video Preview";default:return""}}(c)})]}),Object(b.jsx)(f.a,{className:"fs-5 fw-bold",style:{height:"25px"},striped:!0,variant:"info",now:w.percent,label:w.label}),Object(b.jsx)(g.a,{className:"mt-2",variant:"danger",style:{visibility:j.show?"visible":"hidden",height:"50px"},children:j.text}),function(e){switch(e){case"checkURL":default:return Object(b.jsx)(_,{setCreateFeedState:r,setAlertState:u,setData:v,token:t});case"arrangeFeed":return Object(b.jsx)(P,{setCreateFeedState:r,setAlertState:u,feedData:p,setData:v,token:t});case"arrangeVisuals":return Object(b.jsx)(F,{setCreateFeedState:r,setAlertState:u,feedData:p,setData:v,token:t});case"preview":return Object(b.jsx)(I,{setCreateFeedState:r,setAlertState:u,feedData:p,token:t});case"success":return Object(b.jsx)("div",{className:"fs-5",children:"Videos successfully generated."});case"loading":return Object(b.jsx)(U,{width:300,height:200})}}(c)]})})})})},V=function(e){var t=e.show,s=e.text;return Object(b.jsx)(C.a,{show:t,size:"sm",children:Object(b.jsxs)(C.a.Body,{className:"text-center",style:{height:"150px"},children:[s,Object(b.jsx)(U,{width:260,height:100})]})})},A=function(e){var t=e.email,s=e.password,n=e.setEmail,c=e.setPassword,r=e.saveToken,o=e.setToken,l=Object(a.useState)(!1),j=Object(i.a)(l,2),u=j[0],h=j[1],O=function(){var e=Object(k.a)(y.a.mark((function e(a){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),a.preventDefault(),e.next=4,fetch("https://shoevideo.azurewebsites.net/api/authenticate",{method:"POST",body:JSON.stringify({email:t,password:s}),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,n.ok?(r(c.key,t),o(c.key),h(!1)):h(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(V,{show:u,text:"Logging in..."}),Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{className:"justify-content-md-center",children:Object(b.jsx)(m.a,{lg:"5",children:Object(b.jsxs)(w.a,{onSubmit:O,className:"mt-4",children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(w.a.Label,{children:"Email address"}),Object(b.jsx)(w.a.Control,{type:"email",placeholder:"Enter email",value:t,onInput:function(e){return n(e.target.value)}})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(w.a.Label,{children:"Password"}),Object(b.jsx)(w.a.Control,{type:"password",placeholder:"Password",value:s,onInput:function(e){return c(e.target.value)}})]}),Object(b.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})]})},z=s(2),R=function(e){e.token;var t=e.setUserPageState,s=e.isGenerating,a=e.setIsGenerating,n=e.testVideoData,c=e.setTestVideoData,r=function(){var e=Object(k.a)(y.a.mark((function e(t){var s,r,i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t.preventDefault(),s=window.performance.now(),c(Object(z.a)(Object(z.a)({},n),{},{videoData:!1,message:!1})),e.next=6,fetch("https://shoevideo.azurewebsites.net/api/test_video",{method:"POST",body:JSON.stringify({image_data:n.imageData.split(",",2)[1],image_type:n.imageType,is_save:n.checked}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,r.ok?(o=window.performance.now(),c(Object(z.a)(Object(z.a)({},n),{},{videoData:i.result_url,message:{status:"success",message:"Video successfully generated in "+((o-s)/1e3).toFixed(2)+" seconds."}})),a(!1)):(404===r.status?c(Object(z.a)(Object(z.a)({},n),{},{message:{status:"danger",message:i.detail,time:""}})):c(Object(z.a)(Object(z.a)({},n),{},{message:{status:"danger",message:"Error code: "+r.status.toString(),time:""}})),a(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(d.a,{style:{},children:Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(m.a,{xs:!0,lg:"2",children:Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"",onClick:function(){t("")},children:"Back"})}),Object(b.jsxs)(m.a,{xs:!0,lg:"8",children:[Object(b.jsxs)(w.a,{onSubmit:r,className:"mb-4",children:[Object(b.jsxs)(x.a,{className:"mb-1",children:[Object(b.jsx)(m.a,{children:Object(b.jsx)(w.a.Group,{children:Object(b.jsx)(w.a.Control,{type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){var t=new FileReader;t.onload=function(e){c(Object(z.a)(Object(z.a)({},n),{},{imageData:e.target.result}))},c(Object(z.a)(Object(z.a)({},n),{},{imageType:e.target.files[0].type})),t.readAsDataURL(e.target.files[0])}},required:!0})})}),Object(b.jsx)(m.a,{xs:!0,lg:"4",children:Object(b.jsx)(S.a,{variant:"primary",type:"submit",disabled:s,style:{width:"160px"},children:s?"Generating video...":"Submit"})}),Object(b.jsx)(m.a,{xs:!0,lg:"1"})]}),Object(b.jsx)(x.a,{children:Object(b.jsx)(w.a.Group,{children:Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)(w.a.Control,{className:"form-check-input",type:"checkbox",checked:n.checked,onChange:function(e){return c(Object(z.a)(Object(z.a)({},n),{},{checked:e.currentTarget.checked}))}}),Object(b.jsx)("label",{className:"form-check-label text-muted",children:"Add to results"})]})})})]}),Object(b.jsxs)(x.a,{style:{height:"420px"},children:[Object(b.jsx)(m.a,{xs:!0,lg:"6",children:Object(b.jsx)("img",{src:n.imageData,style:{width:"90%"},alt:""})}),Object(b.jsx)(m.a,{xs:!0,lg:"6",children:n.videoData&&Object(b.jsx)("video",{width:"90%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:n.videoData,type:"video/mp4"})})})]}),n.message&&Object(b.jsx)(g.a,{variant:n.message.status,children:n.message.message})]})]})})},E=s(64),B=function(e){e.token;var t=e.setUserPageState,s=e.isGenerating,a=e.setIsGenerating,n=e.testVideo2,c=e.setTestVideo2,r=function(){var e=Object(k.a)(y.a.mark((function e(t){var s,r,i,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),t.preventDefault(),s=window.performance.now(),c(Object(z.a)(Object(z.a)({},n),{},{videoData:!1,message:!1})),e.next=6,fetch("https://shoevideo.azurewebsites.net/api/test_video_double",{method:"POST",body:JSON.stringify({img_url_1:n.imageUrl1,img_url_2:n.imageUrl2,is_save:n.checked}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 6:return r=e.sent,e.next=9,r.json();case 9:i=e.sent,r.ok?(o=window.performance.now(),c(Object(z.a)(Object(z.a)({},n),{},{videoData:i.result_url,message:{status:"success",message:"Video successfully generated in "+((o-s)/1e3).toFixed(2)+" seconds."}})),a(!1)):(404===r.status?c(Object(z.a)(Object(z.a)({},n),{},{message:{status:"danger",message:i.detail,time:""}})):c(Object(z.a)(Object(z.a)({},n),{},{message:{status:"danger",message:"Error code: "+r.status.toString(),time:""}})),a(!1));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(d.a,{style:{},children:Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(m.a,{xs:!0,lg:"2",children:Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"",onClick:function(){t("")},children:"Back"})}),Object(b.jsxs)(m.a,{xs:!0,lg:"8",children:[Object(b.jsxs)(w.a,{onSubmit:r,className:"mb-4",children:[Object(b.jsx)(w.a.Group,{className:"mb-3",children:Object(b.jsx)(E.a,{label:"Image 1 URL",children:Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Image 1 URL",value:n.imageUrl1,onInput:function(e){return c(Object(z.a)(Object(z.a)({},n),{},{imageUrl1:e.target.value}))},required:!0})})}),Object(b.jsx)(w.a.Group,{className:"mb-3",children:Object(b.jsx)(E.a,{label:"Image 2 URL",children:Object(b.jsx)(w.a.Control,{type:"text",placeholder:"Image 2 URL",value:n.imageUrl2,onInput:function(e){return c(Object(z.a)(Object(z.a)({},n),{},{imageUrl2:e.target.value}))},required:!0})})}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(m.a,{xs:!0,lg:"3",children:Object(b.jsx)(S.a,{variant:"primary",type:"submit",disabled:s,style:{width:"160px"},children:s?"Generating video...":"Submit"})}),Object(b.jsx)(m.a,{className:"mx-2",children:Object(b.jsx)(w.a.Group,{children:Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)(w.a.Control,{className:"form-check-input",type:"checkbox",checked:n.checked,onChange:function(e){return c(Object(z.a)(Object(z.a)({},n),{},{checked:e.currentTarget.checked}))}}),Object(b.jsx)("label",{className:"form-check-label text-muted",children:"Add to results"})]})})})]})]}),Object(b.jsxs)(x.a,{style:{height:"400px"},children:[Object(b.jsx)(m.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:n.imageUrl1,style:{width:"90%"},alt:""})}),Object(b.jsx)(m.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:n.imageUrl2,style:{width:"90%"},alt:""})}),Object(b.jsx)(m.a,{xs:!0,lg:"4",children:n.videoData&&Object(b.jsx)("video",{width:"90%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:n.videoData,type:"video/mp4"})})})]}),n.message&&Object(b.jsx)(g.a,{variant:n.message.status,children:n.message.message})]})]})})},J=function(e){var t=e.token,s=e.setUserPageState,c=Object(a.useState)([]),r=Object(i.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(!1),u=Object(i.a)(j,2),h=u[0],O=u[1];return Object(a.useEffect)((function(){function e(){return(e=Object(k.a)(y.a.mark((function e(){var t,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_test_videos",{method:"GET",headers:{"x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok?(l(s.tests),O(!1)):O(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"mt-2",onClick:function(){s("")},children:"Back"}),Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(V,{show:h,text:"Fetching test pairs"}),Object(b.jsx)(x.a,{style:{height:"320px"},children:o.map((function(e,t){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(m.a,{xs:!0,lg:"6",children:Object(b.jsxs)(x.a,{className:"gx-0",children:[Object(b.jsx)("div",{children:e.created_at}),Object(b.jsx)(m.a,{xs:!0,lg:"6",children:Object(b.jsx)("img",{src:e.source_url,style:{width:"100%"},alt:""})}),Object(b.jsx)(m.a,{xs:!0,lg:"6",children:Object(b.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:e.result_url,type:"video/mp4"})})})]})}),t%2===1&&Object(b.jsx)("div",{className:"w-100"})]},t)}))})]})]})},M=function(e){var t=e.token,s=e.setUserPageState,c=Object(a.useState)([]),r=Object(i.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(!1),u=Object(i.a)(j,2),h=u[0],O=u[1];return Object(a.useEffect)((function(){function e(){return(e=Object(k.a)(y.a.mark((function e(){var t,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_test_videos_double",{method:"GET",headers:{"x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok?(l(s.tests),O(!1)):O(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(S.a,{variant:"warning",size:"sm",className:"mt-2",onClick:function(){s("")},children:"Back"}),Object(b.jsxs)(x.a,{className:"mt-4",children:[Object(b.jsx)(V,{show:h,text:"Fetching test pairs"}),Object(b.jsx)(x.a,{style:{height:"320px"},children:o.map((function(e,t){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(m.a,{xs:!0,lg:"6",children:Object(b.jsxs)(x.a,{className:"gx-0",children:[Object(b.jsx)("div",{children:e.created_at}),Object(b.jsx)(m.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:e.source_url_1,style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(b.jsx)(m.a,{xs:!0,lg:"4",children:Object(b.jsx)("img",{src:e.source_url_2,style:{maxHeight:"100%",maxWidth:"100%"},alt:""})}),Object(b.jsx)(m.a,{xs:!0,lg:"4",children:Object(b.jsx)("video",{width:"100%",autoPlay:!0,loop:!0,children:Object(b.jsx)("source",{src:e.result_url,type:"video/mp4"})})})]})}),t%2===1&&Object(b.jsx)("div",{className:"w-100"})]},t)}))})]})]})},H=function(e){var t=e.setUserPageState,s=e.userType;return Object(b.jsxs)("div",{className:"mt-5",children:["admin"===s&&Object(b.jsx)(x.a,{className:"justify-content-md-center",md:"auto",children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"ms-3 me-1",onClick:function(){t("testVideo")},children:"Generate Videos (1 image)"}),Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"me-4 ms-1",onClick:function(){t("compareTests")},children:"Results"}),Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"ms-4 me-1",onClick:function(){t("testVideoDouble")},children:"Generate Videos (2 images)"}),Object(b.jsx)(S.a,{variant:"primary",size:"sm",className:"me-3 ms-1",onClick:function(){t("compareTestsDouble")},children:"Results"})]})})}),Object(b.jsxs)(x.a,{className:"justify-content-md-center mt-4",md:"auto",children:[Object(b.jsx)(m.a,{xs:!0,lg:"6",children:"My feeds:"}),Object(b.jsx)(m.a,{})]})]})},Y=function(e){var t=e.token,s=e.email,n=e.userPageState,c=e.setUserPageState,r=e.isGenerating,o=e.setIsGenerating,l=Object(a.useState)(""),j=Object(i.a)(l,2),d=j[0],u=j[1],h=Object(a.useState)(!1),x=Object(i.a)(h,2),m=x[0],O=x[1],p=Object(a.useState)({imageType:"",imageData:"",videoData:!1,checked:!0,message:!1}),f=Object(i.a)(p,2),g=f[0],v=f[1],w=Object(a.useState)({imageUrl1:"",imageUrl2:"",videoData:!1,checked:!0,message:!1}),S=Object(i.a)(w,2),_=S[0],N=S[1];return Object(a.useEffect)((function(){function e(){return(e=Object(k.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://shoevideo.azurewebsites.net/api/get_user_info",{method:"POST",body:JSON.stringify({email:s}),headers:{"Content-Type":"application/json",Accept:"application/json","x-functions-key":sessionStorage.getItem("functions-key")}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,t.ok?(u(a.user_type),O(!1)):O(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,t]),Object(b.jsxs)("div",{children:[Object(b.jsx)(V,{show:m,text:"Getting user data"}),function(e){switch(e){case"compareTests":return Object(b.jsx)(J,{token:t,setUserPageState:c,className:"mt-4"});case"compareTestsDouble":return Object(b.jsx)(M,{token:t,setUserPageState:c,className:"mt-4"});case"testVideo":return Object(b.jsx)(R,{token:t,setUserPageState:c,className:"mt-4",isGenerating:r,setIsGenerating:o,testVideoData:g,setTestVideoData:v});case"testVideoDouble":return Object(b.jsx)(B,{token:t,setUserPageState:c,className:"mt-4",isGenerating:r,setIsGenerating:o,testVideo2:_,setTestVideo2:N});default:return Object(b.jsx)(H,{token:t,setUserPageState:c,className:"mt-4",isGenerating:r,setIsGenerating:o,email:s,userType:d})}}(n)]})},q=function(){return sessionStorage.getItem("functions-key")},W=function(){return sessionStorage.getItem("email")},Q=function(e,t){sessionStorage.setItem("functions-key",e),sessionStorage.setItem("email",t)},X=function(){sessionStorage.removeItem("token"),window.location.reload()};var K=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(""),r=Object(i.a)(c,2),j=r[0],d=r[1],u=Object(a.useState)(""),x=Object(i.a)(u,2),m=x[0],f=x[1],g=Object(a.useState)(q()),v=Object(i.a)(g,2),y=v[0],k=v[1],w=Object(a.useState)(!1),S=Object(i.a)(w,2),_=S[0],N=S[1];return y?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h,{email:W(),logout:X,setUserPageState:n}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"",element:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{path:"createFeed",element:Object(b.jsx)(L,{token:q()})}),Object(b.jsx)(l.a,{path:"createVideos",element:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{path:"user",element:Object(b.jsx)(Y,{token:q(),email:W(),setUserPageState:n,userPageState:s,isGenerating:_,setIsGenerating:N})})]})]}),_&&Object(b.jsx)("div",{className:"p-1 btn btn-outline-primary disabled m-2",style:{position:"fixed",bottom:"0",right:"0"},children:"Generating video..."})]}):Object(b.jsx)(A,{email:j,password:m,setEmail:d,setPassword:f,saveToken:Q,setToken:k})},Z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,93)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};s(79);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root")),Z()}},[[80,1,2]]]);
//# sourceMappingURL=main.f3a61e60.chunk.js.map