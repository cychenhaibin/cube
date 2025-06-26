import React, { useState } from 'react';
import { InputTag } from 'cube';

export default () => {
  const [tags, setTags] = useState(['标签1', '标签2', '标签3']);

  return (
    <InputTag
      value={tags}
      onChange={setTags}
      placeholder="请输入标签"
    />
  );
};