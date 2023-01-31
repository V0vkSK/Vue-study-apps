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
.container-content {

    position: relative;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    margin-top: 85px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;

    @media (max-width:2500px) {
        max-width: 1100px
    }

    @media (max-width:1100px) {
        max-width: 950px;
    }

    // @media (max-width:900px) {
    //         max-width:767px
    // }
    // @media (max-width:767px) {
    //         max-width:none;
    //         margin: 0;
    //         padding: 0 auto;
    // }
}
</style>

