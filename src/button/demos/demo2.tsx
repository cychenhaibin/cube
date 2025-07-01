import React from 'react';
import { Button } from 'cube';

export default () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button>默认按钮</Button>
        <Button withBg>带背景色按钮</Button>
        <Button type="highlight">高亮按钮</Button>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <Button type="danger">危险按钮</Button>
        <Button type="ghost">幽灵按钮</Button>
        <Button type="dashed">虚线按钮</Button>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <Button disabled>禁用按钮</Button>
        <Button type="highlight" disabled>
          禁用高亮按钮
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <Button type="link">链接按钮</Button>
        <Button type="text">文本按钮</Button>
      </div>
    </>
  );
};