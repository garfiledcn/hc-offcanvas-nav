/*
 * HC Off-canvas Nav
 * ===================
 * Version: 4.1.1
 * Author: Some Web Media
 * Author URL: https://github.com/somewebmedia/
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: jQuery plugin for creating off-canvas multi-level navigations
 * License: MIT
 */
"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(J,n){var i,R=n.document,X=J(n),Y=J(R.getElementsByTagName("html")[0]),Z=J(R),nn=(/iPad|iPhone|iPod/.test(navigator.userAgent)||!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))&&!n.MSStream,en="ontouchstart"in n||navigator.maxTouchPoints||n.DocumentTouch&&R instanceof DocumentTouch,an=function(n){return!isNaN(parseFloat(n))&&isFinite(n)},tn=function(n){return"auto"===n?n:an(n)?n+"px":n},on=function(n){return n.stopPropagation()},cn=function(e){return function(n){n.preventDefault(),n.stopPropagation(),"function"==typeof e&&e()}},ln=function(n,e,a){var t=a.children(),o=t.length,i=-1<e?Math.max(0,Math.min(e-1,o)):Math.max(0,Math.min(o+e+1,o));0===i?a.prepend(n):t.eq(i-1).after(n)},rn=function(n){return-1!==["left","right"].indexOf(n)?"x":"y"},sn=(i=function(n){var e=["Webkit","Moz","Ms","O"],a=(R.body||R.documentElement).style,t=n.charAt(0).toUpperCase()+n.slice(1);if(void 0!==a[n])return n;for(var o=0;o<e.length;o++)if(void 0!==a[e[o]+t])return e[o]+t;return!1}("transform"),function(n,e,a){if(i)if(0===e)n.css(i,"");else if("x"===rn(a)){var t="left"===a?e:-e;n.css(i,t?"translate3d(".concat(t,"px,0,0)"):"")}else{var o="top"===a?e:-e;n.css(i,o?"translate3d(0,".concat(o,"px,0)"):"")}else n.css(a,e)}),e=function(n,e,a){console.warn("%cHC Off-canvas Nav:%c "+a+"%c '"+n+"'%c is now deprecated and will be removed in the future. Use%c '"+e+"'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.","color: #fa253b","color: default","color: #5595c6","color: default","color: #5595c6","color: default")},dn=0;J.fn.extend({hcOffcanvasNav:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.length)return this;var U=this,$=J(R.body);void 0!==n.maxWidth&&(e("maxWidth","disableAt","option"),n.disableAt=n.maxWidth);var z=J.extend({},{width:280,height:"auto",disableAt:!1,pushContent:!1,expanded:!1,position:"left",levelOpen:"overlap",levelSpacing:40,levelTitles:!0,closeOpenLevels:!0,navTitle:null,navClass:"",disableBody:!0,closeOnClick:!0,customToggle:null,bodyInsert:"prepend",removeOriginalNav:!1,rtl:!1,insertClose:!0,insertBack:!0,levelTitleAsBack:!0,labelClose:"Close",labelBack:"Back"},n),K=[],V="nav-open",G=function(n){if(!K.length)return!1;var e=!1;"string"==typeof n&&(n=[n]);for(var a=n.length,t=0;t<a;t++)-1!==K.indexOf(n[t])&&(e=!0);return e};return this.each(function(){var e=J(this);if(e.find("ul").addBack("ul").length){var n,o,i,c,t,a,s,l,y="hc-nav-".concat(++dn),r=(n="hc-offcanvas-".concat(dn,"-style"),o=J('<style id="'.concat(n,'">')).appendTo(J("head")),i={},c={},t=function(n){return";"!==n.substr(-1)&&(n+=";"!==n.substr(-1)?";":""),n},{reset:function(){i={},c={}},add:function(n,e,a){n=n.trim(),e=e.trim(),a?(a=a.trim(),c[a]=c[a]||{},c[a][n]=t(e)):i[n]=t(e)},remove:function(n,e){n=n.trim(),e?(e=e.trim(),void 0!==c[e][n]&&delete c[e][n]):void 0!==i[n]&&delete i[n]},insert:function(){var n="";for(var e in c){for(var a in n+="@media screen and (".concat(e,") {\n"),c[e])n+="".concat(a," { ").concat(c[e][a]," }\n");n+="}\n"}for(var t in i)n+="".concat(t," { ").concat(i[t]," }\n");o.html(n)}}),d="keydown.hc-offcanvas-nav",p=J('<nav role="navigation">').on("click",on),v=J('<div class="nav-container">').appendTo(p),f=null,u=null,h={},m=!1,g=!1,b=null,x=0,k=0,C=0,O=null,w={},T=[],S=!1,B=[];e.addClass("hc-nav-original ".concat(y)),z.customToggle?f=J(z.customToggle).addClass("hc-nav-trigger ".concat(y)).on("click",_):(f=J('<a href="#" aria-label="Open Menu" class="hc-nav-trigger '.concat(y,'"><span></span></a>')).on("click",_),e.after(f));var A=function(n,e,a){if("number"==typeof e&&("number"==typeof n||B.length)){var t='[tabindex=0], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',o=v.find(".nav-wrapper").filter("[data-level=".concat(e,"]")).filter(function(){return"number"!=typeof a||J(this).is("[data-index=".concat(a,"]"))}).children(".nav-content").children("ul").children("li").children(":not(.nav-wrapper)").find(t).addBack(t).filter(":not([tabindex=-1])");if(o.length){var i=o.first(),c=o.last();"number"==typeof n?o.eq(n).focus():(B[B.length-1].focus(),B.pop()),Z.off(d),Z.on(d,function(n){("Tab"===n.key||9===n.keyCode)&&(n.shiftKey?R.activeElement===i[0]&&(n.preventDefault(),c.focus()):R.activeElement===c[0]&&(n.preventDefault(),i.focus()))})}}},N=function(){Z.off(d),setTimeout(function(){f.focus()},s)},E=function(){var n;v.css("transition","none"),k=v.outerWidth(),C=v.outerHeight(),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-left .nav-container"),"transform: translate3d(-".concat(k,"px, 0, 0)")),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-right .nav-container"),"transform: translate3d(".concat(k,"px, 0, 0)")),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-top .nav-container"),"transform: translate3d(0, -".concat(C,"px, 0)")),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-bottom .nav-container"),"transform: translate3d(0, ".concat(C,"px, 0)")),r.insert(),v.css("transition",""),a=v.css("transition-property").split(",")[0],n=v.css("transition-duration").split(",")[0],s=parseFloat(n)*(/\ds$/.test(n)?1e3:1),l=v.css("transition-timing-function").split(",")[0],z.pushContent&&u&&a&&r.add(function n(e){return"string"==typeof e?e:e.attr("id")?"#"+e.attr("id"):e.attr("class")?e.prop("tagName").toLowerCase()+"."+e.attr("class").replace(/\s+/g,"."):n(e.parent())+" "+e.prop("tagName").toLowerCase()}(z.pushContent),"transition: ".concat(a," ").concat(s,"ms ").concat(l)),r.insert()},P=function(n){var e=f.css("display"),a=!!z.disableAt&&"max-width: ".concat(z.disableAt-1,"px"),t=tn(z.width),o=tn(z.height);-1!==t.indexOf("px")&&(k=parseInt(t)),-1!==o.indexOf("px")&&(C=parseInt(o)),G(["disableAt","position"])&&r.reset(),r.add(".hc-offcanvas-nav.".concat(y),"display: block",a),r.add(".hc-nav-original.".concat(y),"display: none",a),r.add(".hc-nav-trigger.".concat(y),"display: ".concat(e&&"none"!==e?e:"block"),a),-1!==["left","right"].indexOf(z.position)?r.add(".hc-offcanvas-nav.".concat(y," .nav-container"),"width: ".concat(t)):r.add(".hc-offcanvas-nav.".concat(y," .nav-container"),"height: ".concat(o)),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-left .nav-container"),"transform: translate3d(-".concat("auto"===t?"100%":t,", 0, 0);")),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-right .nav-container"),"transform: translate3d(".concat("auto"===t?"100%":t,", 0, 0);")),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-top .nav-container"),"transform: translate3d(0, -".concat("auto"===o?"100%":o,", 0);")),r.add(".hc-offcanvas-nav.".concat(y,".nav-position-bottom .nav-container"),"transform: translate3d(0, ".concat("auto"===o?"100%":o,", 0);")),r.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper"),"transform: translate3d(-".concat(z.levelSpacing,"px,0,0)"),a),r.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper"),"transform: translate3d(".concat(z.levelSpacing,"px,0,0)"),a),r.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper"),"transform: translate3d(0,-".concat(z.levelSpacing,"px,0)"),a),r.add(".hc-offcanvas-nav.".concat(y,".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper"),"transform: translate3d(0,".concat(z.levelSpacing,"px,0)"),a),r.insert(),(!n||n&&G("pushContent"))&&("string"==typeof z.pushContent?(u=J(z.pushContent)).length||(u=null):u=z.pushContent instanceof jQuery?z.pushContent:null),v.css("transition","none");var i=p.hasClass(V),c=["hc-offcanvas-nav",z.navClass||"",y,z.navClass||"","nav-levels-"+z.levelOpen||"none","nav-position-"+z.position,z.disableBody?"disable-body":"",nn?"is-ios":"",en?"touch-device":"",i?V:"",z.rtl?"rtl":""].join(" ");p.off("click").attr("class","").attr("aria-hidden",!0).attr("aria-labelledby",y).addClass(c),z.disableBody&&p.on("click",W),n?E():setTimeout(E,0)},M=function(){var n;h=function l(n,e){var a=[];return n.each(function(){var n=J(this),c={id:e,classes:n.attr("class")||null,items:[]};void 0!==n.attr("data-nav-active")&&(b=e,n.removeAttr("data-nav-active")),n.children("li").each(function(){var n=J(this),e=void 0!==n.attr("data-nav-custom-content"),a=e?n.children():n.children().filter(function(){var n=J(this);return n.is(":not(ul)")&&!n.find("ul").length}).add(n.contents().filter(function(){return 3===this.nodeType&&this.nodeValue.trim()})),t=e?J():n.find("ul"),o=t.first().add(t.first().siblings("ul")),i=null;o.length&&(n.data("hc-uniqid")?i=n.data("hc-uniqid"):(i=Math.random().toString(36).substr(2),n.data("hc-uniqid",i))),c.items.push({id:i,classes:n.attr("class")||null,content:a,subnav:o.length?l(o,i):[],custom:e})}),a.push(c)}),a}((n=e.find("ul").addBack("ul")).first().add(n.first().siblings("ul")),null)},D=function(n){n&&(v.empty(),w={}),function h(n,e,m,g,a,t){var b=J('<div class="nav-wrapper nav-wrapper-'.concat(m,'" data-level="').concat(m,'" data-index="').concat(a||0,'">')).appendTo(e).on("click",on),o=J('<div class="nav-content">').appendTo(b);if(g&&o.prepend("<h2>".concat(g,"</h2>")),J.each(n,function(n,e){var u=J('<ul role="menu" aria-level="'.concat(m+1,'">')).addClass(e.classes).appendTo(o);0===n&&g&&u.attr("aria-label",g),e.id&&u.attr("aria-labelledby","menu-"+e.id),J.each(e.items,function(n,e){var a=e.content;if(e.custom){var t=J('<li class="custom-content">').addClass(e.classes).append(J('<div class="nav-item nav-item-custom">').append(a.clone(!0,!0)));u.append(t)}else{var o=a.find("a").addBack("a"),i=o.length?o.clone(!1,!0).addClass("nav-item"):J("<".concat(e.subnav.length?'a href="#"':"span",' class="nav-item">')).append(a.clone(!0,!0)).on("click",on);i.is("a")&&i.attr("tabindex","0").attr("role","menuitem"),o.length&&i.on("click",function(n){n.stopPropagation(),(J._data(o[0],"events")||{}).click&&o[0].click()}),"#"===i.attr("href")&&i.on("click",function(n){n.preventDefault()}),z.closeOnClick&&(q()?i.filter("a").filter('[data-nav-close!="false"]:not([disabled])').filter(function(){var n=J(this);return!e.subnav.length||n.attr("href")&&"#"!==n.attr("href").charAt(0)}).on("click",W):i.filter("a").filter('[data-nav-close!="false"]:not([disabled])').on("click",W));var c=J("<li>").addClass(e.classes).append(i).appendTo(u);if(i.wrap('<div class="nav-item-wrapper">'),z.levelSpacing&&("expand"===z.levelOpen||!1===z.levelOpen||"none"===z.levelOpen)){var l=z.levelSpacing*m;l&&u.css("text-indent","".concat(l,"px"))}if(e.subnav.length){var r=m+1,s=e.id,d="";if(w[r]||(w[r]=0),c.addClass("nav-parent"),q()){var p=function(n){n.on("click",function(){f.prop("checked",!f.prop("checked")).trigger("change")}).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||(S=!0,B.push(J(this)))}).attr("aria-controls","menu-"+s).attr("aria-haspopup","overlap"===z.levelOpen).attr("aria-expanded",!1)},v=w[r],f=J('<input type="checkbox" id="'.concat(y,"-").concat(r,"-").concat(v,'" class="hc-chk" tabindex="-1">')).attr("data-level",r).attr("data-index",v).val(s).on("click",on).on("change",j).prependTo(c);-1!==T.indexOf(s)&&(b.addClass("sub-level-open").on("click",function(){return Q(r,v)}),c.addClass("level-open"),f.prop("checked",!0)),d=!0===z.levelTitles?a.text().trim():"",i.attr("href")&&"#"!==i.attr("href")?p(J('<a href="#" class="nav-next" aria-label="'.concat(d,' Submenu" role="menuitem" tabindex="0"><span>')).on("click",on).insertAfter(i)):(J('<span class="nav-next"><span>').appendTo(i),p(i))}else i.attr("aria-expanded",!0);w[r]++,h(e.subnav,c,r,d,w[r]-1,g)}}})}),m&&void 0!==a&&!1!==z.insertBack&&"overlap"===z.levelOpen){var i=o.children("ul"),c=z.levelTitleAsBack&&t||z.labelBack||"",l=J('<li class="nav-back"><a href="#" role="menuitem" tabindex="0">'.concat(c,"<span></span></a></li>")),r=function(){return Q(m,a)};l.children("a").on("click",cn(r)).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||(S=!0)}).wrap('<div class="nav-item-wrapper">'),!0===z.insertBack?i.first().prepend(l):an(z.insertBack)&&ln(l,z.insertBack,i)}if(0===m&&!1!==z.insertClose){var s=o.children("ul"),d=J('<li class="nav-close"><a href="#" role="menuitem" tabindex="0">'.concat(z.labelClose||"","<span></span></a></li>"));d.children("a").on("click",cn(W)).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||N()}).wrap('<div class="nav-item-wrapper">'),!0===z.insertClose?s.first().prepend(d):an(z.insertClose)&&ln(d,z.insertClose,s.first().add(s.first().siblings("ul")))}}(h,v,0,z.navTitle)};f.attr("role","button").attr("aria-controls",y).on("keydown",function(n){"Enter"!==n.key&&13!==n.keyCode||setTimeout(function(){A(0,0)},0)}),Z.on("keydown",function(n){if(I()&&("Escape"===n.key||27===n.keyCode)){var e=T.length?v.find(".hc-chk").filter("[value=".concat(T[T.length-1],"]")).data("level"):!!I()&&0;0===e?(W(),N()):(Q(e),A(null,e-1))}}),P(),M(),D(),!0===z.removeOriginalNav&&e.remove(),"prepend"===z.bodyInsert?$.prepend(p):"append"===z.bodyInsert&&$.append(p),!0===z.expanded&&(g=!0,L());var H=function(n,e,a){var t=J("#".concat(y,"-").concat(n,"-").concat(e));if(t.length){var o=t.val(),i=t.parent("li"),c=i.closest(".nav-wrapper");if(t.prop("checked",!1),c.removeClass("sub-level-open"),i.removeClass("level-open"),i.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded",!1),-1!==T.indexOf(o)&&T.splice(T.indexOf(o),1),a&&"overlap"===z.levelOpen&&(c.off("click").on("click",on),sn(v,(n-1)*z.levelSpacing,z.position),u)){var l="x"===rn(z.position)?k:C;sn(u,l+(n-1)*z.levelSpacing,z.position)}}};U.getSettings=function(){return Object.assign({},z)},U.isOpen=I,U.open=L,U.close=W,U.update=function(n,e){if(K=[],"object"===_typeof(n)){for(var a in n)z[a]!==n[a]&&K.push(a);z=J.extend({},z,n)}if(!0===n||!0===e){if(z.removeOriginalNav)return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.","color: #fa253b","color: default");P(!0),M(),D(!0)}else P(!0),D(!0)}}else console.error("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.","color: #fa253b","color: default");function j(){var n=J(this),e=n.data("level"),a=n.data("index");n.prop("checked")?F(e,a):Q(e,a)}function q(){return!1!==z.levelOpen&&"none"!==z.levelOpen}function I(){return m}function L(n,e){if((!I()||void 0!==e)&&(function(){if(m=!0,p.css("visibility","visible").attr("aria-hidden",!1).addClass(V),f.addClass("toggle-open"),"expand"===z.levelOpen&&O&&clearTimeout(O),z.disableBody&&(x=X.scrollTop()||Y.scrollTop()||$.scrollTop(),R.documentElement.scrollHeight>R.documentElement.clientHeight&&Y.addClass("hc-nav-yscroll"),$.addClass("hc-nav-open"),x&&$.css("top",-x)),u){var n="x"===rn(z.position)?k:C;sn(u,n,z.position)}if(g)return g=!1;setTimeout(function(){U.trigger("open",J.extend({},z))},s)}(),q())){var a;if("number"==typeof n&&"number"==typeof e){if(!(a=J("#".concat(y,"-").concat(n,"-").concat(e))).length)return void console.warn("HC Offcanvas Nav: level ".concat(n," doesn't have index ").concat(e))}else b?(a=v.find(".hc-chk").filter("[value=".concat(b,"]")),b=null):!1===z.closeOpenLevels&&(a=v.find(".hc-chk").filter(":checked").last());if(a&&a.length){var t=[];n=a.data("level"),e=a.data("index"),1<n&&(a.parents(".nav-wrapper").each(function(){var n=J(this),e=n.data("level");0<e&&t.push({level:e,index:n.data("index")})}),t=t.reverse()),t.push({level:n,index:e});for(var o=0;o<t.length;o++)F(t[o].level,t[o].index,!1)}}}function W(){if(I()){if(m=!1,u&&sn(u,0),p.removeClass(V).attr("aria-hidden",!0),v.removeAttr("style"),f.removeClass("toggle-open"),"expand"===z.levelOpen&&-1!==["top","bottom"].indexOf(z.position)?Q(0):q()&&(O=setTimeout(function(){Q(0)},"expand"===z.levelOpen?s:0)),z.disableBody&&($.removeClass("hc-nav-open"),Y.removeClass("hc-nav-yscroll"),x)){if($.css("top","").scrollTop(x),Y.scrollTop(x),"bottom"===z.position){var n=x;setTimeout(function(){$.scrollTop(n),Y.scrollTop(n)},0)}x=0}setTimeout(function(){p.css("visibility",""),U.trigger("close.$",J.extend({},z)),U.trigger("close.once",J.extend({},z)).off("close.once")},s)}}function _(n){n.preventDefault(),n.stopPropagation(),m?W():L()}function F(n,e){var a=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],t=J("#".concat(y,"-").concat(n,"-").concat(e)),o=t.val(),i=t.parent("li"),c=i.closest(".nav-wrapper"),l=i.children(".nav-wrapper");if(!1===a&&l.css("transition","none"),t.prop("checked",!0),c.addClass("sub-level-open"),i.addClass("level-open"),i.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded",!0),!1===a&&setTimeout(function(){l.css("transition","")},s),-1===T.indexOf(o)&&T.push(o),"overlap"===z.levelOpen&&(c.on("click",function(){return Q(n,e)}),sn(v,n*z.levelSpacing,z.position),u)){var r="x"===rn(z.position)?k:C;sn(u,r+n*z.levelSpacing,z.position)}S&&(A(0,n,e),S=!1)}function Q(n,e){for(var a=n;a<=Object.keys(w).length;a++)if(a==n&&void 0!==e)H(n,e,!0);else if(0!==n||z.closeOpenLevels)for(var t=0;t<w[a];t++)H(a,t,a==n);S&&(A(null,n-1),S=!1)}})}})}(jQuery,"undefined"!=typeof window?window:this);