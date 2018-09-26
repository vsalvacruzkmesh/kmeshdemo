// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import { Vuelidate } from 'vuelidate';
import axios from 'axios';
import underscore from 'vue-underscore';


import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, { theme: {
  primary: '#1B4C7E',
  secondary: '#486f97',
  accent: '#bfbfbf',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFF176',
  aws_color: '#F1BE41',
  azure_color: '#00ABEC',
  gcp_color: '#D94436'
}})
Vue.use(underscore);
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
