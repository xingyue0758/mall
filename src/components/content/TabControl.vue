<template>

    <div class="tabcontrol">
        <div v-for="(item, index) in title" class="tabcontrolitem" :class="{ active: index == currentindex }"
            @click="itemclick(index)">
            <span>{{ item }}</span>
        </div>

    </div>

</template>

<script>
export default {

    data() {
        return {
            currentindex: 0
        }
    },

    props: {
        title: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        itemclick(index) {
            this.currentindex = index; 
            this.$emit('tabClick', index)
        }
    }
}
</script>

<style>
.tabcontrol {
    display: flex;

    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;


}




.tabcontrolitem {
    flex: 1;
}



.active span {
    padding: 5px;
    color: pink;
    border-bottom: 3px solid rgb(159, 19, 19);
}
</style>