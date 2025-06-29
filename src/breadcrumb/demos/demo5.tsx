import React from 'react';
import { Breadcrumb } from 'cube';

export default () => (
  <Breadcrumb
    items={[
      { label: '首页', href: '/' },
      { label: '应用中心', href: '/apps', menu: [
        { label: '应用A', href: '/apps/a' },
        { label: '应用B', href: '/apps/b' },
      ] },
      { label: '应用详情' },
    ]}
  />
); 