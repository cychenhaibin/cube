import React from 'react';
import { Tree } from 'cube';

type TreeNode = {
  key: string;
  title: React.ReactNode;
  children?: TreeNode[];
};

export default () => {
  const treeData = [
    {
      key: '1',
      title: 'Level one 1',
    },
  ];

  const loadData = async (node: TreeNode): Promise<void> => {
    // 模拟加载数据
    return new Promise((resolve) => {
      setTimeout(() => {
        node.children = [
          { key: `${node.key}-1`, title: 'Level one 1' },
          { key: `${node.key}-2`, title: 'Level one 2' },
        ];
        resolve();
      }, 1000);
    });
  };

  return <Tree data={treeData} loadData={loadData} />;
};