<template>
    <div class="modal-shadow"
        v-if="modalIsVisible">
        <form
            class="search-container"
            @submit="search">
            <label
                class="search-label"
                id="search">Enter
                any
                letters
                of
                the
                author's
                name
                or
                the
                whole
                name
                of
                the
                author`
                <input
                    autofocus
                    maxlength="50"
                    type="text"
                    class="search-input"
                    key="input"
                    v-model="searchData"
                    placeholder="Input author">
            </label>
            <input
                type="submit"
                class="search-btn"
                value="Search">
        </form>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "vSearch",
    components: {

    },
    data() {
        return {
            searchData: "",
            modalIsVisible: true,
            errors: []

        };
    },
    props: {},
    computed: {
        ...mapState([
            'movies'
        ])
    },
    methods: {
        search(evt) {

            if (this.searchData) {
                console.log(this.searchData);

                this.modalIsVisible = false;
                let bylines = []
                let tlc = []
                this.movies.map(el => bylines.push(el.byline));
                tlc = bylines.map(el => el.toLowerCase());
                let sd = this.searchData.toLowerCase()
                let ans = tlc.map(el => el.indexOf(sd))

                let anss = ans.findIndex(el => el > 0)
                if (anss > 0) {
                    localStorage.name = this.movies[anss].byline
                    this.$router.push('/reviews')
                } else {
                    evt.preventDefault();
                    document.getElementById('search').className = "error"
                    this.$router.push('/error')
                }

            } else {
                this.errors = []
                this.errors.push('Сannot be an empty field')
                window.alert('Сannot be an empty field')
            }
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
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 150px;
    border-radius: 10px;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    font-size: 10px;

}

.search-label {
    margin-top: -10px;
    font-size: 1rem;
    color: darkgray;
    padding-left: 40px;
    width: 350px;
    line-height: 130%;

}

.search-input {
    display: flex;
    margin-right: 15px;
    margin-top: 12px;
    padding: 17px;
    font-size: 1rem;
    width: 300px;
    height: 25px;
    border-radius: 5px;
    text-indent: 5px;
}

.search-btn {
    display: flex;
    padding: 10px 20px;
    width: 100px;
    margin-top: 20px;
    margin-right: 30px;
    font-size: 1rem;
    background-color: rgb(154, 150, 150);
    border: 0;
    border-radius: 5px;
    color: #fff;
    box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.2);
}

.error {}

.error::placeholder {
    color: red;
}
</style>