(function(){"use strict";var e={1014:function(e,t,s){var r=s(5130),o=s(6768),n=s(4232);const a={class:"container mt-4"},c={class:"navbar navbar-expand-lg navbar-light bg-gradient mb-4 p-3 shadow"},i=["disabled"],l={key:0},d={class:"mb-3"},u={class:"row"},h={key:1},p={key:0,class:"alert alert-info"},m={class:"list-group"},b={class:"cart-item-details"},f={class:"cart-item-subject"},k={class:"cart-item-quantity-price"},v={class:"cart-item-quantity"},g={class:"cart-item-price"},y=["onClick"],L={class:"mb-3"},C={key:0,class:"text-danger"},S={class:"mb-3"},E={key:0,class:"text-danger"},w=["disabled"],x={key:1,class:"mt-3 alert alert-success"};function O(e,t,s,O,j,_){const A=(0,o.g2)("SortOptions"),F=(0,o.g2)("LessonCard");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("nav",c,[t[8]||(t[8]=(0,o.Lk)("a",{class:"navbar-brand text-white",href:"#"},"Vue.js Lesson Shop",-1)),(0,o.Lk)("button",{class:"btn btn-outline-light ml-auto button",onClick:t[0]||(t[0]=(...e)=>_.toggleCart&&_.toggleCart(...e)),disabled:_.isCartEmpty},(0,n.v_)(j.showCart?"Back to Lessons":"Shopping Cart")+" ("+(0,n.v_)(j.cart.length)+") ",9,i)]),j.showCart?((0,o.uX)(),(0,o.CE)("div",h,[t[13]||(t[13]=(0,o.Lk)("h2",null,"Shopping Cart",-1)),0===j.cart.length?((0,o.uX)(),(0,o.CE)("div",p,"Your cart is empty.")):(0,o.Q3)("",!0),(0,o.Lk)("ul",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(j.cart,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,class:"list-group-item d-flex justify-content-between align-items-center cart-item"},[(0,o.Lk)("div",b,[(0,o.Lk)("p",f,(0,n.v_)(e.subject),1),(0,o.Lk)("div",k,[(0,o.Lk)("span",v,"Quantity: "+(0,n.v_)(e.quantity),1),(0,o.Lk)("span",g,"Price: $"+(0,n.v_)(e.price),1)])]),(0,o.Lk)("button",{onClick:e=>_.removeFromCart(t),class:"btn btn-danger btn-sm remove-btn"}," Remove ",8,y)])))),128))]),(0,o.Lk)("form",{onSubmit:t[7]||(t[7]=(0,r.D$)(((...e)=>_.checkout&&_.checkout(...e)),["prevent"])),class:"mt-4"},[(0,o.Lk)("div",L,[t[11]||(t[11]=(0,o.Lk)("label",{for:"name",class:"form-label"},"Name:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[3]||(t[3]=e=>j.name=e),class:"form-control",required:"",onInput:t[4]||(t[4]=(...e)=>_.validateForm&&_.validateForm(...e))},null,544),[[r.Jo,j.name]]),j.nameError?((0,o.uX)(),(0,o.CE)("small",C,(0,n.v_)(j.nameError),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("div",S,[t[12]||(t[12]=(0,o.Lk)("label",{for:"phone",class:"form-label"},"Phone:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"phone","onUpdate:modelValue":t[5]||(t[5]=e=>j.phone=e),class:"form-control",required:"",onInput:t[6]||(t[6]=(...e)=>_.validateForm&&_.validateForm(...e))},null,544),[[r.Jo,j.phone]]),j.phoneError?((0,o.uX)(),(0,o.CE)("small",E,(0,n.v_)(j.phoneError),1)):(0,o.Q3)("",!0)]),(0,o.Lk)("button",{type:"submit",class:"btn btn-success",disabled:!_.isFormValid}," Checkout ",8,w)],32),j.message?((0,o.uX)(),(0,o.CE)("div",x,(0,n.v_)(j.message),1)):(0,o.Q3)("",!0)])):((0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("button",{onClick:t[1]||(t[1]=e=>j.showCart=!1),class:"btn btn-secondary mt-3"}," Back to Products "),j.showCart?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(A,{key:0,onSortLessons:_.handleSort},null,8,["onSortLessons"])),(0,o.Lk)("div",d,[t[9]||(t[9]=(0,o.Lk)("label",{for:"search",class:"form-label"},"Search Lessons",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"search","onUpdate:modelValue":t[2]||(t[2]=e=>j.searchQuery=e),class:"form-control",placeholder:"Search by subject, location, price, or spaces"},null,512),[[r.Jo,j.searchQuery]])]),t[10]||(t[10]=(0,o.Lk)("h2",null,"Lessons",-1)),(0,o.Lk)("div",u,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(_.SortedLessons,((e,t)=>((0,o.uX)(),(0,o.Wv)(F,{key:t,lesson:e,addToCart:()=>_.addToCart(e),class:"col-md-4 mb-4"},null,8,["lesson","addToCart"])))),128))])]))])}s(4114),s(8992),s(2577),s(3949),s(1454);const j={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"},_={class:"card bg-pink-50 shadow-lg rounded-lg overflow-hidden relative mb-4"},A={class:"card-body text-center p-6"},F=["src"],T={class:"card-title text-xl font-semibold text-gray-800"},X={class:"card-text text-gray-600 mt-2"},q={class:"card-text text-gray-600"},Q={class:"card-text text-gray-600 mb-4"},P=["disabled"],$={key:0,class:"text-red-500 mt-2 text-sm"};function I(e,t,s,r,a,c){return(0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("div",_,[t[1]||(t[1]=(0,o.Lk)("div",{class:"absolute top-2 right-2 text-pink-300"},[(0,o.Lk)("span",{class:"text-xl"},"🌸")],-1)),(0,o.Lk)("div",A,[(0,o.Lk)("img",{src:c.getImageUrl(s.lesson.image),alt:"Lesson Image",class:"card-img-top rounded-full mb-4 border-4 border-pink-200",style:{height:"150px",width:"150px","object-fit":"cover"}},null,8,F),(0,o.Lk)("h5",T,(0,n.v_)(s.lesson.subject),1),(0,o.Lk)("p",X,"Location: "+(0,n.v_)(s.lesson.location),1),(0,o.Lk)("p",q,"Price: $"+(0,n.v_)(s.lesson.price),1),(0,o.Lk)("p",Q,"Available Spaces: "+(0,n.v_)(s.lesson.spaces),1),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.addToCart&&s.addToCart(...e)),disabled:0===s.lesson.spaces,class:(0,n.C4)(["btn btn-primary",0===s.lesson.spaces?"bg-pink-200 cursor-not-allowed":"bg-pink-300 hover:bg-pink-400"])}," Add to Cart ",10,P),0===s.lesson.spaces?((0,o.uX)(),(0,o.CE)("p",$," Oh no, stock is finished! 😞 ")):(0,o.Q3)("",!0)])])])}var V={props:{lesson:Object,addToCart:Function},methods:{getImageUrl(e){const t="https://full-stack-cw-backend.onrender.com";return`${t}${e}`}}},U=s(1241);const J=(0,U.A)(V,[["render",I],["__scopeId","data-v-25a77deb"]]);var N=J;const B={class:"sort-options"},D={class:"form-group"},K={class:"form-group"};function W(e,t,s,n,a,c){return(0,o.uX)(),(0,o.CE)("div",B,[(0,o.Lk)("div",D,[t[5]||(t[5]=(0,o.Lk)("label",{for:"sort-attribute"},"Sort By:",-1)),(0,o.bo)((0,o.Lk)("select",{id:"sort-attribute","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedAttribute=e),class:"form-control",onChange:t[1]||(t[1]=(...e)=>c.emitSortChange&&c.emitSortChange(...e))},t[4]||(t[4]=[(0,o.Lk)("option",{value:"subject"},"Subject",-1),(0,o.Lk)("option",{value:"location"},"Location",-1),(0,o.Lk)("option",{value:"price"},"Price",-1),(0,o.Lk)("option",{value:"spaces"},"Spaces",-1)]),544),[[r.u1,a.selectedAttribute]])]),(0,o.Lk)("div",K,[t[7]||(t[7]=(0,o.Lk)("label",{for:"sort-order"},"Order:",-1)),(0,o.bo)((0,o.Lk)("select",{id:"sort-order","onUpdate:modelValue":t[2]||(t[2]=e=>a.selectedOrder=e),class:"form-control",onChange:t[3]||(t[3]=(...e)=>c.emitSortChange&&c.emitSortChange(...e))},t[6]||(t[6]=[(0,o.Lk)("option",{value:"asc"},"Ascending",-1),(0,o.Lk)("option",{value:"desc"},"Descending",-1)]),544),[[r.u1,a.selectedOrder]])])])}var z={data(){return{selectedAttribute:"subject",selectedOrder:"asc"}},methods:{emitSortChange(){this.$emit("sort-lessons",{attribute:this.selectedAttribute,order:this.selectedOrder})}}};const M=(0,U.A)(z,[["render",W],["__scopeId","data-v-a58cccf6"]]);var R=M,Y={components:{LessonCard:N,SortOptions:R},data(){return{lessons:[],cart:[],showCart:!1,name:"",phone:"",message:"",nameError:null,phoneError:null,selectedSort:"subject",selectedOrder:"asc",searchQuery:"",timeout:null}},computed:{SortedLessons(){return Array.isArray(this.lessons)?this.lessons.sort(((e,t)=>{let s;return s="string"===typeof e[this.selectedSort]?e[this.selectedSort].localeCompare(t[this.selectedSort]):e[this.selectedSort]-t[this.selectedSort],"asc"===this.selectedOrder?s:-s})):[]},isFormValid(){return null===this.nameError&&null===this.phoneError&&""!==this.name&&""!==this.phone},isCartEmpty(){return 0===this.cart.length}},methods:{toggleCart(){this.showCart=!this.showCart},handleSort({attribute:e,order:t}){this.selectedSort=e,this.selectedOrder=t},addToCart(e){const t=this.cart.find((t=>t.id===e.id));t?e.spaces>0&&(t.quantity++,e.spaces--):e.spaces>0&&(this.cart.push({...e,quantity:1}),e.spaces--)},removeFromCart(e){const t=this.cart[e];if(t.quantity>1){t.quantity--;const e=this.lessons.find((e=>e.id===t.id));e&&e.spaces++}else{this.cart.splice(e,1);const s=this.lessons.find((e=>e.id===t.id));s&&s.spaces++}},validateForm(){const e=/^[A-Za-z ]+$/;e.test(this.name)?this.nameError=null:this.nameError="Name must contain letters only";const t=/^[0-9]+$/;t.test(this.phone)?this.phoneError=null:this.phoneError="Phone must contain numbers only"},checkout(){if(this.isFormValid){const e={name:this.name,phoneNumber:this.phone,items:this.cart.map((e=>({id:e.id,subject:e.subject,price:e.price,quantity:e.quantity})))};fetch("https://full-stack-cw-backend.onrender.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw new Error("Failed to submit order");return e.json()})).then((e=>{const t=this.cart.map((e=>fetch(`https://full-stack-cw-backend.onrender.com/lessons/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({spaces:e.spaces-e.quantity})}).then((t=>{if(!t.ok)throw new Error(`Failed to update spaces for lesson ID ${e.id}`);return t.json()}))));return Promise.all(t)})).then((e=>{e.forEach((e=>{const t=this.lessons.find((t=>t.id===e.id));t&&(t.spaces=e.spaces)})),this.message="Order has been submitted and lessons updated!",this.cart=[],this.name="",this.phone=""})).catch((e=>{console.error("Error:",e),this.message="There was an error processing your order or updating the lessons."}))}},fetchLessons(){fetch("https://full-stack-cw-backend.onrender.com/lessons").then((e=>e.json())).then((e=>{this.lessons=Array.isArray(e)?e:[]})).catch((e=>console.error("Error fetching lessons:",e)))},fetchSearchedLessons(e=""){e&&fetch(`https://full-stack-cw-backend.onrender.com/search?query=${e}`).then((e=>e.json())).then((e=>{this.lessons=Array.isArray(e)?e:[]})).catch((e=>console.error("Error fetching lessons:",e)))},handleSearch(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{""===this.searchQuery.trim()?this.fetchLessons():this.fetchSearchedLessons(this.searchQuery)}),500)}},watch:{searchQuery(e){this.handleSearch()}},created(){this.fetchLessons()}};const Z=(0,U.A)(Y,[["render",O]]);var G=Z;const H=(0,r.Ef)(G);H.mount("#app")}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,r,o,n){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var c=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[i])}))?r.splice(i--,1):(c=!1,n<a&&(a=n));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],c=r[1],i=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)s.o(c,o)&&(s.m[o]=c[o]);if(i)var d=i(s)}for(t&&t(r);l<a.length;l++)n=a[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self["webpackChunkvue_start_spa"]=self["webpackChunkvue_start_spa"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[504],(function(){return s(1014)}));r=s.O(r)})();
//# sourceMappingURL=app.65486f3c.js.map