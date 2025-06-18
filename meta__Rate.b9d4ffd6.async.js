"use strict";(self.webpackChunkcube=self.webpackChunkcube||[]).push([[62],{2941:function(M,S,e){var m;e.r(S),e.d(S,{demos:function(){return L}});var A=e(42122),I=e.n(A),O=e(17061),s=e.n(O),T=e(27424),C=e.n(T),$=e(17156),f=e.n($),i=e(67294),E=e(68629),L={"rate-demo-0":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l(0),v=C()(h,2),u=v[0],p=v[1];return a.createElement("div",null,a.createElement(d,{value:u,onChange:p}),a.createElement("div",{style:{marginTop:8}},"\u5F53\u524D\u8BC4\u5206\uFF1A",u," \u5206"))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-0",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate value={value} onChange={setValue} />
      <div style={{ marginTop: 8 }}>
        \u5F53\u524D\u8BC4\u5206\uFF1A{value} \u5206
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}},"rate-demo-1":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l(0),v=C()(h,2),u=v[0],p=v[1];return a.createElement("div",null,a.createElement(d,{value:u,onChange:p,colors:["#F56C6C","#E6A23C","#67C23A"],lowThreshold:2,highThreshold:4}),a.createElement("div",{style:{marginTop:8}},u<=2&&a.createElement("span",{style:{color:"#F56C6C"}},"\u8F83\u5DEE (",u," \u5206)"),u>2&&u<=4&&a.createElement("span",{style:{color:"#E6A23C"}},"\u4E00\u822C (",u," \u5206)"),u>4&&a.createElement("span",{style:{color:"#67C23A"}},"\u4F18\u79C0 (",u," \u5206)")))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-1",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate 
        value={value}
        onChange={setValue}
        colors={['#F56C6C', '#E6A23C', '#67C23A']}
        lowThreshold={2}
        highThreshold={4}
      />
      <div style={{ marginTop: 8 }}>
        {value <= 2 && <span style={{ color: '#F56C6C' }}>\u8F83\u5DEE ({value} \u5206)</span>}
        {value > 2 && value <= 4 && <span style={{ color: '#E6A23C' }}>\u4E00\u822C ({value} \u5206)</span>}
        {value > 4 && <span style={{ color: '#67C23A' }}>\u4F18\u79C0 ({value} \u5206)</span>}
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}},"rate-demo-2":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l(0),v=C()(h,2),u=v[0],p=v[1],b=["\u6781\u5DEE","\u5931\u671B","\u4E00\u822C","\u6EE1\u610F","\u60CA\u559C"];return a.createElement("div",null,a.createElement(d,{value:u,onChange:p,showText:!0,texts:b}),a.createElement("div",{style:{marginTop:8}},"\u60A8\u7684\u8BC4\u4EF7\uFF1A",u?b[u-1]:"\u672A\u8BC4\u5206"))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-2",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  const texts = ['\u6781\u5DEE', '\u5931\u671B', '\u4E00\u822C', '\u6EE1\u610F', '\u60CA\u559C'];
  
  return (
    <div>
      <Rate 
        value={value}
        onChange={setValue}
        showText 
        texts={texts}
      />
      <div style={{ marginTop: 8 }}>
        \u60A8\u7684\u8BC4\u4EF7\uFF1A{value ? texts[value - 1] : '\u672A\u8BC4\u5206'}
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}},"rate-demo-3":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l(0),v=C()(h,2),u=v[0],p=v[1];return a.createElement("div",null,a.createElement(d,{value:u,onChange:p,allowClear:!0}),a.createElement("div",{style:{marginTop:8}},"\u5F53\u524D\u8BC4\u5206\uFF1A",u||"\u672A\u8BC4\u5206"," ",u?"\u5206":"",u>0&&a.createElement("span",{style:{marginLeft:8,fontSize:12,color:"#999"}},"(\u70B9\u51FB\u76F8\u540C\u5206\u6570\u53EF\u6E05\u9664)")))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-3",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate 
        value={value}
        onChange={setValue}
        allowClear
      />
      <div style={{ marginTop: 8 }}>
        \u5F53\u524D\u8BC4\u5206\uFF1A{value || '\u672A\u8BC4\u5206'} {value ? '\u5206' : ''}
        {value > 0 && <span style={{ marginLeft: 8, fontSize: 12, color: '#999' }}>(\u70B9\u51FB\u76F8\u540C\u5206\u6570\u53EF\u6E05\u9664)</span>}
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}},"rate-demo-4":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l(0),v=C()(h,2),u=v[0],p=v[1];return a.createElement("div",null,a.createElement(d,{allowHalf:!0,value:u,onChange:p}),a.createElement("div",{style:{marginTop:8}},"\u5F53\u524D\u8BC4\u5206\uFF1A",u," \u5206"))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-4",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <Rate 
        allowHalf 
        value={value} 
        onChange={setValue}
      />
      <div style={{ marginTop: 8 }}>
        \u5F53\u524D\u8BC4\u5206\uFF1A{value} \u5206
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}},"rate-demo-5":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l({star:0,heart:0,like:0}),v=C()(h,2),u=v[0],p=v[1];return a.createElement("div",null,a.createElement("div",{style:{marginBottom:16}},a.createElement(d,{icon:"star",value:u.star,onChange:function(P){return p(function(y){return I()(I()({},y),{},{star:P})})}}),a.createElement("span",{style:{marginLeft:8}},"\u661F\u661F\u8BC4\u5206\uFF1A",u.star," \u5206")),a.createElement("div",{style:{marginBottom:16}},a.createElement(d,{icon:"heart",value:u.heart,onChange:function(P){return p(function(y){return I()(I()({},y),{},{heart:P})})}}),a.createElement("span",{style:{marginLeft:8}},"\u5FC3\u5F62\u8BC4\u5206\uFF1A",u.heart," \u5206")))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-5",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [values, setValues] = useState({
    star: 0,
    heart: 0,
    like: 0
  });
  
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Rate 
          icon="star" 
          value={values.star} 
          onChange={(val) => setValues(prev => ({ ...prev, star: val }))}
        />
        <span style={{ marginLeft: 8 }}>\u661F\u661F\u8BC4\u5206\uFF1A{values.star} \u5206</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Rate 
          icon="heart" 
          value={values.heart} 
          onChange={(val) => setValues(prev => ({ ...prev, heart: val }))}
        />
        <span style={{ marginLeft: 8 }}>\u5FC3\u5F62\u8BC4\u5206\uFF1A{values.heart} \u5206</span>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}},"rate-demo-6":{component:i.memo(i.lazy(f()(s()().mark(function c(){var r,a,l,o,d;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,l=r.useState,n.next=7,Promise.resolve().then(e.bind(e,68629));case 7:return o=n.sent,d=o.Rate,n.abrupt("return",{default:function(){var h=l({value:0,allowHalf:!1,allowClear:!0,disabled:!1,icon:"star"}),v=C()(h,2),u=v[0],p=v[1],b=["star","heart","like"],P=["\u6781\u5DEE","\u5931\u671B","\u4E00\u822C","\u6EE1\u610F","\u60CA\u559C"];return a.createElement("div",null,a.createElement("div",{style:{marginBottom:20}},a.createElement(d,{value:u.value,onChange:function(g){return p(function(x){return I()(I()({},x),{},{value:g})})},allowHalf:u.allowHalf,allowClear:u.allowClear,disabled:u.disabled,icon:u.icon,showText:!0,texts:P})),a.createElement("div",{style:{marginBottom:16}},"\u5F53\u524D\u8BC4\u5206\uFF1A",u.value," \u5206",u.value>0&&a.createElement("span",null,"\uFF08",P[Math.ceil(u.value)-1],"\uFF09")),a.createElement("div",{style:{marginBottom:8}},a.createElement("label",{style:{marginRight:16}},a.createElement("input",{type:"checkbox",checked:u.allowHalf,onChange:function(g){return p(function(x){return I()(I()({},x),{},{allowHalf:g.target.checked})})}}),"\u5141\u8BB8\u534A\u661F"),a.createElement("label",{style:{marginRight:16}},a.createElement("input",{type:"checkbox",checked:u.allowClear,onChange:function(g){return p(function(x){return I()(I()({},x),{},{allowClear:g.target.checked})})}}),"\u53EF\u6E05\u9664"),a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:u.disabled,onChange:function(g){return p(function(x){return I()(I()({},x),{},{disabled:g.target.checked})})}}),"\u7981\u7528")),a.createElement("div",null,"\u56FE\u6807\u7C7B\u578B\uFF1A",a.createElement("select",{value:u.icon,onChange:function(g){return p(function(x){return I()(I()({},x),{},{icon:g.target.value})})},style:{marginLeft:8}},b.map(function(y){return a.createElement("option",{key:y,value:y},y)}))))}});case 10:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"rate-demo-6",refAtomIds:["Rate"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Rate } from 'cube';

export default () => {
  const [config, setConfig] = useState({
    value: 0,
    allowHalf: false,
    allowClear: true,
    disabled: false,
    icon: 'star'
  });
  
  const icons = ['star', 'heart', 'like'];
  const texts = ['\u6781\u5DEE', '\u5931\u671B', '\u4E00\u822C', '\u6EE1\u610F', '\u60CA\u559C'];

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Rate 
          value={config.value}
          onChange={(val) => setConfig(prev => ({ ...prev, value: val }))}
          allowHalf={config.allowHalf}
          allowClear={config.allowClear}
          disabled={config.disabled}
          icon={config.icon}
          showText
          texts={texts}
        />
      </div>
      
      <div style={{ marginBottom: 16 }}>
        \u5F53\u524D\u8BC4\u5206\uFF1A{config.value} \u5206
        {config.value > 0 && <span>\uFF08{texts[Math.ceil(config.value) - 1]}\uFF09</span>}
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ marginRight: 16 }}>
          <input
            type="checkbox"
            checked={config.allowHalf}
            onChange={(e) => setConfig(prev => ({ ...prev, allowHalf: e.target.checked }))}
          />
          \u5141\u8BB8\u534A\u661F
        </label>

        <label style={{ marginRight: 16 }}>
          <input
            type="checkbox"
            checked={config.allowClear}
            onChange={(e) => setConfig(prev => ({ ...prev, allowClear: e.target.checked }))}
          />
          \u53EF\u6E05\u9664
        </label>

        <label>
          <input
            type="checkbox"
            checked={config.disabled}
            onChange={(e) => setConfig(prev => ({ ...prev, disabled: e.target.checked }))}
          />
          \u7981\u7528
        </label>
      </div>

      <div>
        \u56FE\u6807\u7C7B\u578B\uFF1A
        <select
          value={config.icon}
          onChange={(e) => setConfig(prev => ({ ...prev, icon: e.target.value }))}
          style={{ marginLeft: 8 }}
        >
          {icons.map(icon => (
            <option key={icon} value={icon}>{icon}</option>
          ))}
        </select>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:m||(m=e.t(i,2)),cube:E},renderOpts:{compile:function(){var c=f()(s()().mark(function a(){var l,o=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,o));case 3:case"end":return t.stop()}},a)}));function r(){return c.apply(this,arguments)}return r}()}}}},4712:function(M,S,e){e.r(S),e.d(S,{texts:function(){return m}});const m=[{value:"\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u661F\u661F\u8FDB\u884C\u8BC4\u5206\u3002",paraId:1,tocIndex:1},{value:"\u8BC4\u5206\u9ED8\u8BA4\u88AB\u5206\u4E3A\u4E09\u4E2A\u7B49\u7EA7\uFF0C\u4E0D\u540C\u5206\u6570\u6BB5\u663E\u793A\u4E0D\u540C\u7684\u989C\u8272\u3002",paraId:2,tocIndex:2},{value:"\u7528\u8F85\u52A9\u6587\u5B57\u76F4\u63A5\u8868\u8FBE\u5BF9\u5E94\u5206\u6570\u7684\u8BC4\u4EF7\u3002",paraId:3,tocIndex:3},{value:"\u652F\u6301\u91CD\u7F6E\u8BC4\u5206\u3002",paraId:4,tocIndex:4},{value:"\u652F\u6301\u66F4\u7CBE\u786E\u7684\u8BC4\u5206\u3002",paraId:5,tocIndex:5},{value:"\u63D0\u4F9B\u591A\u79CD\u56FE\u6807\u9009\u62E9\u3002",paraId:6,tocIndex:6},{value:"\u7ED3\u5408\u591A\u4E2A\u7279\u6027\u7684\u7EFC\u5408\u793A\u4F8B\u3002",paraId:7,tocIndex:7},{value:"\u53C2\u6570",paraId:8,tocIndex:9},{value:"\u8BF4\u660E",paraId:8,tocIndex:9},{value:"\u7C7B\u578B",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:9},{value:"value",paraId:8,tocIndex:9},{value:"\u5F53\u524D\u503C",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"defaultValue",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"0",paraId:8,tocIndex:9},{value:"max",paraId:8,tocIndex:9},{value:"\u6700\u5927\u5206\u503C",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"5",paraId:8,tocIndex:9},{value:"allowHalf",paraId:8,tocIndex:9},{value:"\u662F\u5426\u5141\u8BB8\u534A\u9009",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"allowClear",paraId:8,tocIndex:9},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"disabled",paraId:8,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"readonly",paraId:8,tocIndex:9},{value:"\u662F\u5426\u53EA\u8BFB",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"texts",paraId:8,tocIndex:9},{value:"\u8F85\u52A9\u6587\u5B57\u6570\u7EC4",paraId:8,tocIndex:9},{value:"string[]",paraId:8,tocIndex:9},{value:"[]",paraId:8,tocIndex:9},{value:"showText",paraId:8,tocIndex:9},{value:"\u662F\u5426\u663E\u793A\u8F85\u52A9\u6587\u5B57",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"icon",paraId:8,tocIndex:9},{value:"\u56FE\u6807\u7C7B\u578B",paraId:8,tocIndex:9},{value:"'star' | 'heart' | 'like'",paraId:8,tocIndex:9},{value:"'star'",paraId:8,tocIndex:9},{value:"colors",paraId:8,tocIndex:9},{value:"\u4E09\u4E2A\u7B49\u7EA7\u5BF9\u5E94\u7684\u989C\u8272\u6570\u7EC4",paraId:8,tocIndex:9},{value:"string[]",paraId:8,tocIndex:9},{value:"['#F7BA2A', '#F7BA2A', '#F7BA2A']",paraId:8,tocIndex:9},{value:"lowThreshold",paraId:8,tocIndex:9},{value:"\u4F4E\u5206\u548C\u4E2D\u7B49\u5206\u6570\u7684\u754C\u9650\u503C",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"2",paraId:8,tocIndex:9},{value:"highThreshold",paraId:8,tocIndex:9},{value:"\u9AD8\u5206\u548C\u4E2D\u7B49\u5206\u6570\u7684\u754C\u9650\u503C",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"4",paraId:8,tocIndex:9},{value:"onChange",paraId:8,tocIndex:9},{value:"\u8BC4\u5206\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:8,tocIndex:9},{value:"(value: number) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF1A",paraId:9,tocIndex:10},{value:`:root {
  --ice-rate-font-size: 20px;
  --ice-rate-icon-color: #E8E8E8;
  --ice-rate-active-color: #F7BA2A;
  --ice-rate-text-color: #909399;
  --ice-rate-text-font-size: 14px;
}
`,paraId:10,tocIndex:10},{value:"value",paraId:11,tocIndex:11},{value:" \u548C ",paraId:11,tocIndex:11},{value:"defaultValue",paraId:11,tocIndex:11},{value:" \u7684\u53D6\u503C\u8303\u56F4\u662F 0 \u5230 ",paraId:11,tocIndex:11},{value:"max",paraId:11,tocIndex:11},{value:"\u3002",paraId:11,tocIndex:11},{value:"\u5F53\u540C\u65F6\u6307\u5B9A ",paraId:11,tocIndex:11},{value:"value",paraId:11,tocIndex:11},{value:" \u548C ",paraId:11,tocIndex:11},{value:"defaultValue",paraId:11,tocIndex:11},{value:" \u65F6\uFF0C",paraId:11,tocIndex:11},{value:"value",paraId:11,tocIndex:11},{value:" \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002",paraId:11,tocIndex:11},{value:"colors",paraId:11,tocIndex:11},{value:" \u6570\u7EC4\u5FC5\u987B\u5305\u542B\u4E09\u4E2A\u5143\u7D20\uFF0C\u5206\u522B\u5BF9\u5E94\u4F4E\u5206\u3001\u4E2D\u7B49\u5206\u548C\u9AD8\u5206\u7684\u989C\u8272\u3002",paraId:11,tocIndex:11},{value:"\u4F7F\u7528 ",paraId:11,tocIndex:11},{value:"allowHalf",paraId:11,tocIndex:11},{value:" \u65F6\uFF0C",paraId:11,tocIndex:11},{value:"value",paraId:11,tocIndex:11},{value:" \u548C ",paraId:11,tocIndex:11},{value:"defaultValue",paraId:11,tocIndex:11},{value:" \u53EF\u4EE5\u662F\u5C0F\u6570\uFF0C\u4F46\u53EA\u652F\u6301 .5 \u7684\u500D\u6570\u3002",paraId:11,tocIndex:11}]}}]);
