<template>
    <div class="checkbutton">
        <img src="@/assets/img/tick.jpeg" :class="{check:checkedbutton}" alt="">
    </div>
</template>

<script>
export default {
    props: {
        checkedbutton: {
            type: Boolean,
            default() {
                return false
            }
        }
    }

}
</script>

<style>
.checkbutton{
    width: 15px;
    height: 15px;
    border: 1px solid rgb(0, 8, 255);
}
.checkbutton img {
    display: block;
    width: 13px;
    height: 13px;
}
.check{
    display: none !important;
}
</style>