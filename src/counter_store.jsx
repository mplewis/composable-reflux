import Reflux from 'reflux';

export const CounterActions = Reflux.createActions(['increment']);

export default class CounterStore extends Reflux.Store {
  constructor() {
    super();
    this.listenables = CounterActions;
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
}
