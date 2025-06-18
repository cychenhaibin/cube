"use strict";(self.webpackChunkcube=self.webpackChunkcube||[]).push([[59],{93175:function(x,h,a){var c;a.r(h),a.d(h,{demos:function(){return k}});var f=a(27424),b=a.n(f),y=a(17061),o=a.n(y),C=a(17156),p=a.n(C),u=a(67294),m=a(68629),k={"checkbox-demo-0":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){return n.createElement(t,null,"Checkbox")}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-0",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => <Checkbox>Checkbox</Checkbox>;`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-1":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t,s,e;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=i.sent,n=l.default,i.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=i.sent,t=r.Checkbox,i.next=10,Promise.resolve().then(a.t.bind(a,67294,19));case 10:return s=i.sent,e=s.useState,i.abrupt("return",{default:function(){var O=e(!1),I=b()(O,2),E=I[0],P=I[1];return n.createElement(t,{checked:E,onChange:function(g){return P(g)}},"Checkbox")}});case 13:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-1",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';
import { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(checked) => setChecked(checked)}>
      Checkbox
    </Checkbox>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-2":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(t,{disabled:!0},"Disabled"),n.createElement(t,{disabled:!0,checked:!0},"Disabled Checked"))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-2",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <>
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox disabled checked>
      Disabled Checked
    </Checkbox>
  </>
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-3":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(t,{readOnly:!0},"ReadOnly"),n.createElement(t,{readOnly:!0,checked:!0},"ReadOnly Checked"))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-3",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <>
    <Checkbox readOnly>ReadOnly</Checkbox>
    <Checkbox readOnly checked>
      ReadOnly Checked
    </Checkbox>
  </>
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-4":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(t,{size:"small"},"Small"),n.createElement(t,null,"Default"),n.createElement(t,{size:"large",checked:!0},"Large"))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-4",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <>
    <Checkbox size="small">Small</Checkbox>
    <Checkbox>Default</Checkbox>
    <Checkbox size="large" checked>
      Large
    </Checkbox>
  </>
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-5":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){return n.createElement(t.Group,null,n.createElement(t,{value:"1",checked:!0},"Option 1"),n.createElement(t,{value:"2"},"Option 2"),n.createElement(t,{value:"3"},"Option 3"))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-5",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <Checkbox.Group>
    <Checkbox value="1" checked>
      Option 1
    </Checkbox>
    <Checkbox value="2">Option 2</Checkbox>
    <Checkbox value="3">Option 3</Checkbox>
  </Checkbox.Group>
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-6":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){return n.createElement(t.Group,{direction:"vertical"},n.createElement(t,{value:"1",checked:!0},"Option 1"),n.createElement(t,{value:"2"},"Option 2"),n.createElement(t,{value:"3"},"Option 3"))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-6",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <Checkbox.Group direction="vertical">
    <Checkbox value="1" checked>
      Option 1
    </Checkbox>
    <Checkbox value="2">Option 2</Checkbox>
    <Checkbox value="3">Option 3</Checkbox>
  </Checkbox.Group>
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}},"checkbox-demo-7":{component:u.memo(u.lazy(p()(o()().mark(function d(){var l,n,r,t;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.resolve().then(a.bind(a,68629));case 6:return r=e.sent,t=r.Checkbox,e.abrupt("return",{default:function(){var i=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}];return n.createElement(t.Group,{options:i})}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"checkbox-demo-7",refAtomIds:["Checkbox"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Checkbox } from 'cube';

export default () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return <Checkbox.Group options={options} />;
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:c||(c=a.t(u,2)),cube:m},renderOpts:{compile:function(){var d=p()(o()().mark(function n(){var r,t=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(335).then(a.bind(a,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,t));case 3:case"end":return e.stop()}},n)}));function l(){return d.apply(this,arguments)}return l}()}}}},30074:function(x,h,a){a.r(h),a.d(h,{texts:function(){return c}});const c=[{value:"\u590D\u9009\u6846\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:11},{value:"\u8BF4\u660E",paraId:1,tocIndex:11},{value:"\u7C7B\u578B",paraId:1,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:11},{value:"checked",paraId:1,tocIndex:11},{value:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"-",paraId:1,tocIndex:11},{value:"defaultChecked",paraId:1,tocIndex:11},{value:"\u521D\u59CB\u662F\u5426\u9009\u4E2D",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"-",paraId:1,tocIndex:11},{value:"disabled",paraId:1,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"readOnly",paraId:1,tocIndex:11},{value:"\u662F\u5426\u53EA\u8BFB",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"value",paraId:1,tocIndex:11},{value:"\u590D\u9009\u6846\u7684\u503C",paraId:1,tocIndex:11},{value:"string",paraId:1,tocIndex:11},{value:" | ",paraId:1,tocIndex:11},{value:"number",paraId:1,tocIndex:11},{value:"-",paraId:1,tocIndex:11},{value:"onChange",paraId:1,tocIndex:11},{value:"\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:11},{value:"(checked: boolean, value?: string | number) => void",paraId:1,tocIndex:11},{value:"-",paraId:1,tocIndex:11},{value:"size",paraId:1,tocIndex:11},{value:"\u5C3A\u5BF8",paraId:1,tocIndex:11},{value:"small",paraId:1,tocIndex:11},{value:" | ",paraId:1,tocIndex:11},{value:"default",paraId:1,tocIndex:11},{value:" | ",paraId:1,tocIndex:11},{value:"large",paraId:1,tocIndex:11},{value:"default",paraId:1,tocIndex:11},{value:"\u53C2\u6570",paraId:2,tocIndex:12},{value:"\u8BF4\u660E",paraId:2,tocIndex:12},{value:"\u7C7B\u578B",paraId:2,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:12},{value:"value",paraId:2,tocIndex:12},{value:"\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879",paraId:2,tocIndex:12},{value:"(string | number)[]",paraId:2,tocIndex:12},{value:"-",paraId:2,tocIndex:12},{value:"defaultValue",paraId:2,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879",paraId:2,tocIndex:12},{value:"(string | number)[]",paraId:2,tocIndex:12},{value:"-",paraId:2,tocIndex:12},{value:"options",paraId:2,tocIndex:12},{value:"\u6307\u5B9A\u53EF\u9009\u9879",paraId:2,tocIndex:12},{value:"{ label: string; value: string | number; disabled?: boolean }[]",paraId:2,tocIndex:12},{value:"-",paraId:2,tocIndex:12},{value:"disabled",paraId:2,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:2,tocIndex:12},{value:"boolean",paraId:2,tocIndex:12},{value:"false",paraId:2,tocIndex:12},{value:"readOnly",paraId:2,tocIndex:12},{value:"\u662F\u5426\u53EA\u8BFB",paraId:2,tocIndex:12},{value:"boolean",paraId:2,tocIndex:12},{value:"false",paraId:2,tocIndex:12},{value:"direction",paraId:2,tocIndex:12},{value:"\u6392\u5217\u65B9\u5411",paraId:2,tocIndex:12},{value:"horizontal",paraId:2,tocIndex:12},{value:" | ",paraId:2,tocIndex:12},{value:"vertical",paraId:2,tocIndex:12},{value:"horizontal",paraId:2,tocIndex:12},{value:"onChange",paraId:2,tocIndex:12},{value:"\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:12},{value:"(values: (string | number)[]) => void",paraId:2,tocIndex:12},{value:"-",paraId:2,tocIndex:12},{value:"size",paraId:2,tocIndex:12},{value:"\u5C3A\u5BF8",paraId:2,tocIndex:12},{value:"small",paraId:2,tocIndex:12},{value:" | ",paraId:2,tocIndex:12},{value:"default",paraId:2,tocIndex:12},{value:" | ",paraId:2,tocIndex:12},{value:"large",paraId:2,tocIndex:12},{value:"default",paraId:2,tocIndex:12}]}}]);
