<template>
    <div v-if="Object.keys(goodsInfo).length !== 0" class="baseinfo">
        <div class="infotitle">{{ goodsInfo.desc }}</div>
        <div class="infoprice">
            <span class="goodsinfoN">{{ goodsInfo.price }}</span>
            <span class="goodsinfoO">{{ goodsInfo.oldPrice }}</span>
            <span v-if="goodsInfo.discount" class="goodsinfoD" :style='{ backgroundColor: goodsInfo.bgc}'>{{
                    goodsInfo.discount
            }}</span>
        </div>
        <div class="innfoother">
            <span class="goodsinfoCo1">{{ goodsInfo.columns[0] }}</span>
            <span class="goodsinfoCo2">{{ goodsInfo.columns[1] }}</span>
            <span class="goodsinfoser">{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
        </div>
        <div class="infoservices">
            <span class="infoserviceitem" v-for="index in goodsInfo.services.length - 1" :key="index">
                <img :src="goodsInfo.services[index - 1].icon" alt="">
                <span>{{ goodsInfo.services[index - 1].name }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        goodsInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
.infotitle {
    width: 100%;
    height: 20px;

    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.infoprice {
    width: 100%;
    height: 30px;
    line-height: 30px;
}

.goodsinfoN {
    font-size: 25px;
    color: red;
}

.goodsinfoO {
    margin-left: 12px;
    
    font-size: 15px;
    color: gray;
    text-decoration: line-through;
}

.goodsinfoD {
    border-radius: 5px;
    margin-left: 12px;
    color: rgb(104, 65, 14);
    font-size: 14px;
    padding: 0px 6px 0px;
}

.innfoother {
    display: flex;
    color: rgb(193, 170, 170);
}

.goodsinfoCo1 {
    flex: 1;
    text-align: left;
}

.goodsinfoCo2 {
    flex: 1;
    text-align: center;
}

.goodsinfoser {
    flex: 1;
    text-align: right;
}

.infoservices {

    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    color: rgb(43, 108, 110);
}

.infoserviceitem {
    margin-right: 7px;
}

.infoserviceitem img {
    width: 16px;
    height: 16px;
}
</style>