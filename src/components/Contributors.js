import React, { Component } from 'react';
import './contributors.css';

class Contributors extends Component {
  state = {
    contributors: []
  };

  componentWillMount() {
    fetch('https://api.github.com/repos/drex44/demo-site-awesome-react-links/contributors')
      .then(res => res.json())
      .then(contributors => this.setState(() => ({ contributors })))
  }

  render() {
    return (
      <div className='contributors'>
        {this.state.contributors.length === 0 ?
          <p>loading...</p> :
          this.state.contributors.map(({ login, html_url, avatar_url }, index) => {
            return (
              <a href={html_url} key={index} className='contributor'>
                <img className='contributor__avatar' src={avatar_url} alt='contributor' />
                <p className='contributor__name'>{login}</p>
              </a>
            );
          })}
      </div>
    );
  };
};


export default Contributors;