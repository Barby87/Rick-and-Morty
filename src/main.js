import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

// Importando Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importando Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebookSquare, faInstagramSquare, faGithubSquare);
// library.add(faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
