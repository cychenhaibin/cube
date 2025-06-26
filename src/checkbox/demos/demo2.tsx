import React from 'react';
import { Checkbox } from 'cube';
import { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(checked) => setChecked(checked)}>
      Checkbox
    </Checkbox>
  );
};
