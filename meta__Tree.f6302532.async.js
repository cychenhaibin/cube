(self.webpackChunkcube=self.webpackChunkcube||[]).push([[221],{91375:function(D,m,n){"use strict";var i;n.r(m),n.d(m,{demos:function(){return C}});var O=n(27424),K=n.n(O),M=n(17061),d=n.n(M),k=n(13012),y=n.n(k),R=n(17156),c=n.n(R),u=n(67294),h=n(68629),v=n(44949),C={"tree-demo-0":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level two 1-1"},{key:"1-2",title:"Level two 1-2"}]},{key:"2",title:"Level two 2"}];return r.createElement(l,{data:s})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-0",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
        },
        {
          key: '1-2',
          title: 'Level two 1-2',
        },
      ],
    },
    {
      key: '2',
      title: 'Level two 2',
    },
  ];

  return <Tree data={treeData} />;
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-1":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level two 1-1"},{key:"1-2",title:"Level two 1-2"}]}];return r.createElement(l,{data:s,selectable:!0,multiple:!0,defaultSelectedKeys:["1-1"],onSelect:function(b,f){console.log("\u5DF2\u9009\u62E9:",b,f)}})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-1",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
        },
        {
          key: '1-2',
          title: 'Level two 1-2',
        },
      ],
    },
  ];

  return (
    <Tree
      data={treeData}
      selectable
      multiple
      defaultSelectedKeys={['1-1']}
      onSelect={(selectedKeys, info) => {
        console.log('\u5DF2\u9009\u62E9:', selectedKeys, info);
      }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-2":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level one 1-1"},{key:"1-2",title:"Level two 1-2"}]}];return r.createElement(l,{data:s,checkable:!0,defaultCheckedKeys:["1-1"],onCheck:function(b,f){console.log("\u5DF2\u52FE\u9009:",b,f)}})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-2",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level one 1-1',
        },
        {
          key: '1-2',
          title: 'Level two 1-2',
        },
      ],
    },
  ];

  return (
    <Tree
      data={treeData}
      checkable
      defaultCheckedKeys={['1-1']}
      onCheck={(checkedKeys, info) => {
        console.log('\u5DF2\u52FE\u9009:', checkedKeys, info);
      }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-3":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1"}],N=function(){var b=c()(d()().mark(function f(E){return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",new Promise(function($){setTimeout(function(){E.children=[{key:"".concat(E.key,"-1"),title:"Level one 1"},{key:"".concat(E.key,"-2"),title:"Level one 2"}],$()},1e3)}));case 1:case"end":return P.stop()}},f)}));return function(E){return b.apply(this,arguments)}}();return r.createElement(l,{data:s,loadData:N})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-3",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
    },
  ];

  const loadData = async (node) => {
    // \u6A21\u62DF\u52A0\u8F7D\u6570\u636E
    return new Promise((resolve) => {
      setTimeout(() => {
        node.children = [
          { key: \`\${node.key}-1\`, title: 'Level one 1' },
          { key: \`\${node.key}-2\`, title: 'Level one 2' },
        ];
        resolve();
      }, 1000);
    });
  };

  return <Tree data={treeData} loadData={loadData} />;
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-4":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level two 1-1",disabled:!0},{key:"1-2",title:"Level two 1-2"}]}];return r.createElement(l,{data:s,checkable:!0})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-4",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
          disabled: true,
        },
        {
          key: '1-2',
          title: 'Level two 1-2',
        },
      ],
    },
  ];

  return <Tree data={treeData} checkable />;
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-5":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1-1",children:[{key:"1-1",title:"Level two 1-1"}]}];return r.createElement(l,{data:s,defaultExpandedKeys:["1"],defaultSelectedKeys:["1-1"],defaultCheckedKeys:["1-1"]})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-5",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1-1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
        },
      ],
    },
  ];

  return (
    <Tree
      data={treeData}
      defaultExpandedKeys={['1']}
      defaultSelectedKeys={['1-1']}
      defaultCheckedKeys={['1-1']}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-6":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level two 1-1"}]}];return r.createElement(l,{data:s,filterValue:"Level one 1"})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-6",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
        },
      ],
    },
  ];

  return <Tree data={treeData} filterValue="Level one 1" />;
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-7":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=e.sent,r=a.default,e.next=6,Promise.resolve().then(n.bind(n,68629));case 6:return t=e.sent,l=t.Tree,e.t0=y(),e.next=11,Promise.resolve().then(n.bind(n,44949));case 11:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",{default:function(){var s=[{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level two 1-1"}]},{key:"2",title:"Level one 2",children:[{key:"2-1",title:"Level two 2-1"}]}];return r.createElement(l,{data:s,accordion:!0})}});case 14:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-7",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'cube';
import './index.less';

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
        },
      ],
    },
    {
      key: '2',
      title: 'Level one 2',
      children: [
        {
          key: '2-1',
          title: 'Level two 2-1',
        },
      ],
    },
  ];

  return <Tree data={treeData} accordion />;
};`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"tree-demo-8":{component:u.memo(u.lazy(c()(d()().mark(function o(){var a,r,t,l,p,e;return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=s.sent,r=a.default,t=a.useState,s.next=7,Promise.resolve().then(n.bind(n,68629));case 7:return l=s.sent,p=l.Tree,s.t0=y(),s.next=12,Promise.resolve().then(n.bind(n,44949));case 12:return s.t1=s.sent,(0,s.t0)(s.t1),e=function(){var b=t([{key:"1",title:"Level one 1",children:[{key:"1-1",title:"Level two 1-1",children:[{key:"1-1-1",title:"Level three 1-1-1"}]}]},{key:"2",title:"Level one 2",children:[{key:"2-1",title:"Level two 2-1",children:[{key:"2-1-1",title:"Level three 2-1-1"}]},{key:"2-2",title:"Level two 2-2",children:[{key:"2-2-1",title:"Level three 2-2-1"}]}]},{key:"3",title:"Level one 3",children:[{key:"3-1",title:"Level two 3-1",children:[{key:"3-1-1",title:"Level three 3-1-1"}]},{key:"3-2",title:"Level two 3-2",children:[{key:"3-2-1",title:"Level three 3-2-1"}]}]}]),f=K()(b,2),E=f[0],w=f[1],P=function(g,I){console.log("drag start",g)},$=function(g,I,L){console.log("tree drag enter:",I.title)},S=function(g,I,L){console.log("tree drag leave:",I.title)},A=function(g,I,L){console.log("tree drag over:",I.title)},B=function(g,I,L,U){console.log("tree drag end:",I==null?void 0:I.title,L)},F=function(g,I,L,U){console.log("tree drop:",I.title,L)},z=function(g,I,L){return I.title==="Level two 3-1"?L!=="inner":!0},j=function(g){var I;return!((I=g.title)!==null&&I!==void 0&&I.toString().includes("Level three 3-1-1"))};return r.createElement(p,{data:E,draggable:!0,defaultExpandAll:!0,onDragStart:P,onDragEnter:$,onDragLeave:S,onDragOver:A,onDragEnd:B,onDrop:F,allowDrop:z,allowDrag:j})},s.abrupt("return",{default:e});case 16:case"end":return s.stop()}},o)})))),asset:{type:"BLOCK",id:"tree-demo-8",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Tree } from 'cube';
import './index.less';

const Demo = () => {
  const [data, setData] = useState([
    {
      key: '1',
      title: 'Level one 1',
      children: [
        {
          key: '1-1',
          title: 'Level two 1-1',
          children: [
            {
              key: '1-1-1',
              title: 'Level three 1-1-1',
            },
          ],
        },
      ],
    },
    {
      key: '2',
      title: 'Level one 2',
      children: [
        {
          key: '2-1',
          title: 'Level two 2-1',
          children: [
            {
              key: '2-1-1',
              title: 'Level three 2-1-1',
            },
          ],
        },
        {
          key: '2-2',
          title: 'Level two 2-2',
          children: [
            {
              key: '2-2-1',
              title: 'Level three 2-2-1',
            },
          ],
        },
      ],
    },
    {
      key: '3',
      title: 'Level one 3',
      children: [
        {
          key: '3-1',
          title: 'Level two 3-1',
          children: [
            {
              key: '3-1-1',
              title: 'Level three 3-1-1',
            },
          ],
        },
        {
          key: '3-2',
          title: 'Level two 3-2',
          children: [
            {
              key: '3-2-1',
              title: 'Level three 3-2-1',
            },
          ],
        },
      ],
    },
  ]);

  const handleDragStart = (node: TreeNode, e: React.DragEvent) => {
    console.log('drag start', node);
  };

  const handleDragEnter = (dragNode: TreeNode, dropNode: TreeNode, e: React.DragEvent) => {
    console.log('tree drag enter:', dropNode.title);
  };

  const handleDragLeave = (dragNode: TreeNode, dropNode: TreeNode, e: React.DragEvent) => {
    console.log('tree drag leave:', dropNode.title);
  };

  const handleDragOver = (dragNode: TreeNode, dropNode: TreeNode, e: React.DragEvent) => {
    console.log('tree drag over:', dropNode.title);
  };

  const handleDragEnd = (
    dragNode: TreeNode,
    dropNode: TreeNode | null,
    dropType: 'before' | 'after' | 'inner',
    e: React.DragEvent,
  ) => {
    console.log('tree drag end:', dropNode?.title, dropType);
  };

  const handleDrop = (
    dragNode: TreeNode,
    dropNode: TreeNode,
    dropType: 'before' | 'after' | 'inner',
    e: React.DragEvent,
  ) => {
    console.log('tree drop:', dropNode.title, dropType);
  };

  const allowDrop = (
    dragNode: TreeNode,
    dropNode: TreeNode,
    dropType: 'before' | 'after' | 'inner',
  ) => {
    if (dropNode.title === 'Level two 3-1') {
      return dropType !== 'inner';
    }
    return true;
  };

  const allowDrag = (node: TreeNode) => {
    return !node.title?.toString().includes('Level three 3-1-1');
  };

  return (
    <Tree
      data={data}
      draggable
      defaultExpandAll
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      allowDrop={allowDrop}
      allowDrag={allowDrag}
    />
  );
};

export default Demo;`},react:{type:"NPM",value:"18.3.1"},cube:{type:"NPM",value:"0.0.1"},"./index.less":{type:"FILE",value:n(7108).Z}},entry:"index.tsx"},context:{"./index.less":v,react:i||(i=n.t(u,2)),cube:h,"/home/runner/work/cube/cube/src/Tree/index.less":v},renderOpts:{compile:function(){var o=c()(d()().mark(function r(){var t,l=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,l));case 3:case"end":return e.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}}}},39921:function(D,m,n){"use strict";n.r(m),n.d(m,{texts:function(){return i}});const i=[{value:"\u6811\u5F62\u63A7\u4EF6\u7528\u4E8E\u5C55\u793A\u5C42\u7EA7\u7ED3\u6784\u7684\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u9700\u8981\u5C55\u793A\u5C42\u7EA7\u7ED3\u6784\u7684\u6570\u636E\u65F6\uFF0C\u5982\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u7B49\u3002",paraId:1,tocIndex:1},{value:"\u5F53\u9700\u8981\u9009\u62E9\u3001\u5C55\u5F00/\u6536\u8D77\u3001\u62D6\u62FD\u7B49\u4EA4\u4E92\u64CD\u4F5C\u65F6\u3002",paraId:1,tocIndex:1},{value:"\u5F53\u6570\u636E\u91CF\u8F83\u5927\uFF0C\u9700\u8981\u61D2\u52A0\u8F7D\u65F6\u3002",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:13},{value:"\u8BF4\u660E",paraId:2,tocIndex:13},{value:"\u7C7B\u578B",paraId:2,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:13},{value:"data",paraId:2,tocIndex:13},{value:"\u6811\u5F62\u6570\u636E",paraId:2,tocIndex:13},{value:"TreeNode[]",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"defaultExpandedKeys",paraId:2,tocIndex:13},{value:"\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9",paraId:2,tocIndex:13},{value:"string[]",paraId:2,tocIndex:13},{value:"[]",paraId:2,tocIndex:13},{value:"defaultSelectedKeys",paraId:2,tocIndex:13},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9",paraId:2,tocIndex:13},{value:"string[]",paraId:2,tocIndex:13},{value:"[]",paraId:2,tocIndex:13},{value:"defaultCheckedKeys",paraId:2,tocIndex:13},{value:"\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9",paraId:2,tocIndex:13},{value:"string[]",paraId:2,tocIndex:13},{value:"[]",paraId:2,tocIndex:13},{value:"expandedKeys",paraId:2,tocIndex:13},{value:"\u53D7\u63A7\u7684\u5C55\u5F00\u8282\u70B9",paraId:2,tocIndex:13},{value:"string[]",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"selectedKeys",paraId:2,tocIndex:13},{value:"\u53D7\u63A7\u7684\u9009\u4E2D\u8282\u70B9",paraId:2,tocIndex:13},{value:"string[]",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"checkedKeys",paraId:2,tocIndex:13},{value:"\u53D7\u63A7\u7684\u52FE\u9009\u8282\u70B9",paraId:2,tocIndex:13},{value:"string[]",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"checkable",paraId:2,tocIndex:13},{value:"\u662F\u5426\u663E\u793A\u590D\u9009\u6846",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"false",paraId:2,tocIndex:13},{value:"selectable",paraId:2,tocIndex:13},{value:"\u662F\u5426\u53EF\u9009\u4E2D",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"true",paraId:2,tocIndex:13},{value:"multiple",paraId:2,tocIndex:13},{value:"\u662F\u5426\u5141\u8BB8\u591A\u9009",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"false",paraId:2,tocIndex:13},{value:"accordion",paraId:2,tocIndex:13},{value:"\u662F\u5426\u53EA\u5141\u8BB8\u540C\u65F6\u5C55\u5F00\u4E00\u4E2A\u8282\u70B9",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"false",paraId:2,tocIndex:13},{value:"draggable",paraId:2,tocIndex:13},{value:"\u662F\u5426\u5141\u8BB8\u62D6\u62FD",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"false",paraId:2,tocIndex:13},{value:"showLine",paraId:2,tocIndex:13},{value:"\u662F\u5426\u663E\u793A\u8FDE\u63A5\u7EBF",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"false",paraId:2,tocIndex:13},{value:"loadData",paraId:2,tocIndex:13},{value:"\u5F02\u6B65\u52A0\u8F7D\u6570\u636E",paraId:2,tocIndex:13},{value:"(node: TreeNode) => Promise<void>",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"onExpand",paraId:2,tocIndex:13},{value:"\u5C55\u5F00\u8282\u70B9\u65F6\u7684\u56DE\u8C03",paraId:2,tocIndex:13},{value:"(expandedKeys: string[], info: { node: TreeNode; expanded: boolean }) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"onSelect",paraId:2,tocIndex:13},{value:"\u9009\u4E2D\u8282\u70B9\u65F6\u7684\u56DE\u8C03",paraId:2,tocIndex:13},{value:"(selectedKeys: string[], info: { node: TreeNode; selected: boolean }) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"onCheck",paraId:2,tocIndex:13},{value:"\u52FE\u9009\u8282\u70B9\u65F6\u7684\u56DE\u8C03",paraId:2,tocIndex:13},{value:"(checkedKeys: string[], info: { node: TreeNode; checked: boolean }) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"onDragStart",paraId:2,tocIndex:13},{value:"\u5F00\u59CB\u62D6\u62FD\u65F6\u7684\u56DE\u8C03",paraId:2,tocIndex:13},{value:"(node: TreeNode) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"onDragEnd",paraId:2,tocIndex:13},{value:"\u7ED3\u675F\u62D6\u62FD\u65F6\u7684\u56DE\u8C03",paraId:2,tocIndex:13},{value:"(node: TreeNode) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"onDrop",paraId:2,tocIndex:13},{value:"\u653E\u7F6E\u8282\u70B9\u65F6\u7684\u56DE\u8C03",paraId:2,tocIndex:13},{value:"(info: { dragNode: TreeNode; dropNode: TreeNode; dropPosition: number }) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"filterValue",paraId:2,tocIndex:13},{value:"\u8FC7\u6EE4\u503C",paraId:2,tocIndex:13},{value:"string",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"className",paraId:2,tocIndex:13},{value:"\u989D\u5916\u7684 CSS \u7C7B\u540D",paraId:2,tocIndex:13},{value:"string",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"style",paraId:2,tocIndex:13},{value:"\u989D\u5916\u7684\u6837\u5F0F",paraId:2,tocIndex:13},{value:"React.CSSProperties",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"\u53C2\u6570",paraId:3,tocIndex:14},{value:"\u8BF4\u660E",paraId:3,tocIndex:14},{value:"\u7C7B\u578B",paraId:3,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:14},{value:"key",paraId:3,tocIndex:14},{value:"\u552F\u4E00\u6807\u8BC6",paraId:3,tocIndex:14},{value:"string",paraId:3,tocIndex:14},{value:"-",paraId:3,tocIndex:14},{value:"title",paraId:3,tocIndex:14},{value:"\u8282\u70B9\u6807\u9898",paraId:3,tocIndex:14},{value:"React.ReactNode",paraId:3,tocIndex:14},{value:"-",paraId:3,tocIndex:14},{value:"children",paraId:3,tocIndex:14},{value:"\u5B50\u8282\u70B9",paraId:3,tocIndex:14},{value:"TreeNode[]",paraId:3,tocIndex:14},{value:"-",paraId:3,tocIndex:14},{value:"isLeaf",paraId:3,tocIndex:14},{value:"\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"-",paraId:3,tocIndex:14},{value:"disabled",paraId:3,tocIndex:14},{value:"\u662F\u5426\u7981\u7528",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"false",paraId:3,tocIndex:14},{value:"checkable",paraId:3,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u590D\u9009\u6846",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"true",paraId:3,tocIndex:14},{value:"selectable",paraId:3,tocIndex:14},{value:"\u662F\u5426\u53EF\u9009\u4E2D",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"true",paraId:3,tocIndex:14},{value:"expanded",paraId:3,tocIndex:14},{value:"\u662F\u5426\u5C55\u5F00",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"false",paraId:3,tocIndex:14},{value:"selected",paraId:3,tocIndex:14},{value:"\u662F\u5426\u9009\u4E2D",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"false",paraId:3,tocIndex:14},{value:"checked",paraId:3,tocIndex:14},{value:"\u662F\u5426\u52FE\u9009",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"false",paraId:3,tocIndex:14},{value:"loading",paraId:3,tocIndex:14},{value:"\u662F\u5426\u52A0\u8F7D\u4E2D",paraId:3,tocIndex:14},{value:"boolean",paraId:3,tocIndex:14},{value:"false",paraId:3,tocIndex:14}]},7108:function(D,m){"use strict";m.Z=`@import '../styles/common.less';

.ice-tree {
  position: relative;
  width: 100%;
  color: @cube-text-color-primary;
  font-size: @cube-font-size-base;
  line-height: 1.5;
  user-select: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  .ice-tree-node {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 4px 0;
    cursor: pointer;
    transition: all @cube-animation-duration-base;

    &:hover {
      background-color: @cube-default-bg;
    }

    &.ice-tree-node-disabled {
      color: @cube-disabled-color;
      cursor: not-allowed;
    }

    &.ice-tree-node-selected {
      position: relative;
      z-index: 1;
      width: 100%;
      padding-left: 24px;
      color: @cube-primary-color;
      background-color: @cube-primary-bg;
    }

    .ice-tree-node-indent {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      vertical-align: middle;
    }

    .ice-tree-switcher {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      cursor: pointer;
      transition: transform 0.3s;

      &.ice-tree-switcher-open {
        transform: rotate(90deg);
      }
    }

    .ice-checkbox {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      margin: 4px 8px 4px 0;
      vertical-align: middle;
    }

    .ice-tree-node-content {
      display: inline-block;
      padding: 0 4px;
      vertical-align: middle;
    }

    .ice-tree-loading-icon {
      display: inline-block;
      margin-left: 8px;
      color: @cube-primary-color;
      animation: loading 1s infinite linear;
    }

    .ice-tree-child-nodes {
      position: relative;
      width: calc(100% - 24px);
      margin-left: 24px;
      padding-left: 0;
    }

    &-drag-over {
      position: relative;
      background-color: @cube-primary-bg;

      &::before {
        position: absolute;
        right: 0;
        left: 0;
        z-index: 1;
        height: 2px;
        background-color: @cube-primary-color;
        content: '';
      }

      &-top::before {
        top: 0;
      }

      &-bottom::before {
        bottom: 0;
      }
    }

    &[draggable='true'] {
      cursor: move;
      user-select: none;

      &:hover {
        background-color: rgba(24, 144, 255, 0.05);
      }
    }
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`},13012:function(D){function m(n){if(n==null)throw new TypeError("Cannot destructure "+n)}D.exports=m,D.exports.__esModule=!0,D.exports.default=D.exports}}]);
