<template>
    <div v-show="isshow" class="toast">
        {{ message }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            isshow: false
        }
    },
    methods: {
        show(message, duration = 2000) {
            this.isshow = true;
            this.message = message;
            setTimeout(() => {
                this.isshow = false;
                this.message = ''
            }, duration)
        }
    }
}
</script>

<style>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    z-index: 1000000;
}
</style>