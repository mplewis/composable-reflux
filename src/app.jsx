import React from 'react';
import Reflux from 'reflux';

import CounterStore, { CounterActions } from './counter_store';

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [CounterStore];
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={CounterActions.increment}>+</button>
      </div>
    );
  }
}
