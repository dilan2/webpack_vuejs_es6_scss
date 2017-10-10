console.log('test');
import Vue from 'vue'
import Test from './components/Test.vue'
window.Vue = Vue;
Vue.component('test', Test);




new Vue({
  el: '#app',
  // components: { Test, Vacancyfilter },
  data: {
    message: 'Hello Vue!',
      showModal: false,
      // data: {
      //     form: new Form({
      //         name: '',
      //         description: ''
      //     })
      // },
  }


});

