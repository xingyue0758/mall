<template>
    <div>
      <div class="tab-bar">
       <slot></slot>
      
    </div>
    </div>
</template>

<script>
    export default {
      name:'TabBar'
        
    }
</script>

<style>
.tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(238, 227, 227);
  box-shadow: 0px -2px 3px rgba(100, 100,100, 0.3);
}


</style>