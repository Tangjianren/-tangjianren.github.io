(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4OMX":function(n,o,t){"use strict";t.r(o);var c={name:"DialogTest",components:{Confirm:t("dfLa").a},data:function(){return{alertShow:!1}},methods:{open:function(){console.log("open")},close:function(){console.log("close")},confirm:function(){console.log("confirm")},cancel:function(){console.log("cancel")},showAlert:function(){var n=this;this.$Confirm({title:"重要提示",content:"我和你是好朋友👌",cancelText:"gun",confirmText:"ququ",onConfirm:function(){n.confirm()},onCancel:function(){n.cancel()}})}}},e=(t("Pfdn"),t("KHd+")),l=Object(e.a)(c,function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("button",{on:{click:function(o){n.alertShow=!0}}},[n._v("confirm")]),n._v(" "),t("button",{on:{click:n.showAlert}},[n._v("通过插件方式调用")]),n._v(" "),t("Confirm",{attrs:{title:"操作提示",content:"allala",confirmText:"确定啦啦",cancelText:"取消啦啦"},on:{"on-open":n.open,"on-close":n.close,onConfirm:n.confirm},model:{value:n.alertShow,callback:function(o){n.alertShow=o},expression:"alertShow"}})],1)},[],!1,null,null,null);o.default=l.exports},Pfdn:function(n,o,t){"use strict";var c=t("R7Yn");t.n(c).a},R7Yn:function(n,o,t){}}]);