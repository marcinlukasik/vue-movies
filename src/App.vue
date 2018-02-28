<template>
    <div>
        <div v-if="Object.keys(movies).length < 1">
            <div class="container mt-5 text-center">
                <strong>Loading...</strong>
            </div>
        </div>
        <div v-else>
            <app-nav :movies="movies"></app-nav>
            <app-movies></app-movies>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import Nav from './components/nav/Nav';
    import Movies from './components/movies/Movies';

    export default {
        computed: {
            ...mapGetters([
                'movies'
            ])
        },
        created () {
            this.$store.dispatch('getMovies');
        },
		components: {
			appNav: Nav,
			appMovies: Movies
		}
	}
</script>

<style lang="scss">
    @import './assets/scss/base';
</style>
