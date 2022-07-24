import { request } from "./request";
import { request1 } from "./request";
export function gethomemultidata() {
    return request({
        url: '/home/multidata'
    })
}
export function gethomegoods(type, page) {
    return request1({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}