(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3afeb9c5"],{"2f71":function(t,e,s){"use strict";s.d(e,"k",(function(){return a})),s.d(e,"e",(function(){return r})),s.d(e,"d",(function(){return o})),s.d(e,"j",(function(){return i})),s.d(e,"h",(function(){return c})),s.d(e,"b",(function(){return d})),s.d(e,"a",(function(){return u})),s.d(e,"c",(function(){return l})),s.d(e,"f",(function(){return f})),s.d(e,"l",(function(){return v})),s.d(e,"g",(function(){return _})),s.d(e,"i",(function(){return m}));var n=s("2ade");function a(t){return Object(n["a"])({url:"/category/indexaction",data:t})}function r(t){return Object(n["a"])({url:"/category/currentaction",data:t})}function o(t){return Object(n["a"])({url:"/category/categoryNav",data:t})}function i(t){return Object(n["a"])({url:"/goods/goodsList",data:t})}function c(t){return Object(n["a"])({url:"/goods/detailaction",data:t})}function d(t){return Object(n["a"])({method:"POST",url:"/collect/addcollect",data:t})}function u(t){return Object(n["a"])({method:"POST",url:"/cart/addCart",data:t})}function l(t){return Object(n["a"])({url:"/cart/cartList",data:t})}function f(t){return Object(n["a"])({url:"/cart/deleteAction",data:t})}function v(t){return Object(n["a"])({method:"POST",url:"/order/submitAction",data:t})}function _(t){return Object(n["a"])({url:"/order/detailAction",data:t})}function m(t){return Object(n["a"])({url:"/brand/detailaction",data:t})}},"32a7":function(t,e,s){"use strict";s("6cfa")},"5b7a":function(t,e,s){"use strict";s.d(e,"e",(function(){return a})),s.d(e,"a",(function(){return r})),s.d(e,"d",(function(){return o})),s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return c}));var n=s("2ade");function a(t){return Object(n["a"])({method:"POST",url:"/feedback/submitAction",data:t})}function r(t){return Object(n["a"])({url:"/address/deleteAction",data:t})}function o(t){return Object(n["a"])({method:"POST",url:"/address/saveAction",data:t})}function i(t){return Object(n["a"])({url:"/address/getListAction",data:t})}function c(t){return Object(n["a"])({url:"/collect/listAction",data:t})}},"698c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[s("van-nav-bar",{attrs:{title:"YeYi","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),""!=t.adressid?s("div",{staticClass:"info",on:{click:t.goadressList}},[s("div",{staticClass:"adress"},[s("div",{staticClass:"img"}),s("van-cell",{attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticClass:"userinfo"},[s("div",[t._v(t._s(t.adress.name))]),1==t.adress.is_default?s("div",[t._v("默认")]):t._e()]),s("div",{staticClass:"useradress"},[s("div",[t._v(t._s(t.adress.mobile))]),s("div",[t._v(t._s(t.adress.address))])])]},proxy:!0}],null,!1,3670828453)})],1)]):s("div",{on:{click:t.goadressList}},[s("van-cell",{attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[t.adress.name?s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"userinfo"},[s("div",[t._v(t._s(t.adress.name))]),t.adressid?s("div",[t._v("默认")]):t._e()]),s("div",{staticClass:"useradress"},[s("div",[t._v(t._s(t.adress.mobile))]),s("div",[t._v(t._s(t.adress.address))])])]):s("span",[t._v("获取地址")])]},proxy:!0}])})],1),s("div",{staticClass:"goods_price"},[s("div",[s("span",[t._v("商品合计")]),s("span",[t._v("￥"+t._s(t.allPrise))])]),t._m(0),t._m(1)]),s("ul",t._l(t.goods,(function(e){return s("li",{key:e.id},[s("div",{staticClass:"left"},[s("img",{attrs:{src:e.list_pic_url,alt:""}}),s("div",[s("p",[t._v(t._s(e.goods_name))]),s("p",[t._v("￥"+t._s(e.retail_price))])])]),s("span",{staticClass:"right"},[t._v("x"+t._s(e.number))])])})),0),s("div",{staticClass:"pay_btn"},[s("div",{staticClass:"content"},[s("p",[t._v("实付 : "),s("span",[t._v("￥"+t._s(t.total))])]),s("a",{on:{click:t.pay}},[t._v("支付")])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("运费")]),s("span",[t._v("免运费")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("优惠券")]),s("span",[t._v("暂无")])])}],r=(s("4160"),s("159b"),s("2f71")),o=s("5b7a"),i={data:function(){return{adressid:"",adress:"",allPrise:"",goods:[]}},methods:{pay:function(){this.$toast.fail("还未开通功能"),this.$store.commit("commitShow",!1)},goadressList:function(){this.$router.push({path:"/own/adress"}),this.adress="",this.adressid="",this.$store.commit("commitShow",!0)},onClickLeft:function(){this.$router.push("/addcart"),this.$store.commit("commitShow",!1)}},computed:{total:function(){var t=0;return this.goods.forEach((function(e){t+=e.retail_price*e.number})),t}},created:function(){var t=this;Object(o["b"])({openId:localStorage.getItem("openId")}).then((function(e){e.data.forEach((function(e){1==e.is_default&&(t.adressid=e.id)})),console.log("执行"),console.log(t.adressid),console.log(t.$store.state.goshow),t.$store.state.goshow?t.adress||(t.goods=t.$store.state.goodsList,t.adress=t.$route.query.item):(console.log("进入"),Object(r["g"])({openId:localStorage.getItem("openId"),addressId:t.adressid}).then((function(e){console.log(e),t.adress=e.address,t.allPrise=e.allPrise,t.$store.commit("commitgoodsList",e.goodsList),t.$store.state.goodsList?(t.goods=t.$store.state.goodsList,console.log(1)):t.goods=e.goodsList})))}))}},c=i,d=(s("32a7"),s("2877")),u=Object(d["a"])(c,n,a,!1,null,"2108211a",null);e["default"]=u.exports},"6cfa":function(t,e,s){}}]);
//# sourceMappingURL=chunk-3afeb9c5.54553a2c.js.map