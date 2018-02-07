import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/profile';
import Search from './github/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '4amitnarayan',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.userName + '?client_id=' +this.props.clientId+ '?client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null});
        alert(err)
      }.bind(this)
    });
  }

  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.userName + '/repos?per_page=' +this.props.perPage+ '?client_id=' +this.props.clientId+ '?client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos: data});
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({username: null});
        alert(err)
      }.bind(this)
    });
  }

  handleFormSubmit(userName) {
    this.setState({ userName: userName }, function(){
        this.getUserData();
        this.getUserRepos();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse bg-inverse">
          <a className="navbar-brand nav-link" href="#">MyGithub</a>
        </nav>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.PropTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

App.defaultProps = {
  clientId: 'c3c99f9bdb8cf39f756f',
  clientSecret: '8e0f0f22b3f3e0a356dc84ed1e5c738fdbbdd742'
}

export default App;
