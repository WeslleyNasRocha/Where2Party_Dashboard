import React, { Component } from 'react';
import { connect } from 'react-redux';

import firebase from '../firebase';
import './auth.css';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { uid: null, username: '', password: '' };
    console.log(sessionStorage.getItem('token'));
  }

  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then((snapshot) => {
        console.log(snapshot);
        sessionStorage.setItem('token', snapshot.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChangeUsername(text) {
    this.setState({ username: text.target.value });
  }
  handleChangePass(text) {
    this.setState({ password: text.target.value });
  }

  render() {
    return (
      <div className='container body-content'>
        <div className='panel panel-default col-md-6'>
          <div className='panel-title text-center'>Por favor, logue-se para continuar</div>
          <div className='panel-body text-center'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                value={this.state.username}
                onChange={Text => this.handleChangeUsername(Text)}
              />
              <br />
              <input
                type='password'
                className='form-control'
                placeholder='Senha'
                value={this.state.password}
                onChange={Text => this.handleChangePass(Text)}
              />
            </div>
            <br />
            <button type='submit' className='btn btn-default' onClick={() => this.login()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
