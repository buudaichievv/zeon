import React from 'react'
export default function api() {
    const poster = async() => {
        let resp = await fetch('https://jsonplaceholder.typicode.com/media')
        let req = await resp.json
        return req
    }
    consple.log(poster())
}