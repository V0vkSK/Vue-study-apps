<template>
    <div class="modal-shadow" v-if="modaiIsVisible">
        <form class="search-container" @submit="search">
            <input autofocus maxlength="50" type="text" class="search-input" key="input" v-model="searchData"
            placeholder="Input author" >
            <input type="text" class="search-btn" value="Search">
        </form>
    </div>
</template>

<script>
    export default {
        name:'vSearch',
        data(){
            return {
                searchData: '',
                modaiIsVisible: true
            }
        },
        props:{
        },
        methods:{
            search(){
                this.modaiIsVisible = !this.modaiIsVisible
                return this.$emit('search', this.searchData)
            }
        }
    }
</script>

<style lang="scss" scoped>
.modal-shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: gray;
    align-content: center;
    justify-content: center;

}
.search-container {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    width: 400px;
    height: 100px;
    align-items: center;
    background-color: white;
    margin-top: 30px;
    margin-right: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding-top: 15px;
    font-size: 10px;

}
.search-input {
display: flex;
margin-right: 15px;
margin-left: 20px;
width: 250px;
height: 25px;	
border-radius: 5px;
text-indent: 5px;
}
.search-btn {
    display: flex;
    padding: 5px 20px;
    width: 90px;
    background-color: lightgray;
    border: 0;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);    
}

</style>