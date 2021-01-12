import React from 'react'

export default function FollowerCard(props) {
    console.log(props)
    return (
        <div>
            <h2>Followers</h2>
            {props.followerData.map(item => {
                return (<>
                <img src={item.avatar_url} alt='user'/>
                <h3>Name: {item.login}</h3>
                <h3>Url: {item.url}</h3>
                </>)
                })
            }   
        </div>
    )
}
