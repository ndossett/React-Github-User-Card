import axios from 'axios';

const fetchFollowerData = (user) => {
    return axios.get(`https://api.github.com/users/${user}/followers`)
    .then((res) => {
        return (res)
    })
    .catch(err => console.log(err))
}

export default fetchFollowerData;