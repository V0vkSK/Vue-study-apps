<template>
    <div class="modal-shadow" v-if="modalIsVisible">
        <form class="search-container" @submit="search">
            <label class="search-label">Enter any letters of author`s name or whole the one`
            <input autofocus maxlength="50" type="text" class="search-input" key="input" v-model="searchData"
            placeholder="Input author">
            </label>
            <input type="submit" class="search-btn" value="Search">
        </form>
        
    </div>
</template>

<script>
// import VAuthorItem from './vAuthorItem.vue';

import { mapState } from 'vuex';

    export default {
    name: "vSearch",
    components: {
    //   VAuthorItem  
    },
    data() {
        return {
            searchData: "",
            modalIsVisible: true
        };
    },
    props: {},
    computed: {
        ...mapState([
            'movies'
        ])
    },
    methods: {
        search() {
            this.modalIsVisible = false;
            let bylines = []
            let tlc =[]
            this.movies.map(el => bylines.push(el.byline));
            tlc = bylines.map(el => el.toLowerCase());
            let sd= this.searchData.toLowerCase()
            let ans = tlc.map(el => el.indexOf(sd))
            let anss = ans.findIndex(el =>el >0)
            localStorage.name = this.movies[anss].byline
            
            this.$router.push('/reviews')
        }
    },
    
}
</script>

<style lang="scss" scoped>
.modal-shadow {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgb(48, 46, 46);
    align-content: center;
    justify-content: center;

}
.search-container {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: space-around;
    width: 350px;
    height: 100px;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    font-size: 10px;

}
.search-label{
    margin-top: -10px;
    font-size: 11px;
    color: darkgray;
    padding-left: 10px;
    width: 250px;
}
.search-input {
display: flex;
margin-right: 15px;
margin-top: 12px;
width: 230px;
height: 25px;	
border-radius: 5px;
text-indent: 5px;
}
.search-btn {
    display: flex;
    padding: 5px 20px;
    width: 80px;
    background-color: lightgray;
    border: 0;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);    
}

</style>