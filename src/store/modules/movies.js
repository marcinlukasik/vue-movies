import axios from 'axios';

const state = {
    movies: {},
    activeMovie: {}
};

const getters = {
    movies: state => state.movies,
    activeMovie: state => state.activeMovie
};

const mutations = {
    'SET_MOVIES'(state, movies) {
        state.movies = movies;
    },
    'SET_ACTIVE_MOVIE'(state, movie) {
        state.activeMovie = movie;
    }
};

const actions = {
    getMovies ({commit, state}, payload) {
        axios.get()
            .then(res => {
                const resData = res.data;

                commit('SET_MOVIES', resData);
                commit('SET_ACTIVE_MOVIE', resData[0]);
            })
            .catch(error => console.log(error));
    },
    setActiveMovie ({commit, state}, payload) {
        commit('SET_ACTIVE_MOVIE', payload);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
