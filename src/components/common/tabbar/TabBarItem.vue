<template>

    <div class="item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-img"></slot>
        </div>
        <div v-else>
            <slot name="item-img-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>

    </div>
    

</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {

        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    }

}
</script>

<style>
.item {
    flex: 1;

    text-align: center;
    height: 49px;
    vertical-align: middle;
    line-height: 20px;
    font-size: 14px;

}

.item img {
    display: block;
    margin: auto;
    margin-top: 3px;
    width: 24px;
    height: 24px;

}

.active {
    color: activeColor
}
</style >