import { request1 } from "./request";
export function getdetail(iid) {
    return request1({
        url: '/detail',
        params: {
            iid
        }
    })
};
export function getrecommend() {
    return request1({
        url: '/recommend',

    })
};
export class goods {
    constructor(itemInfo, columns, services) {
        this.iid=itemInfo.iid;
        this.desc = itemInfo.title;
        this.price = itemInfo.price;
        this.lowprice=itemInfo.lowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.bgc = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = services;
    }
};
