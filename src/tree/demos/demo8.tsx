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
};