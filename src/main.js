import Vue from 'vue';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'data.json';

import store from './store/store';

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
