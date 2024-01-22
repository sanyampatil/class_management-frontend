import React from 'react'
import axios from 'axios'

const Simple = async () => {
  await axios
    .get('http://localhost:2000/api/auth//signup')
    .then(res => {
      res.data
      console.log(res.data)
      
    })
    .catch(error => {console.log(error)})
}

export default Simple
