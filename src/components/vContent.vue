<template>
    <div class="container-content">
          <router-view></router-view>
    </div>

</template>

<script>

    export default {
    name: "vContent",
}

</script>

<style lang="scss" scoped>
.container-content{
    
    // position: relative;
    display: flex;
    flex-direction: column;
//     align-content: center;
//     align-items: center;
    width: 1150px;
    height: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    
@media (max-width:1400px) {
        max-width:1200px;
        
}
@media (max-width:1100px) {
        max-width:970px
}
@media (max-width:972px) {
        max-width:750px
}
@media (max-width:767px) {
        max-width:none;
        margin: 0;
        padding: 0 auto;
}
}


</style>

