/*
 * React Top-Level API
 *     Reference
 *         React.cloneElement()
 */

import React from 'react';
import { Button, Divider, message } from 'antd';

/**  */
class C030104 extends React.Component {
  public buttonRef = React.createRef<Button>();

  public constructor(props: any, context: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    const vm = this;
    /*
     * 使用 React.cloneElement() 克隆的元素保留了 ref 属性；
     */
    if (vm.buttonRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      message.info(vm.buttonRef.current.props!.children![0]);
    }
  }

  public render() {
    const element01 = (
      <Button type="primary" style={{ color: 'red', fontSize: '18px' }} ref={this.buttonRef}>
        button01
      </Button>
    );

    /*
     * 使用 React.cloneElement() 克隆元素，
     * 新的 props 会使用浅拷贝进行合并，
     * 新的 children 会覆盖源元素的 children；
     */
    const element02 = React.cloneElement(
      element01,
      {
        style: { color: 'blue' },
      },
      ['button02'],
    );
    return (
      <div>
        {element01}
        <Divider />
        {element02}
        <Divider />
        <Button onClick={this.handleClick}>click them</Button>
      </div>
    );
  }
}

export { C030104 };
