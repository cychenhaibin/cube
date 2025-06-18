"use strict";(self.webpackChunkcube=self.webpackChunkcube||[]).push([[601],{87775:function(C,b,e){var i;e.r(b),e.d(b,{demos:function(){return M}});var P=e(27424),O=e.n(P),E=e(17061),u=e.n(E),$=e(17156),p=e.n($),c=e(67294),m=e(68629),M={"select-demo-0":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=[{value:"1",label:"\u9009\u98791"},{value:"2",label:"\u9009\u98792"},{value:"3",label:"\u9009\u98793"}],a.abrupt("return",{default:function(){return t.createElement(r,{style:{width:"50%"},options:d,placeholder:"\u8BF7\u9009\u62E9",onChange:function(I){return console.log("selected value:",I)}})}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-0",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '\u9009\u98791' },
  { value: '2', label: '\u9009\u98792' },
  { value: '3', label: '\u9009\u98793' },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    placeholder="\u8BF7\u9009\u62E9"
    onChange={(value) => console.log('selected value:', value)}
  />
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-1":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=[{value:"1",label:"\u9009\u98791"},{value:"2",label:"\u9009\u98792",disabled:!0},{value:"3",label:"\u9009\u98793"}],a.abrupt("return",{default:function(){return t.createElement(t.Fragment,null,t.createElement(r,{style:{width:"50%"},options:d,disabled:!0,placeholder:"\u7981\u7528\u72B6\u6001"}),t.createElement("br",null),t.createElement("br",null),t.createElement(r,{style:{width:"50%"},options:d,placeholder:"\u9009\u98792\u88AB\u7981\u7528"}))}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-1",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '\u9009\u98791' },
  { value: '2', label: '\u9009\u98792', disabled: true },
  { value: '3', label: '\u9009\u98793' },
];

export default () => (
  <>
    <Select style={{ width: '50%' }} options={options} disabled placeholder="\u7981\u7528\u72B6\u6001" />
    <br />
    <br />
    <Select style={{ width: '50%' }} options={options} placeholder="\u9009\u98792\u88AB\u7981\u7528" />
  </>
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-2":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=[{value:"1",label:"\u9009\u98791"},{value:"2",label:"\u9009\u98792"},{value:"3",label:"\u9009\u98793"}],a.abrupt("return",{default:function(){return t.createElement(r,{style:{width:"50%"},options:d,clearable:!0,placeholder:"\u8BF7\u9009\u62E9",onChange:function(I){return console.log("selected value:",I)}})}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-2",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '\u9009\u98791' },
  { value: '2', label: '\u9009\u98792' },
  { value: '3', label: '\u9009\u98793' },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    onChange={(value) => console.log('selected value:', value)}
  />
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-3":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=[{value:"1",label:"\u9009\u98791"},{value:"2",label:"\u9009\u98792"},{value:"3",label:"\u9009\u98793"}],a.abrupt("return",{default:function(){return t.createElement(r,{style:{width:"50%"},options:d,multiple:!0,placeholder:"\u8BF7\u9009\u62E9",onChange:function(I){return console.log("selected values:",I)}})}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-3",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '\u9009\u98791' },
  { value: '2', label: '\u9009\u98792' },
  { value: '3', label: '\u9009\u98793' },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    multiple
    placeholder="\u8BF7\u9009\u62E9"
    onChange={(value) => console.log('selected values:', value)}
  />
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-4":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=[{label:"\u70ED\u95E8\u57CE\u5E02",options:[{value:"Shanghai",label:"\u4E0A\u6D77"},{value:"Beijing",label:"\u5317\u4EAC"}]},{label:"\u57CE\u5E02\u540D",options:[{value:"Chengdu",label:"\u6210\u90FD"},{value:"Shenzhen",label:"\u6DF1\u5733"},{value:"Guangzhou",label:"\u5E7F\u5DDE"},{value:"Dalian",label:"\u5927\u8FDE"}]}],a.abrupt("return",{default:function(){return t.createElement(r,{style:{width:"50%"},options:d,placeholder:"\u8BF7\u9009\u62E9",onChange:function(I){return console.log("selected value:",I)}})}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-4",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const options = [
  {
    label: '\u70ED\u95E8\u57CE\u5E02',
    options: [
      { value: 'Shanghai', label: '\u4E0A\u6D77' },
      { value: 'Beijing', label: '\u5317\u4EAC' },
    ],
  },
  {
    label: '\u57CE\u5E02\u540D',
    options: [
      { value: 'Chengdu', label: '\u6210\u90FD' },
      { value: 'Shenzhen', label: '\u6DF1\u5733' },
      { value: 'Guangzhou', label: '\u5E7F\u5DDE' },
      { value: 'Dalian', label: '\u5927\u8FDE' },
    ],
  },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    placeholder="\u8BF7\u9009\u62E9"
    onChange={(value) => console.log('selected value:', value)}
  />
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-5":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=[{value:"1",label:"\u9009\u98791"},{value:"2",label:"\u9009\u98792"},{value:"3",label:"\u9009\u98793"}],a.abrupt("return",{default:function(){return t.createElement(r,{style:{width:"50%"},options:d,filterable:!0,placeholder:"\u8BF7\u9009\u62E9",onChange:function(I){return console.log("selected value:",I)}})}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-5",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const options = [
  { value: '1', label: '\u9009\u98791' },
  { value: '2', label: '\u9009\u98792' },
  { value: '3', label: '\u9009\u98793' },
];

export default () => (
  <Select
    style={{ width: '50%' }}
    options={options}
    filterable
    placeholder="\u8BF7\u9009\u62E9"
    onChange={(value) => console.log('selected value:', value)}
  />
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-6":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=a.sent,t=o.default,a.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=a.sent,r=l.Select,d=function(v){return new Promise(function(I){setTimeout(function(){var x=[{value:"1",label:"\u9009\u98791"},{value:"2",label:"\u9009\u98792"},{value:"3",label:"\u9009\u98793"}].filter(function(h){return h.label.toLowerCase().includes(v.toLowerCase())});I(x)},200)})},a.abrupt("return",{default:function(){return t.createElement(r,{style:{width:"50%"},filterable:!0,remoteMethod:d,placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",onChange:function(I){return console.log("selected value:",I)}})}});case 10:case"end":return a.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-6",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select } from 'cube';

const remoteMethod = (query: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const options = [
        { value: '1', label: '\u9009\u98791' },
        { value: '2', label: '\u9009\u98792' },
        { value: '3', label: '\u9009\u98793' },
      ].filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));
      resolve(options);
    }, 200);
  });
};

export default () => (
  <Select
    style={{ width: '50%' }}
    filterable
    remoteMethod={remoteMethod}
    placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
    onChange={(value) => console.log('selected value:', value)}
  />
);`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"select-demo-7":{component:c.memo(c.lazy(p()(u()().mark(function s(){var o,t,l,r,d,n,a;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=v.sent,t=o.default,v.next=6,Promise.resolve().then(e.bind(e,68629));case 6:return l=v.sent,r=l.Select,d=[{value:"1",label:"\u9009\u98791",desc:"\u63CF\u8FF01"},{value:"2",label:"\u9009\u98792",desc:"\u63CF\u8FF02"},{value:"3",label:"\u9009\u98793",desc:"\u63CF\u8FF03"}],n=function(x){var h=x.option;if(!h||!h.label)return null;var g=h;return t.createElement("div",{className:"ice-select-option-content"},t.createElement("div",{className:"ice-select-option-content-label"},g.label),t.createElement("div",{className:"ice-select-option-content-desc"},g.desc))},a=function(){var x=t.useState(""),h=O()(x,2),g=h[0],R=h[1];return t.createElement(r,{style:{width:"50%"},options:d,value:g,optionRenderer:function(y){return t.createElement(n,{option:y})},renderTag:function(y){return t.createElement("span",null,y.label)},placeholder:"\u8BF7\u9009\u62E9",onChange:function(y){R(y)},filterable:!0})},v.abrupt("return",{default:a});case 12:case"end":return v.stop()}},s)})))),asset:{type:"BLOCK",id:"select-demo-7",refAtomIds:["Select"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select, SelectOption } from 'cube';

interface CustomSelectOption extends SelectOption {
  desc?: string;
}

const options: CustomSelectOption[] = [
  { value: '1', label: '\u9009\u98791', desc: '\u63CF\u8FF01' },
  { value: '2', label: '\u9009\u98792', desc: '\u63CF\u8FF02' },
  { value: '3', label: '\u9009\u98793', desc: '\u63CF\u8FF03' },
];

// \u7528\u4E8E\u4E0B\u62C9\u9009\u9879\u7684\u6E32\u67D3
const CustomOption = ({ option }: { option: SelectOption }) => {
  if (!option || !option.label) return null;

  const customOption = option as CustomSelectOption;
  return (
    <div className="ice-select-option-content">
      <div className="ice-select-option-content-label">{customOption.label}</div>
      <div className="ice-select-option-content-desc">{customOption.desc}</div>
    </div>
  );
};

const Demo = () => {
  const [value, setValue] = React.useState<string | number>('');

  return (
    <Select
      style={{ width: '50%' }}
      options={options}
      value={value}
      optionRenderer={(option) => <CustomOption option={option} />}
      renderTag={(option) => <span>{option.label}</span>}
      placeholder="\u8BF7\u9009\u62E9"
      onChange={(val) => {
        setValue(val);
      }}
      filterable
    />
  );
};

export default Demo;`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(c,2)),cube:m},renderOpts:{compile:function(){var s=p()(u()().mark(function t(){var l,r=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}}}},64747:function(C,b,e){e.r(b),e.d(b,{texts:function(){return i}});const i=[{value:"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u5E7F\u6CDB\u7684\u57FA\u7840\u5355\u9009\u3002",paraId:1,tocIndex:1},{value:"\u9009\u62E9\u5668\u4E0D\u53EF\u7528\u72B6\u6001\u3002",paraId:2,tocIndex:2},{value:"\u5305\u542B\u6E05\u7A7A\u6309\u94AE\uFF0C\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u4E3A\u521D\u59CB\u72B6\u6001\u3002",paraId:3,tocIndex:3},{value:"\u9002\u7528\u6027\u8F83\u5E7F\u7684\u57FA\u7840\u591A\u9009\uFF0C\u7528 Tag \u5C55\u793A\u5DF2\u9009\u9879\u3002",paraId:4,tocIndex:4},{value:"\u5907\u9009\u9879\u8FDB\u884C\u5206\u7EC4\u5C55\u793A\u3002",paraId:5,tocIndex:5},{value:"\u53EF\u4EE5\u5229\u7528\u641C\u7D22\u529F\u80FD\u5FEB\u901F\u67E5\u627E\u9009\u9879\u3002",paraId:6,tocIndex:6},{value:"\u4ECE\u670D\u52A1\u5668\u641C\u7D22\u6570\u636E\uFF0C\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u67E5\u627E\u3002",paraId:7,tocIndex:7},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5907\u9009\u9879\u7684\u6E32\u67D3\u5185\u5BB9\u3002",paraId:8,tocIndex:8},{value:"\u53C2\u6570",paraId:9,tocIndex:10},{value:"\u8BF4\u660E",paraId:9,tocIndex:10},{value:"\u7C7B\u578B",paraId:9,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:10},{value:"value",paraId:9,tocIndex:10},{value:"\u5F53\u524D\u9009\u4E2D\u7684\u503C",paraId:9,tocIndex:10},{value:"string | number | (string | number)[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"defaultValue",paraId:9,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C",paraId:9,tocIndex:10},{value:"string | number | (string | number)[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"options",paraId:9,tocIndex:10},{value:"\u9009\u9879\u6570\u7EC4",paraId:9,tocIndex:10},{value:"SelectOptions",paraId:9,tocIndex:10},{value:"[]",paraId:9,tocIndex:10},{value:"onChange",paraId:9,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:9,tocIndex:10},{value:"(value: string | number | (string | number)[]) => void",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"onSearch",paraId:9,tocIndex:10},{value:"\u641C\u7D22\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:9,tocIndex:10},{value:"(value: string) => void",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"onLoad",paraId:9,tocIndex:10},{value:"\u8FDC\u7A0B\u52A0\u8F7D\u5B8C\u6210\u65F6\u89E6\u53D1",paraId:9,tocIndex:10},{value:"() => void",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"onClear",paraId:9,tocIndex:10},{value:"\u6E05\u7A7A\u9009\u62E9\u65F6\u89E6\u53D1",paraId:9,tocIndex:10},{value:"() => void",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"placeholder",paraId:9,tocIndex:10},{value:"\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"\u8BF7\u9009\u62E9",paraId:9,tocIndex:10},{value:"disabled",paraId:9,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"loading",paraId:9,tocIndex:10},{value:"\u662F\u5426\u52A0\u8F7D\u4E2D",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"multiple",paraId:9,tocIndex:10},{value:"\u662F\u5426\u591A\u9009",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"filterable",paraId:9,tocIndex:10},{value:"\u662F\u5426\u53EF\u641C\u7D22",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"clearable",paraId:9,tocIndex:10},{value:"\u662F\u5426\u53EF\u6E05\u7A7A",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"remoteMethod",paraId:9,tocIndex:10},{value:"\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5",paraId:9,tocIndex:10},{value:"(query: string) => Promise<SelectOptions>",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"renderTag",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u6E32\u67D3\u51FD\u6570",paraId:9,tocIndex:10},{value:"(option: SelectOption) => React.ReactNode",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"optionRenderer",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u9009\u9879\u6E32\u67D3\u51FD\u6570",paraId:9,tocIndex:10},{value:"(option: SelectOption) => React.ReactNode",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"className",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"style",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:9,tocIndex:10},{value:"React.CSSProperties",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"locale",paraId:9,tocIndex:10},{value:"\u8BED\u8A00\u5305\u914D\u7F6E",paraId:9,tocIndex:10},{value:"{ placeholder?: string; noData?: string; loading?: string; }",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u53C2\u6570",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"\u7C7B\u578B",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"value",paraId:10,tocIndex:11},{value:"\u9009\u9879\u7684\u503C",paraId:10,tocIndex:11},{value:"string | number",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"label",paraId:10,tocIndex:11},{value:"\u9009\u9879\u7684\u6807\u7B7E",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disabled",paraId:10,tocIndex:11},{value:"\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"\u53C2\u6570",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"label",paraId:11,tocIndex:12},{value:"\u5206\u7EC4\u7684\u6807\u7B7E",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"options",paraId:11,tocIndex:12},{value:"\u5206\u7EC4\u7684\u9009\u9879",paraId:11,tocIndex:12},{value:"SelectOption[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528\u8BE5\u5206\u7EC4",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12}]}}]);
