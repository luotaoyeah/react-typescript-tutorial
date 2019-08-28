/*
 * https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element
 */

import React from 'react';
import ReactDOM from 'react-dom';

/*
 * react element 是 immutable 的, 如果我们要更新对应的 DOM,
 * 可以创建一个新的 element, 然后再次调用 ReactDOM.render() 方法
 */

class C010303 extends React.Component {
  public timer: number | null = null;

  public componentDidMount(): void {
    this.timer = window.setInterval(() => {
      ReactDOM.render(<span>{new Date().toISOString()}</span>, document.querySelector('#p010303'));
    }, 1000);
  }

  public componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  public render() {
    return (
      <p
        id="p010303"
        style={{
          border: '1px solid red',
          borderRadius: '3px',
          padding: '10px',
        }}
      ></p>
    );
  }
}

export { C010303 };
