/*
 * Forms: The <select> Tag
 */

import React, { SyntheticEvent } from 'react';

function SelectOfHtml() {
  /*
   * 在 HTML 中，<select> 标签可以通过在 <option> 上设置 selected，
   * 设置默认的选中项；
   */
  return (
    <select>
      <option value="a">A</option>
      <option value="b" selected>
        B
      </option>
      <option value="c">C</option>
    </select>
  );
}

interface IState {
  option: string;
  options: Array<string>;
}

class C010904 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = { option: 'b', options: ['a', 'c'] };
    this.handleChange01 = this.handleChange01.bind(this);
    this.handleChange02 = this.handleChange02.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange01(e: SyntheticEvent) {
    this.setState({
      option: (e.target as HTMLSelectElement).value,
    });
  }

  public handleChange02(e: SyntheticEvent) {
    /*
     * 对于多选的 <select>，
     * 需要手动根据 option 的 selected 是否为 true 进行过滤，
     * 得到当前所有的选择项；
     */
    this.setState({
      options: Array.from((e.target as HTMLSelectElement).options)
        .filter((o: HTMLOptionElement) => o.selected)
        .map((o: HTMLOptionElement) => o.value),
    });
  }

  public handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const { option, options } = this.state;
    console.log(option, options);
  }

  public render() {
    const { option, options } = this.state;
    return (
      <div>
        <SelectOfHtml />
        <form onSubmit={this.handleSubmit}>
          {/*
           * 在 react 中，跟 <input> 一样，
           * 在 <select> 标签上面通过 value 属性绑定标签的值，
           * 并且通过 onChange 事件更新数据；
           */}
          <select value={option} onChange={this.handleChange01}>
            <option>YOUR OPTION</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
          {/*
           * 通过设置 multiple 为 true 支持多选
           */}
          <select multiple value={options} onChange={this.handleChange02}>
            <option>YOUR OPTIONS</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export { C010904 };
