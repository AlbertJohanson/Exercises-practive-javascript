'use strict'



export const httpPost = (url, data) => {
    axios.post(url, data)
    .then(response => {
        return response.data
    })
    .catch(e =>  {
        return e
    })
}