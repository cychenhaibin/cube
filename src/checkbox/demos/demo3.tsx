import React from 'react';
import { Checkbox } from 'cube';

export default () => (
  <>
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox disabled checked>
      Disabled Checked
    </Checkbox>
  </>
);
