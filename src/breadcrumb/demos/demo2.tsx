import React from 'react';
import { Breadcrumb, Icon } from 'cube';

export default () => (
  <Breadcrumb
    items={[
      { label: '首页', icon: <Icon name="icon_video" size={16} />, href: '/' },
      { label: '应用中心', icon: <Icon name="icon_more" size={16} />, href: '/apps' },
      { label: '应用详情' },
    ]}
  />
); 