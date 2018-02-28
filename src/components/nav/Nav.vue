<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="(item, key) in movies">
                    <a class="nav-link" href="#" @click="selectMovie(key)" :class="{active: item.id == activeMovie.id}">
                        <i class="fa fa-bookmark" aria-hidden="true"></i> {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';

	export default {
        props: ['movies'],
		computed: {
            ...mapGetters([
                'activeMovie'
            ])
        },
		methods: {
            selectMovie(index) {
                this.$store.dispatch('setActiveMovie', this.movies[index]);
            }
		}
	}
</script>
