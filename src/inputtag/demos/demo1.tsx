import React, { useState } from 'react';
import { InputTag } from 'cube';

export default () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <InputTag
      value={tags}
      onChange={setTags}
      placeholder="请输入标签"
    />
  );
};