import axios from 'axios'
const baseUrl = '/api/persons'

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

export const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}

export const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(res => res.data)
}

export const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.data)
}