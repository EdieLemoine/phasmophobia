import '@/assets/style.css';
import '@/services/tailwind';
import App from './App.vue';
import { EventBus } from '@/EventBus';
import Vue from 'vue';
import vClickOutside from 'v-click-outside';

Vue.config.productionTip = false;
Vue.use(vClickOutside);
Vue.prototype.$eventBus = EventBus;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
