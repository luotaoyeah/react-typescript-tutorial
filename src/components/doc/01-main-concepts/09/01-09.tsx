/*
 * https://reactjs.org/docs/forms.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-09.less';
import { C010901 } from '@/components/doc/01-main-concepts/09/01-09-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Forms" key="1">
        <C010901></C010901>
      </Collapse.Panel>
    </Collapse>
  );
}
