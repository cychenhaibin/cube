import React from 'react';
import { Tree } from 'cube';

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
};