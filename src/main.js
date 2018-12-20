import Vue from 'vue';
import VueMaterial from 'vue-material';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { createProvider } from './vue-apollo';

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
});

Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  cache,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');

//Authentification
//Mettre certains projets et pas tous dans un schéma