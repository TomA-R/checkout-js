(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[5],{1580:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),c=a.n(n);var i=a(658),l=function(e){var t=e.children;return c.a.createElement("header",{className:"cart-header"},c.a.createElement("h3",{className:"cart-title optimizedCheckout-headingSecondary"},c.a.createElement(i.a,{id:"cart.cart_heading"})),t)},s=a(1485),o=a(1483),u=a(1486),d=a(1484);t.default=function(e){var t=e.storeCurrency,a=e.shopperCurrency,i=e.headerLink,m=e.additionalLineItems,h=e.lineItems,p=e.total,f=r.__rest(e,["storeCurrency","shopperCurrency","headerLink","additionalLineItems","lineItems","total"]),y=Object(n.useMemo)((function(){return function(e){return r.__assign({},e,{physicalItems:e.physicalItems.filter((function(e){return"string"!=typeof e.parentId})),digitalItems:e.digitalItems.filter((function(e){return"string"!=typeof e.parentId}))})}(h)}),[h]);return c.a.createElement("article",{className:"cart optimizedCheckout-orderSummary","data-test":"cart"},c.a.createElement(l,null,i),c.a.createElement(o.a,null,c.a.createElement(s.a,{items:y})),c.a.createElement(o.a,null,c.a.createElement(u.a,r.__assign({},f)),m),c.a.createElement(o.a,null,c.a.createElement(d.a,{orderAmount:p,shopperCurrencyCode:a.code,storeCurrencyCode:t.code})))}},1628:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),c=a.n(n),i=a(425),l=a(1580),s=a(1574),o=a(1582),u=a(1573);t.default=Object(i.a)(s.a)((function(e){var t=e.cartUrl,a=r.__rest(e,["cartUrl"]);return Object(o.a)(l.default)(r.__assign({},a,{cartUrl:t,headerLink:c.a.createElement(u.a,{url:t})}))}))}}]);
//# sourceMappingURL=cart-summary-3ecc9bba.js.map