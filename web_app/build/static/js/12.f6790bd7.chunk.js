(this.webpackJsonpneetizen=this.webpackJsonpneetizen||[]).push([[12],{108:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return o}));var r=t(130),l=t.n(r),n=t(131),s=t(91);function i(){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Map,e.next=3,s.database().ref("users/SR7gsON7QIUcskVh5IXVhaeOPk13/complaints/").once("value").then((function(e){e.forEach((function(e){e.key,Object.values(e.val()),e.forEach((function(e){var t=Object.values(e.val());a.set(t[1],t[0])}))}))}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,s.database().ref("loginType/moderator/").once("value").then((function(e){e.forEach((function(e){a.push(Object.values(e.val()))}))}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},114:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(53),s=t.n(n),i=(t(72),t(0)),c=t.n(i),o=(t(2),t(75)),d=t(62),u=t(54),m=c.a.forwardRef((function(e,a){var t,n,o=e.bsPrefix,m=e.bsCustomPrefix,f=e.type,b=e.size,p=e.id,v=e.className,h=e.isValid,O=e.isInvalid,E=e.plaintext,N=e.readOnly,j=e.custom,y=e.as,x=void 0===y?"input":y,w=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(i.useContext)(d.a).controlId;if(o=j?Object(u.a)(m,"custom"):Object(u.a)(o,"form-control"),E)(n={})[o+"-plaintext"]=!0,t=n;else if("file"===f){var P;(P={})[o+"-file"]=!0,t=P}else if("range"===f){var I;(I={})[o+"-range"]=!0,t=I}else if("select"===x&&j){var g;(g={})[o+"-select"]=!0,g[o+"-select-"+b]=b,t=g}else{var k;(k={})[o]=!0,k[o+"-"+b]=b,t=k}return c.a.createElement(x,Object(r.a)({},w,{type:f,ref:a,readOnly:N,id:p||C,className:s()(v,t,h&&"is-valid",O&&"is-invalid")}))}));m.displayName="FormControl",m.Feedback=o.a,a.a=m},188:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(53),s=t.n(n),i=t(0),c=t.n(i),o=t(54),d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.striped,d=e.bordered,u=e.borderless,m=e.hover,f=e.size,b=e.variant,p=e.responsive,v=Object(l.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(o.a)(t,"table"),O=s()(n,h,b&&h+"-"+b,f&&h+"-"+f,i&&h+"-striped",d&&h+"-bordered",u&&h+"-borderless",m&&h+"-hover"),E=c.a.createElement("table",Object(r.a)({},v,{className:O,ref:a}));if(p){var N=h+"-responsive";return"string"===typeof p&&(N=N+"-"+p),c.a.createElement("div",{className:N},E)}return E}));a.a=d},204:function(e,a,t){"use strict";t.r(a);var r=t(8),l=t(9),n=t(11),s=t(10),i=t(0),c=t.n(i),o=t(83),d=t(74),u=t(98),m=t(206),f=t(124),b=t(188),p=t(22),v=t(67),h=t(91),O=t(108),E=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={email:"",moderators:[]},l.submitHandle=function(){l.writeNewPost(l.state.email),alert("Moderator Added!")},l.showModerator=function(){Object(O.b)().then((function(e){l.setState({moderators:e})}))},l.showModerator(),l}return Object(l.a)(t,[{key:"writeNewPost",value:function(e){var a={email:e},t={};return t["loginType/moderator/"+h.database().ref().child("loginType/moderator/").push().key]=a,h.database().ref().update(t)}},{key:"render",value:function(){var e=this;return c.a.createElement(p.a,null,c.a.createElement(o.a,null,c.a.createElement(d.a,null,c.a.createElement(v.a,{title:"Add Moderator"},c.a.createElement(u.a.Body,null,c.a.createElement(o.a,null,c.a.createElement(d.a,{md:6},c.a.createElement(m.a,null,c.a.createElement(m.a.Group,{controlId:"formBasicEmail"},c.a.createElement(m.a.Label,null,"Email address"),c.a.createElement(m.a.Control,{type:"email",placeholder:"Enter email",onChange:function(a){e.setState({email:a.target.value})}})),c.a.createElement(m.a.Group,{controlId:"formBasicPassword"},c.a.createElement(m.a.Label,null,"Password"),c.a.createElement(m.a.Control,{type:"password",placeholder:"Password"})),c.a.createElement(f.a,{variant:"primary",onClick:this.submitHandle},"Submit")))))),c.a.createElement(v.a,{title:"Moderators"},c.a.createElement(b.a,{responsive:!0},c.a.createElement("tbody",null,this.state.moderators.map((function(e){return c.a.createElement("tr",{key:e,value:e},c.a.createElement("td",null,e))}))))))))}}]),t}(i.Component);a.default=E},206:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(53),s=t.n(n),i=t(0),c=t.n(i),o=(t(72),t(75)),d=t(62),u=t(54),m=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,f=e.isValid,b=e.isInvalid,p=e.isStatic,v=e.as,h=void 0===v?"input":v,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),E=Object(i.useContext)(d.a),N=E.controlId;return n=E.custom?Object(u.a)(o,"custom-control-input"):Object(u.a)(n,"form-check-input"),c.a.createElement(h,Object(r.a)({},O,{ref:a,id:t||N,className:s()(m,n,f&&"is-valid",b&&"is-invalid",p&&"position-static")}))}));m.displayName="FormCheckInput",m.defaultProps={type:"checkbox"};var f=m,b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,m=e.htmlFor,f=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(d.a),p=b.controlId;return t=b.custom?Object(u.a)(n,"custom-control-label"):Object(u.a)(t,"form-check-label"),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:m||p,className:s()(o,t)}))}));b.displayName="FormCheckLabel";var p=b,v=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,m=e.bsCustomPrefix,b=e.inline,v=e.disabled,h=e.isValid,O=e.isInvalid,E=e.feedback,N=e.className,j=e.style,y=e.title,x=e.type,w=e.label,C=e.children,P=e.custom,I=e.as,g=void 0===I?"input":I,k=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),F="switch"===x||P;n=F?Object(u.a)(m,"custom-control"):Object(u.a)(n,"form-check");var R=Object(i.useContext)(d.a).controlId,L=Object(i.useMemo)((function(){return{controlId:t||R,custom:F}}),[R,F,t]),V=null!=w&&!1!==w&&!C,M=c.a.createElement(f,Object(r.a)({},k,{type:"switch"===x?"checkbox":x,ref:a,isValid:h,isInvalid:O,isStatic:!V,disabled:v,as:g}));return c.a.createElement(d.a.Provider,{value:L},c.a.createElement("div",{style:j,className:s()(N,n,F&&"custom-"+x,b&&n+"-inline")},C||c.a.createElement(c.a.Fragment,null,M,V&&c.a.createElement(p,{title:y},w),(h||O)&&c.a.createElement(o.a,{type:h?"valid":"invalid"},E))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=f,v.Label=p;var h=v,O=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,f=e.isValid,b=e.isInvalid,p=e.lang,v=e.as,h=void 0===v?"input":v,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),E=Object(i.useContext)(d.a),N=E.controlId;return n=E.custom?Object(u.a)(o,"custom-file-input"):Object(u.a)(n,"form-control-file"),c.a.createElement(h,Object(r.a)({},O,{ref:a,id:t||N,type:"file",lang:p,className:s()(m,n,f&&"is-valid",b&&"is-invalid")}))}));O.displayName="FormFileInput";var E=O,N=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,m=e.htmlFor,f=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(d.a),p=b.controlId;return t=b.custom?Object(u.a)(n,"custom-file-label"):Object(u.a)(t,"form-file-label"),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:m||p,className:s()(o,t),"data-browse":f["data-browse"]}))}));N.displayName="FormFileLabel";var j=N,y=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,m=e.bsCustomPrefix,f=e.disabled,b=e.isValid,p=e.isInvalid,v=e.feedback,h=e.className,O=e.style,N=e.label,y=e.children,x=e.custom,w=e.lang,C=e["data-browse"],P=e.as,I=void 0===P?"div":P,g=e.inputAs,k=void 0===g?"input":g,F=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]);n=x?Object(u.a)(m,"custom"):Object(u.a)(n,"form-file");var R=Object(i.useContext)(d.a).controlId,L=Object(i.useMemo)((function(){return{controlId:t||R,custom:x}}),[R,x,t]),V=null!=N&&!1!==N&&!y,M=c.a.createElement(E,Object(r.a)({},F,{ref:a,isValid:b,isInvalid:p,disabled:f,as:k,lang:w}));return c.a.createElement(d.a.Provider,{value:L},c.a.createElement(I,{style:O,className:s()(h,n,x&&"custom-file")},y||c.a.createElement(c.a.Fragment,null,x?c.a.createElement(c.a.Fragment,null,M,V&&c.a.createElement(j,{"data-browse":C},N)):c.a.createElement(c.a.Fragment,null,V&&c.a.createElement(j,null,N),M),(b||p)&&c.a.createElement(o.a,{type:b?"valid":"invalid"},v))))}));y.displayName="FormFile",y.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},y.Input=E,y.Label=j;var x=y,w=t(114),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,m=e.controlId,f=e.as,b=void 0===f?"div":f,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.a)(t,"form-group");var v=Object(i.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(d.a.Provider,{value:v},c.a.createElement(b,Object(r.a)({},p,{ref:a,className:s()(n,t)}),o))}));C.displayName="FormGroup";var P=C,I=(t(2),t(74)),g=c.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,o=e.bsPrefix,m=e.column,f=e.srOnly,b=e.className,p=e.htmlFor,v=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(i.useContext)(d.a).controlId;o=Object(u.a)(o,"form-label");var O="col-form-label";"string"===typeof m&&(O=O+"-"+m);var E=s()(b,o,f&&"sr-only",m&&O);return p=p||h,m?c.a.createElement(I.a,Object(r.a)({as:"label",className:E,htmlFor:p},v)):c.a.createElement(n,Object(r.a)({ref:a,className:E,htmlFor:p},v))}));g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var k=g,F=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,o=void 0===i?"small":i,d=e.muted,m=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.a)(t,"form-text"),c.a.createElement(o,Object(r.a)({},m,{ref:a,className:s()(n,t,d&&"text-muted")}))}));F.displayName="FormText";var R=F,L=c.a.forwardRef((function(e,a){return c.a.createElement(h,Object(r.a)({},e,{ref:a,type:"switch"}))}));L.displayName="Switch",L.Input=h.Input,L.Label=h.Label;var V=L,M=t(73),S=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,i=e.className,o=e.validated,d=e.as,m=void 0===d?"form":d,f=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.a)(t,"form"),c.a.createElement(m,Object(r.a)({},f,{ref:a,className:s()(i,o&&"was-validated",n&&t+"-inline")}))}));S.displayName="Form",S.defaultProps={inline:!1},S.Row=Object(M.a)("form-row"),S.Group=P,S.Control=w.a,S.Check=h,S.File=x,S.Switch=V,S.Label=k,S.Text=R;a.a=S},62:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},67:function(e,a,t){"use strict";var r=t(17),l=t(8),n=t(9),s=t(11),i=t(10),c=t(0),o=t.n(c),d=t(115),u=t(98),m=t(260),f=t(63),b=t.n(f),p=t(22),v=t(61),h=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(n.a)(t,[{key:"render",value:function(){var e,a,t,l,n,s=this,i=[];return this.state.isOption&&(t=o.a.createElement("div",{className:"card-header-right"},o.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},o.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},o.a.createElement("i",{className:"feather icon-more-horizontal"})),o.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState((function(e){return{fullCard:!e.fullCard}}))}},o.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),o.a.createElement("a",{href:v.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){s.setState((function(e){return{collapseCard:!e.collapseCard}}))}},o.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),o.a.createElement("a",{href:v.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},o.a.createElement("i",{className:"feather icon-refresh-cw"}),o.a.createElement("a",{href:v.a.BLANK_LINK}," Reload ")),o.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},o.a.createElement("i",{className:"feather icon-trash"}),o.a.createElement("a",{href:v.a.BLANK_LINK}," Remove ")))))),l=o.a.createElement(u.a.Header,null,o.a.createElement(u.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(i=[].concat(Object(r.a)(i),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(i=[].concat(Object(r.a)(i),["card-load"]),a=o.a.createElement("div",{className:"card-loader"},o.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(i=[].concat(Object(r.a)(i),["d-none"])),this.props.cardClass&&(i=[].concat(Object(r.a)(i),[this.props.cardClass])),n=o.a.createElement(u.a,{className:i.join(" "),style:e},l,o.a.createElement(m.a,{in:!this.state.collapseCard},o.a.createElement("div",null,o.a.createElement(u.a.Body,null,this.props.children))),a),o.a.createElement(p.a,null,n)}}]),t}(c.Component);a.a=b()(h)},72:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}return(0,n.default)(r)};var r,l=t(84),n=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},75:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(53),s=t.n(n),i=t(0),c=t.n(i),o=t(1),d=t.n(o),u={type:d.a.string.isRequired,as:d.a.elementType},m=c.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,i=e.className,o=e.type,d=Object(l.a)(e,["as","className","type"]);return c.a.createElement(n,Object(r.a)({},d,{ref:a,className:s()(i,o&&o+"-feedback")}))}));m.displayName="Feedback",m.propTypes=u,m.defaultProps={type:"valid"},a.a=m},84:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,n,s){var i=l||"<<anonymous>>",c=s||r;if(null==t[r])return a?new Error("Required "+n+" `"+c+"` was not specified in `"+i+"`."):null;for(var o=arguments.length,d=Array(o>6?o-6:0),u=6;u<o;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,r,i,n,c].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default}}]);
//# sourceMappingURL=12.f6790bd7.chunk.js.map