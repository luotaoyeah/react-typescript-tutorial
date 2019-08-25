/*
 * https://reactjs.org/docs/context.html#examples
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02030401 } from '@/components/doc/02-advanced-guides/03/04/02-03-04.01';
import { C02030402 } from '@/components/doc/02-advanced-guides/03/04/02-03-04.02';
import { C02030403 } from '@/components/doc/02-advanced-guides/03/04/02-03-04.03';

function C020304() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Dynamic Context" key="1">
        <C02030401></C02030401>
      </Collapse.Panel>

      <Collapse.Panel header="Updating Context from a Nested Component" key="2">
        <C02030402></C02030402>
      </Collapse.Panel>

      <Collapse.Panel header="Consuming Multiple Contexts" key="3">
        <C02030403></C02030403>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020304 };
