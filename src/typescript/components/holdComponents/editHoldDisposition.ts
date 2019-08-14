import Vue from 'vue';
import Component from 'vue-class-component';
import BootstrapVue from "bootstrap-vue";
import template from '/vue-templates/hold/holdDispositionInfo.html';
import HoldTicket  from '../../domainObjects/hold/HoldTicket';
import Disposition from '../../domainObjects/hold/Disposition';
import HoldTicketService from '../../services/holdTicketService';


Vue.use( BootstrapVue );

@Component ({

    props: {
        holdTicket: {
            type: HoldTicket,
            required: true
        }
    },
    template:template
})

export default class EditHoldDisposition extends Vue{

    dispositions:Disposition[] = [];


    mounted() {

        HoldTicketService.getDispositions().then(( data ) => {

            for ( let disposition of data ) {

                let mappedDisposition:Disposition = { value: disposition.id, text: disposition.desc };
                this.dispositions.push( mappedDisposition );

            }
        });
    }
}