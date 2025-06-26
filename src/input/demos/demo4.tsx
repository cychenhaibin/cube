import React from 'react';
import { Input } from 'cube';

export default () => {
  const handleSearch = (value: string) => {
    console.log('搜索值:', value);
  };

  return (
    <div className="ice-input-demo">
      <Input style={{ width: '300px' }} type="search" placeholder="搜索..." onSearch={handleSearch} />
    </div>
  );
};