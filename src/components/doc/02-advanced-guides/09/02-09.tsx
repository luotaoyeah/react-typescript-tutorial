/*
 * https://reactjs.org/docs/jsx-in-depth.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020901 } from '@/components/doc/02-advanced-guides/09/01/02-09-01';
import { C020902 } from '@/components/doc/02-advanced-guides/09/02/02-09-02';
import { C020903 } from '@/components/doc/02-advanced-guides/09/03/02-09-03';
import { C020904 } from '@/components/doc/02-advanced-guides/09/04/02-09-04';

export default function C0209() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="JSX In Depth" key="1">
        <C020901></C020901>
      </Collapse.Panel>

      <Collapse.Panel header="Specifying The React Element Type" key="2">
        <C020902></C020902>
      </Collapse.Panel>

      <Collapse.Panel header="Props in JSX" key="3">
        <C020903></C020903>
      </Collapse.Panel>

      <Collapse.Panel header="Children in JSX" key="4">
        <C020904></C020904>
      </Collapse.Panel>
    </Collapse>
  );
}
