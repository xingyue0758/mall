import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(
        res => {
            return res
        }, err => {
            console.log(err);
        })
    instance.interceptors.response.use(
        res => {
            return res
        },
        err => {
            console.log(err);
        }
    )
    return instance(config)
}
export function request1(config) {
    const instance1 = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000
    })
    instance1.interceptors.request.use(
        res => {
            return res
        }, err => {
            console.log(err);
        })
    instance1.interceptors.response.use(
        res => {
            return res
        },
        err => {
            console.log(err);
        }
    )
    return instance1(config)
}