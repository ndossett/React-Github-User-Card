import axios from 'axios';

const fetchUserData = (user) => {
    return axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
        return (res)
    })
    .catch(err => console.log(err))
}

export default fetchUserData;