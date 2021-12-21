(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7,8],{272:function(t,e,n){"use strict";n.r(e);var r={},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full md:w-1/2"},[n("div",{staticClass:"leading-loose"},[n("form",{staticClass:"\n        max-w-xl\n        m-4\n        p-6\n        sm:p-10\n        bg-secondary-light\n        dark:bg-secondary-dark\n        rounded-lg\n        shadow-xl\n        text-left\n      ",on:{submit:function(t){t.preventDefault}}},[n("p",{staticClass:"\n          text-primary-dark\n          dark:text-primary-light\n          text-2xl\n          font-semibold\n          mb-8\n        "},[t._v("\n        Contact Form\n      ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),n("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Your Name","aria-label":"Name"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-6"},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Your Email","aria-label":"Email"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-6"},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),n("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"subject",name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-6"},[n("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),n("textarea",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-0\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n            dark:font-medium\n          ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-6"},[n("button",{staticClass:"\n            px-4\n            py-2.5\n            text-white\n            font-medium\n            tracking-wider\n            bg-indigo-500\n            hover:bg-indigo-600\n            focus:ring-1 focus:ring-indigo-900\n            rounded-lg\n          ",attrs:{type:"submit","aria-label":"Send Message"}},[t._v("\n          Send Message\n        ")])])}],!1,null,"3925e7bd",null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var r={props:["contacts"]},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full md:w-1/2"},[n("div",{staticClass:"text-left max-w-xl px-6"},[n("h2",{staticClass:"\n        text-2xl text-primary-dark\n        dark:text-primary-light\n        font-semibold\n        mt-12\n        mb-8\n      "},[t._v("\n      Contact details\n    ")]),t._v(" "),n("ul",{},t._l(t.contacts,(function(e){return n("li",{key:e.id,staticClass:"flex"},[n("i",{staticClass:"w-6 text-gray-500 dark:text-gray-400 mr-4",attrs:{"data-feather":e.icon}}),t._v(" "),n("a",{staticClass:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",class:"mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Website and Phone"}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0)])])}),[],!1,null,"764d7051",null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);n(19),n(36);var r=n(27),l=n.n(r),d={scrollToTop:!0,data:function(){return{contacts:[{id:1,name:"Your Address, Your City, Your Country",icon:"map-pin"},{id:2,name:"email@domain.com",icon:"mail"},{id:3,name:"555 8888 888",icon:"phone"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}},o=n(8),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    container\n    mx-auto\n    flex flex-col-reverse\n    md:flex-row md:py-10 md:mt-20\n  "},[n("ContactForm"),t._v(" "),n("ContactDetails",{attrs:{contacts:t.contacts}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContactForm:n(272).default,ContactDetails:n(273).default})}}]);