(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e4e4df4"],{"2f71":function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"j",(function(){return c})),n.d(e,"h",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"l",(function(){return p})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return g}));var o=n("2ade");function r(t){return Object(o["a"])({url:"/category/indexaction",data:t})}function a(t){return Object(o["a"])({url:"/category/currentaction",data:t})}function i(t){return Object(o["a"])({url:"/category/categoryNav",data:t})}function c(t){return Object(o["a"])({url:"/goods/goodsList",data:t})}function s(t){return Object(o["a"])({url:"/goods/detailaction",data:t})}function u(t){return Object(o["a"])({method:"POST",url:"/collect/addcollect",data:t})}function l(t){return Object(o["a"])({method:"POST",url:"/cart/addCart",data:t})}function d(t){return Object(o["a"])({url:"/cart/cartList",data:t})}function f(t){return Object(o["a"])({url:"/cart/deleteAction",data:t})}function p(t){return Object(o["a"])({method:"POST",url:"/order/submitAction",data:t})}function h(t){return Object(o["a"])({url:"/order/detailAction",data:t})}function g(t){return Object(o["a"])({url:"/brand/detailaction",data:t})}},"4a62":function(t,e,n){"use strict";n("9b3b")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var o=n("1d80"),r=n("5899"),a="["+r+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var o=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,i;return r&&"function"==typeof(a=e.constructor)&&a!==n&&o(i=a.prototype)&&i!==n.prototype&&r(t,i),t}},"80a8":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goshop"},[n("van-nav-bar",{attrs:{title:"YeYi","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.imageArr,(function(t){return n("van-swipe-item",{key:t.id},[n("img",{attrs:{src:t.img_url,alt:""}})])})),1),t._m(0),n("div",{staticClass:"info"},[n("p",{staticClass:"info_name"},[t._v(t._s(t.info.name))]),n("p",{staticClass:"info_des"},[t._v(t._s(t.info.goods_brief))]),n("p",{staticClass:"info_price"},[t._v("$"+t._s(t.info.retail_price))])]),n("van-cell",{attrs:{"is-link":""},on:{click:function(e){t.show=!t.show}}},[t._v("请选择规格参数")]),n("van-popup",{style:{height:"40%"},attrs:{closeable:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"header clear"},[n("img",{attrs:{src:t.info.primary_pic_url,alt:""}}),n("div",[n("p",[t._v("价格:$"+t._s(t.info.retail_price))]),n("p",[t._v("请选择数量")])])]),n("div",{staticClass:"computed"},[n("span",[t._v("数量")]),n("div",{staticClass:"icon"},[n("van-icon",{attrs:{name:"minus"},on:{click:t.delNumber}}),t._v(" "+t._s(t.number)+" "),n("van-icon",{attrs:{name:"plus"},on:{click:t.addNumber}})],1)])]),n("div",{staticClass:"shop_info"},[n("h4",[t._v("商品参数")]),n("ul",t._l(t.shopinfo,(function(e,o){return n("li",{key:o},[n("span",[t._v(t._s(e.name)+":")]),n("span",[t._v(t._s(e.value))])])})),0)]),n("div",{staticClass:"shop_image",domProps:{innerHTML:t._s(t.info.goods_desc)}}),n("div",{staticClass:"all_see"},[t._m(1),n("ul",t._l(t.allsee,(function(e){return n("li",{key:e.id},[n("img",{attrs:{src:e.list_pic_url,alt:""}}),n("p",[t._v(t._s(e.name))]),n("p",[t._v("$"+t._s(e.retail_price))])])})),0)]),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"cart-o",badge:t.newNumber,text:"购物车"},on:{click:t.goCart}}),n("van-goods-action-icon",{attrs:{icon:"star",text:t.collected?"已收藏":"未收藏",color:t.collected?"#ff5000":"#ccc"},on:{click:t.collect}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addcart}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.imdparse}})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goodsprotect"},[n("span",[t._v("30天无忧退货")]),n("span",[t._v("48小时快速退款")]),n("span",[t._v("满88元免邮费")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all_header"},[n("span"),t._v("大家都在看"),n("span")])}],a=(n("a9e3"),n("5530")),i=(n("c4a4"),n("2f71")),c=n("2f62"),s={data:function(){return{goodsId:"",imageArr:[],info:[],options:[],show:!1,collected:!1,number:1,shopinfo:[],allsee:[],isclick:!0,addCar:!0,allnumber:""}},methods:{addNumber:function(){this.number++},delNumber:function(){this.number<=1||this.number--},collect:function(){this.collected=!this.collected,console.log(this.goodsId),Object(i["b"])({openId:localStorage.getItem("openId"),goodsId:this.goodsId}).then((function(t){console.log(t)}))},addcart:function(){var t=this;this.show=!0,this.addCar||Object(i["a"])({goodsId:this.goodsId,number:this.number,openId:localStorage.getItem("openId")}).then((function(e){t.getGoodsDetail(),t.number=1,t.show=!1})),this.addCar=!1},imdparse:function(){var t=this;this.show=!0,this.isclick||(console.log(this.number),Object(i["a"])({goodsId:this.goodsId,number:this.number,openId:localStorage.getItem("openId")}).then((function(e){t.getGoodsDetail(),t.number=1,t.goCart()}))),this.isclick=!1},goCart:function(){this.$router.push({path:"/addcart"})},onClickLeft:function(){this.$router.push("".concat(this.previousRouter))},getGoodsDetail:function(){var t=this;console.log(this.goodsId),Object(i["h"])({id:Number(this.goodsId),openId:localStorage.getItem("openId")}).then((function(e){t.imageArr=e.gallery,t.info=e.info,t.collected=e.collected,t.shopinfo=e.attribute,t.allsee=e.productList,t.allnumber=e.allnumber,console.log(e)}))}},computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["previousRouter"])),{},{newNumber:function(){return this.allnumber}}),created:function(){console.log(this.$route.query.id),this.goodsId=this.$route.query.id,this.getGoodsDetail()}},u=s,l=(n("4a62"),n("2877")),d=Object(l["a"])(u,o,r,!1,null,"4a364e83",null);e["default"]=d.exports},"9b3b":function(t,e,n){},a9e3:function(t,e,n){"use strict";var o=n("83ab"),r=n("da84"),a=n("94ca"),i=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,g=n("9bf2").f,b=n("58a8").trim,m="Number",v=r[m],_=v.prototype,I=s(f(_))==m,C=function(t){var e,n,o,r,a,i,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+u}for(a=u.slice(2),i=a.length,c=0;c<i;c++)if(s=a.charCodeAt(c),s<48||s>r)return NaN;return parseInt(a,o)}return+u};if(a(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var N,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(I?d((function(){_.valueOf.call(n)})):s(n)!=m)?u(new v(C(e)),n,O):C(e)},w=o?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;w.length>k;k++)c(v,N=w[k])&&!c(O,N)&&g(O,N,h(v,N));O.prototype=_,_.constructor=O,i(r,m,O)}},c4a4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-8e4e4df4.6ab7140f.js.map