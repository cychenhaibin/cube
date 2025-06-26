import React from 'react';
import { Tree } from 'cube';

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
        console.log('已选择:', selectedKeys, info);
      }}
    />
  );
};