import Vue from 'vue'
import Component from 'vue-class-component';
import BootstrapVue from "bootstrap-vue";
import template from '/vue-templates/hold/holdticketdetail.html'
import HoldTicket from "../../domainObjects/hold/HoldTicket";
Vue.use(BootstrapVue);

@Component({
    props: {
        holdTicket: {
            type: HoldTicket,
            required: true
        }
    },
    template: template
})
export default class HoldTicketDetail extends Vue {

    // Initial data can be declared as instance properties
    mounted () {

    }
    editTicketURL(ticketid){
        return '/edit-hold-ticket/' + ticketid;
    }
    actionTrackingURL(ticketId){
        //return '/hold-action-tracking/' + ticketId;
    }
}