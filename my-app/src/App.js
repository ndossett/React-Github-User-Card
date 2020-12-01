import React from 'react';
import './App.css';
import fetchUserData from './components/FetchUserData'

class App extends React.Component {
  state = {
    userData: [],
  }

  componentDidMount() {
    fetchUserData('ndossett')
    .then((res) => {
      this.setState({
        userData:res.data
      })
    })
  }

  render() {
    return(
      <div>
        <h1>Github User Profile</h1>
        <div>

        </div>
      </div>
    )
  }



}

export default App;
