<template>
    <div class="recommends">
        <div v-for="item in recommends" class="recommendsitem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommendView',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }

}
</script>

<style>
.recommends {
    width: 100%;
    height: 80px;
    display: flex;

    text-align: center;
    font-size: 12px;
}

.recommendsitem {
    flex: 1;
}

.recommendsitem img {
    height: 100%;
    width: 100%;



}
</style>