(this.webpackJsonpneetizen=this.webpackJsonpneetizen||[]).push([[2],{118:function(e,t,a){},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(48),s=a(4),l=a.n(s),p=a(25),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var y=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var a,n;f(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=n=m(this,e.call.apply(e,[this].concat(i))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!y(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,i=a.to;r?t.replace(i):t.push(i)}},m(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,o="string"===typeof t?Object(p.b)(t,null,null,i.location):t,c=i.createHref(o);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:c,ref:a}))},t}(r.a.Component);h.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired};var d=h,v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var g=function(e){var t=e.to,a=e.exact,n=e.strict,i=e.location,o=e.activeClassName,s=e.className,l=e.activeStyle,p=e.style,u=e.isActive,f=e["aria-current"],m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),y="object"===("undefined"===typeof t?"undefined":b(t))?t.pathname:t,h=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return r.a.createElement(c.a,{path:h,exact:a,strict:n,location:i,children:function(e){var a=e.location,n=e.match,i=!!(u?u(n,a):n);return r.a.createElement(d,v({to:t,className:i?[s,o].filter((function(e){return e})).join(" "):s,style:i?v({},p,l):p,"aria-current":i&&f||null},m))}})};g.propTypes={to:d.propTypes.to,exact:o.a.bool,strict:o.a.bool,location:o.a.object,activeClassName:o.a.string,className:o.a.string,activeStyle:o.a.object,style:o.a.object,isActive:o.a.func,"aria-current":o.a.oneOf(["page","step","location","date","time","true"])},g.defaultProps={activeClassName:"active","aria-current":"page"};t.a=g},61:function(e,t,a){"use strict";t.a={BLANK_LINK:"#!"}},81:function(e,t,a){"use strict";t.a={items:[{id:"navigation",title:"HOME",type:"group",icon:"icon-navigation",children:[{id:"dashboard",title:"DASHBOARD",type:"item",url:"/dashboard/default",icon:"feather icon-home"}]},{id:"navigation",title:"UPLOAD CENTER",type:"group",icon:"icon-navigation",children:[{id:"sample-page1",title:"JAN TV",type:"item",url:"/sample-page1",classes:"nav-item",icon:"feather icon-sidebar"},{id:"sample-page2",title:"MPLAD",type:"item",url:"/sample-page2",classes:"nav-item",icon:"feather icon-sidebar"},{id:"sample-page3",title:"Update",type:"item",url:"/sample-page3",classes:"nav-item",icon:"feather icon-sidebar"}]},{id:"navigation",title:"INVITES",type:"group",icon:"icon-navigation",children:[{id:"sample-page4",title:"Calender",type:"item",url:"/sample-page4",classes:"nav-item",icon:"feather icon-sidebar"}]},{id:"navigation",title:"MODERATOR",type:"group",icon:"icon-navigation",children:[{id:"sample-page5",title:"Moderators",type:"item",url:"/sample-page5",classes:"nav-item",icon:"feather icon-sidebar"}]}]}},83:function(e,t,a){"use strict";var n=a(8),r=a(9),i=a(11),o=a(10),c=a(0),s=a.n(c),l=a(13),p=a(81),u=a(61),f=a(22),m=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={main:[],item:[]},e.componentWillReceiveProps=function(){p.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t),!1}))},e.getCollapse=function(t){t.children&&t.children.filter((function(a){return a.type&&"collapse"===a.type?e.getCollapse(a):a.type&&"item"===a.type&&document.location.pathname===l.a.basename+a.url&&e.setState({item:a,main:t}),!1}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1}))}},{key:"render",value:function(){var e="",t="Welcome";return this.state.main&&"collapse"===this.state.main.type&&s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:u.a.BLANK_LINK},this.state.main.title)),this.state.item&&"item"===this.state.item.type&&(t=this.state.item.title,s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:u.a.BLANK_LINK},t)),!1!==this.state.item.breadcrumbs&&(e=s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-block"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"page-header-title"},s.a.createElement("h5",{className:"m-b-10"},t)))))))),document.title=t+" | NeetiZen",s.a.createElement(f.a,null,e)}}]),a}(c.Component);t.a=m}}]);
//# sourceMappingURL=2.9ff8fbaf.chunk.js.map