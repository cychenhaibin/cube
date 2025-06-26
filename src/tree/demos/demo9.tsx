import React, { useState } from 'react';
import { Tree } from 'cube';

type TreeNode = {
  key: string;
  title: React.ReactNode;
  children?: TreeNode[];
};

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

export default Demo;