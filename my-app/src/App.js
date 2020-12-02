import React from 'react';
import './App.css';
import fetchUserData from './components/FetchUserData'
// import UserCard from './components/UserCard'

class App extends React.Component {
  state = {
    userData: [],
  }

  componentDidMount() {
    fetchUserData('ndossett')
      .then((res) => {
        this.setState({
          userData: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // console.log(this.state.userData)
    return(
      <div>
        <h1>Github User Profile</h1>
        <div>
          <img src={this.state.userData.avatar_url} alt='user'/>
          <div>
            <h3>Name:{this.state.userData.name}</h3>
            <h3>Url:{this.state.userData.url}</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
