import Vue from 'vue';
import Component from 'vue-class-component';
import BootstrapVue from 'bootstrap-vue';
import template from 'vue-templates/home.html';
Vue.use(BootstrapVue);

@Component({
    components: {},
    template: template
})
class HomePage extends Vue {
    // Initial data can be declared as instance properties

    mounted () {

    }
}


Vue.component("homepage", HomePage)
new Vue({
    el: '#app',
});