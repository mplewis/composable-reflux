import React from 'react';
import Reflux from 'reflux';

import CounterStore, { CounterActions } from './counter_store';
import Flightable, { FlightableActions } from './flightable';

import './app.styl';

const AugmentedStore = Flightable(CounterStore);

export default class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [AugmentedStore];
  }

  render() {
    const loaded = this.state.inFlight === 0;
    const loadedClass = loaded ? 'loaded' : 'loading';
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <p>Fetches in flight: {this.state.inFlight}</p>
        <p>
          Fully loaded: <span className={loadedClass}>{loaded ? 'Yes' : 'No'}</span>
        </p>
        <button onClick={CounterActions.increment}>+</button>
        <button onClick={FlightableActions.fetch}>Fetch</button>
      </div>
    );
  }
}
