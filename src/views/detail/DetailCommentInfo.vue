<template>
    <div>
{{commentInfo.content}}

    </div>
</template>

<script>
    export default {
        name:'DetailCommentInfo',
        props:{
            commentInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        
        
    }
</script>

<style>

</style>