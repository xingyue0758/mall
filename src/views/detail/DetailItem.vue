<template>

    <NavBar class="detailnavbar">
        <div slot="left" @click="backclick">
            <img src="@/assets/img/left.jpeg" alt="">
        </div>
        <div slot="center" class="navcenter">
            <div v-for="(item, index) in titles" class="navcenteritem" :class="{ detailactive: index == currentindex }"
                @click="detailclick(index)">{{ item }}</div>
        </div>
    </NavBar>

</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {

    components: { NavBar },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentindex: 0
        }
    },
    methods: {
        detailclick(index) {
            this.currentindex = index;
            this.$emit('detailclick',index);
            
        },
        backclick(){
            this.$router.back()
        }
    },
}
</script>

<style>
.detailnavbar {
    background-color: purple;
    color: #fff;
}

.navcenter {
    display: flex;
    font-size: 14px;
}

.navcenteritem {
    flex: 1;
}

.detailactive {
    color: rgb(22, 208, 183);

}

.detailnavbar div img {
    width: 20px;
    height: 20px;
    margin-top: 12px;
    margin-left: 26px;

}
</style>