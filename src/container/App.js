import React, { Component } from 'react';
import '../App.css';
import Main from '../components/Main';
import User from '../components/User';
import { setName } from '../actions/userActions';

import{connect} from 'react-redux';
class App extends Component {
  
  render() {
    return (
      <div className="container">
       <h1> Get started with React-Redux! 😀</h1> 
       <Main changeUsername={() =>this.props.setName("Anna")} />
       <User username={this.props.user.name} />
       
      </div>
    );
  }
}
const mapStateToProps =(state) =>{
  return{
    user:state.user,
    math:state.math
  };
};
///specifies which actions we want to use
const mapDispatchToProps =(dispatch) =>{
  return{
    setName:(name) =>{
      dispatch(setName(name));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);

