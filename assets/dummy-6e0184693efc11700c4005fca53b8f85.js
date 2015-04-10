define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]});n["default"](i,r["default"].modulePrefix),e["default"]=i}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend(t["default"].PromiseProxyMixin,{page:0,actions:{load:function(){var e=$.ajax({url:"https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies",type:"post",dataType:"json",headers:{"X-Mashape-Key":"NmMfD3pY9dmshv8ZpOelB8xlmiOPp1JDlGtjsnwdRZKZ1cLgJn","Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});this.set("promise",e)}}})}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!r){var d=n(i.toString());a["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});e["default"]=n.map(function(){})}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("blockquote"),n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("i"),r=e.createComment("");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,r=t.hooks,i=r.content;n.detectNamespace(a);var d;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(d=this.build(n),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=n.cloneNode(this.cachedFragment,!0))):d=this.build(n);var o=n.childAt(d,[1]),l=n.createMorphAt(o,1,1),c=n.createMorphAt(n.childAt(o,[3]),0,0);return i(t,l,e,"model.quote"),i(t,c,e,"model.author"),d}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("article"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h2"),r=e.createTextNode("Welcome to Ember Pace.js Demo");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("button"),i=e.createTextNode("Load Quote");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,n){var r=a.dom,i=a.hooks,d=i.element,o=i.get,l=i.block;r.detectNamespace(n);var c;a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var m=r.childAt(c,[0]),p=r.childAt(m,[3,1]),u=r.createMorphAt(m,5,5);return d(a,p,t,"action",["load"],{}),l(a,u,t,"if",[o(a,t,"isFulfilled")],{},e,null),c}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-pace",version:"0.0.8.e4ddb4a7"});