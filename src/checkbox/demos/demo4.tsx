import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <>
    <Checkbox readOnly>ReadOnly</Checkbox>
    <Checkbox readOnly checked>
      ReadOnly Checked
    </Checkbox>
  </>
);
