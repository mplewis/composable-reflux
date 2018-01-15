# Composable Reflux stores

Dedupe functionality common to your Reflux stores by extracting them into composable ES6 class wrappers.

# Install and run

```sh
yarn install
yarn poi
open http://localhost:4000
```

# Check out the code

Open `src/app.jsx` in your favorite editor.

# How does this work?

The base store, CounterStore, provides an `increment` Action (in CounterActions) and a `count` state variable. When we use this store in `<App>`, we extend it:

```js
const AugmentedStore = Flightable(CounterStore);
```

The Flightable function creates a subclass of CounterStore that adds a `fetch` action (in FlightableActions) and an `inFlight` state variable. `fetch` modifies `inFlight` without touching any of the existing behavior of CounterStore.

# License

MIT
