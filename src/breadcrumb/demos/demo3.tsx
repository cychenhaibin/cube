import React from 'react';
import { Breadcrumb } from 'cube';

export default () => (
  <Breadcrumb
    items={[
      { label: '首页', href: '/' },
      { label: '用户', href: '/user', params: { id: 123 } },
      { label: '详情' },
    ]}
  />
); 