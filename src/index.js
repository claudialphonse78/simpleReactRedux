import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {createStore, combineReducers,applyMiddleware} from "redux";
import { createLogger } from 'redux-logger';


//reducer
const mathReducer =(state={
  result:1,
  lastValues:[], 
} ,action) =>{
  switch(action.type){
    case 'ADD' :
        state={
          ...state,
          result:state.result + action.payload,
          lastValues:[...state.lastValues,action.payload]
        };
        break;
    case 'SUBTRACT' :
        state={
          ...state,
          result:state.result - action.payload,
          lastValues:[...state.lastValues,action.payload]
        };
        break;
    default: return state;   
  }
  return state;
};

//user reducer
const userReducer =(state={
  name:'Max',
  age:27
} ,action) =>{
  switch(action.type){
    case 'SET_NAME' :
        state={
          ...state,
          name:action.payload
        };
        break;
    case 'SET_AGE' :
        state={
          ...state,
          age:action.payload
        };
        break;
    default: return state;   
  }
  return state;
};
//middleware
const myLogger = store => next =>action =>{
  console.log('Logged Action',action);
  next(action);
};
//store
const store =createStore(combineReducers({mathReducer,userReducer}), {},applyMiddleware(createLogger()));
//listening to changes and getstategets the current state
store.subscribe(() =>{
  //console.log('Store updated',s tore.getState());
});
//action
store.dispatch({
  type:'ADD',
  payload: 100
});
store.dispatch({
  type:'ADD',
  payload: 25
});

store.dispatch({
  type:'SUBTRACT',
  payload: 100
});
//user action
store.dispatch({
  type:'SET_AGE',
  payload:30
})
//render to DOM
ReactDOM.render(<App />, document.getElementById('root'));


