# finology Car page

- website that gets car type and returns a car from it.
- Car type can be electrical, 2 wheels or sport
- Each car type conten from different parts(chargingTime, fuelType, condition, color, price, models)

---

### Setup

-global dependencies version

```
node  v14.19.0
npm  8.3.0
yarn  1.22.10
Redux DevTools  2.17.0
```

-install dependencies after clone the repo

```
yarn
```

-run it locally

```
yarn start
```

-run unit test

```
yarn test
```

-run mock api

```
cd mock && yarn && yarn mock
```

---

### A top-level directory layout

    .
    ├── ...
    ├── src                      # Source files
    │   ├── root                 # root config files for this app
    │   ├── router               # where we have react router components
    │   ├── ui                   # common ui components that can re-use it
    │   ├── ex: main-page        # other components that Not common and for special feature
    │   ├── api                  # files where we handle REST API
    │   ├── assets               # files and images the we use it in this app
    │   ├── webpack              # common webpack configuration for staging and production
    │   └── index                # entry point for webpack (where we start the application bundling process)
    │
    │
    ├── package                  # Test files (alternatively `spec` or `tests`)
    ├── otherConfiguration       # configuration files (like linting, testing and ts configuration)
    └── ...

---

### Tool used for development

- React
- Redux
- react-router
- Jest
- React testing-library
- styled-components (JS-in-CSS)
- Webpack

---

### Redux overview

Store init state:

```js
{
       carState: {
          cars: [],
          isFetching: false,
       }

}

```

Actions:

```
  FETCH_CARS
```

---

### UI overview

Phone:
<img width="390" alt="image" src="https://github.com/MohamadAlkel/finology/assets/47742500/b61917c4-642a-453e-a5e2-2bda6efc7e1f">


Desktop:
<img width="1680" alt="image" src="https://github.com/MohamadAlkel/finology/assets/47742500/babd3ff9-077a-4bb6-b684-c6b1e3099213">


friendly message when we have not api issue, or. no data:
<img width="475" alt="image" src="https://github.com/MohamadAlkel/finology/assets/47742500/91626ff3-4b80-4e27-a84a-598a6f114bef">

---

what will do if I have more time:
- adding more unit test cases
- add more types for those components which they don't have...
- add E2E test
- build infra for this app and deploy it

Looking forward to your feedback 😊
