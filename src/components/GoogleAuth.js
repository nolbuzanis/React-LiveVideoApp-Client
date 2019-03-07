import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '801203856245-s6qq8hihsrhl91ktt9mit6pfeb9kb4mt.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
