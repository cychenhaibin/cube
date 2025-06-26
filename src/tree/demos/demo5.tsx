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
};