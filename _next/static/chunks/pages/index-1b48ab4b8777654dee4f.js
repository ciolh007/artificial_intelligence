(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(1063),l=t(4651),c=t(7426);var s={};function u(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=l.useRouter(),f=i.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),i=t[0],l=t[1];return{href:i,as:e.as?a.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,w=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var m=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,_=c.useIntersection({rootMargin:"200px"}),b=r(_,2),E=b[0],k=b[1],x=i.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);i.default.useEffect((function(){var e=k&&t&&a.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=s[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(o,d,p,{locale:n})}),[p,d,k,y,t,o]);var L={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:l}))}(e,o,d,p,h,g,w,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof y?y:o&&o.locale,j=o&&o.isLocaleDomain&&a.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);L.href=j||a.addBasePath(a.addLocale(p,M,o&&o.defaultLocale))}return i.default.cloneElement(n,L)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),i=t(3447),a="undefined"!==typeof IntersectionObserver;var l=new Map},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(1664),o=t(5893);function i(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"title",children:"Jacky Baltes - Artificial Intelligence"}),(0,o.jsx)("p",{children:"This site includes a set of teaching materials for my artificial intelligence course."}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"The course will use the following discord server to support discussions."}),(0,o.jsx)("iframe",{src:"https://discord.com/widget?id=712940141429391392&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})]}),(0,o.jsx)(r.default,{href:"/artificial_intelligence",as:"/artificial_intelligence/artificial_intelligence",children:(0,o.jsx)("a",{children:"Artificial Intelligence"})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);