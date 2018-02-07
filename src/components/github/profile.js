import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RepoList from './repo_list';

class Profile extends Component {

  render(){
    return(
      <div className='row'>
        <div className='col-md-12'>
          <div className="card">
            <h3 className="card-header">{this.props.userData.name}</h3>
            <div className="card-block">
              <div className='row'>
                <div className='col-md-4'>
                  <img src={this.props.userData.avatar_url} className='thumbnail img-circle' style={{width:'100%'}}/>
                </div>
                <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <span className='label label-primary'>Public Repos: {this.props.userData.public_repos}</span>
                      <span className='label label-success'>Public Gists: {this.props.userData.public_gists}</span>
                      <span className='label label-info'>Followers: {this.props.userData.followers}</span>
                      <span className='label label-danger'>Following: {this.props.userData.following}</span>
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-md-12'>
                      <ul className='list-group'>
                        <li className='list-group-item'><strong>Username:</strong> {this.props.userData.name}</li>
                        <li className='list-group-item'><strong>Location:</strong> {this.props.userData.location}</li>
                        <li className='list-group-item'><strong>Email:</strong> {this.props.userData.email}</li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <a className='btn btn-primary' target='_blank' href={this.props.userData.html_url}>Visit Profile</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h3>Repositories</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    );
  }

}

export default Profile;
