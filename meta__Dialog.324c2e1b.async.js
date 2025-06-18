"use strict";(self.webpackChunkcube=self.webpackChunkcube||[]).push([[470],{67300:function($,B,n){var f;n.r(B),n.d(B,{demos:function(){return k}});var M=n(17061),i=n.n(M),L=n(27424),y=n.n(L),R=n(17156),m=n.n(R),c=n(67294),h=n(68629),k={"dialog-demo-0":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u6253\u5F00\u5BF9\u8BDD\u6846"),a.createElement(u,{visible:b,title:"\u57FA\u7840\u5BF9\u8BDD\u6846",onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5BF9\u8BDD\u6846")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-0",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u6253\u5F00\u5BF9\u8BDD\u6846</Button>
      <Dialog
        visible={visible}
        title="\u57FA\u7840\u5BF9\u8BDD\u6846"
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5BF9\u8BDD\u6846</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-1":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u81EA\u5B9A\u4E49\u5185\u5BB9"),a.createElement(u,{visible:b,title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("div",{style:{textAlign:"center"}},a.createElement("h3",null,"\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5185\u5BB9"),a.createElement("p",null,"\u53EF\u4EE5\u653E\u7F6E\u4EFB\u4F55\u5185\u5BB9"),a.createElement("img",{src:"https://placekitten.com/300/200",alt:"\u793A\u4F8B\u56FE\u7247"}))))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-1",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u81EA\u5B9A\u4E49\u5185\u5BB9</Button>
      <Dialog
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u5185\u5BB9"
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <div style={{ textAlign: 'center' }}>
          <h3>\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5185\u5BB9</h3>
          <p>\u53EF\u4EE5\u653E\u7F6E\u4EFB\u4F55\u5185\u5BB9</p>
          <img src="https://placekitten.com/300/200" alt="\u793A\u4F8B\u56FE\u7247" />
        </div>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-2":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u81EA\u5B9A\u4E49\u5934\u90E8"),a.createElement(u,{visible:b,title:a.createElement("div",{style:{color:"#1890ff"}},"\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F"),onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("p",null,"\u5BF9\u8BDD\u6846\u5185\u5BB9")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-2",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u81EA\u5B9A\u4E49\u5934\u90E8</Button>
      <Dialog
        visible={visible}
        title={<div style={{ color: '#1890ff' }}>\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F</div>}
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>\u5BF9\u8BDD\u6846\u5185\u5BB9</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-3":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1],p=l(!1),E=y()(p,2),S=E[0],D=E[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u6253\u5F00\u7B2C\u4E00\u5C42\u5BF9\u8BDD\u6846"),a.createElement(u,{visible:b,title:"\u7B2C\u4E00\u5C42\u5BF9\u8BDD\u6846",onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("div",null,a.createElement("p",null,"\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u6253\u5F00\u7B2C\u4E8C\u5C42\u5BF9\u8BDD\u6846"),a.createElement(e,{onClick:function(){return D(!0)}},"\u6253\u5F00\u7B2C\u4E8C\u5C42"),a.createElement(u,{visible:S,title:"\u7B2C\u4E8C\u5C42\u5BF9\u8BDD\u6846",onClose:function(){return D(!1)},onOk:function(){return D(!1)}},a.createElement("p",null,"\u8FD9\u662F\u7B2C\u4E8C\u5C42\u5BF9\u8BDD\u6846\u7684\u5185\u5BB9")))))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-3",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible1(true)}>\u6253\u5F00\u7B2C\u4E00\u5C42\u5BF9\u8BDD\u6846</Button>
      <Dialog
        visible={visible1}
        title="\u7B2C\u4E00\u5C42\u5BF9\u8BDD\u6846"
        onClose={() => setVisible1(false)}
        onOk={() => setVisible1(false)}
      >
        <div>
          <p>\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u6253\u5F00\u7B2C\u4E8C\u5C42\u5BF9\u8BDD\u6846</p>
          <Button onClick={() => setVisible2(true)}>\u6253\u5F00\u7B2C\u4E8C\u5C42</Button>
          <Dialog
            visible={visible2}
            title="\u7B2C\u4E8C\u5C42\u5BF9\u8BDD\u6846"
            onClose={() => setVisible2(false)}
            onOk={() => setVisible2(false)}
          >
            <p>\u8FD9\u662F\u7B2C\u4E8C\u5C42\u5BF9\u8BDD\u6846\u7684\u5185\u5BB9</p>
          </Dialog>
        </div>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-4":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u5782\u76F4\u5C45\u4E2D"),a.createElement(u,{visible:b,title:"\u5782\u76F4\u5C45\u4E2D\u7684\u5BF9\u8BDD\u6846",centered:!0,onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5782\u76F4\u5C45\u4E2D\u7684\u5BF9\u8BDD\u6846")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-4",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u5782\u76F4\u5C45\u4E2D</Button>
      <Dialog
        visible={visible}
        title="\u5782\u76F4\u5C45\u4E2D\u7684\u5BF9\u8BDD\u6846"
        centered
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u5782\u76F4\u5C45\u4E2D\u7684\u5BF9\u8BDD\u6846</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-5":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u53EF\u62D6\u62FD\u5BF9\u8BDD\u6846"),a.createElement(u,{visible:b,title:"\u53EF\u62D6\u62FD\u5BF9\u8BDD\u6846",draggable:!0,onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("p",null,"\u70B9\u51FB\u6807\u9898\u680F\u5E76\u62D6\u52A8\u53EF\u4EE5\u79FB\u52A8\u5BF9\u8BDD\u6846")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-5",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u53EF\u62D6\u62FD\u5BF9\u8BDD\u6846</Button>
      <Dialog
        visible={visible}
        title="\u53EF\u62D6\u62FD\u5BF9\u8BDD\u6846"
        draggable
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>\u70B9\u51FB\u6807\u9898\u680F\u5E76\u62D6\u52A8\u53EF\u4EE5\u79FB\u52A8\u5BF9\u8BDD\u6846</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-6":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u5168\u5C4F\u5BF9\u8BDD\u6846"),a.createElement(u,{visible:b,title:"\u5168\u5C4F\u5BF9\u8BDD\u6846",fullscreen:!0,onClose:function(){return o(!1)},onOk:function(){return o(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5168\u5C4F\u5BF9\u8BDD\u6846")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-6",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u5168\u5C4F\u5BF9\u8BDD\u6846</Button>
      <Dialog
        visible={visible}
        title="\u5168\u5C4F\u5BF9\u8BDD\u6846"
        fullscreen
        onClose={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u5168\u5C4F\u5BF9\u8BDD\u6846</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-7":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1],p=function(){var E=m()(i()().mark(function S(){return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,new Promise(function(P){return setTimeout(P,2e3)});case 3:o(!1),g.next=9;break;case 6:g.prev=6,g.t0=g.catch(0),console.error("\u64CD\u4F5C\u5931\u8D25:",g.t0);case 9:case"end":return g.stop()}},S,null,[[0,6]])}));return function(){return E.apply(this,arguments)}}();return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u5F02\u6B65\u5173\u95ED"),a.createElement(u,{visible:b,title:"\u5F02\u6B65\u5173\u95ED",onClose:function(){return o(!1)},onOk:p},a.createElement("p",null,"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u7B49\u5F85 2 \u79D2\u81EA\u52A8\u5173\u95ED")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-7",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);
  
  const handleOk = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setVisible(false);
    } catch (error) {
      console.error('\u64CD\u4F5C\u5931\u8D25:', error);
    }
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u5F02\u6B65\u5173\u95ED</Button>
      <Dialog
        visible={visible}
        title="\u5F02\u6B65\u5173\u95ED"
        onClose={() => setVisible(false)}
        onOk={handleOk}
      >
        <p>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\u7B49\u5F85 2 \u79D2\u81EA\u52A8\u5173\u95ED</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-8":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u81EA\u5B9A\u4E49\u9875\u811A"),a.createElement(u,{visible:b,title:"\u81EA\u5B9A\u4E49\u9875\u811A",footer:a.createElement("div",null,a.createElement("button",{onClick:function(){return o(!1)}},"Control"),a.createElement("button",{style:{marginLeft:8,background:"#1890ff",color:"#fff"},onClick:function(){return o(!1)}},"Confirm")),onClose:function(){return o(!1)}},a.createElement("p",null,"\u81EA\u5B9A\u4E49\u9875\u811A\u5185\u5BB9")))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-8",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u81EA\u5B9A\u4E49\u9875\u811A</Button>
      <Dialog
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u9875\u811A"
        footer={
          <div>
            <button onClick={() => setVisible(false)}>Control</button>
            <button 
              style={{ marginLeft: 8, background: '#1890ff', color: '#fff' }}
              onClick={() => setVisible(false)}
            >
              Confirm
            </button>
          </div>
        }
        onClose={() => setVisible(false)}
      >
        <p>\u81EA\u5B9A\u4E49\u9875\u811A\u5185\u5BB9</p>
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-9":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u6253\u5F00\u5BF9\u8BDD\u6846"),a.createElement(u,{visible:b,title:"\u6807\u9898",onClose:function(){return o(!1)},onOk:function(){o(!1)}},"\u5BF9\u8BDD\u6846\u5185\u5BB9"))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-9",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u6253\u5F00\u5BF9\u8BDD\u6846</Button>
      <Dialog
        visible={visible}
        title="\u6807\u9898"
        onClose={() => setVisible(false)}
        onOk={() => {
          // \u5904\u7406\u786E\u8BA4\u903B\u8F91
          setVisible(false);
        }}
      >
        \u5BF9\u8BDD\u6846\u5185\u5BB9
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-10":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1],p=l(!1),E=y()(p,2),S=E[0],D=E[1],g=function(){var P=m()(i()().mark(function V(){return i()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return D(!0),O.prev=1,O.next=4,saveData();case 4:o(!1);case 5:return O.prev=5,D(!1),O.finish(5);case 8:case"end":return O.stop()}},V,null,[[1,,5,8]])}));return function(){return P.apply(this,arguments)}}();return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u5F02\u6B65\u5173\u95ED\u793A\u4F8B"),a.createElement(u,{visible:b,title:"\u5F02\u6B65\u5173\u95ED",onClose:function(){return o(!1)},onOk:g},"\u8868\u5355\u5185\u5BB9"))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-10",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    setLoading(true);
    try {
      await saveData(); // \u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C
      setVisible(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u5F02\u6B65\u5173\u95ED\u793A\u4F8B</Button>
      <Dialog
        visible={visible}
        title="\u5F02\u6B65\u5173\u95ED"
        onClose={() => setVisible(false)}
        onOk={handleOk}
      >
        \u8868\u5355\u5185\u5BB9
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"dialog-demo-11":{component:c.memo(c.lazy(m()(i()().mark(function d(){var r,a,l,s,u,e;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return r=t.sent,a=r.default,l=r.useState,t.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return s=t.sent,u=s.Dialog,e=s.Button,t.abrupt("return",{default:function(){var I=l(!1),v=y()(I,2),b=v[0],o=v[1];return a.createElement("div",null,a.createElement(e,{onClick:function(){return o(!0)}},"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE"),a.createElement(u,{visible:b,title:"\u81EA\u5B9A\u4E49\u5E95\u90E8",footer:a.createElement("div",null,a.createElement("button",{onClick:function(){return o(!1)}},"\u8FD4\u56DE"),a.createElement("button",{style:{marginLeft:8,background:"#1890ff",color:"#fff"},onClick:function(){return o(!1)}},"\u63D0\u4EA4")),onClose:function(){return o(!1)}},"\u5BF9\u8BDD\u6846\u5185\u5BB9"))}});case 11:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"dialog-demo-11",refAtomIds:["Dialog"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Dialog, Button } from 'cube';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE</Button>
      <Dialog
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u5E95\u90E8"
        footer={
          <div>
            <button onClick={() => setVisible(false)}>\u8FD4\u56DE</button>
            <button 
              style={{ marginLeft: 8, background: '#1890ff', color: '#fff' }}
              onClick={() => setVisible(false)}
            >
              \u63D0\u4EA4
            </button>
          </div>
        }
        onClose={() => setVisible(false)}
      >
        \u5BF9\u8BDD\u6846\u5185\u5BB9
      </Dialog>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:f||(f=n.t(c,2)),cube:h},renderOpts:{compile:function(){var d=m()(i()().mark(function a(){var l,s=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,s));case 3:case"end":return e.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},50158:function($,B,n){n.r(B),n.d(B,{texts:function(){return f}});const f=[{value:"\u6A21\u6001\u5BF9\u8BDD\u6846\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:1},{value:"Dialog",paraId:1,tocIndex:1},{value:" \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002",paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u5BF9\u8BDD\u6846\u3002",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u5728\u5BF9\u8BDD\u6846\u5185\u653E\u7F6E\u4EFB\u4F55\u5185\u5BB9\u3002",paraId:3,tocIndex:4},{value:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u9898\u5185\u5BB9\u3002",paraId:4,tocIndex:5},{value:"\u652F\u6301\u591A\u5C42\u5BF9\u8BDD\u6846\u5D4C\u5957\u3002",paraId:5,tocIndex:6},{value:"\u8BBE\u7F6E ",paraId:6,tocIndex:7},{value:"centered",paraId:6,tocIndex:7},{value:" \u53EF\u4EE5\u8BA9\u5BF9\u8BDD\u6846\u5782\u76F4\u5C45\u4E2D\u3002",paraId:6,tocIndex:7},{value:"\u8BBE\u7F6E ",paraId:7,tocIndex:8},{value:"draggable",paraId:7,tocIndex:8},{value:" \u53EF\u4EE5\u62D6\u62FD\u5BF9\u8BDD\u6846\u3002",paraId:7,tocIndex:8},{value:"\u8BBE\u7F6E ",paraId:8,tocIndex:9},{value:"fullscreen",paraId:8,tocIndex:9},{value:" \u53EF\u4EE5\u5168\u5C4F\u663E\u793A\u5BF9\u8BDD\u6846\u3002",paraId:8,tocIndex:9},{value:"\u5728\u5173\u95ED\u524D\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\u3002",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u9875\u811A\u6309\u94AE\u3002",paraId:10,tocIndex:11},{value:"\u53C2\u6570",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u7C7B\u578B",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"visible",paraId:11,tocIndex:13},{value:"\u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"title",paraId:11,tocIndex:13},{value:"\u6807\u9898",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"width",paraId:11,tocIndex:13},{value:"\u5BBD\u5EA6",paraId:11,tocIndex:13},{value:"string | number",paraId:11,tocIndex:13},{value:"520",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:"\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E",paraId:11,tocIndex:13},{value:"string | number",paraId:11,tocIndex:13},{value:"15vh",paraId:11,tocIndex:13},{value:"centered",paraId:11,tocIndex:13},{value:"\u662F\u5426\u5782\u76F4\u5C45\u4E2D",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"closable",paraId:11,tocIndex:13},{value:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"true",paraId:11,tocIndex:13},{value:"mask",paraId:11,tocIndex:13},{value:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"true",paraId:11,tocIndex:13},{value:"maskClosable",paraId:11,tocIndex:13},{value:"\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"true",paraId:11,tocIndex:13},{value:"keyboard",paraId:11,tocIndex:13},{value:"\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"true",paraId:11,tocIndex:13},{value:"destroyOnClose",paraId:11,tocIndex:13},{value:"\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1\u5B50\u5143\u7D20",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"fullscreen",paraId:11,tocIndex:13},{value:"\u662F\u5426\u5168\u5C4F\u663E\u793A",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"draggable",paraId:11,tocIndex:13},{value:"\u662F\u5426\u53EF\u62D6\u62FD",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"footer",paraId:11,tocIndex:13},{value:"\u5E95\u90E8\u5185\u5BB9",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u7684\u786E\u5B9A\u53D6\u6D88\u6309\u94AE",paraId:11,tocIndex:13},{value:"afterClose",paraId:11,tocIndex:13},{value:"\u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onClose",paraId:11,tocIndex:13},{value:"\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onOk",paraId:11,tocIndex:13},{value:"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"className",paraId:11,tocIndex:13},{value:"\u5BF9\u8BDD\u6846\u7684\u7C7B\u540D",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"style",paraId:11,tocIndex:13},{value:"\u5BF9\u8BDD\u6846\u7684\u6837\u5F0F",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"Dialog",paraId:12,tocIndex:14},{value:" \u9ED8\u8BA4\u4F1A\u6302\u8F7D\u5728 ",paraId:12,tocIndex:14},{value:"body",paraId:12,tocIndex:14},{value:" \u4E0A\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u6302\u8F7D\u70B9\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:12,tocIndex:14},{value:"ReactDOM.createPortal",paraId:12,tocIndex:14},{value:"\u3002",paraId:12,tocIndex:14},{value:"\u4F7F\u7528 ",paraId:12,tocIndex:14},{value:"draggable",paraId:12,tocIndex:14},{value:" \u5C5E\u6027\u65F6\uFF0C\u5BF9\u8BDD\u6846\u7684\u4F4D\u7F6E\u4F1A\u6839\u636E\u62D6\u62FD\u4F4D\u7F6E\u6539\u53D8\uFF0C\u6B64\u65F6 ",paraId:12,tocIndex:14},{value:"centered",paraId:12,tocIndex:14},{value:" \u5C5E\u6027\u53EF\u80FD\u4E0D\u4F1A\u751F\u6548\u3002",paraId:12,tocIndex:14},{value:"\u5F53\u8BBE\u7F6E ",paraId:12,tocIndex:14},{value:"destroyOnClose",paraId:12,tocIndex:14},{value:" \u65F6\uFF0C\u5173\u95ED\u540E\u4F1A\u9500\u6BC1\u5B50\u5143\u7D20\uFF0C\u518D\u6B21\u6253\u5F00\u65F6\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:12,tocIndex:14},{value:"\u591A\u5C42\u5D4C\u5957\u7684\u5BF9\u8BDD\u6846\u5EFA\u8BAE\u6700\u591A\u4E0D\u8D85\u8FC7\u4E09\u5C42\uFF0C\u4EE5\u514D\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002",paraId:12,tocIndex:14},{value:"\u906E\u7F69\u5C42\u4F7F\u7528\u56FA\u5B9A\u5B9A\u4F4D\uFF0C\u8986\u76D6\u6574\u4E2A\u89C6\u53E3",paraId:13,tocIndex:15},{value:"\u5BF9\u8BDD\u6846\u672C\u8EAB\u4E5F\u4F7F\u7528\u56FA\u5B9A\u5B9A\u4F4D\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u9876\u90E8 15vh",paraId:13,tocIndex:15},{value:"\u53EF\u4EE5\u901A\u8FC7 ",paraId:13,tocIndex:15},{value:"centered",paraId:13,tocIndex:15},{value:" \u5C5E\u6027\u4F7F\u5BF9\u8BDD\u6846\u5782\u76F4\u5C45\u4E2D",paraId:13,tocIndex:15},{value:"\u62D6\u62FD\u529F\u80FD\u901A\u8FC7\u76D1\u542C\u9F20\u6807\u4E8B\u4EF6\u5B9E\u73B0",paraId:13,tocIndex:15},{value:"\u52A8\u753B\u6548\u679C\u4F7F\u7528 CSS \u52A8\u753B\u5B9E\u73B0",paraId:13,tocIndex:15},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u5934\u90E8\u548C\u5E95\u90E8\uFF0C\u4FDD\u6301\u7075\u6D3B\u6027",paraId:13,tocIndex:15},{value:"\u63D0\u4F9B\u591A\u79CD\u914D\u7F6E\u9879\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u9700\u6C42",paraId:13,tocIndex:15},{value:"\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\u793A\u4F8B\uFF1A",paraId:14,tocIndex:16}]}}]);
