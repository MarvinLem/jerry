import Vue from 'vue';
import Router from 'vue-router';
import AuthConnexion from './views/AuthConnexion.vue';
import AuthInscription from './views/AuthInscription.vue';
import HomePage from './views/HomePage.vue';
import JerryCreation from './views/JerryCreation.vue';
import EndCreation from './views/EndCreation.vue';
import JerryList from './views/JerryList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'authConnexion',
      component: AuthConnexion,
    },
    {
      path: '/subscribe',
      name: 'authInscription',
      component: AuthInscription,
    },
    {
      path: '/home',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/create',
      name: 'jerryCreation',
      component: JerryCreation,
    },
    {
      path: '/endcreate',
      name: 'endCreation',
      component: EndCreation,
    },
    {
      path: '/list',
      name: 'jerryList',
      component: JerryList,
    },
  ],
});
