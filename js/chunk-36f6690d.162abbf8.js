(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36f6690d"],{"02db":function(t,e,a){"use strict";a("618f")},"0588":function(t,e,a){"use strict";a("589f")},"0ce0":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("el-collapse",{on:{change:t.handleChange}},[e("el-collapse-item",{staticClass:"item-wrap",attrs:{title:"新產品",name:"13"}},[e("router-link",{staticClass:"item",attrs:{to:"/new-product"}},[t._v("新產品")])],1),e("el-collapse-item",{staticClass:"item-wrap",attrs:{title:"現正優惠",name:"11"}},[e("router-link",{staticClass:"item",attrs:{to:"/discount"}},[t._v("現正優惠")])],1),e("el-collapse-item",{staticClass:"item-wrap",attrs:{title:"熱銷推薦",name:"12"}},[e("router-link",{staticClass:"item",attrs:{to:"/recommend"}},[t._v("熱銷推薦")])],1),t._l(t.categories,(function(a){return e("el-collapse-item",{key:a.id,staticClass:"category-item",attrs:{title:a.name,name:a.id,type:"info"}},[e("div",{staticClass:"sort"},t._l(a.sorts,(function(a){return e("router-link",{key:a.id,staticClass:"sort-item",attrs:{to:{name:"products-categories",params:{id:a.id}}}},[t._v(t._s(a.name))])})),1)])}))],2)],1)},n=[];const s={categories:[{id:1,name:"保養系列",sorts:[{id:1,parentId:1,name:"全部"},{id:7,parentId:1,name:"乳液"},{id:8,parentId:1,name:"精華液"},{id:9,parentId:1,name:"面膜"}]},{id:2,name:"彩妝系列",sorts:[{id:2,parentId:2,name:"全部"},{id:15,parentId:2,name:"遮瑕膏"},{id:16,parentId:2,name:"粉底液"},{id:17,parentId:2,name:"睫毛膏"},{id:18,parentId:2,name:"眼影"},{id:19,parentId:2,name:"腮紅"},{id:20,parentId:2,name:"口紅"},{id:21,parentId:2,name:"指甲油"}]},{id:3,name:"香氛系列",sorts:[{id:3,parentId:3,name:"全部"},{id:38,parentId:3,name:"精緻香水"},{id:39,parentId:3,name:"擴香瓶"}]},{id:4,name:"身體髮品",sorts:[{id:4,parentId:4,name:"全部"},{id:42,parentId:4,name:"沐浴乳"},{id:43,parentId:4,name:"洗髮精"},{id:44,parentId:4,name:"潤髮乳"},{id:45,parentId:4,name:"潤膚乳"}]},{id:5,name:"美妝工具",sorts:[{id:5,parentId:5,name:"全部"},{id:51,parentId:5,name:"睫毛夾"},{id:52,parentId:5,name:"各式刷具"}]},{id:6,name:"男士保養",sorts:[{id:6,parentId:6,name:"全部"},{id:56,parentId:6,name:"控油洗面乳"},{id:57,parentId:6,name:"抗痘洗面乳"}]}]};var r={name:"CategoriesList",data(){return{categories:s.categories}},created(){},methods:{handleChange(t){console.log(t)}}},d=r,c=(a("02db"),a("7dac"),a("2877")),o=Object(c["a"])(d,i,n,!1,null,"7d62e810",null);e["a"]=o.exports},1987:function(t,e,a){t.exports=a.p+"img/green.9a50b796.jpg"},"2e86":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile"},[e("div",{staticClass:"sorts-wrap"},[e("div",{staticClass:"sorts"},t._l(t.sorts,(function(a){return e("el-link",{key:a.id,staticClass:"sort-item",attrs:{type:"info"}},[t._v(t._s(a.name))])})),1)])])},n=[],s={name:"SortsList",props:{category:{type:Object,required:!0}},data(){return{sorts:[]}},created(){this.fetchData()},methods:{fetchData(){this.sorts=this.category.sorts}}},r=s,d=(a("0588"),a("2877")),c=Object(d["a"])(r,i,n,!1,null,"239977b4",null);e["a"]=c.exports},4802:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.category.name))]),e("hr",{staticClass:"title-line"}),e("div",{staticClass:"area"},[e("SortsList",{staticClass:"mobile",attrs:{category:t.category}}),e("CategoriesList",{staticClass:"left"}),e("CategoriesMain",{staticClass:"right",attrs:{initialCategory:t.category}})],1)])},n=[],s=a("2e86"),r=a("0ce0"),d=a("a8d7");const c={name:"熱銷推薦",products:[{id:14,parentId:9,name:"超貼膚面膜(黑)",price:300,discount:.9,imgURL:a("6805"),shot_des:"完美服貼於臉部輪廓，均勻地為肌膚傳遞活性成分的生物纖維面膜。",directions:"1.極致服貼的高級面膜。2.幫助強化肌膚表層、改善肌膚、增加肌膚水分、加強肌膚彈性、提亮肌膚透明度。",use:"潔膚後，將面膜貼至臉部，靜置10~20分鐘後取下。",details:[{id:1,title:"商品",content:"超貼膚面膜(黑)"},{id:2,title:"容量",content:"20g"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.使用後皮膚若有異狀請立即停用。2.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。3.避免存放在極端溫度(太熱或太冷)或陽光直射的地方。"}]},{id:37,parentId:21,name:"糖果色系指甲油",price:250,discount:.9,imgURL:a("646a"),shot_des:"呈現霧面糖果色系。",format:[{id:1,name:"Q1"},{id:2,name:"Q2"},{id:3,name:"Q3"},{id:4,name:"Q4"}],directions:"1.長效護甲油基底更加持久。2.修護長久損傷指甲",use:"1.護甲基底油後使用，以刷毛沾取適量產品均勻塗抹於指甲上。",details:[{id:1,title:"商品",content:"糖果色系指甲油"},{id:2,title:"容量",content:"7ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.請勿與其他產品混合使用，產品屬外用，若誤食請送醫處理。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。"}]},{id:40,parentId:38,name:"精緻香水",price:490,discount:.9,imgURL:a("912e"),shot_des:"多種香味讓你選擇，散發自然香氣。",format:[{id:1,name:"檸檬柑橘"},{id:2,name:"蜜桃蘋果"},{id:3,name:"香草萊姆"},{id:4,name:"茉莉花香"},{id:5,name:"白麝香"},{id:6,name:"小蒼蘭"}],directions:"1.使用天然花草萃取液，香氣不刺鼻。",use:"1.噴至手腕內側或脖子，再均勻抹開。",details:[{id:1,title:"商品",content:"精緻香水"},{id:2,title:"容量",content:"150ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.使用後皮膚若有異狀請立即停用。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。"}]},{id:41,parentId:39,name:"室內擴香瓶",price:490,discount:.9,imgURL:a("ea4a"),shot_des:"多種香味讓你選擇，讓空間散發自然香氣。",format:[{id:1,name:"檸檬柑橘"},{id:2,name:"蜜桃蘋果"},{id:3,name:"香草萊姆"},{id:4,name:"茉莉花香"},{id:5,name:"白麝香"},{id:6,name:"小蒼蘭"}],directions:"1.使用天然花草萃取液，香氣不刺鼻。",use:"1.將擴香棒放進擴香瓶中，即能緩緩釋放香氣。",details:[{id:1,title:"商品",content:"室內擴香瓶"},{id:2,title:"容量",content:"150ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.請保持通風。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。"}]},{id:49,parentId:44,name:"潤髮乳",discount:.9,price:390,imgURL:a("fc7a"),shot_des:"採用天然植物成分，保持頭髮光澤柔順。",directions:"1.多種植萃取成分，保持頭髮光澤柔順，遠離毛躁。",use:"1.沐浴時，於頭髮洗淨後，取適量在手心至髮尾搓揉。",details:[{id:1,title:"商品",content:"潤髮乳"},{id:2,title:"容量",content:"1000ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.使用後頭皮若有異狀請立即停用。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。"}]},{id:50,parentId:45,name:"潤膚乳",price:390,discount:.9,imgURL:a("07bf"),shot_des:"採用天然植物成分，清爽細緻質地，保濕不黏膩。",directions:"1.多種植萃保濕成分，使皮膚返回青春。",use:"1.沐浴後，取適量在手心塗抹於身體。",details:[{id:1,title:"商品",content:"潤膚乳"},{id:2,title:"容量",content:"1000ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.使用後皮膚若有異狀請立即停用。2.請勿使用於其他用途。3.請存放於嬰幼兒無法碰觸之處。"}]},{id:59,parentId:57,name:"抗痘洗面乳1",price:350,discount:.8,imgURL:a("81c0"),shot_des:"添加抗痘成分，深層洗淨髒汙。",directions:"1.添加天然抗痘成分，將皮膚保濕鎖水，洗淨髒汙。",use:"1.取適量於手心搓至起泡，用於臉上",details:[{id:1,title:"商品",content:"抗痘洗面乳1"},{id:2,title:"容量",content:"150ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.使用後皮膚若有異狀請立即停用。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。"}]},{id:60,parentId:57,name:"抗痘洗面乳2",price:350,discount:.8,imgURL:a("696f"),shot_des:"添加抗痘成分，深層洗淨髒汙。",directions:"1.添加天然抗痘成分，將皮膚保濕鎖水，洗淨髒汙。",use:"1.取適量於手心搓至起泡，用於臉上",details:[{id:1,title:"商品",content:"抗痘洗面乳2"},{id:2,title:"容量",content:"150ml"},{id:3,title:"製造地",content:"台灣"},{id:4,title:"注意事項",content:"1.使用後皮膚若有異狀請立即停用。2.使用後請密封。3.請避免使用於傷口、紅腫及濕疹等皮膚異常部位。"}]}]};var o={name:"Recommend",components:{SortsList:s["a"],CategoriesList:r["a"],CategoriesMain:d["a"]},data(){return{category:c}}},l=o,m=(a("f22b"),a("2877")),u=Object(m["a"])(l,i,n,!1,null,"303c4d8e",null);e["default"]=u.exports},"589f":function(t,e,a){},"618f":function(t,e,a){},"646aa":function(t,e,a){},"7dac":function(t,e,a){"use strict";a("f8932")},"7ee4":function(t,e,a){},a8b1:function(t,e,a){"use strict";a("646aa")},a8d7:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"right"},[e("div",{staticClass:"img-block"},[e("p",{staticClass:"category-name"},[t._v(t._s(t.category.name))]),e("img",{staticClass:"img",attrs:{src:t.img,alt:""}})]),e("el-select",{staticClass:"select-range",attrs:{placeholder:"依上架時間新 → 舊"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),e("div",{staticClass:"products-wrap"},t._l(t.pageChangeItem.length?t.pageChangeItem[0]:t.category.products,(function(t){return e("ProductCard",{key:t.id,attrs:{"initial-product":t}})})),1),e("el-pagination",{staticStyle:{"text-align":"center"},attrs:{layout:"prev, pager, next",total:t.category.products.length,"current-page":t.currentPage,"page-size":t.pageSize},on:{"current-change":t.handleCurrentChange}})],1)},n=[],s=(a("14d9"),a("e915")),r={name:"CategoriesMain",components:{ProductCard:s["a"]},props:{initialCategory:{type:Object,required:!0}},data(){return{category:this.initialCategory,img:a("1987"),options:[{value:"選項1",label:"依上架時間新 → 舊"},{value:"選項2",label:"依上架時間舊 → 新"},{value:"選項3",label:"依價格低 → 高"},{value:"選項4",label:"依價格高 → 低"}],value:"",currentPage:1,pageSize:12,pageChangeItem:[]}},created(){this.renderCards(1)},watch:{initialCategory(t){this.category={...this.category,...t},this.renderCards(1)}},methods:{renderCards(t){this.pageChangeItem=[],this.currentPage=t;const e=this.category.products,a=(this.currentPage-1)*this.pageSize,i=a+this.pageSize;this.pageChangeItem.push(e.slice(a,i))},handleCurrentChange(t){this.pageChangeItem=[],this.currentPage=t;const e=this.category.products,a=(this.currentPage-1)*this.pageSize,i=a+this.pageSize;this.pageChangeItem.push(e.slice(a,i))}}},d=r,c=(a("a8b1"),a("2877")),o=Object(c["a"])(d,i,n,!1,null,"26fb6114",null);e["a"]=o.exports},f22b:function(t,e,a){"use strict";a("7ee4")},f8932:function(t,e,a){}}]);
//# sourceMappingURL=chunk-36f6690d.162abbf8.js.map