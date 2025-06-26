import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <Checkbox.Group direction="vertical">
    <Checkbox value="1" checked>
      Option 1
    </Checkbox>
    <Checkbox value="2">Option 2</Checkbox>
    <Checkbox value="3">Option 3</Checkbox>
  </Checkbox.Group>
);
