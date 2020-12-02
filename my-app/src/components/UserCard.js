import React from 'react'

export default function UserCard(props) {
    // console.log(props)
    return (
        <div>
            <img src={props.userData.avatar_url} alt='user'/>
            <h2>Name: {props.userData.name}</h2>
            <h3>Url: {props.userData.url}</h3>
            <h3>Followers: {props.userData.followers}</h3>
        </div>
    )
}




