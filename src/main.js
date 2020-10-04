import '@/assets/style.css';
import '@/services/tailwind';
import App from './App.vue';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
