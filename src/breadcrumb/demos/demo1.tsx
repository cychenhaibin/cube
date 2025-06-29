import React from 'react';
import { Breadcrumb } from 'cube';

export default () => (
  <Breadcrumb
    items={[
      { label: '首页', href: '/' },
      { label: '应用中心', href: '/apps' },
      { label: '应用详情' },
    ]}
  />
); 