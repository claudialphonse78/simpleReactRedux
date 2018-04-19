> # Redux full fledged

- Redux is basically a small library like a plugin that we can use with `vanillajs,react,angular,vue` or any other front end framework.
- We will be using `redux` to manage our state in react.
- where our state will be stored in a central location called the `store` so that our other components will be able to access the state.
![](images/01_00.png)

- In our file we can import create store which lets us create a store .We import using ES6
  ```
  import {createStore} from "redux";
  ```
- ` createStore()` takes in a function i.e `reducer` and a state
- Below is the most basic redux store we can create
  ```
  const hello = () => ('hello');
  const store = createStore(hello);

  //console.log(store);
  console.log(store.getState());
  ```
    ![](images/02_00.png)

- As you can see the store object from redux has multiple functions that get shipped with it , `dispatch(),subscribe(),getState()` etc
    - _dispatch()_  : dispatches an action to the reducer,thro' an action we could change state
    - _subscribe()_ : looks for changes
    - _getState()_  : gets the current state

## Reducer 
- reducer takes in two arguments `reducer(state,action)`
- We can use a switch case so that we hav multiple options our switch case will always have a `default case which will return the current state`.
![](images/03_00.png)
## Action 
- `store.dispatch()` the dispatch method is used to dispatch an action to the reducer to perform the necessay function

## State
- Redux doesn't moify the state but creates a new state i.e. it follows the principle of `immutability`

So in a nutshell redux works as follows:
  - We create a store and then tell the store who is responsible for changing the `state(reducer)`
  - We then `dispatch an action` and the dispatched action is `handled by the reducer`
- We should make sure that we are changing the state in a immutable way i.e. take a state object create a copy and return new state so that old state remains untouched

  ```
  case 'ADD' :
          state.result+= action.payload;
          break;
  ```
- But our above approach is not **immutable** cause in the console our

  ![](images/04_00.png)
- So to achieve **immutability** create a js object in our switch cases and use the spread operator(...) to get the details i.e. properties of our initial state and add them as properties to our new object 
  ```
  case 'ADD' :
          state={
            ...state,
            result:state.result + action.payload,
            lastValues:[...state.lastValues,action.payload]
          };
  ```
  here we want to update the result property

## Multiple Reducers

`import {createStore, combineReducers} from "redux";`
- ES6 destructuring` ({mathReducer,userReducer})`
  ```
  mathReducer:mathReducer
  ```
- So basically we get on big global state that has sub states
 ![](images/05_00.png)

 ## MiddleWare
 - It allows us to have a function that can be executed in between two function calls
    ```
    a() -->function call
    middleware() -->execute middleware
    b() -->function call
    ```
- In redux the middleware provides a way of doing something in between the point we dispatch the action and the action reaches the reducer

    ![](images/07_00.png)

- To use middleware import it from redux,
- **A middleware is defined as a function that takes the store as a parameter, returns a function which takes the next middleware as parameter, which in turn returns a function that takes an action to run.**

    ```
    //middleware
    const myLogger = store => next =>action =>{
      console.log('Logged Action',action);
      next(action);
    }; 
    ```
- `next` is basically a method provided by Redux package, if we don't call `next` it won't go to the next function i.e reducer and doesn't reach reducer.

    ![](images/08_00.png)

 - We can use a logger middleware also 
    ```
     import { createLogger } from 'redux-logger';
    //store
    const store =createStore(combineReducers({mathReducer,userReducer}), {},applyMiddleware(createLogger()));
    ```
    ![](images/09_00.png)

## React with Redux
` yarn add react-redux`
- We can use react-redux as a bridge between react and redux as both are unaware of each other
