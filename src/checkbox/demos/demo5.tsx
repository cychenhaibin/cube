import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <>
    <Checkbox size="small">Small</Checkbox>
    <Checkbox>Default</Checkbox>
    <Checkbox size="large" checked>
      Large
    </Checkbox>
  </>
);
