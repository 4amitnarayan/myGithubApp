import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  onSubmit(event){
    event.preventDefault();
    let userName =  this.refs.userName.value.trim();

    if(!userName) {
      alert('Please Enter Username');
      return;
    }
    this.props.onFormSubmit(userName);
    //console.log(username);
    this.refs.userName.value = '';
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
            <label><strong>Search Github Users</strong></label>
            <input type='text' ref='userName' className='form-control' />
        </form>
      </div>
    );
  }

}

export default Search;
