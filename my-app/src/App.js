import React from 'react';
import './App.css';
import fetchUserData from './components/FetchUserData'
import fetchFollowerData from './components/FetchFollowers'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

class App extends React.Component {
  state = {
    userData: [],
    followerData: [],
  }

  componentDidMount() {
    fetchUserData('ndossett')
      .then((res) => {
        this.setState({
          userData: res.data
        })
        // console.log(res.data)
        fetchFollowerData('ndossett')
        .then((res) => {
          this.setState({
            followerData: res.data
          })
          // console.log('followerData')
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // console.log(this.state.followerData)
    return(
      <div>
        <h1>Github User Profile</h1>
        < UserCard userData={this.state.userData}/>
        <FollowerCard followerData={this.state.followerData}/>
      </div>
    )
  }

}

export default App;
