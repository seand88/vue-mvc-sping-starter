import Vue from 'vue'
import Component from 'vue-class-component';
import HoldTicketTable from '../components/holdComponents/holdtickettable';

@Component({
    components: {HoldTicketTable: HoldTicketTable},
    template: `

  
            <div class = "container-fluid" >
                    <HoldTicketTable></HoldTicketTable>
            </div>
`,
})
export default class HoldTicketPage extends Vue {
    // Initial data can be declared as instance properties

    mounted () {

    }
}

Vue.component("holdticketpage", HoldTicketPage)
new Vue({
    el: '#app',
});