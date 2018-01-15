import Reflux from 'reflux';

export const FlightableActions = Reflux.createActions(['fetch']);

export default function (BaseStore) {
  return class AugmentedStore extends BaseStore {
    constructor() {
      super();
      this.listenToMany(FlightableActions);
      this.state = Object.assign({}, this.state, { inFlight: 0 });
    }

    fetch() {
      return new Promise((resolve) => {
        // eslint-disable-next-line no-mixed-operators
        const delay = Math.random() * 2500 + 500; // 0.5 to 3.0 sec

        const that = this;
        function done() {
          that.setState({ inFlight: that.state.inFlight - 1 });
          resolve();
        }

        this.setState({ inFlight: this.state.inFlight + 1 });
        setTimeout(done, delay);
      });
    }
  };
}
