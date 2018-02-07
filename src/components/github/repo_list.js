import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Repo from './repo';


class RepoList extends Component {
  render() {
    return(
      <div className='row'>
        <div className='col-md-12'>
          <ul className='list-group'>
            {
              this.props.userRepos.map(repo => {
                return <Repo repo={repo} key={repo.id} {...this.props} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default RepoList;
